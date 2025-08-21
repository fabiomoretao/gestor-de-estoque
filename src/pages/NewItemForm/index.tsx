// - Deve possuir uma tela de criar novos itens.
// Ela deve ter pelo menos os campos nome, quantidade, preço, categoria e descrição.

import { useState } from 'react'
import Dropdown from '../../components/Dropdown/DropdownContainer'
import DropdownItems from '../../components/Dropdown/DropdownItem'
import Input from '../../components/Input.tsx'

type Product = {
    id: number
    name: string
    category: string
    quantity: number
    price: number
    detail: string
}

const allProducts: object[] = []

export default function NewItemForm() {
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

    const categories = ['Móveis', 'Utilitários', 'Eletronico']
    const product: Product = {
        id: allProducts.length,
        name: productName,
        category: productCategory,
        quantity: +productQuantity,
        price: +productPrice,
        detail: productDetails
    }

    return (
        <div>
            <form action="submit">
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
                <button onClick={() => {
                    allProducts.push(product)
                    console.log(allProducts)
                    console.log(product)
                }
                }>Adicionar Produto</button>
            </form>
        </div>
    )
}