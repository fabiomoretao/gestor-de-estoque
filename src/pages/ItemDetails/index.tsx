import { Link, useParams } from "react-router-dom";
import type { Product } from "../../types";

type ItemDetailsProps = {
    products: Product[]
}

export default function ItemDetails({ products }: ItemDetailsProps) {
    // obtem o produto pelo id passado na url
    const { productId } = useParams()
    const product = products.find(p => productId ? p.id === +productId : null)

    if (!product) {
        return (
            <h2>Oops... Esse produto nao foi encontrado ;-;</h2>
        )
    }

    return (
        <div>
            <Link to="/products-list">
                <button>voltar</button>
            </Link>
            <h2>{product.name}</h2>
            <p>{product.detail}</p>
            <p>R$ {product.price}</p>
            <p>{product.category}</p>
            <p>{product.quantity}</p>

        </div>
    )
}

