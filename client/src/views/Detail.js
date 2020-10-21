import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from '@reach/router'
import Button from 'react-bootstrap/Button'
export default props =>{

    const [user, setUser] = useState({});
    const deletePet =(petId) =>{
        axios.delete('http://localhost:8000/api/users/delete/' + petId)
    }

            useEffect(() =>{
                axios.get("http://localhost:8000/api/users/" + props.id)
                    .then(res => setUser(
                        res.data.user
                    ))
            }, [])

    return(
        <div className="detaildiv">
            <h3>Details about: {user.name}</h3>
            <p className="rightlinks"><Link to="/">back to home</Link></p>
            <Button className="deletebutton" variant="danger" onClick={(e) =>{deletePet(user._id)}}><Link to="/" className="adoptbutton">Adopt {user.name}</Link></Button>
            <div className="addEntries">
                <p className="detaildata">Name: {user.name}</p>
                <p className="detaildata">Type: {user.type}</p>
                <p className="detaildata">Description: {user.description}</p>
                <p className="detaildata">Skill 1: {user.skill1}</p>
                <p className="detaildata">Skill 2: {user.skill2}</p>
                <p className="detaildata">Skill 3: {user.skill3}</p>
            </div>
        </div>
    )
}