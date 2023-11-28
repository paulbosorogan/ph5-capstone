import React, {useState} from 'react'
import Error from '../styles/Error';
import FormField from '../styles/FormField';
import Button from '../styles/Button';

function SignUpForm({setUser}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true)
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password, email, address, phone,
         password_confirmation : passwordConfirmation }),
    }).then((res) => {
      setIsLoading(false);
      if (res.ok) {
        res.json().then((user) => setUser(user));
      } else {
        res.json().then((error)=> setErrors(error.errors))
      }
    });
  }
  
  return (
    <div className='sign-up-container'>
    <form onSubmit={handleSubmit} className='sign-up-form'>
      
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          autoComplete="off"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label htmlFor="email">Email address</label>
        <input
          type="text"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="phone">Phone number</label>
        <input
          type="tel"
          id="phone"
          autoComplete="off"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password">Password Confirmation</label>
        <input 
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        /> 
        <br></br>
       <Button variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Submit"}
        </Button>
          <FormField>
          {errors.map((err)=> (
            <Error key={err}>{err}</Error>
          ))}
          </FormField>
    </form>
    </div>
  )
}

export default SignUpForm