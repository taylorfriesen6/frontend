import axios from 'axios';
import react, { useEffect, useState } from 'react';
import styled from 'styled-components';

//STYLING
const CardContainer = styled.div`
    width: 270px;
    height: 411px;
`
const PlantImage = styled.img`
    width: 270px;
    height: 270px;
    object-fit: cover;
`
const PlantName = styled.p`
    font-size: 18px;
    font-family: serif; //TODO: change to PT Serif
    font-weight: bold;
    color: 224229;
`
const PlantSpecies = styled.p`
    font-size: 13px;
    font-family: Arial, Helvetica, sans-serif; //TODO: change to Open Sans
    font-weight: 600;
    font-style: italic;
    color: #BCB6A6;
`
const SpeciesUnderline = styled.div`
    border-top: 3px solid #CBAD91;
`

const SpeciesCard = (props) => {
    const { plant_image, plant_name, plant_scientific_name, species_id, water_schedule } = props.plant;
    return (
        <CardContainer>
            <PlantImage src={plant_image} alt={plant_name} />
            <div>
                <PlantName>{plant_name}</PlantName>
                <PlantSpecies>{plant_scientific_name}</PlantSpecies>
                <SpeciesUnderline/>
                <h3>Watering Schedule</h3>
            </div>
        </CardContainer>
    )
}

export default SpeciesCard;
