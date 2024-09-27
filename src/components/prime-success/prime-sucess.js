import './prime-success.css';
export function PrimeSuccess(){
    return(
        <div className="success-container">
            <h2 className="success-title">Payment Successful!</h2>
            <p className="success-message">Thank you for your purchase. Your transaction was completed successfully.</p>
            <div className="success-image mb-4">
                <img src={"payment-done.png"} height={"200px"} width={"200px"} alt="Success" />
            </div>
            <a href="/" className="success-button">Go to Home</a>
        </div>
    )
}