import axios from "axios";
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ShopWithUs } from "../prime-shopWithUs/prime-shopWithUs";
import { PrimeAbout } from "../prime-about/prime-about";

export function PrimeCategory() {
    const params = useParams();
    const [cookie, setCookie, removeCookie] = useCookies();
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (cookie["userId"] == undefined) {
            navigate("/login");
        }
        axios({
            method: "get",
            url: `https://fakestoreapi.com/products/category/${params.catname}`
        })
            .then(Response => {

                setProducts(Response.data)
            })
    }, [params.catname])
    return (
        <div className="container-fluid background">
            <h2>Prime Categroy {params.catname}</h2>
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
                            <button className="btn btn-info"><Link to={`/details/` + product.id} className="btn text-white"><b>Details</b></Link></button>
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