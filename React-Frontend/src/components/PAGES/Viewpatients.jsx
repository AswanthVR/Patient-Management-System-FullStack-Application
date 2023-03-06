import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PatientService from '../../services/PatientService'
import '../project.css'
class ViewPatientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            patient: {}
        }
    }

    componentDidMount(){
        PatientService.getPatientById(this.state.id).then( res => {
            this.setState({patient: res.data});
        })
    }

    
    gotolist(){
        this.props.history.push('/patientlist');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Patient Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Patient First Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <div> { this.state.patient.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Patient Last Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <div> { this.state.patient.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Patient Gender:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <div> { this.state.patient.gender }</div>
                        </div>
                        <div className = "row">
                            <label> Patient DOB:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <div> { this.state.patient.dob }</div>
                        </div>
                        <div className = "row">
                            <label> Patient Contact No:&nbsp;&nbsp;&nbsp;</label>
                            <div> { this.state.patient.contactNo }</div>
                        </div>
                    </div>

                </div>
                <div className='backbutton'   onClick={ () => this.gotolist()}> <Link style={{textDecoration:"none"}} to="/view-patient/patients"> 
                <button className='vbutton'>
  <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
  <span>Back</span>
</button></Link>
                </div>
                
            </div>
        )
    }
}

export default ViewPatientComponent
