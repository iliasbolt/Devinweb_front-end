import React, { Component } from 'react';

class HowWorks extends Component {
    render() {
        return (
            <div>
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-4 pl-5 ">
                            2 How It Works ?
                            <h2 className="mt-4">
                                Simple and <br/> handy rental <br />process
                            </h2>
                        </div>
                        <div className="col-lg-4 pl-5 mt-5">
                            <h6>
                                Snow Chains , Surf board rack . key lock box ,or<br />  dog car seat hammok available upon request .
                                <br />
                                <br />
                                <hr style={{width:"60%",marginLeft:"0px"}}/>
                                
                                
                                <br />
                                <div className="row">
                                    <div className="col-lg-2">
                                        <img src="assets/close.png" style={{width:"50px",height:"50px"}}/>
                                    </div>
                                    <div className="col-lg-10">
                                    <h6 style={{marginTop:"10px",fontWeight:"bold"}}>Check the available accessories  <i class="fas fa-arrow-right"> </i></h6>
                                    </div>
                                </div>
                                
                            </h6>
                        </div>

                        <div className="col-lg-4 mt-5">
                        <h6>
                                Still got questions ? We've probably covered <br /> them all in the help Center
                                <br />
                                <br />
                                <hr style={{width:"60%",marginLeft:"0px"}}/>
                                
                                
                                <br />
                                <div className="row">
                                    <div className="col-lg-2">
                                        <img src="assets/close.png" style={{width:"50px",height:"50px"}}/>
                                    </div>
                                    <div className="col-lg-10">
                                    <h6 style={{marginTop:"10px",fontWeight:"bold"}}>Read our FAQ  <i class="fas fa-arrow-right"> </i></h6>
                                    </div>
                                </div>
                                
                            </h6>
                        </div>
                    </div>
                </div>

                {/* ----------------------------------------- */}
                {/* ----------------------------------------- */}

                <div className="col-lg-12 ">
                    <div className="row lst">
                        <div className="col-lg-3">
                            <div className="col-lg-12">
                                <img src="assets/error.png" style={{width:"70px",height:"70px"}} className="mx-auto d-block"/>
                            </div>
                            <div className="col-lg-12 ">
                                <br />
                                <h3 className="titre">Text us</h3>
                                <br />
                                <h6 className="pl-4">
                                    Text when you want your car. <br />
                                    No App needed , just an online <br />
                                    account . Real human operateur.
                                </h6>
                                <br />
                                <hr />
                            </div>
                        </div>
                        <div className="col-lg-3 mt-5">
                            <div className="col-lg-12">
                                <img src="assets/error.png" style={{width:"70px",height:"70px"}} className="mx-auto d-block"/>
                            </div>
                            <div className="col-lg-12 ">
                                <br />
                                <h3 className="titre">We deliver</h3>
                                <br />
                                <h6 className="pl-4">
                                    Text when you want your car. <br />
                                    No App needed , just an online <br />
                                    account . Real human operateur.
                                </h6>
                                <br />
                                <hr />
                            </div>
                        </div>
                        <div className="col-lg-3 ">
                            <div className="col-lg-12">
                                <img src="assets/error.png" style={{width:"70px",height:"70px"}} className="mx-auto d-block"/>
                            </div>
                            <div className="col-lg-12 ">
                                <br />
                                <h3 className="titre">You drive</h3>
                                <br />
                                <h6 className="pl-4">
                                    Text when you want your car. <br />
                                    No App needed , just an online <br />
                                    account . Real human operateur.
                                </h6>
                                <br />
                                <hr />
                            </div>
                        </div>
                        <div className="col-lg-3 mt-5">
                        <div className="col-lg-12">
                                <img src="assets/error.png" style={{width:"70px",height:"70px"}} className="mx-auto d-block"/>
                            </div>
                            <div className="col-lg-12 ">
                                <br />
                                <h3 className="titre">We pick it up</h3>
                                <br />
                                <h6 className="pl-4">
                                    Text when you want your car. <br />
                                    No App needed , just an online <br />
                                    account . Real human operateur.
                                </h6>
                                <br />
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        );
    }
}

export default HowWorks;