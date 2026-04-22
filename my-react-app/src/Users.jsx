import React, { useEffect,useState } from 'react'
import axios from 'axios'

export default function Users() {
    const[users,setUsers] = useState([])
    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            console.log(res.data);
            setUsers(res.data)
        })
    },[])
  return (
    <div>
        {/* {JSON.stringify(users)} */}
        <h1>I Am From Users</h1>
        <table border={1}>
            <thead>
            
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
            
            </thead>
            <tbody>{
                users.map(u=>(
                    <tr>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.username}</td>
                <td>{u.email}</td>

            </tr>

                ))}
                </tbody>
            
        </table>
        </div>
  )
}
