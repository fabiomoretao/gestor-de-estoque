// hook para armazenar e controlar os dados do produto cadastrado

import { useState } from "react"
import type { Product } from "../types"

export default function useProducts() {
    // armazena os dados no localStorage no espaco ge-product (produto do gestor de estoque)
    const [products, setProducts] = useState<Product[]>(() => {
        const stored = localStorage.getItem("ge-product")
        return stored ? JSON.parse(stored) as Product[] : []
    })

    // adiciona um novo produto com o dados fornecidos pelo usuaria, e cria uma id unica e a data de criacao desse produto
    const addProduct = ({ name, category, quantity, price, details }: Omit<Product, "id" | "date">) => {
        const id = crypto.randomUUID()
        const date = new Date()
        const lastUpdate = undefined
        const product: Product = { id, name, category, quantity, price, details, date, lastUpdate }
        // se algum produto armazenado tiver o mesmo nome desse produto avisa o usuario que o produto ja existe
        if (products.find(p => (p.name === name))) {
            return alert("Esse produto já existe\nVocê pode altera-lo em 'Editar Produto'")
        }
        setProducts((state: Product[]) => {
            const newState = [...state, product]
            localStorage.setItem("ge-product", JSON.stringify(newState))
            return newState
        })
    }

    // cria um filtro com todos o produtos que nao possue o id que foi passado e atualiza o valor do ge-product com esse novo array
    const removeProduct = (id: string) => {
        setProducts((state: Product[]) => {
            const newState = state.filter((product: Product) => product.id !== id)
            localStorage.setItem("ge-product", JSON.stringify(newState))
            return newState
        })
    }

    // obtem determinado produto pelo id e cria um array onde copia os produtos com o id diferente e 
    // aplica as mudancas no produto que possue o id fornecido
    const updateProduct = (id: string, changes: Partial<Omit<Product, "id">>) => {
        const product: Product | undefined = products.find(p => (p.id === id))
        const lastUpdate = new Date()

        if (product) {
            setProducts((state: Product[]) => {
                const newState = state.map(p => p.id === id ? { ...p, ...changes, lastUpdate } : p)
                localStorage.setItem("ge-product", JSON.stringify(newState))
                return newState
            })
        }
    }

    return { products, addProduct, removeProduct, updateProduct }
}