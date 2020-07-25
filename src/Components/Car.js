import React, { Component } from 'react';
import '../App.css';

class Car extends Component {
    render() {
        return (
            <div>
                <div className="col-lg-12 mt-5 pt-5">
                <div className="jumbotron jomboback">
                    <div className="row mt-5">
                        <div className="col-lg-5 col-md-12 mt-5 mb-5 pb-5 col-sm-12">
                            <h5 className="text-left pl-5 ml-5 titrescolor">04 --------THE CAR</h5>
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
                        <div className="col-lg-7">
                            <div className="col-lg-10 col-md-12 col-sm-12">
                                <img src="assets/car1.jpg" style={{width:"90%",height:"350px",marginTop:"-150px",borderRadius:"7px"}} />
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <img src="assets/car2.jpg" style={{width:"80%",height:"250px",marginTop:"10px",borderRadius:"7px"}} />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <img src="assets/car3.jpg" style={{width:"100%",height:"180px",marginTop:"10px",borderRadius:"7px"}} />  
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="col-lg-12">
                            <div className="row">
                                
                                    <div className="col-lg-8 col-md-8 col-sm-12 mt-3 pl-5">
                                        <h3 className="pl-5 ml-5">
                                        Join Instantly with 0$ down 
                                        and get you car right now.
                                        </h3>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 mt-3  pr-5">
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