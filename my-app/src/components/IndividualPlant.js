import React from 'react'

const IndividualPlant = (props) => {
    const {plant} = props

    return (
        <div>
            <div className='imgContainer'>
                <img src={plant.plant_image} alt='plant'/>
            </div>

            <div className='cardInfo'>
                <h2>{plant.plant_nickname}</h2>
                <p>{plant.plant.scientific_name}</p>

                <p>Watering Schedule</p>
                <p>{plant.water_schedule} {plant.water_day}</p>

                <p>Location</p>
                <p>{plant.plant_location}</p>

                <p>Notes</p>
                <p>{plant.notes}</p>
            </div>
        </div>
    )
}
export default IndividualPlant