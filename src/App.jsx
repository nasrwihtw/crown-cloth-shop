import { Routes, Route, Outlet } from "react-router-dom"
import Home from './routes/home/home.component'
import Navigation from "./routes/navigation/navigation.component"
import Authentication from "./components/authentication/authentication.component"
import Shop from "./routes/shop/shop.component"
import CheckOut from "../src/components/checkout/checkout.component"
import Checkout from "../src/components/checkout/checkout.component"




const App = () => {

  return (
    <Routes>

      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>

    </Routes>



  )
}
export default App