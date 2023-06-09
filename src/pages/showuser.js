import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Showuser = () => {

    const [userData, setuserData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getApiUser()
    },[userData])

    const getApiUser = async () => {
        const res = await axios.get(`${process.env.REACT_APP_JSON_API}/users`)
        setuserData(res.data)
    }

    const OnclickDelete = async (id) => {
        await axios.delete(`${process.env.REACT_APP_JSON_API}/users/${id}`)
    }
    
    const OnclickEdit = (id) => {
        navigate(`/editdata/${id}`)
    }
    
  return (
    <>
        <table border={1}>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
            </tr>
            {
                userData.map((i) => {
                    return (
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.name}</td>
                            <td>{i.email}</td>
                            <td>{i.phone}</td>
                            <td>
                                <button onClick={() => OnclickDelete(i.id)}>Delete</button>
                                <button onClick={() => OnclickEdit(i.id)}>Edit</button>
                            </td>
                        </tr>
                    )
                })
            }
        </table>
        <br />
        <Link to={'/add_edit'}>Add Data</Link>
    </>
  )
}

export default Showuser
