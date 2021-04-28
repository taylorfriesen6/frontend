import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const initialFormValues = {
    plant_nickname: '',
    water_day: 0,
    notes: ''
};

const EditPlant = (plants) => {
    const [formValues,
         setFormValues] = useState(initialFormValues);

    const {plant} = plants;

    const history = useHistory();

    const changer = (e) => {
        setFormValues({...formValues,
             [e.target.name]: e.target.value});
    };

    const deleter =  () => {
        axios.delete('https://water-my-plants-tt14.herokuapp.com/user/api/userplants')
        .then(dundundun => {
            console.log('deletion success from EditPlant', dundundun);
            history.push('/collection');
        })
        .catch(err => {
            console.error('deletion error on EditPlant', err);
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const updatedPlant = {
            plant_nickname: formValues.plant_nickname,
            water_day: Number(formValues.water_day),
            notes: formValues.notes
        };
        axios.put
        ('https://water-my-plants-tt14.herokuapp.com/user/api/userplants',
         updatedPlant)
        .then(update => {
            console.log('update on EditPlant:', update);
            history.push('/collection');
        })
        .catch(err => {
            console.error('error on EditPlant', err);
        });
    };

    return (
        <div>
            <h1>You've traveled far.... waterer</h1>
            <div className='staticPlantValues'>
                {plant.plant_image}
            <br>{plant.plant_name}</br>
            <br>{plant.plant_nickname}</br>
            <br>{plant.water_day}</br>
            </div>
            <div className='dynamicPlantValues'>
                
                <form>

                    <label htmlFor='plant_nickname'><h3>NICKNAME</h3></label>
                    <input 
                    type = 'text'
                    value = {formValues.plant_nickname}
                    onChange = {changer}
                    name = 'plant_nickname'
                    placeholder = {plant.plant_nickname}>
                       </input>


                    <label htmlFot='water_day'><h3>Start Watering</h3></label>
                        <select
                         name="water_day"
                          id="water_day"
                           value={formValues.water_day}
                            onChange={changer}>
                            <option value={null}>Choose a day</option>
                            <option value={1}>Sunday</option>
                            <option value={2}>Monday</option>
                            <option value={3}>Tuesday</option>
                            <option value={4}>Wednesday</option>
                            <option value={5}>Thursday</option>
                            <option value={6}>Friday</option>
                            <option value={7}>Saturday</option>
                        </select>

                    <label htmlFor='notes'><h3>NOTES</h3></label>
                    <input 
                    type = 'text'
                    value = {formValues.notes}
                    onChange = {changer}
                    name = 'notes'
                    placeholder = {plant.notes}>
                       </input>
                    

                    <div className='EditButtons'>
                        <button onClick={onSubmit}>SAVE CHANGES
                        </button>
                        <button onClick={deleter}>DELTE FROM COLLECTION
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditPlant;