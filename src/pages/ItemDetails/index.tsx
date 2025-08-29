import { Link, useParams } from "react-router-dom";
import type { Product } from "../../types";
import formatDate from "../../utils/formatDate";
import styles from "./styles.module.css"
import { FaCircleArrowLeft } from "react-icons/fa6";
import Button from "../../components/Button/Index";
import { BsBoxes } from "react-icons/bs";
import { MdOutlineCategory } from "react-icons/md";
import { IoCashOutline } from "react-icons/io5";
import Card from "../../components/Card";
import formatPrice from "../../utils/formatPrice";

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
                <Card title="Preço" text={formatPrice(product.price)} icon={IoCashOutline} />
                <Card title="Quantidade" text={`${product.quantity} Unid.`} icon={BsBoxes} />
                <Card title="Categoria" text={product.category} icon={MdOutlineCategory} />
            </section>

            <div className={styles.cardDetails}>
                <div className={styles.content}>
                    <h3>Detalhes</h3>
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

