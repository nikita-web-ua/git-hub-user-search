import {useEffect, useState} from "react";
import {UserDetails} from "./UserDetails";
import {UsersList} from "./UsersList";
import {UserSearch} from "./UserSearch";

export const Users = (props) => {

    const initialSearchTerm = 'github'
    let [selectedUser, setSelectedUser] = useState(null)

    let [searchTerm, setSearchTerm] = useState(initialSearchTerm)

    useEffect(() => {
        console.log('SYNC TAB TITLE')
        if (selectedUser) {
            document.title = selectedUser.login
        } else {
            document.title = 'React App'
        }
    }, [selectedUser])

    return (
        <div className={'grid-container'}>
                <UserSearch onSubmit={setSearchTerm} searchValue={searchTerm} setSearchTerm={setSearchTerm}
                            initialSearchTerm={initialSearchTerm}/>
                <UsersList searchTerm={searchTerm} selectedUser={selectedUser} onUserSelect={setSelectedUser}/>
            <UserDetails selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
        </div>
    )
}