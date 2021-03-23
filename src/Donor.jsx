import React from 'react'
import Navbar from './Navbar'

const Donor = () =>{
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
						<b>List of Donors</b>
						<span class="float:right"><a className="btn btn-danger btn-block btn-sm col-sm-2 float-right donorbtn" href="javascript:void(0)" id="new_donor">
					<i className="fa fa-plus"></i> New Entry
				</a></span>
					</div>
					<div className="card-body">
						<table className="table table-condensed table-bordered table-hover">
							<thead>
								<tr>
									<th className="text-center">#</th>
									<th className="">Donor</th>
									<th className="">Blood Group</th>
									<th className="">Information</th>
									<th className="">Previuos Donation</th>
									<th className="text-center">Action</th>
								</tr>
							</thead>
							<tbody>
			
								<tr>
									<td className="text-center">1</td>
									<td className="">
										 <p> <b>name</b></p>
									</td>
									<td className="">
										 <p> <b>blood_group</b></p>
									</td>
									<td className="">
										 <p>Email: <b>email</b></p>
										 <p>Contact #: <b>contact</b></p>
										 <p>Address: <b>address</b></p>
									</td>
									<td>
                                        null
									</td>
									<td className="text-center">
										<button className="btn btn-sm btn-outline-primary edit_donor" type="button" >Edit</button>
										<button className="btn btn-sm btn-outline-danger delete_donor" type="button" >Delete</button>
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

export default Donor;