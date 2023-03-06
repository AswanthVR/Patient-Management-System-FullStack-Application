import React, { Component } from 'react'
import PatientService from '../../services/PatientService'
import './css/patientlist.css'
import '../project.css'
import HeaderComponent from '../HeaderComponent'
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
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "container">

                            <thead>
                                <tr>
                                    <th>   First Name</th>
                                    <th>   Last Name</th>
                                    <th>   DOB</th>
                                    <th>   Contact No</th>
                                    <th> Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.patients.map(
                                        patient => 
                                        <tr key = {patient.id}>
                                             <td> { patient.firstName} </td>   
                                             <td> {patient.lastName}</td>
                                             <td> {patient.dob}</td>
                                             <td> {patient.contactNo}</td>
                                             <td>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewPatient(patient.id)} className="btn btn-info">View </button>
                                                
                                             </td>
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
