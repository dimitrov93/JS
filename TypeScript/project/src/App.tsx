import { useState } from "react"
import Cart from "./components/Cart"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Products from "./components/Products"

function App() {
const [viewCart, setViewCart] = useState<boolean>(false)

const pageContent = viewCart ? <Cart /> : <Products />

const content = (
  <>
    <Header viewCart = {viewCart} setViewCart={setViewCart} />
    {pageContent}
    <Footer viewCart={viewCart} />
  </>
)
  return content
}

export default App
