import React from 'react'

const Footer = () =>{
    return(
        <>
            <footer className="footer">
    <div className="container">
        <div className="row">
            <div className="col-md-5">
                <h5><i className="fa fa-road"></i> Blood Donation</h5>
                <div className="row">
                    <div className="col-6">
                        <ul className="list-unstyled">
                            <li><a href="">Benefits</a></li>
                            <li><a href="">Partners</a></li>
                            <li><a href="">Team</a></li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul className="list-unstyled">
                            <li><a href="">Documentation</a></li>
                            <li><a href="">Support</a></li>
                            <li><a href="">Legal Terms</a></li>
                            <li><a href="">About</a></li>
                        </ul>
                    </div>
                </div>
                <ul className="nav">
                    <li class="nav-item"><a href="" class="nav-link pl-0"><i class="fa fa-facebook fa-lg"></i></a></li>
                    <li className="nav-item"><a href="" className="nav-link"><i className="fa fa-twitter fa-lg"></i></a></li>
                    <li className="nav-item"><a href="" className="nav-link"><i className="fa fa-github fa-lg"></i></a></li>
                    <li className="nav-item"><a href="" className="nav-link"><i className="fa fa-instagram fa-lg"></i></a></li>
                </ul>
                <br/>
            </div>
            <div className="col-md-2">
                <h5 className="text-md-right">Contact Us</h5>
                <hr/>
            </div>
            <div className="col-md-5">
                <form>
                    <fieldset className="form-group mt-5">
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
                    </fieldset>
                    <fieldset className="form-group mt-2">
                        <textarea className="form-control" id="exampleMessage" placeholder="Message"></textarea>
                    </fieldset>
                    <fieldset className="form-group text-xs-right">
                        <button type="button" className="btn btn-secondary-outline btn-lg btn-danger mt-3">Send</button>
                    </fieldset>
                </form>
                    <div>
                        <a className='fotm'>Copyright©2021</a>
                    </div>
            </div>
        </div>
    </div>
</footer>
        </>
    );
};

export default Footer;