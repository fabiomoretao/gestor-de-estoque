import { Link } from "react-router-dom";
import type { Product } from "../../types";

type ItemsListProps = {
    removeProduct: (id: number) => void
    products: Product[]
}

export default function ItemsList({ removeProduct, products }: ItemsListProps) {
    return (
        <div>
            <h1>Lista de itens</h1>
            <Link to='/'>Inicio</Link>
            <br />
            <div>
                {products.length > 0
                    ?
                    products.map((product) => (
                        <div>
                            <h2>{product.name}</h2>
                            <p>{product.category}</p>
                            <p>{product.price}</p>
                            <p>{product.quantity}</p>
                            <p>{product.detail}</p>
                            <button
                                onClick={() => removeProduct(product.id)}
                            >
                                Remover
                            </button>
                        </div>
                    )) :
                    <h2 style={{ marginTop: "4rem" }}>Nada por aqui, tente adicionar um produto ;)</h2>
                }
            </div>
        </div>
    )
}