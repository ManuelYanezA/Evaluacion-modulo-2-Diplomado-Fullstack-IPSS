import './ErrorMessage.css';

function ErrorMessage({ mensaje }) {

    return (
        <div className="errorContainer">

            <h2>Error</h2>

            <p>{mensaje}</p>

        </div>
    );
}

export default ErrorMessage;