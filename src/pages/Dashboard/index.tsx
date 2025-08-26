// - Deve possuir uma página inicial de dashboard que mostra:
//     - A quantidade total de itens diferentes (ex.: 1 mesa e 3 cadeiras devem resultar em 2 itens ao todo).
//     - A quantidade total de itens (ex.: 1 mesa e 3 cadeiras devem resultar em 4 itens ao todo).
//     - A quantidade de itens adicionados nos últimos 10 dias.
//     - Uma lista dos itens adicionados nos últimos 10 dias.
//     - A quantidade de itens com menos de 10 em estoque.
//     - Uma lista dos itens com menos de 10 em estoque.

import type { Product } from "../../types";
import filterLastTenDays from "../../utils/filterLastTenDays";

type DashboardProps = {
    products: Product[]
}


export default function Dashboard({ products }: DashboardProps) {
    //     - A quantidade total de itens diferentes (ex.: 1 mesa e 3 cadeiras devem resultar em 2 itens ao todo).
    const quantityOfProducts = products.length
    //     - A quantidade total de itens (ex.: 1 mesa e 3 cadeiras devem resultar em 4 itens ao todo).
    const productsTotal = products.reduce((accum, product) => (accum + product.quantity), 0)
    //     - A quantidade de itens adicionados nos últimos 10 dias.
    const tenDaysAgoProducts = filterLastTenDays(products)
    //     - A quantidade de itens com menos de 10 em estoque.
    const productsBelowTen = products.filter(product => (product.quantity <= 10))

    return (
        <div>
            <p>Quantidade de produtos diferentes: {quantityOfProducts}</p>
            <p>Quantidade total de produtos: {productsTotal}</p>
            <p>Produtos adicionados nos últimos 10 dias: {tenDaysAgoProducts.length}</p>
            <p>Produtos com quantidade menor que 10: {productsBelowTen.length}</p>
            <p>Lista de produtos com quantidade menor que 10: </p>
            {/* - Uma lista dos itens com menos de 10 em estoque. */}
            {productsBelowTen.map(product => (
                <p key={product.id}>{product.name}</p>//     - Uma lista dos itens com menos de 10 em estoque.
            ))}
        </div>

    )
}