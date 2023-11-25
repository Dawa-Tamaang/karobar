import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ForSell from "./pages/ForSell"
import ForRent from "./pages/ForRent"
import Agencies from "./pages/Agencies"
import About from "./pages/About"
import Header from "./components/Header"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import Footer from "./components/Footer"
import PrivateRoute from "./components/PrivateRoute"
import Profile from "./pages/admin/Profile"
import AdminMenu from "./pages/admin/components/AdminMenu"
import CreateProperty from "./pages/admin/CreateProperty"
import DashBoard from "./pages/admin/DashBoard"
import Properties from "./pages/admin/Properties"
import ForNrn from "./pages/ForNrn"
import PropertyDisplay from "./pages/PropertyDisplay"

export default function App() {
  return (
    <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/for-buy" element={<ForSell/>}/>
            <Route path="/for-rent" element={<ForRent/>}/>
            <Route path="/agencies" element={<Agencies/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path= "/admin-menu" element ={<AdminMenu/>}/>
            <Route path="/sign-in" element={<LoginPage/>}/>
            <Route path="/sign-up" element={<SignupPage/>}/>
            <Route path="/for-nrn" element={<ForNrn/>}/>
            <Route path="/property-display/:listingId" element={<PropertyDisplay/>}/>

            <Route element={<PrivateRoute/>}>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/create-property" element={<CreateProperty/>}/>
              <Route path="/dashboard" element={<DashBoard/>}/>
              <Route path="/properties" element={<Properties/>}/>
            </Route>
          </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
