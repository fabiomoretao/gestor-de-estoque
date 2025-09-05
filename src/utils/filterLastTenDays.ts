import type { Product } from "../types"

// Retorna os produtos que foram adicionados em menos de 10 dias 
export default function filterLastTenDays(products: Product[]) {
    const now = new Date()
    const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999)

    const start = new Date(end)
    start.setDate(end.getDate() - 10)

    return products.filter(product => {
        const date = product.date instanceof Date ? product.date : new Date(product.date as any)

        return date >= start && date <= end
    })
}
