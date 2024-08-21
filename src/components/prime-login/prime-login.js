import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useCookies } from "react-cookie";

export function PrimeLogin() {
    const navigate = useNavigate();
    const [cookie, setCookie, removeCookie] = useCookies();
    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center align-content-center">
                <div className="col-4 bg-primary text-white p-4 me-0">
                    <h2>Login</h2>
                    <p>Get access to your Orders, Wishlist and Recommadations</p>

                </div>
                <div className="col-4">
                    <Formik
                        initialValues={
                            {
                                UserId: "",
                                Password: ""
                            }
                        }
                        validationSchema={
                            yup.object({
                                UserId: yup.string()
                                    .required("User ID Required"),

                                Password: yup.string()
                                    .required("Password Required")
                            })
                        }

                        onSubmit={
                            (values) => {
                                axios({
                                    method: "get",
                                    url: "http://127.0.0.1:5000/users",
                                })
                                    .then(response => {
                                        for (var user of response.data) {
                                            if (user.UserId == values.UserId && user.Password == values.Password) {
                                                setCookie("userId", values.UserId)
                                                navigate("/home")
                                                break;
                                            } else {
                                                navigate("/invalid")
                                            }
                                        }
                                    })
                            }
                        }
                    >

                        <Form className="border border-2 p-4">
                            <dl>
                                <dt className="form-label">User ID</dt>
                                <dd><Field name="UserId" type="text" className="form-control" /></dd>
                                <dd className="text-danger">
                                    <ErrorMessage name="UserId" />
                                </dd>

                                <dt className="form-label">Password</dt>
                                <dd><Field name="Password" type="text" className="form-control" /></dd>
                                <dd className="text-danger">
                                    <ErrorMessage name="Password" />
                                </dd>
                                <p style={{fontSize:"13px", color:"gray"}}>By continuing, you agree to <b>Prime Bazzar's</b> Terms of use and Privacy Policy</p>
                            </dl>
                            <button className="btn btn-primary">Login</button>
                            <div>
                            <Link to="/userregister">New to Prime Bazaar? Create an account</Link>
                            </div>
                        </Form>

                    </Formik>

                </div>

            </div>

        </div>
    )
}