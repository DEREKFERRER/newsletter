import iconSuccess from '../assets/images/icon-success.svg'
import './Subscribed.css'
const Subscribed = ({onRouteChange, email}) => {

    const onSubmit = () => {
        onRouteChange("SignupForm")
    }
    return (
        <>
            <div className='container__alert'>
            <div className='container__alert--text'>
            {/* <!-- Success message start --> */}
            <img className='img__success' src={iconSuccess} alt="" />
            <h1>Thanks for subscribing!</h1>
            <p>A confirmation email has been sent to <span>{email}</span>. 
            Please open it and click the button inside to confirm your subscription.</p>
            <button 
            className='alert__btn'
            type='submit'
            onClick={onSubmit}> 
            Dismiss message </button>
            </div>
            {/* <!-- Success message end --> */}
            </div>
        </>
    )
}

export default Subscribed;