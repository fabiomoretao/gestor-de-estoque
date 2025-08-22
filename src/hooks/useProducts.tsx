import { useState } from "react"
import type { Product } from "../types"

export default function useProducts() {
    const [products, setProducts] = useState<Product[]>(() => {
        const stored = localStorage.getItem("ge-product")
        return stored ? JSON.parse(stored) as Product[] : []
    })

    const addProduct = ({ name, category, quantity, price, details }: Omit<Product, "id">) => {
        const id = crypto.randomUUID()
        const product: Product = { id, name, category, quantity, price, details }
        if (products.find(p => (p.name === name))) {
            return alert("Esse produto já existe\nVocê pode altera-lo em 'Editar Produto'")
        }
        setProducts((state: Product[]) => {
            const newState = [...state, product]
            localStorage.setItem("ge-product", JSON.stringify(newState))
            return newState
        })
    }

    const removeProduct = (id: string) => {
        setProducts((state: Product[]) => {
            const newState = state.filter((product: Product) => product.id !== id)
            localStorage.setItem("ge-product", JSON.stringify(newState))
            return newState
        })
    }

    const updateProduct = (id: string, changes: Partial<Omit<Product, "id">>) => {
        const product: Product | undefined = products.find(p => (p.id === id))

        if (product) {
            setProducts((state: Product[]) => {
                const newState = state.map(p => p.id === id ? { ...p, ...changes } : p)
                localStorage.setItem("ge-product", JSON.stringify(newState))
                return newState
            })
        }
    }

    return { products, addProduct, removeProduct, updateProduct }
}