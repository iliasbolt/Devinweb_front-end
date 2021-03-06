import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
// import $ from 'jquery';

class Navbar extends Component {

    /*componentDidMount(){
        $(document).ready(function(){
            $("#About").click(function(event) {
               
                    document.getElementById("about_target").scrollIntoView({behavior:'smooth',block:'center'})
                    
                });
                $("#Pricing").click(function() {
                    
                    document.getElementById("target_target").scrollIntoView({behavior:'smooth',block:'center'})
                });
                $("#Contact_us").click(function() {
                    document.getElementById("Contact_target").scrollIntoView({behavior:'smooth',block:'center'})

                });
                //fade in animation 
                //var target = $("#about_target");
                
                //var targetHeight = target.outerHeight();

                $(document).scroll(function(event){
                        var percent = (targetHeight - window.scrollY) / targetHeight;
                        console.log(percent);
                        if(percent >= 0)
                            target.css('opacity',1 - percent);
                })
            
        });
        
    }*/
    render() {
        return (
            <div>
               <nav className="navbar navbar-expand-lg navbar-light  bg1 ">
                <Link className="navbar-brand my-brand">UpShift</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto navbar-right w-100">
                        
                        <li className="nav-item personal line col-">
                            <Link className="nav-link "><i className="fa fa-circle"> </i>  Personal</Link>
                        </li>
                        <li className="nav-item personal fl-r">
                            <Link className="nav-link " ><i className="fa fa-circle"> </i>  Business</Link>
                        </li>
                        <li className="nav-item pl-5">
                            <Link className="nav-link " key="About">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ">FAQ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ">Contact Us</Link>
                        </li>
                        
                            <li className="nav-item pl-5 ml-5">
                                <Link className="nav-link">Login</Link>
                            </li>
                            <li className="nav-item pl-5 ml">
                                <Link className="nav-link join">Join us</Link>
                            </li>
                        
                        
                    </ul>
                    
                </div>
                </nav>
                <div className="jumbotron bg1 col-lg-12 mt-0 mb-0">
                    <div className="row">
                        <div className="col-lg-6 p-5">
                            <div className="just">Just Drive.
                                <br></br>
                                We'll do the rest.
                            </div>
                            <br></br>
                            <div className="pt-10">
                                All Exclusive , usage-based car subscriptions.
                            </div>
                                <form>
                                <div className="form-row pt-3">
                                    <div className="col-lg-6 pt-3">
                                        <input placeholder="Phone number" className="form-control border-bottom myinput"/>
                                    </div>
                                        <div className="col-lg-6 pt-3">
                                        <input placeholder="Phone number" className="my_btn" type="button" value="Get Started" style={{width:"140px"}}/>
                                        </div>
                                    </div>
                                </form>
                            
                        </div>
                            <div className="col-lg-6 p-5">
                                <img src="assets/test3.jpg" className="img" />
                            </div>
                        </div>
                        
                </div>
                
            </div>
        );
    }
}

export default Navbar;