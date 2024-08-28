import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";

export function CrudCreate() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [productIdError, setProductIdError] = useState("");
    const [color, setColor] = useState({backgroundColor:""});

    useEffect(() => {
        axios({
            method: "get",
            url: "http://127.0.0.1:8000/products"
        })
            .then(response => {
                setProducts(response.data)
            })

    }, [])

    function VerifyId(e){
        for(var product of products){
            if(product.ProductId==e.target.value){
                  setProductIdError("Product Id Taken - Try Another");
                  setColor("text-danger")
                  break;
            } else{
                setProductIdError("Product Id Available")
                setColor("text-success")
            }
        }
    }
    return (
        <div className="container-fluid">
            <h2>Add New Prdouct</h2>
            <Formik
                initialValues={{
                    ProductId: 0,
                    Name: "",
                    Price: 0,
                    Stock: true
                }}
                validationSchema={
                    yup.object({
                        ProductId: yup.number()
                            .required("Product Id Required"),

                        Name: yup.string()
                            .required("Product Name Required"),

                        Price: yup.number()
                            .required("Price Required"),

                        Stock: yup.string()
                            .required("Stock Required")
                    })
                }
                onSubmit={
                    (values) => {
                        axios({
                            method: "post",
                            url: "http://127.0.0.1:8000/addproducts",
                            data: values
                        })
                            .then(() => {
                                alert("Product Registerd");
                                navigate("/products")
                            })
                    }
                }
            >
                {
                    <Form>
                        <dl className="border border-2 w-25 p-2 ">
                            <dt className="form-label">Product Id</dt>
                            <dd >
                                <Field name="ProductId" onKeyUp={VerifyId} type="number" className="form-control" />
                            </dd>
                            <dd className={color}>{productIdError}</dd>
                            <dd className="text-danger">
                                <ErrorMessage name="ProductId" />
                            </dd>
                            <dt className="form-label">Name</dt>
                            <dd>
                                <Field name="Name" type="text" className="form-control" />
                            </dd>
                            <dd className="text-danger">
                                <ErrorMessage name="Name" />
                            </dd>
                            <dt className="form-label">Price</dt>
                            <dd>
                                <Field name="Price" type="number" className="form-control" />
                            </dd>
                            <dd className="text-danger">
                                <ErrorMessage name="Price" />
                            </dd>
                            <dt className="form-label">Stock</dt>
                            <dd className="form-switch">
                                <Field name="Stock" type="checkbox" className="form-check-input" ></Field>
                            </dd>
                            <dd className="text-danger">
                                <ErrorMessage name="Stock" />
                            </dd>

                        </dl>
                        <button className="btn btn-primary me-3">Add Product</button>
                        <Link to="/products">View Products</Link>


                    </Form>
                }

            </Formik>

        </div>
    )
}