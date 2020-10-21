import React, {useState, useEffect} from 'react'
import {navigate} from '@reach/router'
import Button from 'react-bootstrap/Button'
export default props =>{
    const {initialName, initialType, initialDescription, initialSkill1, initialSkill2, initialSkill3, onSubmitProp} = props;
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");

    useEffect(() =>{
        setName(initialName);
        setType(initialType);
        setDescription(initialDescription);
        setSkill1(initialSkill1);
        setSkill2(initialSkill2);
        setSkill3(initialSkill3);
    }, [])

    const onSubmitHandler = e =>{
        e.preventDefault();
        console.log(name, type, description, skill1, skill2, skill3);
        onSubmitProp({name, type, description, skill1, skill2, skill3});
    }

    const navigateHome = () =>{
        navigate('/')
    }

    return(
        <form className="addEntries" onSubmit={onSubmitHandler}>
            <p>
                <label>Pet Name:</label>
                <input type="text" defaultValue={initialName} onChange={e=> setName(e.target.value)} />
            </p>
            <p>
                <label>Pet Type:</label>
                <input type="text" defaultValue={initialType} onChange={e=> setType(e.target.value)} />
            </p>
            <p>
                <label>Pet Description:</label>
                <input type="text" defaultValue={initialDescription} onChange={e=> setDescription(e.target.value)} />
            </p>
            <p>
                <label>Skill 1:</label>
                <input type="text" defaultValue={initialSkill1} onChange={e=> setSkill1(e.target.value)} />
            </p>
            <p>
                <label>Skill 2:</label>
                <input type="text" defaultValue={initialSkill2} onChange={e=> setSkill2(e.target.value)} />
            </p>
            <p>
                <label>Skill 3:</label>
                <input type="text" defaultValue={initialSkill3} onChange={e=> setSkill3(e.target.value)} />
            </p>
            <Button type="submit" variant="primary" onClick={navigateHome}>Edit Pet</Button>
        </form>
    )
}