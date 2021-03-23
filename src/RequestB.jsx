import React from 'react'
import Navbar from './Navbar'

const RequestB = () =>{
    return(
        <>
            <Navbar/>
            <form className="row g-2 scenter">
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label"><b>First Name</b></label>
                    <input type="text" class="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label"><b>Last Name</b></label>
                    <input type="text" class="form-control" id="inputEmail4" />
                </div>

                <div className="col-md-12">
                    <label for="inputBloodGroup" className="form-label"><b>Blood Group</b></label>
                    <select id="inputBloodGroup" className="form-select">
                        <option selected>Choose...</option>
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                        <option>O+</option>
                        <option>O-</option>
                    </select>
                </div>

                <div className="col-md-6">
                    <label for="inputVolume" className="form-label" ><b>Available Volume</b></label>
                    <input type="number" className="form-control" id="inputVolume" placeholder='null'/>
                </div>
                <div className="col-md-6">
                    <label for="inputVolume" className="form-label"><b>Volume</b></label>
                    <input type="number" className="form-control" id="inputVolume" />
                </div>

                <div className="col-md-12">
                    <label for="inputEmail4" className="form-label"><b>Physician Name</b></label>
                    <input type="text" class="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-12">
                    <label for="inputEmail4" className="form-label"><b>Referance</b></label>
                    <input type="text" class="form-control" id="inputEmail4" />
                </div>

                <div className="col-md-12">
                    <label for="inputStatus" className="form-label"><b>Status</b></label>
                    <select id="inputStatus" className="form-select">
                        <option selected>Choose...</option>
                        <option>Pending</option>
                        <option>Approved</option>
                    </select>
                </div>
              
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" for="gridCheck">Check me out</label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </>
    );
};

export default RequestB;