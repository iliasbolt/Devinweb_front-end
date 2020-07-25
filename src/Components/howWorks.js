import React, { Component } from 'react';

class HowWorks extends Component {
    state={
        objects:[{
            titre:"Text us",
            desc:`Text when you want your car.
            No App needed , just an online
            account . Real human operateur.` ,
            up:true
        },{
            titre:"We deliver",
            desc:`Text when you want your car.
            No App needed , just an online
            account . Real human operateur..`                
        },{
            titre:"You drive",
            desc:`Text when you want your car.
            No App needed , just an online
            account . Real human operateur.`,
            up:true
        },{
            titre:"We Pick it up",
            desc:`Text when you want your car.
            No App needed , just an online
            account . Real human operateur.`
        }]
    }
    render() {
        return (
            <div>
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-4 pl-5 ">
                           <span className="titrescolor pl-5">2 -------- How It Works ?</span> 
                            <h2 className="mt-4 pl-5">
                                Simple and <br/> handy rental <br />process
                            </h2>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 pl-5 mt-5">
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

                        <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
                        <h6>
                                Still got questions ? We've probably covered <br /> them all in the help Center
                                <br />
                                <br />
                                <hr style={{width:"60%",marginLeft:"0px"}}/>
                                
                                
                                <br />
                                <div className="row">
                                    <div className="col-lg-2 col-md-12 col-sm-12">
                                        <img src="assets/close.png" style={{width:"50px",height:"50px"}}/>
                                    </div>
                                    <div className="col-lg-10 col-md-12 col-sm-12">
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
                       {this.state.objects.map(obj => {
                           return (
                            <div className={obj.up ? "col-lg-3 col-md-4 col-sm-6" : "col-lg-3 col-md-4 col-sm-6 pt-5"}>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <img src="assets/error.png" style={{width:"70px",height:"70px"}} className="mx-auto d-block"/>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <br />
                           <h3 className="titre text-center">{obj.titre}</h3>
                                <br />
                                <h6 className="text-center">
                                    {obj.desc}
                                </h6>
                                <br />
                                <hr />
                            </div>
                        </div>
                           );
                       })}
                        
                       
                    </div>
                </div>



            </div>
        );
    }
}

export default HowWorks;