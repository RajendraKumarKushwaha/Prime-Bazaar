import { useDispatch, useSelector } from "react-redux"
import Store from "../stores/Store"
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PrimeAbout } from "../prime-about/prime-about";
import {loadStripe} from '@stripe/stripe-js';
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
   const makePayment = async()=>{
        const stripe = await loadStripe("pk_test_51Q24JrA2yI7Kvv97glS95KVVgbgchakrQrAOTuBSVtgF9dvXLJO7ORzKofowY9Azh3DvRqva0qeBSuU1CQDLf1ka00A34PmqGC")
        const body = {
            products:product
        }
        const response = await fetch('http://localhost:8000/create-checkout-session', {
            method:"Post",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        const session = await response.json();

        const result = stripe.redirectToCheckout({
            sessionId:session.id
        })
        if(result.errror){
            console.log(result.errror)
        }
    }
    return (
        <div className="conatiner-fluid background">

            <div className="row p-4">
                <div className="col-9">

                    <table className="table table-hover">

                        <thead>
                            <th></th>
                            <th></th>
                            <th></th>
                        </thead>
                        <tbody>
                            <tr className="p-4">
                                <td><h3>Shopping Cart</h3></td>
                                <td></td>
                                <td>Price</td>
                            </tr>
                            {
                                product.map(item =>
                                    <tr key={item.id}>
                                        <td><img src={item.image} width="200px" height="200px" alt="product" /></td>
                                        <td>
                                            <h4>{item.title}</h4>
                                            <p>{item.category}</p>
                                            <p>{item.description}</p>
                                            <p><Link className="text-decoration-none" onClick={() => handleRemove(item.id)}>Remove</Link></p>
                                        </td>
                                        <td><h5>&#8377; {item.price}.00</h5></td>

                                    </tr>

                                )
                            }

                        </tbody>
                    </table>
                </div>
                <div className="col-3 ">
                    <table className="table table-hover">
                        <tbody>
                            <tr>
                                <td>
                                    <h6 className="text-success">Your order is eligible for FREE Delivery.</h6>
                                    <p style={{ fontSize: "15px" }} className="para">Choose FREE Delivery option at checkout.</p>
                                    <h4>Subtotal ({count} items): &#8377; {subtotal}</h4>
                                    <button onClick={makePayment} className="btn btn-warning w-100">Proceed to Buy</button>
                                    
                                </td>
                              
                            </tr>
                            
                        </tbody>
                        <td>
                            <Link  to="/home">Back to home</Link>
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