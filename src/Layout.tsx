import { Link, Outlet } from "react-router-dom";
import styles from "./layout.module.css"
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { BsPlusSquareFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { useState } from "react";

export default function Layout() {
    const [clicked, setClicked] = useState('/')
    return (
        <div>
            <header className={styles.header}>
                <Link
                    to='/'
                    className={`${styles.link}  ${clicked === '/' ? styles.linkClicked : ''}`}
                    onClick={() => setClicked('/')}
                >
                    <RiDashboardHorizontalFill />Dashboard
                </Link>
                <Link
                    to='/new-product'
                    className={`${styles.link}  ${clicked === '/new-product' ? styles.linkClicked : ''}`}
                    onClick={() => setClicked('/new-product')}
                ><BsPlusSquareFill />Adicionar Produtos
                </Link>
                <Link
                    to='/products-list'
                    className={`${styles.link}  ${clicked === '/products-list' ? styles.linkClicked : ''}`}
                    onClick={() => setClicked('/products-list')}
                ><FaListUl />Lista de Produtos
                </Link>
            </header>

            <main className={styles.main}>
                <Outlet />
            </main>
        </div >
    )
}