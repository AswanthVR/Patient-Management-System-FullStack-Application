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
                 <h2 className="text-center">Delete Patients</h2>
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
                                    <th> DELETE</th>
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
                                                <div className='dbutton'>
                                                 {/* <button   className="btn btn-danger">Delete </button> */}
                                                 {/* <button  class="dbtn"  >
                                                 <svg viewBox="0 0 15 17.5" height="17.5" width="15" xmlns="http://www.w3.org/2000/svg" class="dicon">
                                                 <path transform="translate(-2.5 -1.25)" d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z" id="Fill"></path>
                                                 </svg>
                                                 </button> */}
                                                 
<button style={{marginRight: "-50px"}} onClick={ () => this.deletePatient(patient.id)} class="noselect"><span class="text">Delete</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
                                                 
                                                 </div>
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
