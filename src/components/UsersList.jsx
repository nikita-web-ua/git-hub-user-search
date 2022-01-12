import {useEffect, useState} from "react";
import axios from "axios";

export const UsersList = ({selectedUser, onUserSelect, searchTerm}) => {

    let [users, setUsers] = useState([])

    useEffect( () => {
        console.log('SYNC USERS')
        axios
            .get(`https://api.github.com/search/users?q=${searchTerm}`)
            .then((res) => {
                setUsers(res.data.items)
            })
    }, [searchTerm])

    return (
        <div className={'userList box'}>
            <ul>
                {users
                    .map(u => <li
                        key={u.id}
                        className={selectedUser === u ? 'selected' : ''}
                        onClick={() => {
                            onUserSelect(u)
                        }}
                        style={{cursor: 'pointer'}}
                    >
                        {u.login}
                    </li>)
                }
            </ul>
        </div>
    )
}