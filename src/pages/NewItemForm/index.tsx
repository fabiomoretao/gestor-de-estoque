// - Deve possuir uma tela de criar novos itens. Ela deve ter pelo menos os campos nome, quantidade, preço, categoria e descrição.

import Form from '../../components/Form'
import type { Product } from '../../types'
import { FaCircleArrowLeft } from 'react-icons/fa6'

type NewItemFormProps = {
    addProduct: (data: Omit<Product, "id" | "date">) => void
}

export default function NewItemForm({ addProduct }: NewItemFormProps) {
    return (
        <div>
            <h2>Cadastro de Novo Produto</h2>
            <div>
                <FaCircleArrowLeft />
                <p>Voltar</p>
            </div>
            <Form
                onSubmit={addProduct}
                submitText="Adicionar Produto"
            />
        </div>
    )
}
