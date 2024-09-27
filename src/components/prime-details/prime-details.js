import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { addToCart } from "../slicers/cartSlicers";
import { ShopWithUs } from "../prime-shopWithUs/prime-shopWithUs";
import { PrimeAbout } from "../prime-about/prime-about";

export function PrimeDetails() {
    const params = useParams();

    const [product, setProduct] = useState({ id: 0, title: "", price: 0, image: "", rating: { rate: 0, cound: 0 } });
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    function handleAddToCart(product) {
        setLoading(true);
        dispatch(addToCart(product))
        setTimeout(() => {
            setLoading(false); // Set loading to false after a short delay
        }, 1000); // 

    }
    useEffect(() => {
        axios({
            method: "get",
            url: `https://fakestoreapi.com/products/${params.id}`
        })
            .then(Response => {
                setProduct(Response.data)
            })
    }, [params.id])
    return (
        <div className="container-fluid background">

            <div className="row">
                <div className="col-5">
                    <div className="card mt-4 border border-0  bg-white  " style={{ width: "450px" }}>
                        <div className="card-img-wrapper">
                            <img src={product.image} alt="" height={"450px"} width={"450px"} />
                        </div>
                        {/* <button className="btn btn-warning mt-4" onClick={(e) => handleAddToCart(product)}>Add to Cart</button>
                    */}
                      <button className="btn btn-warning mt-4" onClick={() => handleAddToCart(product)}>
                            {loading ? (
                                <div className="spinner-border text-light" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            ) : (
                                "Add to Cart"
                            )}
                        </button>   

                    </div>


                </div>
                <div className="col-7 mt-4">
                    <div>
                        <h3>{product.title}</h3>
                        <h3>{(product.category)}</h3>
                        <dl>
                            <dt className="text-success">Special Price</dt>
                            <dd><h4>&#8377; {product.price}</h4></dd>
                            <dt><h3>Product Description</h3></dt>
                            <dd><h6>{product.description}</h6></dd>
                        </dl>
                        <div className="d-flex align-items-center">
                            <h5 className="bg-success text-white m-1 p-1" style={{ width: "60px", borderRadius: "8px" }}> {product.rating.rate}
                                <span className="bi bi-star-fill "></span>
                            </h5>
                            <h5><span>ratings and {product.rating.count} reviews</span></h5>
                        </div>
                        </div>
                        <Link to={`/category/` + product.category}>back to category</Link>
                </div>

            </div>

          
            <div>
                <PrimeAbout/>
            </div>


        </div>
    )
}