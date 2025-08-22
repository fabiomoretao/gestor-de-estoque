import { Link, useParams } from "react-router-dom"
import type { Product } from "../../types"
import Form from "../../components/Form"

type UpdateItemProps = {
    updateProduct: (id: number, changes: Partial<Omit<Product, "id">>) => void
    products: Product[]
}

export default function UpdateItem({ products, updateProduct }: UpdateItemProps) {
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
            <Link to="/">Inicio</Link>
            <br />
            <hr />
            <Form
                initialValues={product}
                onSubmit={(values) => updateProduct(product.id, values)}
                submitText="Salvar Alterações"
            />
        </div>
    )
}
