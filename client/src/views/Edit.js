import React, {useState, useEffect} from 'react'
import EditField from '../components/editfield'
import {navigate, Link} from '@reach/router'
import axios from 'axios'

export default props =>{
    const { id } = props;
    const [pet, setPet] = useState({});
    const [loaded, setLoaded] = useState(false);
    useEffect (() => {
        axios.get('http://localhost:8000/api/users/' + id)
            .then(res => {
                setPet(res.data.user);
                setLoaded(true);
                console.log(pet)
            })
    }, [])
    const updatePet = p => {
        axios.put('http://localhost:8000/api/users/update/' + id, p)
            .then(res =>{ 
                navigate("/")
            });
    }
    
    return(
        <div>
            <h3>Edit {pet.name}</h3>
            <p className="rightlinks"><Link to="/">back to home</Link></p>
            {loaded && (
                <EditField 
                onSubmitProp={updatePet}
                initialName={pet.name}
                initialType={pet.type}
                initialDescription={pet.description}
                initialSkill1={pet.skill1}
                initialSkill2={pet.skill2}
                initialSkill3={pet.skill3}
                />
            )}
        </div>
    )
}