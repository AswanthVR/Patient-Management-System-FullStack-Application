import React, { Component } from 'react'
import PatientService from '../../services/PatientService';
import './css/css.css'
class CreatePatientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            gender:'',
            dob:'',
            contactNo:''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changegenderHandler = this.changegenderHandler.bind(this);
        this.changeDOBHandler = this.changeDOBHandler.bind(this);
        this.changeContactNoHandler = this.changeContactNoHandler.bind(this);
        this.saveOrUpdatePatient = this.saveOrUpdatePatient.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            PatientService.getPatientById(this.state.id).then( (res) =>{
                let patient = res.data;
                this.setState({firstName: patient.firstName,
                    lastName: patient.lastName,
                    gender : patient.gender,
                    dob : patient.dob,
                    contactNo : patient.contactNo,
                   
                    
                });
            });
        }        
    }
    saveOrUpdatePatient = (e) => {
        e.preventDefault();
        let patient = {firstName: this.state.firstName, lastName: this.state.lastName, gender: this.state.gender, dob: this.state.dob ,contactNo: this.state.contactNo} ;
        console.log('patient => ' + JSON.stringify(patient));

        // step 5
        if(this.state.id === '_add'){
            PatientService.createPatient(patient).then(res =>{
                this.props.history.push('/patients');
            });
        }else{
            PatientService.updatePatient(patient, this.state.id).then( res => {
                this.props.history.push('/patients');
            });
        }
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changegenderHandler= (event) => {
        this.setState({gender: event.target.value});
    }
    changeDOBHandler= (event) => {
        this.setState({dob: event.target.value});
    }
    changeContactNoHandler= (event) => {
        this.setState({contactNo: event.target.value});
    }

    cancel(){
        this.props.history.push('/patients');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Patient</h3>
       

        }else{
            return <h3 className="text-center">Update Patient</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> gender: </label>
                                            <input placeholder="gender" name="gender" className="form-control" 
                                                value={this.state.gender} onChange={this.changegenderHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> DOB: </label>
                                            <input placeholder="Date Of Birth" name="dob" className="form-control" 
                                                value={this.state.dob} onChange={this.changeDOBHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Contact NO: </label>
                                            <input placeholder="contact number" name="contactNo" className="form-control" 
                                                value={this.state.contactNo} onChange={this.changeContactNoHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdatePatient}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreatePatientComponent



