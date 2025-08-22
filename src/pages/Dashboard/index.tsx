// - Deve possuir uma página inicial de dashboard que mostra:
//     - A quantidade total de itens diferentes (ex.: 1 mesa e 3 cadeiras devem resultar em 2 itens ao todo).
//     - A quantidade total de itens (ex.: 1 mesa e 3 cadeiras devem resultar em 4 itens ao todo).
//     - A quantidade de itens adicionados nos últimos 10 dias.
//     - Uma lista dos itens adicionados nos últimos 10 dias.
//     - A quantidade de itens com menos de 10 em estoque.
//     - Uma lista dos itens com menos de 10 em estoque.

import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div>
            <h1>Pagina pricipal</h1>
            <Link to="/new-product">Adicionar Produto</Link>
            <br />
            <Link to="/products-list">Lista de Produtos</Link>
        </div>
    )
}