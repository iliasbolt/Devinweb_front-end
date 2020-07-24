import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <div>
                <div className="col-lg-12 ">
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-sm-4 col-xs-4 pt-3">
                            <img src="assets/buss.jpg" className="imglist"/>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 col-xs-4 pt-3">
                            <img src="assets/wired.png" className="imglist"/>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 col-xs-4 pt-3">
                            <img src="assets/urban.jpg" className="imglist"/>
                        </div>
                        <div className="col-lg-2 col-md-4  col-sm-4 col-xs-4 pt-3">
                            <img src="assets/metro.png" className="imglist"/>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 col-xs-4 pt-3">
                            <img src="assets/curbed.png" className="imglist"/>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 col-xs-4 bg1">
                            <i className="fa fa-arrow-down mr-auto myicon"></i>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default List;