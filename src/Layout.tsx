import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <header>
                <nav>
                    <Link to='/'>Dashboard</Link>
                    <Link to='/new-product'>Adicionar Produto</Link>
                    <Link to='/products-list'>Lista de Produtos</Link>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}