import axios from 'axios';
import react, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SpeciesCard = (props) => {
    const { plant_image, plant_name, plant_scientific_name, species_id, water_schedule } = props.plant;
    return (
        <div>
            {plant_name}
        </div>
    )
}

export default SpeciesCard;
