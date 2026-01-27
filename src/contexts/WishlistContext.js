"use client";
import useSweetAlert from "@/hooks/useSweetAlert";
import addItemsToLocalstorage from "@/utils/addItemsToLocalstorage";
import getItemsFromLocalstorage from "@/utils/getItemsFromLocalstorage";
import getAllProducts from "@/utils/getProducts";
import { createContext, useContext, useEffect, useState } from "react";

const wishlistContext = createContext(null);
const WishlistContextProvider = ({ children }) => {
    const [wishlistProducts, setWishlistProducts] = useState([]);
    const creteAlert = useSweetAlert();
    useEffect(() => {
        const demoProducts = getAllProducts()
            ?.slice(0, 2)
            ?.map((product, idx) => ({ ...product, quantity: 1 }));

        const wishlistProductFromLocalStorage =
            getItemsFromLocalstorage("wishlist");

        if (!wishlistProductFromLocalStorage) {
            setWishlistProducts([]);
        } else {
            setWishlistProducts(wishlistProductFromLocalStorage);
        }
    }, []);
    // add  product from localstorage cart
    const addProductToWishlist = currentProduct => {
        const { id: currentId, title: currentTitle } = currentProduct;

        const modifyableProduct = wishlistProducts?.find(
            ({ id, title }) => id === currentId && title === currentTitle
        );

        const isAlreadyExist = modifyableProduct ? true : false;

        if (isAlreadyExist) {
            creteAlert("error", "Failed ! Already exist in wishlist.");
        } else {
            let currentProducts = [...wishlistProducts, currentProduct];
            setWishlistProducts(currentProducts);
            addItemsToLocalstorage("wishlist", currentProducts);
            creteAlert("success", "Success! added to wishlist.");
        }
    };

    // delete product from localstorage cart
    const deleteProductFromWishlist = (currentId, currentTitle) => {
        const currentProducts = wishlistProducts?.filter(
            ({ id, title }) => id !== currentId || title !== currentTitle
        );
        setWishlistProducts(currentProducts);
        addItemsToLocalstorage("wishlist", currentProducts);
        creteAlert("success", "Success! deleted from wishlist.");
    };
    return (
        <wishlistContext.Provider
            value={{
                wishlistProducts,
                setWishlistProducts,
                addProductToWishlist,
                deleteProductFromWishlist,
            }}
        >
            {children}
        </wishlistContext.Provider>
    );
};
export const useWishlistContext = () => {
    const value = useContext(wishlistContext);
    return value;
};
export default WishlistContextProvider;
