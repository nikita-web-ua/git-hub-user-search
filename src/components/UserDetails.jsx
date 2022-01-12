import {useEffect, useState} from "react";
import axios from "axios";
import {Timer} from "./Timer";

export const UserDetails = ({selectedUser, setSelectedUser}) => {

    let [userDetails, setUserDetails] = useState(null)
    let [startSeconds, setStartSeconds] = useState(5)

    useEffect( () => {
        console.log('SYNC USER DETAILS')
        if (!!selectedUser) {
            axios
                .get(`https://api.github.com/users/${selectedUser.login}`)
                .then((res) => {
                    setStartSeconds(5)
                    setUserDetails(res.data)
                })
        }
    }, [selectedUser])

    useEffect(() => {
        if (startSeconds < 1){
            setUserDetails(null)
            setSelectedUser(null)
        }
    }, [startSeconds])

    return (
        <div className={'detail'}>
            {userDetails !== null &&
            <div className={'box'} style={{width: 'auto'}}>
                <Timer setStartSeconds={setStartSeconds} startSeconds={startSeconds} timerId={userDetails.id}/>
                <img src={userDetails.avatar_url} style={{width: '200px'}}/>
                <h3>{userDetails.login}</h3>
                <hr/>
                <div>
                    <a href={userDetails.html_url} target={'_blank'}>GitHub</a>
                </div>
            </div>
            }
        </div>
    )
}