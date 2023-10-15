import './style.css';

const FlexButtons = ({children, className}) => {
    return (
        <div className ={`flex align-center flex-button ${className}`}>
            {children}
        </div>
    )
}

export default FlexButtons;