import { useDispatch, useSelector } from "react-redux"
import Store from "../stores/Store"
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PrimeAbout } from "../prime-about/prime-about";
import { loadStripe } from '@stripe/stripe-js';
import { removeFromCart } from "../slicers/cartSlicers";

export function CartProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    var product = useSelector((state) => {
        return Store.getState().store.cartItems;

    })
    var count = useSelector((state) => {
        return Store.getState().store.cartCount;
    })
    const subtotal = product.reduce((total, item) => total + item.price, 0);

    const handleRemove = (itemId) => {
        dispatch(removeFromCart(itemId)); // Dispatch action to remove item

    };
    useEffect(() => {

    })


    //Payment Integration
    const makePayment = async () => {
        const stripe = await loadStripe("pk_test_51Q24JrA2yI7Kvv97glS95KVVgbgchakrQrAOTuBSVtgF9dvXLJO7ORzKofowY9Azh3DvRqva0qeBSuU1CQDLf1ka00A34PmqGC")
        const body = {
            products: product
        }
        const response = await fetch('http://localhost:8000/create-checkout-session', {
            method: "Post",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        const session = await response.json();

        const result = stripe.redirectToCheckout({
            sessionId: session.id
        })
        if (result.errror) {
            console.log(result.errror)
        }
    }
    return (
        <div className="conatiner-fluid background">

            <div className="row p-4">
                <div className="col-md-9 col-12 mb-4">

                    <table className="table table-hover bg-white">

                        <thead>
                            <th></th>
                            <th></th>
                            <th></th>
                        </thead>
                        <tbody>
                            <tr className="p-4">
                                <td><h3>Shopping Cart</h3></td>
                                <td></td>
                                <td className="d-none d-md-table-cell">Price</td>
                            </tr>
                            {
                                product.map(item =>
                                    <tr key={item.id} className="d-flex flex-column flex-md-row justify-content-center align-items-center text-center text-md-start">
                                        <td className="text-center mb-3 mb-md-0"><img src={item.image} width="200px" height="200px" alt="product" className="img-fluid" /></td>
                                        <td>
                                            <h4>{item.title}</h4>
                                            <p className="text-muted">{item.category}</p>
                                            <p className="small">{item.description}</p>
                                            <p><Link className="text-decoration-none" onClick={() => handleRemove(item.id)}>Remove</Link></p>
                                        </td>
                                        <td><h5>&#8377; {item.price}.00</h5></td>

                                    </tr>

                                )
                            }

                        </tbody>
                    </table>
                </div>
                <div className="col-md-3 col-12 ">
                    <table className="table table-hover">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="d-flex flex-column align-items-start">
                                        <h6 className="text-success">Your order is eligible for FREE Delivery.</h6>
                                        <p className="small text-muted">Choose FREE Delivery option at checkout.</p>
                                        <h4>Subtotal ({count} items): &#8377; {subtotal}</h4>
                                        <button onClick={makePayment} className="btn btn-warning w-100 mt-3">
                                            Proceed to Buy
                                        </button>
                                    </div>
                                </td>


                            </tr>

                        </tbody>
                        <td className="text-center">
                            <Link to="/home">Back to home</Link>
                        </td>
                    </table>

                </div>

            </div>

            <div className="">
                <PrimeAbout />
            </div>
        </div>
    )
}