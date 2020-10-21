import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import {Link, navigate} from '@reach/router'
import Button from 'react-bootstrap/Button'
export default props =>{
    const [name, setName] = useState([]);
    const [type, setType] = useState([]);

    useEffect(() =>{
        getAllPets();
    })

    const getAllPets = (res) =>{
        axios.get('http://localhost:8000/api/users/')
            .then(res=>{
                setName(res.data.users)})
            .catch((err) =>{
                console.log(err)
            })
    }
    
    return(<div>
        <p class="rightlinks"><Link to="/pets/new/">Add a pet to the shelter</Link></p>
        <Table striped bordered hover>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>    
        </tr>
    </thead>
    <tbody>
        {name.map((user, idx) =>(
        <tr>
            <td>{user.name}</td>
            <td>{user.type}</td>
            <td><Button className="Buttons" onClick={navigate.bind(this, '/pets/' + user._id)}> Details</Button>
            <Button className="Buttons" onClick={navigate.bind(this, user._id + '/edit')} variant="primary">Edit</Button>{''} 
            </td>
        </tr>
        ))}
    </tbody>
</Table>
</div>
    )
}