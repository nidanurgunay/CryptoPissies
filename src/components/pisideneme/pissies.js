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

    render() {
        return (
            <>
            <svg>
            <img className ="pissi"src={calicol} alt="nullcat"></img>
            <img className ="pissi"src={fabulouseye} alt="nullcat"></img>
            <img className ="pissi"src={dali} alt="nullcat"></img>
            </svg>
                <img className ="pissi"src={nullcat} alt="nullcat"></img>
               
                <img className ="pissi"src={lemonade} alt="nullcat"></img>
                <img className ="pissi"src={crazyeye} alt="nullcat"></img>
                <img className ="pissi"src={beard} alt="nullcat"></img>
               
            </>
        );
    }
}

export default Pissi;