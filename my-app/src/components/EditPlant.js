import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const initialFormValues = {
    plant_nickname: '',
    water_schedule: 0,
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
            water_schedule: formValues.water_schedule,
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
            <br>{plant.water_schedule}</br>
            </div>
            <div className='dynamicPlantValues'>
                
                <form>

                    <label htmlFor='plant_nickname'>NICKNAME
                    <input 
                    type = 'text'
                    value = {formValues.plant_nickname}
                    onChange = {changer}
                    name = 'plant_nickname'
                    placeholder = {plant.plant_nickname}>
                       </input>
                    </label>


                    <div className='dayCheckbox' > START WATERING
                        <input 
                        type="radio"
                         id="monday"
                          name="day"
                           value={1}
                            onChange={changer}
                             checked={formValues.water_schedule === 1}
                             />
                            <label htmlFor="monday">Monday</label><br/>
                    </div>
                    <div className='dayCheckbox' >
                        <input
                         type="radio"
                          id="tuesday"
                           name="day"
                            value={2}
                             onChange={changer}
                              checked={formValues.water_schedule === 2}
                              />
                            <label htmlFor="tuesday">Tuesday</label>
                    </div>
                    <div className='dayCheckbox' >
                        <input
                         type="radio"
                          id="Wednesday"
                           name="day"
                            value={3}
                             onChange={changer}
                              checked={formValues.water_schedule === 3}
                              />
                            <label htmlFor="Wednesday">Wednesday</label>
                    </div>
                    <div className='dayCheckbox' >
                        <input
                         type="radio"
                          id="Thursday"
                           name="day"
                            value={4}
                             onChange={changer} checked={formValues.water_schedule === 4}
                             />
                            <label htmlFor="Thursday">Thursday</label>
                    </div>
                    <div className='dayCheckbox' >
                        <input
                         type="radio"
                          id="Friday"
                           name="day"
                            value={5}
                             onChange={changer}
                              checked={formValues.water_schedule === 5}
                              />
                            <label htmlFor="Friday">Friday</label>
                    </div>
                    <div className='dayCheckbox' >
                        <input
                         type="radio"
                          id="Saturday"
                           name="day"
                            value={6}
                             onChange={changer}
                              checked={formValues.water_schedule === 6}
                              />
                            <label htmlFor="Saturday">Saturday</label>
                    </div>
                    <div className='dayCheckbox' >
                        <input
                         type="radio"
                          id="Sunday"
                           name="day"
                            value={7}
                             onChange={changer}
                              checked={formValues.water_schedule === 7}
                             />
                            <label htmlFor="Sunday">Sunday</label>
                    </div>
                    <label htmlFor='notes'>NOTES
                    <input 
                    type = 'text'
                    value = {formValues.notes}
                    onChange = {changer}
                    name = 'notes'
                    placeholder = {plant.notes}>
                       </input>
                    </label>

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