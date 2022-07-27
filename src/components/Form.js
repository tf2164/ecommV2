import React from 'react'
import './pages.css'

function Form() {
   return(
    <div className="container">
  <h1>Contact us</h1>

 <form className="form">

    <div className="name">

       <label for="firstName">First name</label>
       <input
            type="text"
            name="firstName"
            className="firstName"
            tabIndex="1"
       />
       <label for="lastName">Last name</label>
       <input
            type="text"
            name="lastName"
            className="lastName"
            tabIndex="2"
       />
       <label for="email">Email</label>
<input
     type="email"
     name="email"
     id="email"
     className="email"
     placeholder="example@corp.com"
     tabIndex="3"
/>
<label for="message">Message</label>

<textarea
  placeholder="Start typing..."
  className="message"
  name="message"
/>
<button type="submit" className="send">Send</button>




    </div>
 </form>
</div>
 )
}
const handleSubmit = (event) => {
    event.preventDefault()

    const data = {
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          email: emailRef.current.value,
          message: messageRef.current.value
          }
    alert("tadaaa!: \n" + JSON.stringify(data) + "Your data 😎")
}
export default Form
