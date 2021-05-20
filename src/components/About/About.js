import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import lemonade from "../../cattributes/colors/lemonade.svg";
import Cats from "../../Cats.jpg"
import "../Home/Home.css"
import Modal from 'react-modal';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showgene: false,
            showcatch: false,
            showbreed: false,
            showfeed: false,
            showbuy: false,
        };
    }

    openModal = (str, e) => {
        this.setState({ [str]: true })
    }

    closeModal = (str, e) => {
        this.setState({ [str]: false })
    }

    render() {
        return (
            <div className="container">
                <img src={Cats} alt="cat" style={{ width: "100%", marginBottom: "30px" }}></img>
                <div className="Header">About</div>

                <div>
                    <div className="Header2">
                        Your breedable, collectable and cutest Cryptocurrency!
        </div>
                    <div className="Text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.          </div>

                </div>

                <div className="buttongroup">
                    <Button variant="outline-primary" style={{ marginRight: "5px", color:"#a159bf", borderColor:"#a159bf" }} onClick={() => this.openModal("showgene")} >Genetic Codes!</Button>
                    <Modal
                        isOpen={this.state.showgene}
                        onRequestClose={() => this.closeModal("showgene")}
                        style={customStyles}

                    >
                        <div style={{ width: "35vh", height: "50vh" }}>
                            <div className="modal-header">
                                <h5 className="modal-title mt-0" >Genetic Codes</h5>
                                <button type="button" className="close" aria-hidden="true" onClick={() => this.closeModal("showgene")}>×</button>
                            </div>
                            <div className="Text">
                            Genetic codes of each Pisi is stored in the blockchain. Effect of genetic code is not only  phenotypes, they  also affect the functionality of each Pisi.
                        </div>
              
                        </div>
                    </Modal>

                    <Button variant="outline-secondary" style={{ marginRight: "5px" }} onClick={() => this.openModal("showcatch")} >Catch!</Button>
                    <Modal
                        isOpen={this.state.showcatch}
                        onRequestClose={() => this.closeModal("showcatch")}
                        style={customStyles}

                    >
                        <div style={{ width: "35vh", height: "50vh" }}>
                            <div className="modal-header">
                                <h5 className="modal-title mt-0" >Catch</h5>
                                <button type="button" className="close" aria-hidden="true" onClick={() => this.closeModal("showcatch")}>×</button>
                            </div>
                            <div className="Text">
                                jksadhsakj
                        </div>
                            <div style={{ display: "flex", justifyContent: "center", marginTop: "10vh" }}>
                                <button type="button" className="btn btn-secondary waves-effect m-r-5" style={{ marginRight: "5px" }} onClick={() => this.closeModal("showcatch")} ><i className="fa fa-times-circle"></i></button>

                            </div>
                        </div>
                    </Modal>


                    <Button variant="outline-success" style={{ marginRight: "5px" }} onClick={() => this.openModal("showbreed")} >Breed!</Button>

                    <Modal
                        isOpen={this.state.showbreed}
                        onRequestClose={() => this.closeModal("showbreed")}
                        style={customStyles}

                    >
                        <div style={{ width: "35vh", height: "50vh" }}>
                            <div className="modal-header">
                                <h5 className="modal-title mt-0" >Breed</h5>
                                <button type="button" className="close" aria-hidden="true" onClick={() => this.closeModal("showbreed")}>×</button>
                            </div>
                            <div className="Text">
                                jksadhsakj
                        </div>
                           
                        </div>
                    </Modal>

                    <Button variant="outline-warning" style={{ marginRight: "5px" }} onClick={() => this.openModal("showfeed")} >Feed!</Button>
                    <Modal
                        isOpen={this.state.showfeed}
                        onRequestClose={() => this.closeModal("showfeed")}
                        style={customStyles}

                    >
                        <div style={{ width: "35vh", height: "50vh" }}>
                            <div className="modal-header">
                                <h5 className="modal-title mt-0" >Feed</h5>
                                <button type="button" className="close" aria-hidden="true" onClick={() => this.closeModal("showfeed")}>×</button>
                            </div>
                            <div className="Text">
                                jksadhsakj
                        </div>
         
                        </div>
                    </Modal>

                    <Button variant="outline-info" style={{ marginRight: "5px" }} onClick={() => this.openModal("showbuy")} >Buy/Sell!</Button>
                    <Modal
                        isOpen={this.state.showbuy}
                        onRequestClose={() => this.closeModal("showbuy")}
                        style={customStyles}

                    >
                        <div style={{ width: "35vh", height: "50vh" }}>
                            <div className="modal-header">
                                <h5 className="modal-title mt-0" >Buy/Sell</h5>
                                <button type="button" className="close" aria-hidden="true" onClick={() => this.closeModal("showbuy")}>×</button>
                            </div>
                            <div className="Text">
                                jksadhsakj
                        </div>
         
                        </div>
                    </Modal>
                </div>
                <div className="button">
                    <Button variant="info">   <i className="fa fas fa-file-download"></i>
</Button>
                </div>
            </div>
        );
    }
}

export default About;