import React, {useState} from 'react'
import FormField from '../styles/FormField'
import Button from '../styles/Button'
import Error from '../styles/Error'

function EditItem({id, name, description, price, onUpdate, activateEdit}) {

    const [newName, setNewName] = useState(name)
    const [newDescription, setNewDescription] = useState(description)
    const [newPrice, setNewPrice] = useState(price)
    const [errors, setErrors] = useState([])

    function handleEditItem(e){
        e.preventDefault()
        fetch(`/items/${id}`,{
          method: "PATCH",
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify({name: newName, description: newDescription, price: newPrice})
        }).then((r)=> {
          if (r.ok) {
            r.json()
            .then(updatedItem => onUpdate(updatedItem))
          } else {
            r.json().then((error)=> setErrors(error.errors))
          }
        })
        activateEdit()
      }
      
  return (
    <div className='edit-container'>
      
      <form onSubmit={handleEditItem} className='edit-form'>
        <FormField>
          <h4>Edit item</h4>
          <input type='text' value={newName} onChange={e=> setNewName(e.target.value)}/><br/>
          <textarea name='text' className='edit-box' value={newDescription} onChange={e => setNewDescription(e.target.value)}/>
          <input type='number' value={newPrice} onChange={e=> setNewPrice(e.target.value)}/><br/><br/>
          <Button>Save</Button><Button onClick={activateEdit} style={{backgroundColor: "orange", color: "white"}}>Cancel</Button>
          <FormField>
            {errors.map( error => (
              <Error key={error}>{error}</Error>
            ))}
          </FormField>
        </FormField>
      </form>
    </div>
  )
}

export default EditItem