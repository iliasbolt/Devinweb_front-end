import React, { Component } from 'react';
import '../App.css';

class Pricing extends Component {
    state={
        objects:[
        {
            titre:"FlexPass",get:"Get 2 days / month",price:"$159",month:"/month",
            desc:`Not sure how much you drive ?
            Get a magic button anytime you
            need a car`,
            shadow:false
        },
        {
            
            titre:"Getaway",get:"Get 4 days / month",price:"$219",month:"/month",
            desc:`Get up away to once a week.Your car is delivered and diseappears - like magic`,
            shadow:true
        },{
            titre:"Freedom",get:"Get 8 days / month",price:"$389",month:"/month",
            desc:`Get a car up to twice a week.It's ?
            freedom whenever you want it land
            no additional fees when you don't`,
            shadow:false
        }
    ]
    }
    render() {
        return (
            <div>
                <div className="col-lg-12 text-center pt-4" >
                    <h6 className="titrescolor">04 -------- PRICING </h6>
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

                           {this.state.objects.map(obj => {
                               return (
                                    <div className="col-lg-4  mt-4">
                                    <div className={obj.shadow ? "mycard shadow" : "mycard mt-4"}>
                                    <br />
                               <h4 className="text-center">{obj.titre}</h4>
                                        <br/>
                               <h6 className="text-center gray-text"> {obj.get}</h6><br />
                               <h2>{obj.price}<span style={{fontSize:"13px"}}>{obj.month}</span></h2>
                                    <hr style={{backgroundColor:"lightgray",width:"80%",textAlign:"center",marginLeft:"10%"}} />
                                    <p>
                                       {obj.desc}
                                    </p>
                                    <div className="col">
                                        <button className="my_btn text-center">
                                            Start with {obj.titre}
                                        </button>
                                    </div>
                                    <br />
                                    <h6>View Plan Details <i class="fas fa-arrow-right"> </i></h6>
                                    <br />
                                </div>
                            </div>
                               );
                           })}
                            
                        </div>
                        
                    </div>
                    

                </div>
            </div>
        );
    }
}

export default Pricing;