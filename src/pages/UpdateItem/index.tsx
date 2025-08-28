// - Também deve possuir uma tela de atualizar os dados de um item. 
// Ela pode ter o mesmo formato da tela de criação de novos itens.
import { Link, useNavigate, useParams } from "react-router-dom"
import type { Product } from "../../types"
import Form from "../../components/Form"
import { FaCircleArrowLeft } from "react-icons/fa6"
import styles from "./styles.module.css"

type UpdateItemProps = {
    updateProduct: (id: string, changes: Partial<Omit<Product, "id">>) => void
    products: Product[]
}

export default function UpdateItem({ products, updateProduct }: UpdateItemProps) {
    const navigate = useNavigate()
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
            <div className={styles.header}>
                <h2>Editar Produto</h2>
                <Link to='/products-list' style={{ textDecoration: 'none' }}>
                    <div className={styles.return}>
                        <FaCircleArrowLeft fontSize={"32px"} />
                        <p>Voltar</p>
                    </div>
                </Link>
            </div>
            <Form
                initialValues={product}
                onSubmit={(values) => {
                    updateProduct(product.id, values)
                    navigate("/")
                }}
                submitText="Salvar Alterações"
            />
        </div>
    )
}
