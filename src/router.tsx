import { createBrowserRouter } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import NewItemForm from "./pages/NewItemForm"
import useProducts from "./hooks/useProducts"
import ItemsList from "./pages/ItemsList"

function NewProduct() {
    const { addProduct } = useProducts()
    return <NewItemForm addProduct={addProduct} />
}

function ProductsList() {
    const { products, removeProduct } = useProducts()
    return <ItemsList removeProduct={removeProduct} products={products} />
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/new-product",
        element: <NewProduct />,
    },
    {
        path: "/products-list",
        element: <ProductsList />,
    }
])

export default router