// - Esse formulario serve tanto para criar novos itens como atualizar esses itens.
//  Ela deve ter pelo menos os campos nome, quantidade, preço, categoria e descrição.

import { useState, type FormEvent } from 'react'
import DropdownContainer from '../../components/Dropdown/DropdownContainer'
import DropdownItems from '../../components/Dropdown/DropdownItem'
import Input from '../Input.tsx'
import type { Product } from '../../types'
import styles from './styles.module.css'
import Button from '../Button/Index.tsx'
import categories from '../../categories.ts'

type ProductFormProps = {
    initialValues?: Omit<Product, "id" | "date" | "lastUpdate">,
    onSubmit: (values: Omit<Product, "id" | "date" | "lastUpdate">) => void,
    submitText?: string
}

export default function ProductForm({ initialValues, onSubmit, submitText = "Salvar" }: ProductFormProps) {
    // Caso ja for um produto cadastrado mostra os valores desse produto no input
    const [productName, setProductName] = useState(initialValues?.name ?? "")
    const [productQuantity, setProductQuantity] = useState(initialValues?.quantity?.toString() ?? "")
    const [productPrice, setProductPrice] = useState(initialValues?.price?.toString() ?? "")
    const [productDetails, setProductDetails] = useState(initialValues?.details ?? "")
    const [productCategory, setProductCategory] = useState(initialValues?.category ?? "")

    // Se a mesma opcao da categoria for escolhida o seu valor volta a ser "categoria"
    const handlerCategory = (category: string) => {
        if (productCategory === category) {
            setProductCategory("")
        } else {
            setProductCategory(category)
        }
    }

    // atualiza ou cria um novo produto dependendo da funcao que foi passada como onSubimit
    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        onSubmit({
            name: productName,
            category: productCategory,
            quantity: +productQuantity,
            price: +productPrice,
            details: productDetails
        })
        // se for formulário de "novo item", limpa os campos
        if (!initialValues) {
            setProductName("")
            setProductQuantity("")
            setProductPrice("")
            setProductDetails("")
            setProductCategory("")
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            {/* campo de nome */}
            <Input
                label="Produto"
                name="product"
                type="text"
                onChange={(e) => setProductName(e.target.value)}
                value={productName}
            />
            {/* campo de Quantidade */}
            <Input
                label="Quantidade"
                name="quantity"
                type="number"
                onChange={(e) => setProductQuantity(e.target.value)}
                value={productQuantity}
            />
            {/* campo de Preco */}
            <Input
                label="Preço"
                name="price"
                type="number"
                onChange={(e) => setProductPrice(e.target.value)}
                value={productPrice}
            />
            {/* campo de Categorias*/}
            <div className={styles.dropdown}>
                <p>Categoria</p>
                <DropdownContainer
                    buttonText={!productCategory ? "Selecione uma categoria" : productCategory}
                    content={categories.map((category) => (
                        <DropdownItems
                            key={category}
                            onClick={() => handlerCategory(category)}
                        >
                            <p>{category}</p>
                        </DropdownItems>
                    ))}
                />
            </div>
            {/* campo de Descricao */}
            <div className={styles.description}>
                <label htmlFor="productDetails">Descrição:</label>
                <textarea
                    name="productDetails"
                    id="productDetails"
                    onChange={(e) => setProductDetails(e.target.value)}
                    value={productDetails}
                    className={styles.textarea}
                />
            </div>
            <Button type='submit' text={submitText} className={styles.button} />
        </form>
    )
}
