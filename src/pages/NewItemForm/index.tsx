// - Deve possuir uma tela de criar novos itens.
// Ela deve ter pelo menos os campos nome, quantidade, preço, categoria e descrição.

import Dropdown from '../../components/Dropdown'
import DropdownItems from '../../components/DropdownItem'

export default function NewItemForm() {
    const
        categories = ['Móveis', 'Utilitários', 'Eletronico']
    return (
        <div>
            <form action="submit">
                <div>
                    <label htmlFor="productName">Produto:</label>
                    <input type="text" name="productName" id='productName' />
                </div>
                <div>
                    <label htmlFor="productQuantity">Quantidade:</label>
                    <input type="number" name="productQuantity" id='productQuantity' />
                </div>
                <div>
                    <label htmlFor="productPrice">Preco:</label>
                    <input type="number" name="productPrice" id='productPrice' />
                </div>

                <Dropdown
                    buttonText="Categorias"
                    content={categories.map((category: string) => (
                        <DropdownItems key={category}><p>{category}</p></DropdownItems>
                    ))}
                />
                <div>
                    <label htmlFor="productDetails">Descricão:</label>
                    <textarea name="productDetails" id="productDetails"></textarea>
                </div>
                <button>Adicionar Produto</button>
            </form>
        </div>
    )
}