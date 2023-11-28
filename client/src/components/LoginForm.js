import React, {useState} from 'react'
import Error from '../styles/Error';
import FormField from '../styles/FormField';
import Button from '../styles/Button';


function LoginForm({setUser}){
const [name, setName] = useState('')
const [password, setPassword] = useState('')
const [errors, setErrors] = useState([])
const [isLoading, setIsLoading] = useState(false)

function handleSubmit(e){
    e.preventDefault();
    setIsLoading(true)
    fetch('/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name, password})
    }).then((response)=> {
        setIsLoading(false)
        if (response.ok) {
            response.json().then((user)=> setUser(user))
        } else {
            response.json().then((error)=> setErrors(error.errors))
        }
    })
}

return (
    <div className='log-in-container'>
        <form className='log-in-form' onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input
            type='text'
            id='name'
            autoComplete='off'
            value={name}
            onChange={(e)=> setName(e.target.value)}
            />

            <label htmlFor='password'>Password</label>
            <input
            type="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <br></br>
            <Button variant="fill" color="primary" type="submit">
                {isLoading? "Loading.." : "Login"}
            </Button>
            <FormField>
                {errors.map((error)=> (
                    <Error key={error}>{error}</Error>
                ))}
            </FormField>
        </form>

    </div>
)
}

export default LoginForm;
