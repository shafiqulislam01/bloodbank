import React from 'react'
import Navbar from './Navbar'

const SignUp = () => {
    return (
        <>
            <Navbar />
            <form className="row g-2 scenter">
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label"><b>First Name</b></label>
                    <input type="text" class="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label"><b>Last Name</b></label>
                    <input type="text" class="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label"><b>Password</b></label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label"><b>Confirm Password</b></label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label"><b>Email</b></label>
                    <input type="email" class="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label for="inputNumber" className="form-label"><b>Mobile Number</b></label>
                    <input type="number" class="form-control" id="inputNumber" />
                </div>
                <div className="col-md-6">
                    <label for="inputNumber" className="form-label"><b>Alternative Mobile Number</b></label>
                    <input type="number" class="form-control" id="inputNumber" />
                </div>
                <div className="col-md-6">
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
                    <label for="inputWeight" className="form-label"><b>Weight</b></label>
                    <input type="text" className="form-control" id="inputWeight" placeholder="" />
                </div>
                <div className="col-md-6">
                    <label for="inputWeight" className="form-label"><b>Date of Birth</b></label>
                    <form>
                        <input type="date" id="birthday" name="birthday" style={{width: '100%', height: '100%'}}/>
                    </form>
                </div>
                <div className="col-md-6">
                    <label for="inputUnion" className="form-label"><b>Union</b></label>
                    <input type="text" className="form-control" id="inputUnion" />
                </div>
                <div className="col-md-6">
                    <label for="inputPostOffice" className="form-label"><b>Post Office</b></label>
                    <input type="text" className="form-control" id="inputPostOffice" />
                </div>
                <div className="col-md-6">
                    <label for="inputPoliceStation" className="form-label"><b>Police Station</b></label>
                    <input type="text" className="form-control" id="inputPoliceStation" />
                </div>
                <div className="col-md-6">
                    <label for="inputDistrict" className="form-label"><b>District</b></label>
                    <input type="text" className="form-control" id="inputDistrict" />
                </div>
                <div className="col-md-6">
                    <label for="inputCity" className="form-label"><b>City</b></label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                    <label for="inputState" className="form-label"><b>Division</b></label>
                    <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option>Dhaka</option>
                        <option>Barishal</option>
                        <option>Chittagong</option>
                        <option>Khulna</option>
                        <option>Mymensingh</option>
                        <option>Rajshahi</option>
                        <option>Rangpur</option>
                        <option>Sylhet</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label for="inputZip" className="form-label"><b>Zip</b></label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" for="gridCheck">
                            Check me out
      </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </>
    );
};

export default SignUp;