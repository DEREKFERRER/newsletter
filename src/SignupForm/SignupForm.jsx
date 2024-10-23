import SignupMobile from '../assets/images/illustration-sign-up-mobile.svg';
import SignupDesktop from '../assets/images/illustration-sign-up-desktop.svg'
import './SignupForm.css'

const SignupForm = ({onRouteChange, email, emailInput, onSubmit, isError}) => {
  

    return (
        <>
            <div className="desktop__container">
            <div className='desktop__style'>
                  {/* <!-- Sign-up form start --> */}
            <img className='img__mobile' src={SignupMobile} alt="" />
                <div className='container'>
                <div className="container__text">
                    <h1> Stay updated! </h1>
                        <p> Join 60,000+ product managers receiving monthly updates on: </p>
                        <ul>
                            <li> Product discovery and building what matters </li>
                            <li> Measuring to ensure updates are a success </li>
                            <li> And much more! </li>
                        </ul>
                      
                        <form  onSubmit={onSubmit}>
                            <div className='email__error'>
                                <label> Email address </label>
                                {!isError ? <p style={{  "font-size": ".6rem", "color": "var(--tomato)" }}>Enter a valid email address</p> : null}
                            </div>
                                <input 
                                className='email__input' 
                                type="email"
                                value={email}
                                name='email__input' 
                                onChange={emailInput}
                                placeholder="email@company.com"
                                style={{
                                    borderColor: !isError ? 'red' : 'black',
                                    backgroundColor: !isError ? "hsl(5, 100%, 95%)" : null
                                }}
                                />
                            <button 
                            type="submit">
                            Subscribe to monthly newsletter </button>
                            </form>
                        </div>
                </div>
            <img className='img__desktop' src={SignupDesktop} alt="" />
                 {/* <!-- Sign-up form end --> */}
            </div>
            </div>
        </>
    )
}

export default SignupForm;