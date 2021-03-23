import React from 'react'
import Pic from './Image/blood4.jpg'
import Pic2 from './Image/blood5.jpg'
import Pic3 from './Image/blood6.jpg'
import Pic4 from './Image/blood7.jpg'
import Pic5 from './Image/blood8.jpg'
import Navbar from './Navbar'

const Card = () => {
    return (
        <>
            <Navbar />
            <div class="card mb-3">
                <img src={Pic} class="card-img-top" alt="Loading" height='400px' />
                <div class="card-body">
                    <h5 class="card-title"><b>Into College</b></h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perferendis rerum, obcaecati quisquam voluptatibus aperiam, inventore possimus dolorum alias neque maiores quas sint, excepturi quod quam veritatis libero. Sunt error ad adipisci est corporis exercitationem non sed dolore dolorem voluptatum illo animi, velit quidem doloribus, commodi minima? Tempore, dolores saepe.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>


            <div class="card-group">
                <div class="card">
                    <img src={Pic2} class="card-img-top" alt="loading" height='250px'/>
                    <div class="card-body">
                        <h5 class="card-title">Into Village</h5>
                        <p class="card-text" style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci inventore ipsa saepe illo ex sequi quas neque voluptatem molestias eius. Adipisci fuga id aperiam minima obcaecati sint modi animi aut!</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div class="card">
                    <img src={Pic3} class="card-img-top" alt="loading" height='250px'/>
                    <div class="card-body">
                        <h5 class="card-title"><b>Donate Blood Save Life</b></h5>
                        <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi architecto maxime est blanditiis officiis ea ex cum ut possimus dolores.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div class="card">
                    <img src={Pic4} class="card-img-top" alt="loading" height='250px'/>
                    <div class="card-body">
                        <h5 class="card-title"><b>Be a Donor</b></h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque rerum unde similique earum. Nisi dolores quibusdam odit facere corporis placeat.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title"><b>Love People</b></h5>
                    <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit eum incidunt pariatur cum magnam inventore optio quibusdam eius maxime delectus, quae nulla. Veniam ad nulla repellat, officia mollitia architecto quo!</p>
                    {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                </div>
                <img src={Pic5} class="card-img-top" alt="loading" height='350px'/>
            </div>
        </>
    );
};

export default Card;