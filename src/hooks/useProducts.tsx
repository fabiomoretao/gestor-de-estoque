import { useState } from "react"
import type { Product } from "../types"

export default function useProducts() {
    const [products, setProducts] = useState<Product[]>(() => {
        const storedProduct = localStorage.getItem("ge-product")
        if (!storedProduct) return []
        return JSON.parse(storedProduct)
    })

    const addProduct = ({ name, category, quantity, price, detail }: Omit<Product, "id">) => {
        const id = Math.floor(Math.random() * 100000)
        const product: Product = { id, name, category, quantity, price, detail }

        setProducts((state: Product[]) => {
            const newState = [...state, product]
            localStorage.setItem("ge-product", JSON.stringify(newState))
            return newState
        })
    }

    const removeProduct = (id: number) => {
        setProducts((state: Product[]) => {
            const newState = state.filter((product: Product) => product.id !== id)
            localStorage.setItem("ge-product", JSON.stringify(newState))
            return newState
        })
    }

    return { products, addProduct, removeProduct }
}