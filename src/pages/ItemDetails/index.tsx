// - Deve possuir uma página que exibe informações detalhadas de um item, 
// exibindo todas as suas propriedades, bem como botões para atualizar e excluir o item.
import { Link, useParams } from "react-router-dom";
import type { Product } from "../../types";
import formatDate from "../../utils/formatDate";

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
        <div>
            <Link to="/products-list">
                <button>voltar</button>
            </Link>
            {/* exibindo todas as suas propriedades */}
            <h2>{product.name}</h2>
            <p>{formatDate(product.date)}</p>
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

