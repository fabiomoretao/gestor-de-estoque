import { Link, useParams } from "react-router-dom";
import type { Product } from "../../types";
import formatDate from "../../utils/formatDate";
import styles from "./styles.module.css"
import { FaCircleArrowLeft } from "react-icons/fa6";
import { IoIosCash } from "react-icons/io";
import Button from "../../components/Button/Index";

type ItemDetailsProps = {
    removeProduct: (id: string) => void
    products: Product[]
}


export default function ItemDetails({ products, removeProduct }: ItemDetailsProps) {
    // obtem o produto pelo id passado na url
    const { productId } = useParams()
    const product = products.find(p => productId ? p.id === productId : null)

    if (!product) {
        return (
            <h2>Oops... Esse produto nao foi encontrado ;-;</h2>
        )
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.title}>
                    <h1>{product.name}</h1>
                    <Link to='/products-list' style={{ textDecoration: 'none' }}>
                        <div className={styles.return}>
                            <FaCircleArrowLeft fontSize={"32px"} />
                            <p>Voltar</p>
                        </div>
                    </Link>
                </div>

                {/* exibindo todas as suas propriedades */}
                <div className={styles.dates}>
                    <p>Criado em: {formatDate(product.date)}</p>
                    <p>Atualizado em: {formatDate(product.lastUpdate)}</p>
                </div>
            </header>
            <section className={styles.cardsSection}>
                <div className={styles.card}>
                    <div className={styles.content}>
                        <IoIosCash />
                        <p>Preço</p>
                    </div>
                    <p className={styles.number}>R$ {product.price}</p>
                </div>

                <div className={styles.card}>
                    <div className={styles.content}>
                        <IoIosCash />
                        <p>Quantidade</p>
                    </div>
                    <p className={styles.number}>{product.quantity} Unid.</p>
                </div>

                <div className={styles.card}>
                    <div className={styles.content}>
                        <IoIosCash />
                        <p>Categoria</p>
                    </div>
                    <p className={styles.number}>{product.category}</p>
                </div>
            </section>

            <div className={styles.cardDetails}>
                <div className={styles.content}>
                    <p>Detalhes</p>
                </div>
                <hr style={{ width: "100%", margin: "0", border: "solid 1px #6c3baa" }} />
                <p>{product.details}</p>
            </div>
            {/* botões para atualizar e excluir o item. */}
            <div className={styles.buttons}>
                <Button text="Editar Produto" link={`/update-product/${product.id}`} />
                <Button
                    text="Remover"
                    onClick={() =>
                        removeProduct(product.id)
                    }
                    link="/products-list"
                    className={styles.removeBtn} />
            </div>
        </div>
    )
}

