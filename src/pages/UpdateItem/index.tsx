// - Também deve possuir uma tela de atualizar os dados de um item. 
// Ela pode ter o mesmo formato da tela de criação de novos itens.
import { useNavigate, useParams } from "react-router-dom"
import type { Product } from "../../types"
import Form from "../../components/Form"
import Title from "../../components/Title"

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
            <Title title="Atualizar Produto" link={'/products-list'} />
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
