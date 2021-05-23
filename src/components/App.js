import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home.js"
import NavBar from "./NavBar/NavBar.js"
import Pissi from "./pisideneme/pissies.js"
import About from "./About/About.js"
import MyPisies from "./PisiCollection/MyPisies.js"
import Web3 from "web3";
import Pisi from "../abis/Pisi.json";
class App extends Component {

  async componentDidMount() {
    debugger;
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
    console.log(accounts)
    this.setState({ account: accounts[0] })

    const networkId = await web3.eth.net.getId()
    const networkData = Pisi.networks[networkId]
    if (networkData) {
        const abi = Pisi.abi
        const address = networkData.address
        const contract = new web3.eth.Contract(abi, address)
        this.setState({ contract })
        const totalSupply = await contract.methods.totalSupply().call()
        this.setState({ totalSupply })

        // for (var i = 0; i < totalSupply; i++) {
        //     const color = await contract.methods.colors(i).call()
        //     this.setState({ colors: [...this.state.colors, color] })
        // }

       
    } else {
        window.alert("Smart contract is not deployed in this network!!!")
    }
}
  render() {
    return (
      <>
        <NavBar></NavBar>
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
