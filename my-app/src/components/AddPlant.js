import react, { useState } from 'react';
import styled from 'styled-components';

//STYLING
const AddPlantContainer = styled.div`
    width: 275px;
    height: 100%;
    padding: 20px;
`

const initialFormValues = 
{
    plant_nickname: "",
    plant_location: "",
    water_day: null,
    notes: ""
};

const AddPlant = (props) => {
    const { species_id } = props;
    const [ formValues, setFormValues ] = useState({...initialFormValues, species_id: species_id});

    const changeHandler = (evt) => {
        setFormValues({...formValues, [evt.target.name]: evt.target.value})
    }

    return (
        <AddPlantContainer>
            <form>
                <label><h3>Nickname</h3></label>
                <input
                    type="text"
                    name="plant_nickname"
                    value={formValues.plant_nickname}
                    onChange={changeHandler}
                    placeholder="Plant Nickname">
                </input>
            </form>
        </AddPlantContainer>
    )
}

export default AddPlant;
