import React, { Component } from 'react';
import Navbar from './Navbar';
import Body from './Body';
import MidBody from './MidBody';
import BottomNav from './BottomNav';



export class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Body />
                <MidBody />
                <BottomNav />
            </div>
        )
    }
}

export default Home
