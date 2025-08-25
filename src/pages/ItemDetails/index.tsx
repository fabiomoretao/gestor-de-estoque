// - Deve possuir uma página que exibe informações detalhadas de um item, 
// exibindo todas as suas propriedades, bem como botões para atualizar e excluir o item.
import { Link, useParams } from "react-router-dom";
import type { Product } from "../../types";

type ItemDetailsProps = {
    products: Product[]
}

// Formata a data de forma segura para o formato local
const formatDate = (dateValue: string | number | Date | undefined) => {
    if (!dateValue) return "—";
    try {
        const dateObj = dateValue instanceof Date ? dateValue : new Date(dateValue);
        // apenas a data no formato local. Para data+hora use toLocaleString()
        return dateObj.toLocaleDateString();
    } catch {
        return String(dateValue);
    }
};

export default function ItemDetails({ products }: ItemDetailsProps) {
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
            <h2>{product.name}</h2>
            <p>{formatDate(product.date)}</p>
            <p>{product.details}</p>
            <p>R$ {product.price}</p>
            <p>{product.category}</p>
            <p>{product.quantity}</p>

        </div>
    )
}

