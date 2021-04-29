import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../auth/axiosWithAuth'
import { useHistory } from 'react-router-dom'
import NoPlants from './NoPlants'
import IndividualPlant from './IndividualPlant'
import styled from 'styled-components'
import '../App.css'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 80%;
    height: 550px;
    margin: auto;
    justify-content: space-between;
    padding: 40px;

    & h3 {
        font-family: PT Serif;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        color: green;
    }
    & img{
        object-fit:cover;
        width:100%;
        height: auto;
    }

`

const plants  = [
    {
        user_plant_id: 1,
        plant_nickname: "My favorite plant",
        plant_location: "front door",
        water_day: 2,
        notes: "Sally gave me this plant. I love it!",
        species_id: 2,
        plant_name: "Love fern",
        plant_scientific_name: "Fernius Lovernius",
        water_schedule: "Twice Per Week",
        plant_image: "http://url.com/image.jpg"
    },

    {
        user_plant_id: 2,
        plant_nickname: "My favorite plant",
        plant_location: "front door",
        water_day: 2,
        notes: "Sally gave me this plant. I love it!",
        species_id: 3,
        plant_name: "Love fern",
        plant_scientific_name: "Fernius Lovernius",
        water_schedule: "Twice Per Week",
        plant_image: "http://url.com/image.jpg"
    },

    {
        user_plant_id: 2,
        plant_nickname: "My favorite plant",
        plant_location: "front door",
        water_day: 2,
        notes: "Sally gave me this plant. I love it!",
        species_id: 3,
        plant_name: "Love fern",
        plant_scientific_name: "Fernius Lovernius",
        water_schedule: "Twice Per Week",
        plant_image: "https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_fiddle-leaf-fig_charcoal-alt.jpg?ver=279576"
    },

    {
        user_plant_id: 2,
        plant_nickname: "My favorite plant",
        plant_location: "front door",
        water_day: 2,
        notes: "Sally gave me this plant. I love it!",
        species_id: 3,
        plant_name: "Love fern",
        plant_scientific_name: "Fernius Lovernius",
        water_schedule: "Twice Per Week",
        plant_image: "https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_fiddle-leaf-fig_charcoal-alt.jpg?ver=279576"
    },

    {
        user_plant_id: 2,
        plant_nickname: "My favorite plant",
        plant_location: "front door",
        water_day: 2,
        notes: "Sally gave me this plant. I love it!",
        species_id: 3,
        plant_name: "Love fern",
        plant_scientific_name: "Fernius Lovernius",
        water_schedule: "Twice Per Week",
        plant_image: "http://url.com/image.jpg"
    },

    {
        user_plant_id: 2,
        plant_nickname: "My favorite plant",
        plant_location: "front door",
        water_day: 2,
        notes: "Sally gave me this plant. I love it!",
        species_id: 3,
        plant_name: "Love fern",
        plant_scientific_name: "Fernius Lovernius",
        water_schedule: "Twice Per Week",
        plant_image: "http://url.com/image.jpg"
    },

    {
        user_plant_id: 2,
        plant_nickname: "My favorite plant",
        plant_location: "front door",
        water_day: 2,
        notes: "Sally gave me this plant. I love it!",
        species_id: 3,
        plant_name: "Love fern",
        plant_scientific_name: "Fernius Lovernius",
        water_schedule: "Twice Per Week",
        plant_image: "http://url.com/image.jpg"
    },

    {
        user_plant_id: 2,
        plant_nickname: "My favorite plant",
        plant_location: "front door",
        water_day: 2,
        notes: "Sally gave me this plant. I love it!",
        species_id: 3,
        plant_name: "Love fern",
        plant_scientific_name: "Fernius Lovernius",
        water_schedule: "Twice Per Week",
        plant_image: "http://url.com/image.jpg"
    },

    {
        user_plant_id: 2,
        plant_nickname: "My favorite plant",
        plant_location: "front door",
        water_day: 2,
        notes: "Sally gave me this plant. I love it!",
        species_id: 3,
        plant_name: "Love fern",
        plant_scientific_name: "Fernius Lovernius",
        water_schedule: "Twice Per Week",
        plant_image: "http://url.com/image.jpg"
    },
]

const PlantCollection = () => {
    const { push } = useHistory()

    const [plants, setPlants] = useState([])
    const [takeMeBack, setTakeMeBack] = useState(false)

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
    }, [takeMeBack])
    return(
        <div className='plants-container'>
            {plants.length === 0 && <NoPlants />}
            {plants.length !== 0 && <><h2>My Plants</h2> <button onClick={() => {push('/addplant')}}>Add Plant</button> </>}
            <Container className='card'>
                {plants && plants.map(plant => <IndividualPlant key={plant.user_plant_id} plant={plant} setPlants={setPlants} setTakeMeBack={setTakeMeBack} takeMeBack={takeMeBack}/>)}
            </Container>
        </div>
    )
}
export default PlantCollection
