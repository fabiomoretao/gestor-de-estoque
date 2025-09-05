// - Deve possuir uma tela de criar novos itens. Ela deve ter pelo menos os campos nome, quantidade, preço, categoria e descrição.

import Form from '../../components/Form'
import type { Product } from '../../types'
import Title from '../../components/Title'

type NewItemFormProps = {
    addProduct: (data: Omit<Product, "id" | "date" | "lastUpdate">) => void
}

export default function NewItemForm({ addProduct }: NewItemFormProps) {
    return (
        <div>
            <Title title="Cadastro de Novo Produto" />
            <Form
                onSubmit={addProduct}
                submitText="Adicionar Produto"
            />
        </div>
    )
}
