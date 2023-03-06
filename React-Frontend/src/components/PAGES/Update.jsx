import React, { Component } from 'react'
import PatientService from '../../services/PatientService'
import '../project.css'
class ListPatientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                patients: []
        }
        this.addPatient = this.addPatient.bind(this);
        this.editPatient = this.editPatient.bind(this);
        this.deletePatient = this.deletePatient.bind(this);
    }

    deletePatient(id){
        PatientService.deletePatient(id).then( res => {
            this.setState({patients: this.state.patients.filter(patient => patient.id !== id)});
        });
    }
    viewPatient(id){
        this.props.history.push(`/view-patient/${id}`);
    }
    editPatient(id){
        this.props.history.push(`/add-patient/${id}`);
    }

    componentDidMount(){
        PatientService.getPatients().then((res) => {
            this.setState({ patients: res.data});
        });
    }

    addPatient(){
        this.props.history.push('/add-patient/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Patients List</h2>
                 <div className = "row">
                    {/* <button className="btn btn-primary" onClick={this.addPatient}> Add Patient</button> */}
                    
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "container">

                            <thead>
                                <tr>
                                    <th>  First Name</th>
                                    <th>  Last Name</th>
                                    <th>  gender</th>
                                    <th>  DOB</th>
                                    <th>  Contact No</th>
                                    <th> Update</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.patients.map(
                                        patient => 
                                        <tr key = {patient.id}>
                                             <td> { patient.firstName} </td>   
                                             <td> {patient.lastName}</td>
                                             <td> {patient.gender}</td>
                                             <td> {patient.dob}</td>
                                             <td> {patient.contactNo}</td>
                                             <td>
                                                 {/* <button  className="btn btn-info">Update </button> */}
                                                 <button onClick={ () => this.editPatient(patient.id)} class="cssbuttons-io-button"> UPDATE
  <div class="icon">
    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
  </div>
</button>                                  </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListPatientComponent
