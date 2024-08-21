import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function PrimeHome(){

   
    return(
        <div className="container-fluid">
            <div className="d-flex w-100 justify-content-between flex-wrap">
                <div>
                    <img src="electronics.jpg" alt="Electronics Pic" height="300px" width="250px"/>
                </div>
                <div>
                    <img src="jewelery.jpg" alt="Electronics Pic" height="300px" width="250px"/>
                </div>
                <div>
                    <img src="mens.jpg" alt="Electronics Pic" height="300px" width="250px"/>
                </div>
                <div>
                    <img src="women.jpg" alt="Electronics Pic" height="300px" width="250px"/>
                </div>

            </div>

        </div>
    )
}