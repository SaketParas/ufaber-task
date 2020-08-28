import React, { Component } from 'react';
import RemoveIcon from '@material-ui/icons/Remove';


class MidBody extends Component {
    render() {
        return (
                <div className="container mt-5">
                <RemoveIcon color="secondary" className="float-left" /><br />
                <div>
                    <h4 class="font-italic float-left font-weight-bolder">What goals, Badges & sklls will be achivedin this class?</h4><br />
                    <small class="float-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                         standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                          a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                           remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                           Lorem Ipsum passages,vfvf and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</small>
                </div><br />
                <RemoveIcon color="secondary" className="float-left mt-5" /><br />
                <div><br />
                    <h4 class="font-italic float-left font-weight-bolder mt-5">What are the post-class Assignments?</h4><br /><br />
                    <div className=" container col-8 mt-5  float-left">
                        <div class="row  float-left">
                            <div class="col ">
                                <div class="card ">
                                    <img className="bg-primary" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDYWD8a_inj0uOIF5kVTYGwnGehIHGS6oRkA&usqp=CAU" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text float-left">#3 words in</p><br />
                                        <p class="card-text float-left">French</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDYWD8a_inj0uOIF5kVTYGwnGehIHGS6oRkA&usqp=CAU" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text float-left">#3 words in</p><br />
                                        <p class="card-text float-left">French</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <RemoveIcon color="secondary" className="float-left mt-5" /><br /> */}
                <div className="mb-5">
                    <h4 class="font-italic float-left font-weight-bolder mt-5">What goals, Badges & sklls will be achivedin this class?</h4><br />
                    <small class="float-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                         standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                          a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                           remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                           Lorem Ipsum passages,vfvf and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</small>
                </div>
                <RemoveIcon color="secondary" className="float-left mt-5" /><br />
                <div className="mt-5">
                    <h4 class="font-italic float-left font-weight-bolder mt-5">What goals, Badges & sklls will be achivedin this class?</h4><br />
                    <div class="card-deck mt-5 float-left">
                    <div class="card bg-light">
                            <div className="">
                            <img src="https://globaljourneys.tiny.pictures/images/logos/globe_new.png"/>
                            </div>
                            <div class="card-body">
                            <h6 class="card-title text-danger font-weight-bold">STEP 1</h6>
                            <h6 class="card-title">BOOK YOUR CLASS</h6>
                                <small>Go to calender & choose from the wide range of masterClass</small>
                            </div>
                        </div>
                        <div class="card bg-light">
                            <div className="">
                            <img src="https://assets.coingecko.com/coins/images/9688/small/logo_%2817%29.png?1570828238"/>
                            </div>
                            <div class="card-body">
                            <h6 class="card-title text-danger font-weight-bold">STEP 2</h6>
                            <h6 class="card-title">GET PREPARED</h6>
                                <small>Prepare of the class by following the instructions in the overview</small>
                            </div>
                        </div>
                        <div class="card bg-light">
                            <div className="">
                            <img src="https://credicxo.com/images/logo.png"/>
                            </div>
                            <div class="card-body">
                            <h6 class="card-title text-danger font-weight-bold">STEP 3</h6>
                            <h6 class="card-title">SET UP FOR CLASS</h6>
                                <small>Check the device and app requirements atleast 15 minute prior to start time</small>
                            </div>
                        </div>
                        <div class="card bg-light">
                            <div className="">
                            <img src="https://rockonrr.com/wp-content/uploads/2018/07/LOGO-no-emblem_bg-e1532362263670.png"/>
                            </div>
                            <div class="card-body">
                            <h6 class="card-title text-danger font-weight-bold">STEP 4</h6>
                            <h6 class="card-title">JOIN CLASS</h6>
                                <small>Open link send on your registered mobile or email on the device</small>
                            </div>
                        </div>
                    </div>
                    <h3></h3>
                </div>
                
            </div>
        )
    }
}

export default MidBody
