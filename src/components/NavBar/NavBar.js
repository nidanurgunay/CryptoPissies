import Navbar from 'react-bootstrap/Navbar';
import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import Web3 from "web3";
import Pisi from "../../abis/Pisi.json";
import logo from "../../logo2.png"
import "./Navbar.css"
class NavBar extends Component {

    // async componentDidMount() {
    //     await this.loadWeb3()
    //     await this.loadBlockchainData()
    // }

    // async loadWeb3() {
    //     if (window.ethereum) {
    //         window.web3 = new Web3(window.ethereum)
    //         await window.ethereum.enable()
    //     } else if (window.web3) {
    //         window.web3 = new Web3(window.web3.currentProvider)
    //     } else {
    //         window.alert("Non-Ethereum browser detected. You should consider using MetaMask!")
    //     }
    // }

    // async loadBlockchainData() {
    //     const web3 = window.web3
    //     const accounts = await web3.eth.getAccounts()
    //     console.log(accounts)
    //     this.setState({ account: accounts[0] })

    //     const networkId = await web3.eth.net.getId()
    //     const networkData = Pisi.networks[networkId]
    //     if (networkData) {
    //         const abi = Pisi.abi
    //         const address = networkData.address
    //         const contract = new web3.eth.Contract(abi, address)
    //         this.setState({ contract })
    //         const totalSupply = await contract.methods.totalSupply().call()
    //         this.setState({ totalSupply })

    //         for (var i = 0; i < totalSupply; i++) {
    //             const color = await contract.methods.colors(i).call()
    //             this.setState({ colors: [...this.state.colors, color] })
    //         }

    //         console.log(this.state.colors)
    //     } else {
    //         window.alert("Smart contract is not deployed in this network!!!")
    //     }
    // }
    constructor(props) {
        super(props)
        this.state = { items: [], account: "0x0", contract: null }
    }

    render() {
        return (
            <div className="Navdiv">

                <Navbar className="nav" bg="dark" variant="dark">
                    <img src={logo} width="60px" height="45px" alt="logo"/>

                    <Nav.Link eventKey="disabled" className="pisi"disabled>
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
                            Account ID: <a href="#login">{this.state.account}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );

    }

}

export default NavBar;