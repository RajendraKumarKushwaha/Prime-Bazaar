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


    const [cookie, setCookie, removeCookie] = useCookies();

    function signOutClick() {
        removeCookie("userId")
    }


    return (
        <div className="container-fluid">
            <BrowserRouter>
                <header className="d-flex justify-content-between bg-secondary text-white p-2">
                    <div>
                        <h2>Prime Bazaar</h2>
                    </div>

                    <div className="d-flex ">
                        <span className="me-3 d-none d-md-inline"><Link to="/login" className="btn btn-primary text-white">SignUp</Link></span>
                        <span className="me-3 d-none d-md-inline"><button className="btn btn-danger" onClick={signOutClick}>SignOut</button></span>
                        <span className="me-3">{cookie["userId"]}</span>
                        <span className="bi bi-search me-3 d-none d-md-inline"></span>
                        <span className="bi bi-person me-3 d-none d-md-inline"></span>
                        <span className="bi bi-heart me-3 d-none d-md-inline"></span>
                        <span className="me-3"><CartItems /></span>

                    </div>
                </header>
               
                <header>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                        <div className="container-fluid">
                        <span className="me-3 d-block d-md-none"><Link to="/login" className="btn btn-primary text-white">SignUp</Link></span>
                       

                            
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                           
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav mx-auto">
                                    <li className="nav-item">
                                        <Link to="home" className="nav-link text-white">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="products" className="nav-link text-white">Products</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="userregister" className="nav-link text-white">Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="category/men's clothing" className="nav-link text-white">Men's Fashion</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="category/women's clothing" className="nav-link text-white">Women's Fashion</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="category/jewelery" className="nav-link text-white">Jewelery</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="category/electronics" className="nav-link text-white">Electronics</Link>
                                    </li>
                                </ul>
                            </div>
                           
                        </div>
                        
                    </nav>
                </header>


                <div className="bg-light text-warning fw-bold text-center p-1 mt-2 ">
                    Your One-Stop Shop for Everything You Need
                </div>
                <div className="mt-4">
                    <Routes>
                        <Route path="/" element={<PrimeHome />}></Route>
                        <Route path="home" element={<PrimeHome />}></Route>
                        <Route path="userregister" element={<PrimeRegister />} />
                        <Route path="category/:catname" element={<PrimeCategory />} />
                        <Route path="details/:id" element={<PrimeDetails />} />
                        <Route path="login" element={<PrimeLogin />} />
                        <Route path="invalid" element={<PrimeInvalid />} />
                        <Route path="/products" element={<CrudIndex />} />
                        <Route path="NewProduct" element={<CrudCreate />} />
                        <Route path="cruddetails/:id" element={<CrudDetails />} />
                        <Route path="crudedit/:id" element={<CrudEdit />} />
                        <Route path="/cartProduct" element={<CartProduct />} />
                        <Route path="/success" element={<PrimeSuccess />} />
                        <Route path="/cancel" element={<PrimeCancel />} />


                    </Routes>
                </div>

            </BrowserRouter>

        </div>
    )
}