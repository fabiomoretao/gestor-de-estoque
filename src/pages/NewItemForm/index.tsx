import { Link } from 'react-router-dom'
import Form from '../../components/Form'
import type { Product } from '../../types'

type NewItemFormProps = {
    addProduct: (data: Omit<Product, "id">) => void
}

export default function NewItemForm({ addProduct }: NewItemFormProps) {
    return (
        <div>
            <Link to="/">Inicio</Link>
            <br />
            <hr />
            <Form
                onSubmit={addProduct}
                submitText="Adicionar Produto"
            />
        </div>
    )
}
