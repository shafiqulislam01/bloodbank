import React from 'react'
import Navbar from './Navbar'

const BloodRst = () =>{
    return(
        <>
            <Navbar />
            <div className="container-fluid bg-secondary">
	
	<div className="col-lg-12">
		<div className="row mb-4 mt-4">
			<div className="col-md-12">
				
			</div>
		</div>
		<div className="row">
			<div className="col-md-12">
				<div className="card">
					<div className="card-header">
						<b>List of Requests</b>
						<span class="float:right"><a className="btn btn-primary btn-block btn-sm col-sm-2 float-right btn-danger donorbtn" href="javascript:void(0)" id="new_request">
					<i className="fa fa-plus"></i> New Entry
				</a></span>
					</div>
					<div className="card-body">
						<table class="table table-condensed table-bordered table-hover">
							<thead>
								<tr>
									<th className="text-center">S/N</th>
									<th className="">Date</th>
									<th className="">Reference</th>
									<th className="">Patient Name</th>
									<th className="">Blood Group</th>
									<th className="">Information</th>
									<th className="">Status</th>
									<th className="text-center">Action</th>
								</tr>
							</thead>
							<tbody>
                            <tr>
								
									<td className="text-center">1</td>
									<td>
										null
									</td>
									<td className="">
										 <p> <b>Reference</b></p>
									</td>
									<td className="">
										 <p> <b>Patient</b></p>
									</td>
									<td className="">
										 <p> <b>Blood Group</b></p>
									</td>
									<td className="">
										 <p>Volume Needed: <b>['volume'] / 1000) L</b></p>
										 <p>Physician Name: <b>Physician Name</b></p>
									</td>
									<td className=" text-center">
                                            <span>Conditon (Pending/Approved)</span>
											<span className="btn badge badge-primary">Pending</span>
											<span className="badge badge-success">Approved</span>

									</td>
									<td className="text-center">
										<button className="btn btn-sm btn-outline-primary edit_request edit_donor" type="button"  >Edit</button>
										<button className="btn btn-sm btn-outline-danger delete_request edit_donor" type="button" >Delete</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>	

</div>
        </>
    );
};

export default BloodRst;