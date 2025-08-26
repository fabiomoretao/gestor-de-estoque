import { BsBoxes } from "react-icons/bs";
import type { Product } from "../../types";
import filterLastTenDays from "../../utils/filterLastTenDays";
import styles from "./styles.module.css"
import Button from "../../components/Button/Index";
import { RiDatabase2Fill } from "react-icons/ri";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoHourglassOutline } from "react-icons/io5";

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
        <div className={styles.container}>
            {/* - A quantidade total de itens diferentes (ex.: 1 mesa e 3 cadeiras devem resultar em 2 itens ao todo). */}
            <div className={styles.card}>
                <div className={styles.content}>
                    <BsBoxes />
                    <p>Diversidade</p>
                </div>
                <p className={styles.number}>{quantityOfProducts}</p>
            </div>

            {/* - A quantidade total de itens (ex.: 1 mesa e 3 cadeiras devem resultar em 4 itens ao todo). */}
            <div className={styles.card}>
                <div className={styles.content}>
                    <RiDatabase2Fill />
                    <p>Inventário Total</p>
                </div>
                <p className={styles.number}>{productsTotal}</p>
            </div>

            {/* - A quantidade de itens adicionados nos últimos 10 dias. */}
            <div className={styles.card}>
                <div className={styles.content}>
                    <FaClockRotateLeft />
                    <p>Recentes</p>
                </div>
                <p className={styles.number}>{tenDaysAgoProducts.length}</p>
            </div>

            {/* - A quantidade de itens com menos de 10 em estoque. */}
            <div className={styles.card}>
                <div className={styles.content}>
                    <IoHourglassOutline />
                    <p>Acabando</p>
                </div>
                <p className={styles.number}>{productsBelowTen.length}</p>
            </div>

            {/* - Uma lista dos itens adicionados nos últimos 10 dias. */}
            <div className={styles.list}>
                <div className={styles.listHeader}>
                    <p>Produtos Recentes</p>
                    <p>Ações</p>
                </div>
                {/* - Uma lista dos itens com menos de 10 em estoque. */}
                {tenDaysAgoProducts.map(product => (
                    <div key={product.id} className={styles.product}>
                        <p>{product.name}</p> {/* - Uma lista dos itens com menos de 10 em estoque. */}
                        <Button
                            route={`product-details/${product.id}`}
                            className={styles.link}
                            text="Ver Produto"
                        />
                    </div>
                ))}
            </div>
            <div className={styles.list}>
                <div className={styles.belowTenListHeader}>
                    <p>Produtos Acabando</p>
                    <p>Qtd</p>
                    <p>Ações</p>
                </div>

                {/* - Uma lista dos itens com menos de 10 em estoque. */}
                {productsBelowTen.map(product => (
                    <div key={product.id} className={`${styles.product} ${styles.productBelowTen}`}>
                        <p>{product.name}</p> {/* - Uma lista dos itens com menos de 10 em estoque. */}
                        <p>{product.quantity}</p>
                        <Button
                            route={`product-details/${product.id}`}
                            className={styles.link}
                            text="Ver Produto"
                        />
                    </div>
                ))}
            </div>
        </div>

    )
}