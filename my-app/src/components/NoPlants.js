import React from 'react'
import {useHistory} from 'react-router-dom'

const NoPlants = () => {
    const {push} = useHistory()

    return(
        <div>
            <h1>Looks like you don't have any plants</h1>
            <button onClick={() => {push('/addplant')}}>Add a Plant</button>
        </div>
    )
}
export default NoPlants
