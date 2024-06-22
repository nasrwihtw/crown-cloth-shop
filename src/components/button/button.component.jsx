import './button.styles.scss'

/**
 * 
 *  default
 *  inverted
 *  google in
 */
const button_type_class = {
    inverted: 'inverted',
    google: 'google-sign-in'
}


const Button = ({children, buttonType, ...othersprops}) => {
    return ( 
        <button 
            className={`button-container 
            ${button_type_class[buttonType]}`} 
            {...othersprops}>
            {children} 
        </button>
     );
}
 
export default Button;