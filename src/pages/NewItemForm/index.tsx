// - Deve possuir uma tela de criar novos itens.
// Ela deve ter pelo menos os campos nome, quantidade, preço, categoria e descrição.

import { useState, type FormEvent } from 'react'
import Dropdown from '../../components/Dropdown/DropdownContainer'
import DropdownItems from '../../components/Dropdown/DropdownItem'
import Input from '../../components/Input.tsx'
import type { Product } from '../../hooks/useProducts.tsx'

type NewItemForm = {
    addProduct: ({ name, category, quantity, price, detail }: Omit<Product, "id">) => void
}

export default function NewItemForm({ addProduct }: NewItemForm) {
    const [productName, setProductName] = useState('')
    const [productQuantity, setProductQuantity] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productDetails, setProductDetails] = useState('')
    const [productCategory, setProductCategory] = useState('')

    // Quando a mesma categoria for selecionada desmarca, se não adiciona o valor a categoria referente
    const handlerCategory = (category: string) => {
        if (productCategory === category) {
            setProductCategory('')
        } else {
            setProductCategory(category)
        }
    }

    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        addProduct({
            name: productName,
            category: productCategory,
            quantity: +productQuantity,
            price: +productPrice,
            detail: productDetails
        })
        setProductName('')
        setProductQuantity('')
        setProductPrice('')
        setProductDetails('')
        setProductCategory('')
    }

    const categories = ['Móveis', 'Utilitários', 'Eletronico']

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input
                    label='Produto'
                    name='product'
                    type='text'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProductName(e.target.value)}
                    value={productName}
                />
                <Input
                    label='Quantidade'
                    name='quantity'
                    type='number'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProductQuantity(e.target.value)}
                    value={productQuantity}
                />
                <Input
                    label='Preço'
                    name='price'
                    type='number'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProductPrice(e.target.value)}
                    value={productPrice}
                />
                <Dropdown
                    buttonText={!productCategory ? "Categorias" : productCategory}
                    content={categories.map((category: string) => (
                        <DropdownItems
                            key={category}
                            onClick={() => handlerCategory(category)}
                        >
                            <p>{category}</p>
                        </DropdownItems>
                    ))}
                />
                <div>
                    <label htmlFor="productDetails">Descricão:</label>
                    <textarea
                        name="productDetails"
                        id="productDetails"
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setProductDetails(e.target.value)}
                        value={productDetails}
                    ></textarea>
                </div>
                <button type='submit'>Adicionar Produto</button>
            </form>
        </div>
    )
}