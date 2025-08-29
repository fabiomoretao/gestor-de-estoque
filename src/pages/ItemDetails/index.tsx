import { Link, useParams } from "react-router-dom";
import type { Product } from "../../types";
import formatDate from "../../utils/formatDate";
import styles from "./styles.module.css"
import { FaCircleArrowLeft } from "react-icons/fa6";

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
            <div className={styles.header}>
                <h1>{product.name}</h1>
                <Link to='/products-list' style={{ textDecoration: 'none' }}>
                    <div className={styles.return}>
                        <FaCircleArrowLeft fontSize={"32px"} />
                        <p>Voltar</p>
                    </div>
                </Link>
            </div>
            {/* exibindo todas as suas propriedades */}
            <p>Criado em: {formatDate(product.date)}</p>
            <p>Atualizado em: {formatDate(product.lastUpdate)}</p>
            <p>{product.details}</p>
            <p>R$ {product.price}</p>
            <p>{product.category}</p>
            <p>{product.quantity}</p>
            {/* botões para atualizar e excluir o item. */}
            <Link to={`/update-product/${product.id}`}><button>Editar Produto</button></Link>
            <button
                onClick={() => removeProduct(product.id)}
            >Remover
            </button>

        </div>
    )
}

