import React, { Component } from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

class Body extends Component {
    render() {
        return (
            <div className="container">
                <div className="mt-5">
                        <div class="row">
                            <div class="col">
                                <small className="float-left text-secondary">Home >> Gole >> Explore ></small><br/>
                                <h3 className="float-left">Trip to the places of Versailles</h3><br/>
                                <small className="mt-1 float-left ">ONLINE MUSEUM  8+YEARS</small><br/>
                            </div>
                            <div class="col">
                            <button class="btn btn-outline-dark"><ThumbUpIcon />125 <br/><small>RECOMMED</small></button>
                            </div>
                        </div>
                </div>
                <div className="mt-5">
                        <div class="row">
                            <div class="col">
                                <img src="https://www.bestwestern.com/content/dam/best-western/brand/glo.jpg"/>
                            </div>
                            <div class="col">
                                <small className="float-left text-secondary">Live on</small><br/>
                            <div className="float-left"><strong>29 June 2020</strong> for 60 min</div><br/><br/>
                            <small className="float-left text-secondary">choose slot</small><br/>
                            <button class=" float-left btn btn-outline-dark rounded-pill font-weight-bold">10:30 AM</button>
                            <button class=" float-left btn btn-outline-dark rounded-pill font-weight-bold ml-5">5 PM</button>
                            <button class=" float-left btn btn-outline-dark rounded-pill font-weight-bold ml-5">6:30 PM</button><br/><br/>
                            <small className="float-left text-secondary ml-4">2/3 seat left</small>
                            <small className="float text-secondary mr-4">1/5 seat left</small><br/><br/>
                            <small className="float-left text-secondary">class Fee</small><br/>
                            <button class=" float-left btn btn-outline-secondary"><small class="text-primary"><del>INR 120</del></small><strong class="text-dark"> INR 60</strong></button>
                            <small className="text-danger float-left ml-5"><u>Earn 100+ points</u></small><br/><br/>
                            <button class="btn btn-danger float-left "><strong className="m-5">Book this class for free</strong></button>
                            <button type="button" class="btn btn-outline-danger">Share</button>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Body
