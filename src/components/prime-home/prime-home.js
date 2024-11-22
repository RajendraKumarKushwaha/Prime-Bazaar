import axios from "axios";
import './prime-home.css'
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { ShopWithUs } from "../prime-shopWithUs/prime-shopWithUs";
import { PrimeAbout } from "../prime-about/prime-about";

export function PrimeHome() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios({
            method: "get",
            url: `https://fakestoreapi.com/products`
        })
            .then(response => {
                setProducts(response.data)
            })
    }, [])


    return (
        <div className="container-fluid background">
            <div className="d-flex flex-wrap justify-content-around">
                {
                    products.map(product =>
                        <div key={product.id} className="card m-4 p-4 border border-0 bg-white  " style={{ width: "350px" }}>
                            <div className="card-img-wrapper">
                                <img src={product.image} alt="" height={"200px"} width={"200px"} />
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <dl>
                                        <dd><b>{(product.category).toUpperCase()}</b></dd>
                                        <dd> <b>&#8377; {product.price}</b></dd>
                                    </dl>

                                </div>
                                <div className="col-4">
                                    <dl>
                                        <dt>Like</dt>
                                        <dd>
                                            <span className="bi bi-star-fill  text-warning "></span>
                                            <span className="bi bi-star-fill  text-warning "></span>
                                            <span className="bi bi-star-fill  text-warning "></span>
                                            <b>{product.rating.rate}</b>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <button className="btn btn-warning"><Link to={`/details/` + product.id} className="btn text-white"><b>Details</b></Link></button>
                        </div>

                    )
                }

            </div>
            <div>
                <ShopWithUs />
            </div>
            <div>
                <PrimeAbout/>
            </div>
        </div>

    )
}