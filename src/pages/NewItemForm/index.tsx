// - Deve possuir uma tela de criar novos itens.
// Ela deve ter pelo menos os campos nome, quantidade, preço, categoria e descrição.

import { useState } from 'react'
import Dropdown from '../../components/Dropdown/DropdownContainer'
import DropdownItems from '../../components/Dropdown/DropdownItem'
import Input from '../../components/Input.tsx'

export default function NewItemForm() {
    const [productName, setProductName] = useState('')
    const [productQuantity, setProductQuantity] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productDetails, setProductDetails] = useState('')
    const [productCategory, setProductCategory] = useState('')

    const handlerCategory = (category: string) => {
        if (productCategory === category) {
            setProductCategory('')
        } else {
            setProductCategory(category)
        }
    }

    const categories = ['Móveis', 'Utilitários', 'Eletronico']

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
                <button onClick={() => alert(productName)}>Adicionar Produto</button>
            </form>
        </div>
    )
}