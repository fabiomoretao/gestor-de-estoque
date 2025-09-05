import { createBrowserRouter } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import NewItemForm from "./pages/NewItemForm"
import useProducts from "./hooks/useProducts"
import ItemsList from "./pages/ItemsList"
import ItemDetails from "./pages/ItemDetails"
import UpdateItem from "./pages/UpdateItem"
import Layout from "./Layout"

function Home() {
    const { products } = useProducts()
    return <Dashboard products={products} />
}

function NewProduct() {
    const { addProduct } = useProducts()
    return <NewItemForm addProduct={addProduct} />
}

function ProductsList() {
    const { products, removeProduct } = useProducts()
    return <ItemsList removeProduct={removeProduct} products={products} />
}

function ProductDetails() {
    const { products, removeProduct } = useProducts()
    return <ItemDetails removeProduct={removeProduct} products={products} />
}

function UpdateProduct() {
    const { products, updateProduct } = useProducts()
    return <UpdateItem updateProduct={updateProduct} products={products} />
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "new-product", element: <NewProduct />, },
            { path: "products-list", element: <ProductsList />, },
            { path: "product-details/:productId", element: <ProductDetails />, },
            { path: "update-product/:productId", element: <UpdateProduct />, }
        ]
    },

])

export default router