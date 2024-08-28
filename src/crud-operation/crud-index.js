import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

export function CrudIndex() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios({
            method: "get",
            url: "http://127.0.0.1:8000/products"
        })
            .then(Response => {
                setProducts(Response.data)
            })
    }, [])

    function DeleteClick(e) {
         var flag = window.confirm("Are you sure\nWant to delete?");

        if(flag==true){
            axios({
                method: "delete",
                url: `http://127.0.0.1:8000/deleteproduct/${(parseInt(e.currentTarget.value))}`,
            })
              .then(()=>{
                alert("Record Deleted");
                navigate("/home")
              })
    
                
        }
       
    }
    return (
        <div className="container-fluid">
            <h1>Table Grid</h1>
            <div className="mb-3">
                <Link to="/NewProduct" className="btn btn-primary">Add New Prdouct</Link>

            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr key={product.ProductId}>
                                <td>{product.Name}</td>
                                <td>
                                    <Link to={`/cruddetails/` + product.ProductId} className="btn btn-info"><span className="bi bi-eye"></span></Link>
                                </td>
                                <td>
                                    <Link to={`/crudedit/` + product.ProductId} className="btn btn-warning"><span className="bi bi-pen"></span></Link>
                                </td>
                                <td>
                                    <button value={product.ProductId} onClick={DeleteClick} className="btn btn-danger"><span className="bi bi-trash"></span></button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>

            </table>

        </div>
    )
}