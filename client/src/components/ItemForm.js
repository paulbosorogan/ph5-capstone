import React, {useState} from 'react'
import FormField from '../styles/FormField'
import Button from '../styles/Button'
import Error from '../styles/Error'
import { useNavigate } from 'react-router-dom'

function ItemForm({addNewItem}) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    function handleItemSubmit(e){
        e.preventDefault()
        setIsLoading(true)
        fetch('/items', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name, description, category, price})
        }).then((response)=> {
            setIsLoading(false)
            if (response.ok) {
                response.json().then(newitem => addNewItem(newitem))
            } else {
                response.json().then((error)=> setErrors(error.errors))
            }
        }).then(()=> navigate('/menu'))
    }


  return (
    <div className='new-item-page'>
    <div className='new-item-container'>
        <form className='new-item-form' onSubmit={handleItemSubmit}>
            <label htmlFor='name'>Item name</label>
            <input
            type='text'
            id='item-name'
            autoComplete='off'
            value={name}
            onChange={(e)=> setName(e.target.value)}
            />
            <label htmlFor='name'>Item description</label>
            <input
            type='text'
            id='item-description'
            autoComplete='off'
            value={description}
            onChange={(e)=> setDescription(e.target.value)}
            />
            <label htmlFor='category'>Item category</label>
            <select
            value={category}
            autoComplete='off'
            onChange={(e)=> setCategory(e.target.value)}>
                <option value='bowl'>Poke bowl</option>
                <option value='ramen'>Ramen Noodle</option>
                <option value='soup'>Ramen Soup</option>
                <option value='side'>Side</option>
                <option value='drink'>Drink</option>
            </select>
            <label htmlFor='name'>Item price</label>
            <input
            type='text'
            id='item-price'
            autoComplete='off'
            value={price}
            onChange={(e)=> setPrice(e.target.value)}
            />
            
            <br></br>
            <Button variant="fill" color="primary" type="submit">
                {isLoading? "Saving.." : "Save"}
            </Button>
            <FormField>
                {errors.map((error)=> (
                    <Error key={error}>{error}</Error>
                ))}
            </FormField>
        </form>

    </div>
    </div>
  )
}

export default ItemForm