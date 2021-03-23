import React from 'react'
import Navbar from './Navbar'

const ResetPass = () =>{
    return(
        <>
            <Navbar/>
            <form className="row g-2 scenter scenter">

            <div className="col-md-12">
                    <label for="inputPassword4" className="form-label"><b>Old Password</b></label>
                    <input type="password" className="form-control" id="inputPassword4" />
            </div>
            <div className="col-md-12">
                    <label for="inputPassword4" className="form-label"><b>New Password</b></label>
                    <input type="password" className="form-control" id="inputPassword4" />
            </div>
            <div className="col-md-12">
                    <label for="inputPassword4" className="form-label"><b>Confirm Password</b></label>
                    <input type="password" className="form-control" id="inputPassword4" />
            </div>
            <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </>
    );
};

export default ResetPass;