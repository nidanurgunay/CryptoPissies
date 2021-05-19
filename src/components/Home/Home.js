import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import "./Home.css"

////////////*****  ***  PISSIESSS  *** *****///////////
import barkbrown from "../../cattributes/colors/barkbrown.svg";
import cerulian from "../../cattributes/colors/cerulian.svg";
import chocolate from "../../cattributes/colors/chocolate.svg";
import coffee from "../../cattributes/colors/coffee.svg";
import cottoncandy from "../../cattributes/colors/cottoncandy.svg";
import lemonade from "../../cattributes/colors/lemonade.svg";
import oldlace from "../../cattributes/colors/oldlace.svg";
import royalblue from "../../cattributes/colors/royalblue.svg";
import royalpurple from "../../cattributes/colors/royalpurple.svg";
import scarlet from "../../cattributes/colors/scarlet.svg";
import wolfgrey from "../../cattributes/colors/wolfgrey.svg";

import Cats from "../../Cats.jpg"

class Home extends Component {

  mint = (color) => {
    console.log(color)
    this.state.contract.methods.mint(color).send({ from: this.state.account })
      .once("receipt", (receipt) => {
        this.setState({
          colors: [...this.state.colors, color]
        })
      })
  }

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
        },
        {
          img: coffee,
          name: "Coffee"
        },
        {
          img: cottoncandy,
          name: "Cotton Candy"
        },
        {
          img: lemonade,
          name: "Lemonade"
        },
        {
          img: oldlace,
          name: "Oldlace"
        },
        {
          img: royalblue,
          name: "RoyalBlue"
        },
        {
          img: royalpurple,
          name: "RoyalPurple"
        },
        {
          img: scarlet,
          name: "Scarlet"
        },
        {
          img: wolfgrey,
          name: "WolfGrey"
        }]
    }
  }



  render() {
    const { pissieImgs } = this.state;
    return (
      <div className="container">
        <img src={Cats} alt="cat" style={{width:"100%", marginBottom:"30px"}}></img>
        <div className="Header">
          CryptoPisi Collection
        </div>
        <div className="cardContainer">
          {
            pissieImgs.map((pisi) => (
              <div className="marketCard ">
                <Card style={{ width: '18rem' , backgroundColor:"#faf2e6"}}>
                  <Card.Img variant="top" src={pisi.img} />
                  <Card.Body style={{marginTop:"-50px"}}>
                    <Card.Title style={{fontFamily:"inherit"}}>{pisi.name}</Card.Title>
                    {/* <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
</Card.Text> */}
                    <Button variant="info">Purchase Me!</Button>
                    <Button variant="primary" style={{backgroundColor:"#f7bc56", borderColor:"#f7bc56", marginTop:"10px"}}>Check My Genes!</Button>
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

export default Home;
