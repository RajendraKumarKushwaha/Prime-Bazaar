import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { PrimeAbout } from "../prime-about/prime-about";

export function PrimeRegister() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [userError, setUserError] = useState("");
    const [bgColor, setBgColor] = useState({ backgroundColor: "" });

    useEffect(() => {
        axios({
            method: "get",
            url: "http://127.0.0.1:8000/users"
        })
            .then(response => {
                setUsers(response.data)
            })
    }, [])
    function VeryfyUserId(e) {
        for (var user of users) {
            if (user.UserId == e.target.value) {
                setUserError("User Id Taken Try Another ");
                setBgColor("text-danger");
                break;
            } else {
                setUserError(" User Id Available");
                setBgColor("text-success");
            }
        }
    }
    return (
        <div className="container-fluid d-flex justify-content-center"  >


            <div className="left w-25">
                <div className="bg-primary " style={{ height: "625px" }}>
                    <h2 className="p-4 text-white">Looks like you're new here!</h2>
                    <p className="p-4 text-white">Sign up with Register User to get started</p>
                </div>

            </div>
            <div className="right w-25">
                <Formik

                    initialValues={
                        {
                            UserId: "",
                            UserName: "",
                            Password: "",
                            Email: "",
                            Age: 0,
                            Mobile: ""

                        }
                    }

                    validationSchema={
                        yup.object({
                            UserId: yup.string()
                                .required("UserId Required"),


                            UserName: yup.string()
                                .required("User Name Required")
                                .min(3, "Name too short min 4 char")
                                .max(10, "Name too long max 10 char"),

                            Password: yup.string()
                                .required("Password Required"),

                            Email: yup.string()
                                .required("Email Required"),

                            Age: yup.number()
                                .required("Age Required"),

                            Mobile: yup.string()
                                .required("Mobile Number Required")



                        })
                    }

                    onSubmit={
                        (values) => {
                            axios({
                                method: "post",
                                url: `http://127.0.0.1:8000/registeruser`,
                                data: values
                            })
                                .then(() => {
                                    alert("Regisered Successfully")
                                    navigate("/login")
                                })


                        }
                    }

                >
                    {
                        <Form className="d-flex justify-content-center border border-end pe-4 ps-4" >
                            <div className=" text-center w-100 d-flex  flex-column justify-content-center align-content-center">
                                <h4 className="bi bi-person-fill">User Registraion</h4>
                                <dl>
                                    <dt className="form-label">User ID</dt>
                                    <dd >
                                        <Field name="UserId" type="text" onKeyUp={VeryfyUserId} className="form-control border-bottom"></Field>
                                    </dd>
                                    <dd className={bgColor}>{userError}</dd>
                                    <dd className="text-danger">
                                        <ErrorMessage name="UserId"></ErrorMessage>
                                    </dd>

                                    <dt className="form-label">User Name</dt>
                                    <dd>
                                        <Field name="UserName" type="text" className="form-control"></Field>
                                    </dd>
                                    <dd className="text-danger">
                                        <ErrorMessage name="UserName"></ErrorMessage>
                                    </dd>

                                    <dt className="form-label">Password</dt>
                                    <dd>
                                        <Field name="Password" type="password" className="form-control"></Field>
                                    </dd>
                                    <dd className="text-danger">
                                        <ErrorMessage name="Password"></ErrorMessage>
                                    </dd>

                                    <dt className="form-label">Email</dt>
                                    <dd>
                                        <Field name="Email" type="email" className="form-control"></Field>
                                    </dd>
                                    <dd className="text-danger">
                                        <ErrorMessage name="Email"></ErrorMessage>
                                    </dd>

                                    <dt className="form-label">Age</dt>
                                    <dd>
                                        <Field name="Age" type="text" className="form-control"></Field>
                                    </dd>
                                    <dd className="text-danger">
                                        <ErrorMessage name="Age"></ErrorMessage>
                                    </dd>

                                    <dt className="form-label">Mobile</dt>
                                    <dd>
                                        <Field name="Mobile" type="text" className="form-control"></Field>
                                    </dd>
                                    <dd className="text-danger">
                                        <ErrorMessage name="Mobile"></ErrorMessage>
                                    </dd>
                                </dl>

                                <button className="btn btn-info">Register</button>
                                <div>
                                    <Link to="/login">Existing User?</Link>
                                </div>
                            </div>


                        </Form>
                    }

                </Formik>

            </div>


        </div>

    )

}