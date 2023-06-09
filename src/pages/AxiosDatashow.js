import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosDatashow = () => {
    
    const [user, setuser] = useState([])

    useEffect(() => {
        getUsers()
    },[])

    const getUsers = async () => {
        const respone = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        setuser(respone.data)
    }
    
  return (
    <>
        <h1>Axiox data</h1>
        <table border={1}>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>City</td>
                <td>Phone</td>
                <td>Website</td>
                <td>Compamyname</td>
            </tr>
            {
                user.map((i) => {
                    return (
                        <tr>
                            <td>{i.name}</td>
                            <td>{i.email}</td>
                            <td>{i.address.city}</td>
                            <td>{i.phone}</td>
                            <td>{i.website}</td>
                            <td>{i.company.name}</td>
                        </tr>
                    )
                })
            }
        </table>
    </>
  )
}

export default AxiosDatashow
