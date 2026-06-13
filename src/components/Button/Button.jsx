import './Button.css';

function Button(propiedades) {
    return (<button 
    className= {propiedades.clase}
    type="button"
    onClick={propiedades.onClick}>
            { propiedades.titulo }
        </button>
    )
}

export default Button;