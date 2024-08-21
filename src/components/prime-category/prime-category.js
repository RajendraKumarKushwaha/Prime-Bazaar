import axios from "axios";
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie";
import { Link, useNavigate, useParams } from "react-router-dom";

export function PrimeCategory() {
    const params = useParams();
    const [cookie, setCookie, removeCookie] = useCookies();
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if(cookie["userId"]==undefined){
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
        <div className="container-fluid">
            <h2>Prime Categroy {params.catname}</h2>
            <div className="d-flex flex-wrap">
                {
                    products.map(product=>
                        <div className="card m-2 p-2 " style={{width:"200px"}}>
                            <img src={product.image} className="card-img-top" style={{height:"150px"}}/>
                            <div className="card-header" style={{height:"150px"}}>
                                <p>{product.title}</p>
                            </div>
                            <div className="card-footer">
                                <Link to={`/details/` + product.id} className="btn btn-primary w-100">Details</Link>
                            </div>
                        </div>
                    )
                }

            </div>

        </div>
    )
}