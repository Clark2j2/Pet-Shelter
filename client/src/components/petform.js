import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import {Link, navigate} from '@reach/router'
import axios from 'axios'
export default props =>{

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");

    const onSubmitHandler = () =>{
        axios.post('http://localhost:8000/api/users/new/', {
            name: name,
            type: type,
            description: description,
            skill1: skill1,
            skill2: skill2,
            skill3: skill3
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    const navigateHome = () =>{
        navigate('/')
    }

    return(
        <div className="addBox">
            <form onSubmit={onSubmitHandler} className="addEntries">
            <label>Pet Name:</label><input type="text" onChange={e=>setName(e.target.value)} /> <br />
            <label>Pet Type:</label><input type="text" onChange={e=>setType(e.target.value)} /> <br />
            <label>Pet Description:</label><input type="text" onChange={e=>setDescription(e.target.value)} /><br />
            <label>Skill 1:</label><input type="text" onChange={e=>setSkill1(e.target.value)} /><br />
            <label>Skill 2:</label><input type="text" onChange={e=>setSkill2(e.target.value)} /><br />
            <label>Skill 3:</label><input type="text" onChange={e=>setSkill3(e.target.value)} /><br />
            <Button type="submit" variant="primary" onClick={navigateHome}>Submit</Button>{' '}
            </form>
        </div>
    )
}