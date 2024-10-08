import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import { PrimeHome } from "../prime-home/prime-home";
import { PrimeCategory } from "../prime-category/prime-category";
import { PrimeDetails } from "../prime-details/prime-details";
import { PrimeRegister } from "../prime-register/prime-register";
import { PrimeLogin } from "../prime-login/prime-login";
import { PrimeInvalid } from "../prime-invalid/prime-invalid";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { CrudIndex } from "../../crud-operation/crud-index";
import { CrudCreate } from "../../crud-operation/crud-create";
import { CrudDetails } from "../../crud-operation/crud-details";
import { CrudEdit } from "../../crud-operation/crud-edit";
import { CartItems } from "../prime-cartItems/prime-cartItems";
import { CartProduct } from "../prime-cartProduct/prime-cartProduct";
import { PrimeSuccess } from "../prime-success/prime-sucess";
import { PrimeCancel } from "../prime-cancel/prime-cancel";



export function PrimeIndex() {
    const [cookie, setCookie,removeCookie] = useCookies();
   
    function signOutClick(){
        removeCookie("userId")
    }
   

    return (
        <div className="container-fluid">
            <BrowserRouter>
                <header className="d-flex justify-content-between bg-secondary text-white p-2">
                    <div>
                        <h2>Prime Bazaar</h2>
                    </div>
                    <nav className="d-flex align-center">
                        <div className="me-3"><Link to="home" className="btn text-white">Home</Link></div>
                        <div className="me-3"><Link to="products" className="btn text-white">Products</Link></div>
                        <div className="me-3"><Link to="userregister" className="btn text-white">Register</Link></div>
                        <div className="me-3"><Link to="category/men's clothing" className="btn text-white">Men's Fashion</Link></div>
                        <div className="me-3"><Link to="category/women's clothing" className="btn text-white">Women's Fashion</Link></div>
                        <div className="me-3"><Link to="category/jewelery" className="btn text-white">Jewelery</Link></div>
                        <div className="me-3"><Link to="category/electronics" className="btn text-white">Electronics</Link></div>
                    </nav>
                    <div className="d-flex align-center">
                    <span className="me-3"><Link to="/login" className="btn btn-primary text-white">SignUp</Link></span>
                        <span className="me-3"><button className="btn btn-danger" onClick={signOutClick}>SignOut</button></span>
                        <span className="me-3">{cookie["userId"]}</span>
                        <span  className="bi bi-search me-3"></span>
                        <span className="bi bi-person me-3"></span>
                        <span className="bi bi-heart me-3"></span>
                        <span className="me-3"><CartItems/></span>

                    </div>
                </header>
                <div className="bg-light text-warning fw-bold text-center p-1 mt-2 ">
                    Your One-Stop Shop for Everything You Need
                </div>
                <div className="mt-4">
                    <Routes>
                        <Route path="/" element={<PrimeHome/>}></Route>
                        <Route path="home" element={<PrimeHome/>}></Route>
                        <Route path="userregister" element={<PrimeRegister/>}/>
                        <Route path="category/:catname" element={<PrimeCategory/>}/>
                        <Route path="details/:id" element={<PrimeDetails/>}/>
                        <Route path="login" element={<PrimeLogin/>}/>
                        <Route path="invalid" element={<PrimeInvalid/>}/>
                        <Route path="/products" element={<CrudIndex/>}/>
                        <Route path="NewProduct" element={<CrudCreate/>}/>
                        <Route path="cruddetails/:id" element={<CrudDetails/>}/>
                        <Route path="crudedit/:id" element={<CrudEdit/>} />
                        <Route path="/cartProduct" element={<CartProduct/>}/>
                        <Route path="/success" element={<PrimeSuccess/>}/>
                        <Route path="/cancel" element={<PrimeCancel/>}/>
                        
                        
                    </Routes>
                </div>

            </BrowserRouter>

        </div>
    )
}