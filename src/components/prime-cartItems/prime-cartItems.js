import { useSelector } from "react-redux";
import Store from "../stores/Store";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PrimeAbout } from "../prime-about/prime-about";

export function CartItems() {
    var count = useSelector((state) => {
        return Store.getState().store.cartCount;
    })
    // var count= Store.getState().store.cartCount;
    useEffect(() => {


    }, [])
    return (
        
            <div>
                <button className=" btn btn-outline-dark text-white position-relative">
                    <span> <Link to='/cartProduct'><span className="bi bi-cart4 text-white"></span></Link></span>
                    <span className="badge rounded-circle bg-info position-absolute bottom-50 space-left2">{count}</span>
                </button> 
                 {/* Cart  */}
            </div>
           
    )
}