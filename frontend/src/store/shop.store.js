import { create } from "zustand";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import axios, { Axios } from "axios";
export const useShopStore = create((set) => ({
  currency: "$",
  delivery_fee: 5,
  backendUrl: import.meta.env.VITE_BACKEND_URL,
  products: products,
  // products: [],
  // setProducts: (products) => set({ products }),
  search: "",
  setSearch: (search) => set({ search }),
  showSearch: false,
  setShowSearch: (value) => set({ showSearch: value }),
  cartItems: {},
  setCartItems: (cartItems) => set({ cartItems }),
  token: "",
  setToken: (token) => {
    set({ token });
  },

  addToCart: async (itemId, size) => {
    const { cartItems, setCartItems, token, backendUrl } =
      useShopStore.getState();

    if (!size) {
      toast.error("Please select a size for the item.");
      return;
    }

    // ✅ Create a deep copy to avoid mutating state directly
    const updatedCart = { ...cartItems };

    if (updatedCart[itemId]) {
      updatedCart[itemId] = {
        ...updatedCart[itemId],
        [size]: (updatedCart[itemId][size] || 0) + 1,
      };
    } else {
      updatedCart[itemId] = { [size]: 1 };
    }

    setCartItems(updatedCart);

    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/cart/add",
          { itemId, size },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  },

  updateCartItem: async (itemId, size, quantity) => {
    const { cartItems, setCartItems, token, backendUrl } =
      useShopStore.getState();

    const updatedCart = { ...cartItems };

    if (updatedCart[itemId] && updatedCart[itemId][size]) {
      if (quantity <= 0) {
        delete updatedCart[itemId][size]; // remove size
        if (Object.keys(updatedCart[itemId]).length === 0) {
          delete updatedCart[itemId]; // remove item if no sizes left
        }
      } else {
        updatedCart[itemId][size] = quantity;
      }

      setCartItems(updatedCart);

      // Optional backend sync
      if (token) {
        try {
          await axios.post(
            backendUrl + "/api/cart/update",
            { itemId, size, quantity },
            { headers: { token } }
          );
        } catch (err) {
          console.log(err);
          toast.error("Failed to sync cart with server");
        }
      }
    }
  },

  getCartAmount: () => {
    const state = useShopStore.getState(); // ✅ get current state from zustand store
    let totalAmount = 0;

    for (const itemId in state.cartItems) {
      const itemInfo = state.products.find((product) => product._id === itemId);

      for (const size in state.cartItems[itemId]) {
        const quantity = state.cartItems[itemId][size];
        if (itemInfo && quantity > 0) {
          totalAmount += itemInfo.price * quantity;
        }
      }
    }

    return totalAmount;
  },

  getUserCart: async (token) => {
    const { backendUrl, setCartItems } = useShopStore.getState();
    try {
      const response = await axios.post(
        backendUrl + "/api/cart/get",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  },

  // getProductsData: async () => {
  //   try {
  //     const { backendUrl, setProducts } = useShopStore.getState(); //geting the current state of these variables in zustand store first
  //     const response = await axios.get(backendUrl + "/api/product/list");
  //     if (response.data.success) {
  //       setProducts(response.data.products);
  //     } else {
  //       toast.error(response.data.message);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error(error.message);
  //   }
  // },
}));
