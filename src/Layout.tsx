import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./layout.module.css"
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { BsPlusSquareFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";

export default function Layout() {
    const path = useLocation().pathname
    return (
        <div>
            <header className={styles.header}>
                <Link
                    to='/'
                    className={`${styles.link}  ${path === '/' ? styles.linkClicked : ''}`}
                >
                    <RiDashboardHorizontalFill />Dashboard
                </Link>
                <Link
                    to='/new-product'
                    className={`${styles.link}  ${path === '/new-product' ? styles.linkClicked : ''}`}
                ><BsPlusSquareFill />Adicionar Produtos
                </Link>
                <Link
                    to='/products-list'
                    className={`${styles.link}  ${path === '/products-list' ? styles.linkClicked : ''}`}
                ><FaListUl />Lista de Produtos
                </Link>
            </header>

            <main className={styles.main}>
                <Outlet />
            </main>
        </div >
    )
}