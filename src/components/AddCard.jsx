import React, { useState } from 'react'
import '../styles/addCardStyle.css'
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { db, storage } from '../firebase/db'

const AddCard = ({ onClose }) => {
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null)
    const [imageURL, setImageURL] = useState('')
    const [title, setTitle] = useState('')

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleImage = (e) => {
        const file = e.target.files[0]
        setImage(file)
    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleForm = async (e) => {
        e.preventDefault()
        if (image) {
            const storageRef = ref(storage, `productImages/${image.name}`)
            await uploadBytes(storageRef, image)
            const downloadURL = await getDownloadURL(storageRef)
            setImageURL(downloadURL)

            const productData = {
                description,
                imageURL: downloadURL,
                title
            } 
            
            await addDoc(collection(db, 'cards'), productData)
        }

        setDescription('')
        setImage(null)
        setImageURL('')
        setTitle('')

        onClose()
    }
  return (
    <section className='modal-container'>
        <section className='modal'>
            <h2>Add Course</h2>
            <form onSubmit={handleForm}>
                <input type="text" id='title' placeholder='Title' className='info' value={title} onChange={handleTitle} required />

                <textarea id='description' placeholder='Description' className='info' value={description} onChange={handleDescription} required />

                <div className='modal-upload'>
                    <input type="file" id="image" accept='image/*' className='addImage' onChange={handleImage} required />
                    <label htmlFor="image">Upload Image</label>
                </div>

                <div className="modal-buttons">
                    <button type='submit'>Add Product</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </form>
        </section>
    </section>
  )
}

export default AddCard