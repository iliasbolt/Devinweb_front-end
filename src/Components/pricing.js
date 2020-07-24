import React, { Component } from 'react';
import '../App.css';

class Pricing extends Component {
    render() {
        return (
            <div>
                <div className="col-lg-12 text-center pt-4" >
                    <h6>04 - PRICING </h6>
                    <h2 className="text-center pt-2">
                        Monthly plans for less than a parking space.
                    </h2><br />
                    <p>
                        Plans include concierge delivery and pickup , cleaning and refueling service , full coverge
                        insurence <br />
                        and maintenance-everything but gas and tolls .Join instantly with SO down and get your car right now 
                    </p>
                    
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-4 mt-5 ">
                                <div className="mycard">
                                <br />
                                <h4 className="text-center">FlexPass</h4>
                                    <br/>
                                    <h6 className="text-center gray-text"> Get 2 days / month</h6><br />
                                <h2>$159<span style={{fontSize:"13px"}}>/month</span></h2>
                                <hr style={{backgroundColor:"lightgray",width:"80%",textAlign:"center",marginLeft:"10%"}} />
                                <p>
                                    Not sure how much you drive ?<br /> Get a magic button  anytime you <br />need a car
                                </p>
                                <div className="col">
                                    <button className="my_btn text-center">
                                        Start with FlexPass
                                    </button>
                                </div>
                                <br />
                                <h6>View Plan Details  <i class="fas fa-arrow-right"> </i></h6>
                                <br />
                             </div>
                            </div>


                            <div className="col-lg-4  mt-4">
                            <div className="mycard shadow">
                                <br />
                                <h4 className="text-center">Getaway</h4>
                                    <br/>
                                    <h6 className="text-center gray-text"> Get 4 days / month</h6><br />
                                <h2>$219<span style={{fontSize:"13px"}}>/month</span></h2>
                                <hr style={{backgroundColor:"lightgray",width:"80%",textAlign:"center",marginLeft:"10%"}} />
                                <p>
                                    Get up away to once a week.<br /> 
                                    Your car is delivered and <br />diseappears - like magic
                                </p>
                                <div className="col">
                                    <button className="my_btn text-center">
                                        Start with Getaway
                                    </button>
                                </div>
                                <br />
                                <h6>View Plan Details <i class="fas fa-arrow-right"> </i></h6>
                                <br />
                                </div>
                            </div>
                            



                            <div className="col-lg-4 mt-5">

                            <div className="mycard">
                                <br />
                                <h4 className="text-center">Freedom</h4>
                                    <br/>
                                    <h6 className="text-center gray-text"> Get 8 days / month</h6><br />
                                <h2>$389<span style={{fontSize:"13px"}}>/month</span></h2>
                                <hr style={{backgroundColor:"lightgray",width:"80%",textAlign:"center",marginLeft:"10%"}} />
                                <p>
                                    Get a car up to twice a week.It's ?<br /> freedom whenever you want it land
                                    <br />no additional fees when you don't
                                </p>
                                <div className="col">
                                    <button className="my_btn text-center">
                                        Start with Freedom
                                    </button>
                                </div>
                                <br />
                                <h6>View Plan Details <i class="fas fa-arrow-right"> </i></h6>
                                <br />
                            </div>
                            </div>
                        </div>
                        
                    </div>
                    

                </div>
            </div>
        );
    }
}

export default Pricing;