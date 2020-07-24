import React, { Component } from 'react';
import '../App.css';
class About extends Component {
   
    render() {
        return (
            <div>
                <div className="col-lg-12 ">
                    <div className="row">
                    
                        <div className="col-lg-6 rela-div">
                            
                                <img src="assets/x.png" className="aboutimg"/>
                                <div className="rev">
                                    <h6 className="pt-5 pl-5 text">
                                        "Since becoming a mounthly subscriber . I feel like <br/> 
                                        i have my car back  again , It's like i own  car without <br />
                                        the worries or cost of  keeping it around  all the time."
                                    </h6>
                                    <br/>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12 pl-5" style={{display:"inline-block"}}>
                                            <img src="assets/close.png" className="imgab" style={{float:"left"}}/>
                                            <h5 style={{float:"right",marginLeft:"-5px",color:"white"}} className="ttt">SAM R.</h5>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                           <div className="stars">
                                            <i class="far fa-star"></i><i class="far fa-star"></i>
                                            <i class="far fa-star"></i><i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                           </div>
                                            <div>
                                                <br></br>
                                                <h7 className=" reviwes col-sm-12 col-md-6">28 Reviews at Yelp</h7>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                            
                        </div>


                        <div className="col-lg-6 col-md-12 col-sm-12 about p-5">
                            
                            <h6 className="titrescolor"> 01 -------- ABOUT US </h6>
                             <br></br>
                            <h2>Let's make cities better</h2>
                            <br></br>
                            <h6>Upshift like having your own car at your door step  but only <br></br>
                                the days you want it , Mounthly plans based on how much you <br></br>
                                drive that include parking , insurence , maintenance and more .
                                <br></br>
                                <br></br>
                                We believe  in using bussiness to drive positive change in <br></br>the world 
                                and never settling for what worked in the past .
                                <br></br>
                                <br></br>
                                <hr style={{width:"60%",marginLeft:"0px"}}/>
                            </h6>
                            <br></br>
                            <div className="row">
                                <div className="col-lg-2 col-md-4 col-sm-6">
                                    <img src="assets/close.png" style={{width:"50px",height:"50px",marginTop:"10px"}}/>
                                </div>
                                <div className="col-lg-10 col-md-8 col-sm-6">
                                    <h6>Intrested in out values ?</h6>
                                    <br />
                                    <h6 style={{marginTop:"-5px",fontWeight:"bold"}}>Learn More About the company   <i class="fas fa-arrow-right"></i></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;