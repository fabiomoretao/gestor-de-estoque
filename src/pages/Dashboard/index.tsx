// - Deve possuir uma página inicial de dashboard que mostra:
//     - A quantidade total de itens diferentes (ex.: 1 mesa e 3 cadeiras devem resultar em 2 itens ao todo).
//     - A quantidade total de itens (ex.: 1 mesa e 3 cadeiras devem resultar em 4 itens ao todo).
//     - A quantidade de itens adicionados nos últimos 10 dias.
//     - Uma lista dos itens adicionados nos últimos 10 dias.
//     - A quantidade de itens com menos de 10 em estoque.
//     - Uma lista dos itens com menos de 10 em estoque.

import { Link } from "react-router-dom";
import type { Product } from "../../types";

type DashboardProps = {
    products: Product[]
}

// Retorna os produtos que foram adicionados em menos de 10 dias 
function filterLastTenDays({ products }: DashboardProps) {
    const now = new Date()
    const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999)

    const start = new Date(end)
    start.setDate(end.getDate() - 10)

    return products.filter(product => {
        const date = product.date instanceof Date ? product.date : new Date(product.date as any)

        return date >= start && date <= end
    })
}



export default function Dashboard({ products }: DashboardProps) {
    const quantityOfProducts = products.length
    const productsTotal = products.reduce((accum, product) => (accum + product.quantity), 0)
    const tenDaysAgoProducts = filterLastTenDays({ products })
    const productsBelowTen = products.filter(product => (product.quantity <= 10))

    return (
        <div>
            <h1>Pagina pricipal</h1>
            <Link to="/new-product">Adicionar Produto</Link>
            <br />
            <Link to="/products-list">Lista de Produtos</Link>

            <div>
                <p>Quantidade de produtos diferentes: {quantityOfProducts}</p>
                <p>Quantidade total de produtos: {productsTotal}</p>
                <p>Produtos adicionados nos últimos 10 dias: {tenDaysAgoProducts.length}</p>
                <p>Produtos com quantidade menor que 10: {productsBelowTen.length}</p>
                <p>Lista de produtos com quantidade menor que 10: </p>
                {productsBelowTen.map(product => (
                    <p key={product.id}>{product.name}</p>
                ))}
            </div>
        </div>
    )
}