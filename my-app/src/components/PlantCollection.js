import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import NoPlants from './NoPlants'
import IndividualPlant from './IndividualPlant'
import EditPlant from './EditPlant'
import styled from 'styled-components'
import '../App.css'
import { axiosWithAuth } from '../auth/axiosWithAuth'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 1440px;
    height: 550px;
    margin: auto;
    justify-content: center;

    & h3 {
        font-family: PT Serif;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        color: green;
    }

`

// // dummyUserPlantData
// const plants  = [
//     {
//         user_plant_id: 1,
//         plant_nickname: "My favorite plant",
//         plant_location: "front door",
//         water_day: 2,
//         notes: "Sally gave me this plant. I love it!",
//         species_id: 2,
//         plant_name: "Love fern",
//         plant_scientific_name: "Fernius Lovernius",
//         water_schedule: "Twice Per Week",
//         plant_image: "http://url.com/image.jpg"
//     },

//     {
//         user_plant_id: 2,
//         plant_nickname: "My favorite plant",
//         plant_location: "front door",
//         water_day: 2,
//         notes: "Sally gave me this plant. I love it!",
//         species_id: 3,
//         plant_name: "Love fern",
//         plant_scientific_name: "Fernius Lovernius",
//         water_schedule: "Twice Per Week",
//         plant_image: "http://url.com/image.jpg"
//     },

//     {
//         user_plant_id: 2,
//         plant_nickname: "My favorite plant",
//         plant_location: "front door",
//         water_day: 2,
//         notes: "Sally gave me this plant. I love it!",
//         species_id: 3,
//         plant_name: "Love fern",
//         plant_scientific_name: "Fernius Lovernius",
//         water_schedule: "Twice Per Week",
//         plant_image: "http://url.com/image.jpg"
//     },

//     {
//         user_plant_id: 2,
//         plant_nickname: "My favorite plant",
//         plant_location: "front door",
//         water_day: 2,
//         notes: "Sally gave me this plant. I love it!",
//         species_id: 3,
//         plant_name: "Love fern",
//         plant_scientific_name: "Fernius Lovernius",
//         water_schedule: "Twice Per Week",
//         plant_image: "http://url.com/image.jpg"
//     },

//     {
//         user_plant_id: 2,
//         plant_nickname: "My favorite plant",
//         plant_location: "front door",
//         water_day: 2,
//         notes: "Sally gave me this plant. I love it!",
//         species_id: 3,
//         plant_name: "Love fern",
//         plant_scientific_name: "Fernius Lovernius",
//         water_schedule: "Twice Per Week",
//         plant_image: "http://url.com/image.jpg"
//     },

//     {
//         user_plant_id: 2,
//         plant_nickname: "My favorite plant",
//         plant_location: "front door",
//         water_day: 2,
//         notes: "Sally gave me this plant. I love it!",
//         species_id: 3,
//         plant_name: "Love fern",
//         plant_scientific_name: "Fernius Lovernius",
//         water_schedule: "Twice Per Week",
//         plant_image: "http://url.com/image.jpg"
//     },

//     {
//         user_plant_id: 2,
//         plant_nickname: "My favorite plant",
//         plant_location: "front door",
//         water_day: 2,
//         notes: "Sally gave me this plant. I love it!",
//         species_id: 3,
//         plant_name: "Love fern",
//         plant_scientific_name: "Fernius Lovernius",
//         water_schedule: "Twice Per Week",
//         plant_image: "http://url.com/image.jpg"
//     },

//     {
//         user_plant_id: 2,
//         plant_nickname: "My favorite plant",
//         plant_location: "front door",
//         water_day: 2,
//         notes: "Sally gave me this plant. I love it!",
//         species_id: 3,
//         plant_name: "Love fern",
//         plant_scientific_name: "Fernius Lovernius",
//         water_schedule: "Twice Per Week",
//         plant_image: "http://url.com/image.jpg"
//     },

//     {
//         user_plant_id: 2,
//         plant_nickname: "My favorite plant",
//         plant_location: "front door",
//         water_day: 2,
//         notes: "Sally gave me this plant. I love it!",
//         species_id: 3,
//         plant_name: "Love fern",
//         plant_scientific_name: "Fernius Lovernius",
//         water_schedule: "Twice Per Week",
//         plant_image: "http://url.com/image.jpg"
//     },
// ]

const PlantCollection = () => {
    const [edit, setEdit] = useState(false)
    const { push } = useHistory()

    const abracadabra = () => {
        setEdit(!edit);
    };

    const [plants, setPlants] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get(`/api/userplants`)
            .then((res) => {
                console.log("res", res)
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

            <Container className='card'>
                {plants && plants.map(plant => <IndividualPlant key={plant.user_plant_id} plant={plant} reveal={abracadabra}/>)}
            </Container>
            {edit && <EditPlant plant={plants} ></EditPlant>}
        </div>
    )
}
export default PlantCollection