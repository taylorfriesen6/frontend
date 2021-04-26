import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import NoPlants from './NoPlants'
import IndividualPlant from './IndividualPlant'

const PlantCollection = (props) => {

    const { push } = useHistory()
    const [plants, setPlants] = useState([])

    useEffect(() => {
        axios
        .get(`URL`)
        .then((res) => {
            setPlants(res.data)
        })
        .catch((err) => {
            console.log(err)
        })

    }, [])

    return(
        <div className='plants-container'>
            {plants.length === 0 && <NoPlants />}
            {plants.length !== 0 && <><h2>My Plants</h2> <button onClick={() => {push('/plants/new')}}>Add Plant</button> </>}

            {plants.map(plant => <IndividualPlant key={plant.user_plant_id} plant={plant}/>)}
        </div>
    )
}
export default PlantCollection