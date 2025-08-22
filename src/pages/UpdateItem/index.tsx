import { Link, useParams } from "react-router-dom"
import type { Product } from "../../types"
import { useState, type FormEvent } from "react"
import Input from "../../components/Input.tsx"
import DropdownContainer from "../../components/Dropdown/DropdownContainer.tsx"
import DropdownItems from "../../components/Dropdown/DropdownItem.tsx"
import { categories } from "../NewItemForm/index.tsx"

type UpdateItemProps = {
    updateProduct: (id: number, changes: Partial<Omit<Product, "id">>) => void
    products: Product[]
}

export default function UpdateItem({ products, updateProduct }: UpdateItemProps) {
    // obtem o produto pelo id passado na url
    const { productId } = useParams()
    const product = products.find(p => productId ? p.id === +productId : null)

    if (!product) {
        return (
            <h2>Oops... Esse produto nao foi encontrado ;-;</h2>
        )
    }
    const [productName, setProductName] = useState(product.name)
    const [productQuantity, setProductQuantity] = useState(String(product.quantity))
    const [productPrice, setProductPrice] = useState(String(product.price))
    const [productDetails, setProductDetails] = useState(product.details)
    const [productCategory, setProductCategory] = useState(product.category)

    // Quando a mesma categoria for selecionada desmarca, se não adiciona o valor a categoria referente
    const handlerCategory = (category: string) => {
        if (productCategory === category) {
            setProductCategory('')
        } else {
            setProductCategory(category)
        }
    }

    // atualiza o produto no localStorage
    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        updateProduct(
            product.id,
            {
                name: productName,
                category: productCategory,
                quantity: +productQuantity,
                price: +productPrice,
                details: productDetails
            })
    }

    return (
        <div>
            <Link to="/">Inicio</Link>
            <br />
            <hr />
            <form onSubmit={handleSubmit}>
                {/* campo de nome:  */}
                <Input
                    label='Produto'
                    name='product'
                    type='text'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProductName(e.target.value)}
                    value={productName}
                />
                {/* campo de Quantidade:  */}
                <Input
                    label='Quantidade'
                    name='quantity'
                    type='number'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProductQuantity(e.target.value)}
                    value={productQuantity}
                />
                {/* campo de Preco:  */}
                <Input
                    label='Preço'
                    name='price'
                    type='number'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProductPrice(e.target.value)}
                    value={productPrice}
                />
                {/* campo de Categorias:  */}
                <DropdownContainer
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
                {/* campo de Detalhes do produto:  */}
                <div>
                    <label htmlFor="productDetails">Descricão:</label>
                    <textarea
                        name="productDetails"
                        id="productDetails"
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setProductDetails(e.target.value)}
                        value={productDetails}
                    ></textarea>
                </div>
                <button type='submit'>Salvar</button>
            </form>
        </div>
    )
}