import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

//Component Import
import SpeciesCard from './SpeciesCard';

//Styling
const PlantCardContainer = styled.div`
    padding: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const SpeciesList = () => {
    const [ species, setSpecies ] = useState([]);
    const [ loading, setIsLoading ] = useState(true);

    useEffect(() => {
        axios.get("https://water-my-plants-tt14.herokuapp.com/api/species")
            .then(res => {
                setSpecies(res.data);
                setIsLoading(false);
            })
            .catch(err => {
                alert(err.message);
            })
    }, []);

    return (
        <div>
            <div>
                <h2>Add A Plant</h2>
                <p>Cancel X</p>
            </div>
            <PlantCardContainer>
                {
                    loading
                    ? "Loading Plant Species..." 
                    : species.map(plant => {
                        return (
                            <SpeciesCard key={plant.species_id} plant={plant}/>
                        )
                    })
                }
            </PlantCardContainer>
        </div>
    )
};

export default SpeciesList;