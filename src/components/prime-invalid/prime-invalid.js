import { Link } from "react-router-dom";

export function PrimeInvalid(){
    return(
        <div className="container-fluid">
            <div className="text-danger">
                Invalid User Name / Password
            <div>
                <Link to={"/login"}>Try again</Link>
            </div>
            </div>

        </div>
    )
}