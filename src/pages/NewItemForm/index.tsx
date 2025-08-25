// - Deve possuir uma tela de criar novos itens. Ela deve ter pelo menos os campos nome, quantidade, preço, categoria e descrição.

import { Link } from 'react-router-dom'
import Form from '../../components/Form'
import type { Product } from '../../types'

type NewItemFormProps = {
    addProduct: (data: Omit<Product, "id" | "date">) => void
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
