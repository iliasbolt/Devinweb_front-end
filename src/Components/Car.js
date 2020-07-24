import React, { Component } from 'react';
import '../App.css';

class Car extends Component {
    render() {
        return (
            <div>
                <div className="col-lg-12">
                <div className="jumbotron">
                    <div className="row mt-5">
                        <div className="col-lg-6  mt-5">
                            <h5 className="text-left pl-5 ml-5">04-THE CAR</h5>
                            <br />
                            <h3 className="text-left pl-5 ml-5">
                                Always Drive an <br />
                                Identical Prius
                            </h3>
                            <br />
                            <p className="text-left pl-5 ml-5"> 
                                All our cars are the same so they feel familiar. <br />
                                No branding so you don't stick out 
                                <br />
                                <br />
                                Fits 5 comfortably - or surfboard,bicycle , or skills.
                                <br />54 MPG hybrid gets you to Tahoe and back on a <br />
                                single tank.Phone mount,charging cables,and <br />
                                FasTrak included .Bluetooth and safety technology <br />
                                like adaptive cruise control,We use all natural <br />
                                deodorizes and cleaning supplies
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <div className="col-lg-10">
                                <img src="assets/x.png" style={{width:"80%",height:"410px",marginTop:"-100px"}} />
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <img src="assets/x.png" style={{width:"80%",height:"250px",marginTop:"-50px"}} />
                                </div>
                                <div className="col-lg-8">
                                    <img src="assets/x.png" style={{width:"90%",height:"180px",marginTop:"-50px"}} />  
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="col-lg-12">
                            <div className="row">
                                
                                    <div className="col-lg-8 mt-3 pl-5">
                                        <h3 className="pl-5 ml-5">
                                        Join Instantly with 0$ down 
                                        and get you car right now.
                                        </h3>
                                    </div>

                                    <div className="col-lg-4 mt-3  pr-5">
                                        <button className="my_btn mr-4">
                                            Get Started
                                        </button>
                                    </div>
                                
                            </div>
                    </div>



                </div>
                        
                </div>
            </div>
        );
    }
}

export default Car;