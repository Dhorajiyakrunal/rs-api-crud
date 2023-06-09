import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Add_Edit_Users = () => {

    const [user, setuser] = useState({})
    const navigate = useNavigate()
    const { id } = useParams()
    const getid = Number(id)
 
    useEffect(() => {
        getfilter()
    },[])

    const getfilter = async () => {
        const getuser = await axios.get(`${process.env.REACT_APP_JSON_API}/users`)
        const filter = getuser.data.find((i) => i.id === getid)
        setuser(filter)
    }

    const OnSubmitUser = async (e) => {
        e.preventDefault()
        if (getid) {
            const obj = {
                name : e.target.name.value,
                email : e.target.email.value,
                phone : e.target.phone.value,
            }
    
            await axios.patch(`${process.env.REACT_APP_JSON_API}/users/${getid}`,obj)
        }
        else {
            const obj = {
                name : e.target.name.value,
                email : e.target.email.value,
                phone : e.target.phone.value,
            }
    
            await axios.post(`${process.env.REACT_APP_JSON_API}/users`,obj)
        }
        
        navigate('/')
    }
    
  return (
    <>
        <form onSubmit={OnSubmitUser}>
            <table border={1}>
                <tr>
                    <td><input type='text' defaultValue={user?.name} name='name' placeholder='Enter Name' required /></td>
                </tr>
                <tr>
                    <td><td><input type='email' defaultValue={user?.email} name='email' placeholder='Enter Email' required /></td></td>
                </tr>
                <tr>
                    <td><td><input type='number' defaultValue={user?.phone} name='phone' placeholder='Enter Phone' required /></td></td>
                </tr>
                <tr>
                    <td><td><input type='submit' value='Submit' /></td></td>
                </tr>
            </table>
        </form>
    </>
  )
}

export default Add_Edit_Users
