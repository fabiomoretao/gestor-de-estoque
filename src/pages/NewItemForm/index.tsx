// - Deve possuir uma tela de criar novos itens. Ela deve ter pelo menos os campos nome, quantidade, preço, categoria e descrição.

import Form from '../../components/Form'
import type { Product } from '../../types'
import { FaCircleArrowLeft } from 'react-icons/fa6'
import styles from "./styles.module.css"
import { Link } from 'react-router-dom'

type NewItemFormProps = {
    addProduct: (data: Omit<Product, "id" | "date" | "lastUpdate">) => void
}

export default function NewItemForm({ addProduct }: NewItemFormProps) {
    return (
        <div>
            <div className={styles.header}>
                <h1>Cadastro de Novo Produto</h1>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <div className={styles.return}>
                        <FaCircleArrowLeft fontSize={"32px"} />
                        <p>Voltar</p>
                    </div>
                </Link>
            </div>
            <Form
                onSubmit={addProduct}
                submitText="Adicionar Produto"
            />
        </div>
    )
}
