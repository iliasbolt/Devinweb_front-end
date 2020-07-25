import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
    state={
        items:["product","Company","Help center","Personal","About","FAQ","Business",
         "Blog", "Insurence","Pricing ","Careers"," Agreement",
         "Login","Contact Us"
        ],
    }
    render() {
        return (
            <div>
                <div className="col-lg-12">
                    <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
                            <div className="row mb-3">
                           {this.state.items.map(item => {
                               return (
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        {item}
                                    </div>
                                    
                               );
                           })}
                </div>

                        </div>

                        <div className="col-lg-6">

                            <h5 className="text-left">STAY IN TOUCH</h5>
                            <br />
                            <p className="text-left">Join our mailling list to get updates . We respect your privacy .</p>
                            <br />
                            <div class="input-group mb-3">
                                 <input type="text" class="form-control myinput" placeholder="Email Adress ..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div class="input-group-append">
                                <button class="btn btn-outline-secondary myinput" type="button" ><i class="fas fa-paper-plane"></i></button>
                                
                                </div>
                             </div>
                            
                        </div>
                    </div>

                    <div className="row">
                        
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-lg-2 " style={{fontWeight:"bold",fontSize:"20px"}}>
                                        UpShift
                                    </div>
                                    <div className="col-lg-10 text-right">
                                        Copyright <i class="fas fa-at"></i> 2019 UpShift,Inc.
                                    </div>
                                    </div>
                                
                            </div>
                            <div className="col-lg-6 pl-5">
                                <div className="row">
                                <div className="col-lg-1">
                                    <img src="assets/facebook.png" className="brandslogo"/>
                                </div>
                                <div className="col-lg-1">
                                    <img src="assets/twitter.png" className="brandslogo"/>
                                </div>
                                <div className="col-lg-1">
                                    <img src="assets/instagram.png" className="brandslogo"/>
                                </div>
                                </div>
                                
                            </div>
                        
                    </div>

                    </div>
                </div>

            </div>
            
        );
    }
}

export default Footer;