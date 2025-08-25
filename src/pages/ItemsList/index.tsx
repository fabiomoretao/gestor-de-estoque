// Deve possuir uma página que lista todos os itens em estoque em uma tabela. 
// Essa tabela deve mostrar informações resumidas do item e 3 botões: 
// ver mais detalhes do item, atualizar e excluir.
import { Link } from "react-router-dom";
import type { Product } from "../../types";

type ItemsListProps = {
    removeProduct: (id: string) => void
    products: Product[]
}

export default function ItemsList({ removeProduct, products }: ItemsListProps) {
    return (
        <div>
            <h1>Lista de itens</h1>
            <Link to='/'>Inicio</Link>
            <br />
            {/* deve mostrar informações resumidas do item */}
            <div>
                {products.length > 0
                    ?
                    products.map((product) => (
                        <div key={product.id}>
                            <p>{product.id}</p>
                            <p>{product.name}</p>
                            <p>{product.quantity}</p>
                            <p>{product.category}</p>
                            {/* e 3 botões ver mais detalhes do item, atualizar e excluir. */}
                            <Link to={`/product-details/${product.id}`}><button>Ver Detalhes</button></Link>
                            <Link to={`/update-product/${product.id}`}><button>Editar Produto</button></Link>
                            <button
                                onClick={() => removeProduct(product.id)}
                            >Remover
                            </button>
                        </div>
                    )) :
                    <h2 style={{ marginTop: "4rem" }}>Nada por aqui, tente adicionar um produto ;)</h2>
                }
            </div>
        </div>
    )
}