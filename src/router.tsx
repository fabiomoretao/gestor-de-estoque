import { createBrowserRouter } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import NewItemForm from "./pages/NewItemForm"
import useProducts from "./hooks/useProducts"
import ItemsList from "./pages/ItemsList"

function NewItemWrapper() {
    const { addProduct } = useProducts()
    return <NewItemForm addProduct={addProduct} />
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/new-product",
        element: <NewItemWrapper />,
    },
    {
        path: "/products-list",
        element: <ItemsList />,
    }
])

export default router