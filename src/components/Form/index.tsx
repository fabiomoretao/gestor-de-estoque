import { useState, type FormEvent } from 'react'
import Dropdown from '../../components/Dropdown/DropdownContainer'
import DropdownItems from '../../components/Dropdown/DropdownItem'
import Input from '../Input.tsx'
import type { Product } from '../../types'

export const categories = ['Móveis', 'Utilitários', 'Eletronico']

type ProductFormProps = {
    initialValues?: Omit<Product, "id">,
    onSubmit: (values: Omit<Product, "id">) => void,
    submitText?: string
}

export default function ProductForm({
    initialValues,
    onSubmit,
    submitText = "Salvar"
}: ProductFormProps) {
    const [productName, setProductName] = useState(initialValues?.name ?? "")
    const [productQuantity, setProductQuantity] = useState(initialValues?.quantity?.toString() ?? "")
    const [productPrice, setProductPrice] = useState(initialValues?.price?.toString() ?? "")
    const [productDetails, setProductDetails] = useState(initialValues?.details ?? "")
    const [productCategory, setProductCategory] = useState(initialValues?.category ?? "")

    const handlerCategory = (category: string) => {
        if (productCategory === category) {
            setProductCategory("")
        } else {
            setProductCategory(category)
        }
    }

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
        <form onSubmit={handleSubmit}>
            <Input
                label="Produto"
                name="product"
                type="text"
                onChange={(e) => setProductName(e.target.value)}
                value={productName}
            />

            <Input
                label="Quantidade"
                name="quantity"
                type="number"
                onChange={(e) => setProductQuantity(e.target.value)}
                value={productQuantity}
            />

            <Input
                label="Preço"
                name="price"
                type="number"
                onChange={(e) => setProductPrice(e.target.value)}
                value={productPrice}
            />

            <Dropdown
                buttonText={!productCategory ? "Categorias" : productCategory}
                content={categories.map((category) => (
                    <DropdownItems
                        key={category}
                        onClick={() => handlerCategory(category)}
                    >
                        <p>{category}</p>
                    </DropdownItems>
                ))}
            />

            <div>
                <label htmlFor="productDetails">Descrição:</label>
                <textarea
                    name="productDetails"
                    id="productDetails"
                    onChange={(e) => setProductDetails(e.target.value)}
                    value={productDetails}
                />
            </div>

            <button type="submit">{submitText}</button>
        </form>
    )
}
