import React from 'react'
import './form.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
const initialState = {
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    nameError: '',
    emailError: '',
    passwordError: '',
    phoneNumberError: ''
}
export class Form extends React.Component {
    state = initialState;

  handleChange = (e) => {
      this.setState({
          [e.target.name] : e.target.value
      }) 
  }

  validate = () => {
    let nameError = ' ';
     let emailError='';
     let phoneNumberError = '';

     if (!this.state.phoneNumber) {
         phoneNumberError ='enter your number'
     }else if (this.state.phoneNumber.length < 10)  {
         phoneNumberError = 'incorrect phone number'
     }

     if (!this.state.name) {
         nameError = 'enter a your name'
     }else if (this.state.name.length < 5) {
         nameError='enter a valid name'
     }

if (!this.state.email.includes('@')) {
    emailError= 'email is not correct'
}

if (emailError || nameError || phoneNumberError) {
    this.setState({emailError, nameError, phoneNumberError});
    return false;
}
return true;
  }

  handleSubmited = (e) => {
      e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
        console.log(initialState)
    }

  }

    useEffect=(() => {
        Aos.init({ duration: 1000 })
    }, [])
    render() {


        return (
            <div data-aos='fade-up'  className='conatiner Form'>

               
                <form onSubmit={this.handleSubmited} >
                     <h2 className="lined text-uppercase text-center">CONTACT</h2>
                        <div className="row100">
                            <div className="col">
                              <div className="input-area">
                                <input type="text" required='require' name='name' value={this.state.name} onChange={this.handleChange} />
                                <span className='text'>Full name</span>
                            <span className='line'></span>
                            
                    </div>  
                            <div className="error">{this.state.nameError}</div>
                            </div>
                  
                        <div className="row100">
                            <div className="col">
                                <div className="input-area">
                                    <input type="email " required='require' name='email' value={this.state.email} onChange={this.handleChange}/>
                                    <span className='text '>Email</span>
                                    <span className='line'></span>                            
                                </div>
                                <div>{this.state.emailError}</div>
                            </div> 
                        </div>

                        <div className="row100">
                            <div className="col">
                                <div className="input-area">
                                    <input type="text " required='require' name='phoneNumber' value={this.state.phoneNumber}  onChange={this.handleChange}/>
                                    <span className='text '>Phone Number</span>
                                    <span className='line'></span>
                                   

                                </div>
                            </div> 
                            <div className="error">{this.state.phoneNumberError}</div>
                        </div>

                    </div>

                    <div className="row100 btn-3">
                        <div className="col ">
                            <button type='submit' onClick={this.handleSubmited } >SUBMIT</button>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}

export default Form


