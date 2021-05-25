import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home.js"
import NavBar from "./NavBar/NavBar.js"
import Pissi from "./pisideneme/pissies.js"
import About from "./About/About.js"
import MyPisies from "./PisiCollection/MyPisies.js"
import Web3 from "web3";
import Pisi from "../abis/Pisi.json";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from "../logo2.png"
import "./NavBar/Navbar.css"
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      account: "",
      contract: "",
      contractAddress: "",
      myPissies: [],
    }
  }

  async componentDidMount() {

    // if (typeof web3 !== 'undefined') {
    //   App.web3Provider = web3.currentProvider;
    //   web3 = new Web3(web3.currentProvider);
    // } else {
    //   // If no injected web3 instance is detected, fallback to Ganache.
    //   App.web3Provider = new web3.providers.HttpProvider('http://127.0.0.1:7545');
    //   web3 = new Web3(App.web3Provider);
    // }
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    } else {
      window.alert("Non-Ethereum browser detected. You should consider using MetaMask!")
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    console.log("accouts", accounts)
    this.setState({ account: accounts[0] })
    localStorage.setItem("accounttaddress",this.state.account)
    const networkId = await web3.eth.net.getId()
    console.log("networkId", networkId)
    const networkData = Pisi.networks[networkId]
    console.log("networkData", networkData)
    if (networkData) {
      const abi = Pisi.abi
      const address = networkData.address
    
      const contract = new web3.eth.Contract(abi, address)
      this.setState({ contract })
      localStorage.setItem("contractAddress",networkData.address)
     
      const totalSupply = await contract.methods.totalSupply().call()
      console.log("beforemint acccount", this.state.account)
      
      const pisies = await contract.methods.gatherPersonalPisis().call()
      console.log("mapisiiii",pisies)
      this.setState({ myPissies: pisies });
      const pisiessale = await contract.methods._pisiHashesToSell.call()
      //const res = await contract.methods.mint().send({ from: this.state.account })
      // debugger;
      // console.log("res1", res)
      this.setState({ totalSupply })
     
      // for (var i = 0; i < totalSupply; i++) {
      //     const color = await contract.methods.colors(i).call()
      //     this.setState({ colors: [...this.state.colors, color] })
      // }


    } else {
      window.alert("Smart contract is not deployed in this network!!!")
    }
  }

  mint = () => {
    console.log("mintteyim",this.state.contract)
    var res = this.state.contract.methods.mint().send({ from: this.state.account })
      .once("receipt", (receipt) => {
        console.log("mint receipt", receipt)
      })
    console.log("hsjkdak")
    console.log("res", res)
  }
  render() {
    const localaccount= localStorage.getItem("accounttaddress")
  
    return (
      <>
        <div className="Navdiv">

          <Navbar className="nav" bg="dark" variant="dark">
            <img src={logo} width="60px" height="45px" alt="logo" />

            <Nav.Link eventKey="disabled" className="pisi" disabled>
              CryptoPisies
     </Nav.Link>
            {/* <div className="navbar-brand col-sm-3 col-md-2 mr-0">
        CryptoPisies
    </div> */}

            <Nav className="mr-auto">
              <Nav.Link href="/">Market Place</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
              <Nav.Link href="/MyPisies">My Pisi Collection</Nav.Link>
            </Nav>

            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Account ID: <a href="#login">{localaccount}</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <br />

        <Switch>
          <Route path="/About" component={About}></Route>
          <Route path="/Pisi" component={Pissi}></Route>
          <Route path="/MyPisies" component={MyPisies}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </>
    );
  }
}

export default App;
