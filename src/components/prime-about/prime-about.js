import { Link } from "react-router-dom";

export function PrimeAbout() {
    return (
        <div className="containerr-fluid px-3 ">
            <div className="row d-flex flex-wrap justify-content-between bg-secondary text-white p-2">
                <div className="col-md-3 col-12 mb-3 text-md-start text-center">
                    <h2>About</h2>
                    <p>Welcome to Prime Bazaar, your ultimate destination for quality and style. We are committed to providing excellent customer service and a seamless shopping experience.</p>
                     </div>
                <div className="col-md-3 col-12 mb-3 text-md-start text-center">
                    <h2>Menu</h2>
                    <div className="me-3"><Link to="home" className="btn text-white">Home</Link></div>
                    <div className="me-3"><Link to="/products" className="btn text-white">Products</Link></div>
                    <div className="me-3"><Link to="/userregister" className="btn text-white">Register</Link></div>
                    <div className="me-3"><Link to="/category/men's clothing" className="btn text-white">Men's Fashion</Link></div>

                </div>
                <div className="col-md-3 col-12 mb-3 text-md-start text-center">
                    <h2>Useful Links</h2>
                    <div className="me-3"><Link to="/category/women's clothing" className="btn text-white">Women's Fashion</Link></div>
                    <div className="me-3"><Link to="/category/jewelery" className="btn text-white">Jewelery</Link></div>
                    <div className="me-3"><Link to="/category/electronics" className="btn text-white">Electronics</Link></div>

                </div>
                <div className="col-md-3 col-12 mb-3 text-md-start text-center">
                    <h2>Contact</h2>
                    <div className="mb-2">We’d love to hear from you!</div>
                    <div><b>Phone:</b> &nbsp; <span className="bi bi-telephone"></span><a className="text-white" style={{ textDecoration: "none" }} href="tel:+9179644717"> 917-964-4717</a></div>
                    <div className="mb-2"><b>Email:</b> &nbsp; <span className="bi bi-envelope"></span><a className="text-white" style={{ textDecoration: "none" }} href="mailto:rajendra.k619@gmail.com"> rajendra.k619@gmail.com</a></div>
                   <p>Feel free to reach out with any questions, feedback, or inquiries. Our team is here to assist you!</p>
                </div>
                <hr/>
                <div className="text-white text-center bg-secondary w-100 pb-2 mb-0">
            © 2024 Prime Bazaar. All rights reserved. Designed with passion by &nbsp;
            <a className=" text-dark" href="https://www.rajendrakushwaha.com/"> Rajendra</a>
            </div>
            </div>
            
          


        </div>
    )
}