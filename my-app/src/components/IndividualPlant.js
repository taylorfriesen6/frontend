import React, {useState} from 'react'
import '../App.css'
import styled from 'styled-components'
import EditPlant from './EditPlant'

const Card = styled.div `
width: 270px;
height: 550px;
box-shadow: 0px 30px 60px -40px rgba(130, 70, 0, 0.5);

`;
const IndividualPlant = (props) => {
    const {plant, reveal} = props


    return (
        <Card>
            <div className='imgContainer'>
                <img src={plant.plant_image} alt='plant'/>
            </div>

            <div className='cardInfo'>
                <h2>{plant.plant_nickname}</h2>
                <p>{plant.plant_scientific_name}</p>

                <h3>Watering Schedule</h3>
                <p>{plant.water_schedule} {plant.water_day}</p>

                <h3>Location</h3>
                <p>{plant.plant_location}</p>

                <h3>Notes</h3>
                <p>{plant.notes}</p>
                <button onClick ={reveal}> Edit this verdure</button>
            </div>
        </Card>
    )
}
export default IndividualPlant