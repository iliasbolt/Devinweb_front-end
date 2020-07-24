import React, { Component } from 'react';
import '../App.css';
//<img src="assets/x.png" className="serviceimg" />

class Service extends Component {
    render() {
        return (
            <div>
                <div className="col-lg-12">
                    <div className="row ">
                        <div className="container ser-rel" >
                        
                            <div className="col ">
                            <div className="col-lg-8 col-sm-12 pos_bg pb-4">
                            
                            <div className="serv">
                                <h6 className="white_text titrescolor pb-4" >  03 -------- SERVICE ZONE </h6>
                                <h3 className="white_text" style={{marginTop:"30px"}}>
                                    We'ev got SF covered 
                                </h3>
                                <h6 style={{marginTop:"25px",fontSize:"15px",color:"lightgray"}}>
                                    We provide two delivery options for any tips :
                                </h6>
                                <h5><br />
                                <i class="fas fa-check"></i>
                                    <span className="ml-5 white_text">
                                        Concierge service (8am - 8pm daily)
                                    </span>
                                    <br />
                                    <p className="ml-5 pl-3" style={{marginTop:"25px",fontSize:"15px",color:"lightgray"}}>
                                        We deliver op pick up at your doorstep.Always <br />
                                        have a parking spot right out front . just for you 
                                    </p>
                                </h5>
                                <br />
                                <i class="fas fa-check"></i>
                                    <span className="ml-5 white_text" style={{fontSize:"18px",fontWeight:"bold"}}>
                                    Self service (24/7)
                                    </span>
                                    <br />
                                    <p className="ml-5 pl-3" style={{marginTop:"25px",fontSize:"15px",color:"lightgray"}}>
                                        We deliver withing 3 blocks and unlock it whenever <br />
                                        you are ready . Park anywhere legal in our zone .<br/>
                                        look up and walk away to return . More flexibility on <br />
                                        timing . especially for starting early or ending late .
                                    </p>
                                    <hr style={{backgroundColor:"white",width:"60%",textAlign:"center",marginLeft:"60px"}} />
                                    <div className="row">
                                        <div className="col-lg-2">
                                            
                                            <img src="assets/close.png" style={{width:"50px",height:"50px"}}/> 
                                        </div>
                                        <div className="col-lg-10">
                                            <h6 className="" style={{marginTop:"25px",fontSize:"15px",color:"lightgray",marginTop:"-5px"}}>
                                                Outside of SF ?
                                            </h6>
                                            
                                            <h6 style={{marginTop:"-2px"}}>
                                                Tell us where to expand <i class="fas fa-arrow-right"> </i>
                                            </h6>
                                        </div>

                                    </div>
                            </div>
                            <div className="col service-div">
                                <img src="assets/x.png" className="serviceimg" />
                            </div>
                            </div>
                       
                        </div>
                            <br />
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Service;