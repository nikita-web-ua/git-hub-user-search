import {useEffect, useState} from "react";

export const Timer = ({setStartSeconds, startSeconds, timerId}) => {

   let [seconds, setSeconds] = useState(startSeconds)

    useEffect(() => {
        setSeconds(startSeconds)
    },[startSeconds])

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('TICK')
            setSeconds((prevSeconds) => prevSeconds - 1)
        }, 1000)

        return () => {clearInterval(intervalId)}
    }, [timerId])

    useEffect(() => {
        setStartSeconds(seconds)
    }, [seconds])

    return (
        <div>
           Time left: {seconds}
        </div>
    )
}