import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export function CrudDetails(){
    const params = useParams();
    const [products, setProducts] = useState({Name:"", Price:0, Stock:false});

    useEffect(()=>{
        axios({
            method:"get",
            url:`http://127.0.0.1:8000/details/${params.id}`
        })
        .then(response=>{
            setProducts(response.data)
        })
    },[])
    return(
        <div className="container-fluid">
              <h2>Product Details</h2>
              <dl>
                <dt>Name</dt>
                <dd>{products.Name}</dd>
                 <dt>Price</dt>
                <dd>{products.Price}</dd>
                <dt>Stock</dt>
                <dd>{(products.Stock==true)?"Available":"Out of Stock"}</dd> 
              </dl>
              <Link to="/products">back to Products</Link>
        </div>
    )
}