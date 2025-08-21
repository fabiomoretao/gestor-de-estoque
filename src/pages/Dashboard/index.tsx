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