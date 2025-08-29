import type { Product } from "../../types";
import styles from "./styles.module.css"
import Button from "../../components/Button/Index";
import Title from "../../components/Title";

type ItemsListProps = {
    removeProduct: (id: string) => void
    products: Product[]
}

export default function ItemsList({ removeProduct, products }: ItemsListProps) {
    return (
        <div>
            <Title title="Lista de Produtos" />

            <div className={styles.container}>
                <div className={styles.listHeader}>
                    <p>ID</p>
                    <p>Nome</p>
                    <p>Em Estoque</p>
                    <p>Categoria</p>
                    <p>Ações</p>
                </div>
                {products.length > 0
                    ?
                    products.map((product) => (
                        <div key={product.id} className={styles.product}>
                            <p>{product.id}</p>
                            <p>{product.name}</p>
                            <p style={{ justifySelf: "end", marginRight: "65%" }}>{product.quantity} unid.</p>
                            <p>{product.category}</p>
                            {/* e 3 botões ver mais detalhes do item, atualizar e excluir. */}
                            <div className={styles.actions}>
                                <Button text="Ver Detalhes" link={`/product-details/${product.id}`} />
                                <Button text="Editar Produto" link={`/update-product/${product.id}`} />
                                <Button text="Remover Produto" onClick={() => removeProduct(product.id)} removeBtn />
                            </div>
                        </div>
                    )) :
                    <h2 style={{ marginTop: "4rem" }}>Nada por aqui, tente adicionar um produto ;)</h2>
                }
            </div>
        </div>
    )
}