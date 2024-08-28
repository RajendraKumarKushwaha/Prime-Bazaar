import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";

export function CrudEdit() {

    const params = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({ProductId:0, Name:"", Price:"",Stock:false});
   

    useEffect(()=>{
        axios({
            method:"get",
            url: `http://127.0.0.1:8000/details/${params.id}`
        })
        .then(response=>{
            setProduct(response.data)
        })
        
    },[])
    function submitForm(){
        axios({
            method:"put",
            url:`http://127.0.0.1:8000/updateproduct`,
            data:product
        })
        .then(()=>{
            alert("Product Updated Successfully");
            navigate("/products")
        })

    }
    function handleChange(e){
        const {name, value,type,checked} = e.target;
        console.log(value);
        setProduct({
           
            ...product, [name]:type === 'checkbox' ? checked : value
            
        })
    }
    return (
        <div className="container-fluid">
            <h2>Edit The Product</h2>
            <dl>
                <dt>Name</dt>
                <dd><input name="Name" type="text" value={product.Name} onChange={handleChange}/></dd>
                <dt>Price</dt>
                <dd><input name="Price" type="number" value={product.Price} onChange={handleChange}/></dd>
                <dt>Stock</dt>
                <dd><input name="Stock" type="checkbox" value={product.Stock} onChange={handleChange}/>{(product.Stock==true)?"Available":"Out of Stock"}</dd>
            </dl>
            <button type="submit" onClick={submitForm} className="btn btn-primary me-2">Save</button>
            <Link to={"/products"}>back to Products</Link>
        </div>
    )
}