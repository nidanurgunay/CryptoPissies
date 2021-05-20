import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import "./MyPisies.css"

////////////*****  ***  PISSIESSS  *** *****///////////
import barkbrown from "../../cattributes/colors/barkbrown.svg";
import cerulian from "../../cattributes/colors/cerulian.svg";
import chocolate from "../../cattributes/colors/chocolate.svg";



import Cats from "../../Cats.jpg"

class MyPisi extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pissieImgs: [
                {
                    img: barkbrown,
                    name: "Bark Brown"
                },
                {
                    img: cerulian,
                    name: "Cerulian"
                },
                {
                    img: chocolate,
                    name: "Chocolate"
                }
            ]
        }
    }

    handleinputSale = () => {

    }

    render() {
        const { pissieImgs } = this.state;
        return (
            <div className="container">
                <img src={Cats} alt="cat" style={{ width: "100%", marginBottom: "30px" }}></img>
                <div className="Header">
                    My Pisi Collection
        </div>
                <div className="cardContainer">
                    {
                        pissieImgs.map((pisi) => (
                            <div className="marketCard ">
                                <Card style={{ width: '38rem', backgroundColor: "#faf2e6" }}>
                                    <Card.Img style={{ marginTop: "-50px" }} variant="top" src={pisi.img} />
                                    <Card.Body style={{ marginTop: "-50px" }}>
                                        <Card.Title style={{ fontFamily: "inherit", fontSize: "3rem" }}>{pisi.name}</Card.Title>

                                        <div className="buttongroup">
                                            <Button variant="primary" style={{ backgroundColor: "rgb(74 159 185 / 75%)", borderColor: "rgb(74 159 185 / 75%)", marginTop: "10px" }}>Breed Me!</Button>
                                            <Button variant="primary" style={{ backgroundColor: "#f7bc56", borderColor: "#f7bc56", marginTop: "10px" }}>Check My Genes!</Button>
                                            <Button variant="primary" style={{ backgroundColor: "rgb(182 133 183)", borderColor: "rgb(182 133 183)", marginTop: "10px" }}>Check My Features!</Button>
                                            <Button variant="info" style={{ backgroundColor: "rgb(79 160 100 / 75%)", borderColor: "rgb(79 160 100 / 75%)", marginTop: "10px" }} onClick={this.handleinputSale}>Feed Me!</Button>
                                            <Button variant="info" style={{ backgroundColor: "rgb(247 108 86 / 84%)", borderColor: "rgb(247 108 86 / 84%)", marginTop: "10px" }} onClick={this.handleinputSale}>Sell Me!</Button>

                                        </div>


                                    </Card.Body>
                                </Card>
                            </div>
                        )
                        )
                    }
                </div>
            </div>
        );
    }
}

export default MyPisi;
