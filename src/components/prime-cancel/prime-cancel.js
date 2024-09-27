import './prime-cancel.css';
export function PrimeCancel(){
    return(
        <div className="cancel-container">
            <h2 className="cancel-title">Payment Canceled</h2>
            <p className="cancel-message">Your transaction has been canceled. Please try again later.</p>
            <div className="cancel-image mb-4">
                <img src={"cancel.jpg"} alt="Canceled" height={"200px"} width={"200px"}/>
            </div>
            <a href="/" className="cancel-button">Go Back Home</a>
        </div>
    )
}