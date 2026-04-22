import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function GithubUsers() {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get("https://api.github.com/users")
        .then(res=>{
            console.log(res.data)
            setUsers(res.data)
        }
        )
    },[])

  return (
    <div>GithubUsers
        <table border={1}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>login</th>
                    <th>avatar_url</th>
                </tr>
                </thead>
                <tbody>{
                    users.map(u=>(
                        <tr>
                        <td>{u.id}</td>
                        <td>{u.login}</td>
                        <td>
  <img src={u.avatar_url}  width="50" />
</td>
                        </tr>
                    ))
                }
                </tbody>
            
        </table>

    </div>
  )
}
