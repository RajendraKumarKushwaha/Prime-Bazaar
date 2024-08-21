import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export function PrimeDetails() {
    const params = useParams();

    const [product, setProduct] = useState({ id: 0, title: "", price: 0, image: "", rating: { rate: 0, cound: 0 } });

    useEffect(() => {
        axios({
            method: "get",
            url: `https://fakestoreapi.com/products/${params.id}`
        })
            .then(Response => {
                console.log(Response.data)
                setProduct(Response.data)
            })
    }, [params.id])
    return (
        <div className="container-fluid">
            <h2>Details {params.id}</h2>
            <div className="row">
                <div className="col-3">
                    <div className="card m-2 p-2" style={{ width: "300px" }}>
                        <img src={product.image} className="card-img-top" style={{ height: "300px" }} />

                    </div>
                </div>


                <div className="col-4">
                    <div className="card m-2 p-2" style={{ width: "400px" }}>

                        <div className="card-header" style={{ height: "170px" }}>
                            <dl>
                                <dt>Title</dt>
                                <p>{product.title}</p>
                                <dt className="mb-1">Ratings</dt>
                                <dl><span className="bi bi-star-fill bg-success m-1 rounded p-1 text-white"> {product.rating.rate}</span></dl>

                            </dl>
                        </div>
                        <div className="card-body">
                            <dl>
                                <dt>Special Price</dt>
                                <dd>&nbsp; &#8377; {product.price}</dd>
                            </dl>

                        </div>
                        <Link to={"/category/" + product.category}>Back to {product.category}</Link>
                    </div>

                </div>
                <div className="col-5">
                    <dl>
                        <dt>Description</dt>
                        <dd>{product.description}</dd>
                    </dl>

                </div>

            </div>


        </div>
    )
}