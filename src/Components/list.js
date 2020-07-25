import React, { Component } from 'react';

class List extends Component {
    state={
        images:[
            "assets/buss.jpg" ,"assets/wired.png","assets/urban.jpg", "assets/metro.png" , "assets/curbed.png"]
    }
    render() {
        return (
            <div>
                <div className="col-lg-12 ">
                    <div className="row">
                        
                       {this.state.images.map(img => {
                           return (
                            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6 pt-3">
                                <img src={img} className="imglist" />
                            </div>
                           );
                       })}
                        <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6 bg1">
                            <i className="fa fa-arrow-down mr-auto myicon"></i>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default List;