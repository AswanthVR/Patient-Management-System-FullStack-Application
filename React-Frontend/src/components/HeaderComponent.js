import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../components/PAGES/css/nav.css'
import img1 from './images/home.png'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <div className='navcontainer'>
                    <div className='child'><Link to='/home'><img className='homeimg' src={img1}></img></Link></div>
                    <div className='child'> <h3>Patient Management System </h3> </div>
 
                </div>
            </div>
        )
    }
}

export default HeaderComponent
