import React from 'react'
import PetForm from '../components/petform'
import {Link} from '@reach/router'
export default props =>{
    return(
        <div>
            <h3>Know a pet needing a home?</h3>
            <p className="rightlinks"><Link to="/">back to home</Link></p>
            <div className="addBox">
            <PetForm />
            </div>
        </div>
    )
}