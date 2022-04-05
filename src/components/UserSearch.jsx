import {useEffect, useState} from "react";

export const UserSearch = ({onSubmit, searchValue, setSearchTerm, initialSearchTerm}) => {

    let [tempSearch, setTempSearch] = useState()

    useEffect(() => {
        setTempSearch(searchValue)
    }, [searchValue])

    return (
        <div className={'search box'}  >
            <h2>GitHub user search</h2>
            <div>
                <input placeholder={'Username'} value={tempSearch} onChange={e => setTempSearch(e.currentTarget.value)}/>
                <button onClick={() => {onSubmit(tempSearch)}}>Search</button>
                <button onClick={() => setSearchTerm(initialSearchTerm)}>Reset</button>
            </div>

        </div>
    )
}