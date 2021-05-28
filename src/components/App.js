import React, { Component } from 'react';
import { Router } from 'react-router';
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home.js"
import About from "./About/About.js"
import MyPisies from "./PisiCollection/MyPisies.js"
import Pissi from "./PisiCollection/Pisi.js"
import Web3 from "web3";
import Pisi from "../abis/Pisi.json";
import createHistory from 'history/createBrowserHistory';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from "../logo2.png"
import "./NavBar/Navbar.css"
const history = createHistory();
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      account: "",
      contract: "",
      contractAddress: "",
      myPissies: [],
      pisiSale: [],

    }
  }

  async componentDidMount() {
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


    this.setState({ account: accounts[0] })
    localStorage.setItem("accounttaddress", accounts[0])
    const networkId = await web3.eth.net.getId()
    console.log("networkId", networkId)
    const networkData = Pisi.networks[networkId]
    console.log("networkData", networkData)
    if (networkData) {
      const abi = Pisi.abi
      const address = networkData.address

      const contract = new web3.eth.Contract(abi, address)
      this.setState({ contract })
      localStorage.setItem("contractAddress", networkData.address)
       //const res = await contract.methods.mint().send({ from: this.state.account })
      //  const res1 = await contract.methods.mint().send({ from: this.state.account })
      //  const res2 = await contract.methods.mint().send({ from: this.state.account })
      //  const res3 = await contract.methods.mint().send({ from: this.state.account })
      //  const res4 = await contract.methods.mint().send({ from: this.state.account })
      //  const res5 = await contract.methods.mint().send({ from: this.state.account })
      //  const res6 = await contract.methods.mint().send({ from: this.state.account })
      //  const res7 = await contract.methods.mint().send({ from: this.state.account })
      //  const res8 = await contract.methods.mint().send({ from: this.state.account })
      //  const res9 = await contract.methods.mint().send({ from: this.state.account })

       // const totalSupply = await contract.methods.totalSupply().call()
      // console.log("beforemint acccount", this.state.account)

      // const pisies = await contract.methods.gatherPersonalPisis().call()

      // this.setState({ myPissies: pisies });
      // const count = (await contract.methods.onSaleCount().call()).toNumber();

      // var PPisies=[];
      // for (var i = 0; i < count; i++) {
      //   const pisiessale = await contract.methods._pisiHashesToSell(i).call();
      //   PPisies.push(pisiessale)
      // }
      // this.setState({pisiSale:PPisies})
      // console.log("state pisi", this.state.pisiSale);





    } else {
      window.alert("Smart contract is not deployed in this network!!!")
    }
  }

  mint = () => {
    console.log("mintteyim", this.state.contract)
    var res = this.state.contract.methods.mint().send({ from: this.state.account })
      .once("receipt", (receipt) => {
        console.log("mint receipt", receipt)
      })

  }
  render() {
    const localaccount = localStorage.getItem("accounttaddress")

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
              <Nav.Link href="/Home">Market Place</Nav.Link>
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
        <Route exact path="/" history={this.props.history} component={Home}></Route>

        <Route path="/Home" history={this.props.history} component={Home}></Route>

          <Route path="/About" component={About} ></Route>
          <Route path="/MyPisies" component={MyPisies}></Route>
          <Route exact path="/Pisi/:id" history={this.props.history} component={Pissi}></Route>

        </Switch>
      </>
    );
  }
}

export default App;
