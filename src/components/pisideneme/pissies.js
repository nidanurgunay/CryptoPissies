import React, { Component } from 'react';
import nullcat from "../../cattributes/nullcat.svg";
import calicol from "../../cattributes/body/chartreux-calicool.svg";
import lemonade from "../../cattributes/colors/lemonade.svg";
import chocolate from "../../cattributes/colors/chocolate.svg";
import crazyeye from "../../cattributes/eye/crazy.svg";
import fabulouseye from "../../cattributes/eye/fabulous.svg";
import beard from "../../cattributes/mouth/beard.svg";
import dali from "../../cattributes/mouth/dali.svg";


import "./pissies.css"
class Pissi extends Component {

    componentDidMount = () => {
        console.log("props", this.props)
    }
    render() {
        console.log("props", this.props)
        return (
            <>
                <div className="pisicontainer">
                    <div className="pisibody">
                        <img className="pissi" src={calicol} alt="nullcat"></img>
                    </div>
                    <div className="pisieye">
                        <img className="pissi" src={crazyeye} alt="nullcat"></img>
                    </div>
                    <div className="pisimouth">
                        <img className="pissi" src={dali} alt="nullcat"></img>
                    </div>
                </div>

            </>
        );
    }
}

export default Pissi;