import React from 'react'
import firebase from './firebase'
import './App.css';

class App extends React.Component {
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log("Recaptca varified")
      },
      defaultCountry: "IN"
    });
  }
  onSignInSubmit = (e) => {
    e.preventDefault()
    this.configureCaptcha()
    const phoneNumber = "+91" + this.state.mobile
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        alert('OTP has been Sent')
        // ...
      }).catch((error) => {
        // Error; SMS not sent
        // ...
        alert('Something went wrong')

      });
  }
  onSubmitOTP = (e) => {
    e.preventDefault()
    const code = this.state.otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      window.location.href = '/home'
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
      console.log(error)
      alert("Invalid OTP or Something went Wrong")
    });
  }
  render() {
    return (
      <div className='login-container'>
        <div className='text-center py-3'>
          <img className='logo' src={require('./images/logo.png')} />
        </div>
        <div class="form-container p-3 shadow-lg">
          <h2 class="text-center pt-4 " style={{ color: 'white', fontSize: '40px', fontWeight: 'bolder', lineHeight:'40px' }}>Welcome to the <br /> Ineuron Restro!</h2>
          <div className='pt-2'>
            <form onSubmit={this.onSignInSubmit}>
              <className id="sign-in-button" />
              <div className='d-flex justify-content-evenly py-3 align-items-center'>
                <input type="number" className='enter-number' name="mobile" placeholder="Mobile Number" required onChange={this.handleChange} />
                <button type="submit" className='btn-otp p-2'>Get Otp</button>
              </div>

            </form>

            <form onSubmit={this.onSubmitOTP}>
              <className id="otp-button" />
              <div className='d-flex justify-content-evenly py-3 align-items-center'>
                <input type="number" name="otp" className='enter-number' placeholder="OTP Number" required onChange={this.handleChange} />
                <button type="submit" className='btn-otp p-2'>Submit</button>
              </div>
            </form>
          </div>

        </div>

      </div>
    )
  }
}
export default App