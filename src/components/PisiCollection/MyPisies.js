import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import "./MyPisies.css"
import Web3 from "web3";
import Pisi from "../../abis/Pisi.json";
import Cats from "../../Cats.jpg"
import ProgressBar from 'react-bootstrap/ProgressBar'
import Modal from 'react-modal';

////////////*****  ***  PISSIESSS  *** *****///////////

import chartreux_calicool from "../../cattributes/body/chartreux-calicool.svg";
import chartreux_jaguar from "../../cattributes/body/chartreux-jaguar.svg";
import chartreux_luckystripe from "../../cattributes/body/chartreux-luckystripe.svg";
import chartreux_spock from "../../cattributes/body/chartreux-spock.svg";
import chartreux_tigerpunk from "../../cattributes/body/chartreux-tigerpunk.svg";
import cymric_calicool from "../../cattributes/body/cymric-calicool.svg";
import cymric_jaguar from "../../cattributes/body/cymric-jaguar.svg";
import cymric_luckystripe from "../../cattributes/body/cymric-luckystripe.svg";
import cymric_spock from "../../cattributes/body/cymric-spock.svg";
import cymric_tigerpunk from "../../cattributes/body/cymric-tigerpunk.svg";
import cymric_totesbasic from "../../cattributes/body/cymric-totesbasic.svg";
import himalayan_calicool from "../../cattributes/body/himalayan-calicool.svg";
import himalayan_jaguar from "../../cattributes/body/himalayan-jaguar.svg";
import himalayan_luckystripe from "../../cattributes/body/himalayan-luckystripe.svg";
import himalayan_spock from "../../cattributes/body/himalayan-spock.svg";
import himalayan_tigerpunk from "../../cattributes/body/himalayan-tigerpunk.svg";
import himalayan_totesbasic from "../../cattributes/body/himalayan-totesbasic.svg";
import laperm_calicool from "../../cattributes/body/laperm-calicool.svg";
import laperm_jaguar from "../../cattributes/body/laperm-jaguar.svg";
import laperm_luckystripe from "../../cattributes/body/laperm-luckystripe.svg";
import laperm_spock from "../../cattributes/body/laperm-spock.svg";
import laperm_tigerpunk from "../../cattributes/body/laperm-tigerpunk.svg";
import laperm_totesbasic from "../../cattributes/body/laperm-totesbasic.svg";
import mainecoon_calicool from "../../cattributes/body/mainecoon-calicool.svg";
import mainecoon_jaguar from "../../cattributes/body/mainecoon-jaguar.svg";
import munchkin_luckystripe from "../../cattributes/body/munchkin-luckystripe.svg";
import munchkin_spock from "../../cattributes/body/munchkin-spock.svg";
import munchkin_tigerpunk from "../../cattributes/body/munchkin-tigerpunk.svg";
import ragamuffin_totesbasic from "../../cattributes/body/ragamuffin-totesbasic.svg";
import sphynx_calicool from "../../cattributes/body/sphynx-calicool.svg";
import sphynx_jaguar from "../../cattributes/body/sphynx-jaguar.svg";
import sphynx_tigerpunk from "../../cattributes/body/sphynx-tigerpunk.svg";
import sphynx_luckystripe from "../../cattributes/body/sphynx-luckystripe.svg";
import sphynx_spock from "../../cattributes/body/sphynx-spock.svg";
import sphynx_totesbasic from "../../cattributes/body/sphynx-totesbasic.svg";


import beard from "../../cattributes/mouth/beard.svg";
import dali from "../../cattributes/mouth/dali.svg";
import gerbil from "../../cattributes/mouth/gerbil.svg";
import happygokitty from "../../cattributes/mouth/happygokitty.svg";
import pouty from "../../cattributes/mouth/pouty.svg";
import saycheese from "../../cattributes/mouth/saycheese.svg";
import soserious from "../../cattributes/mouth/soserious.svg";
import whixtensions from "../../cattributes/mouth/whixtensions.svg";

import crazy from "../../cattributes/eye/crazy.svg";
import fabulous from "../../cattributes/eye/fabulous.svg";
import googly from "../../cattributes/eye/googly.svg";
import otaku from "../../cattributes/eye/otaku.svg";
import raisedbrow from "../../cattributes/eye/raisedbrow.svg";
import simple from "../../cattributes/eye/simple.svg";
import thicccbrowz from "../../cattributes/eye/thicccbrowz.svg";
import wingtips from "../../cattributes/eye/wingtips.svg";

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

class MyPisi extends Component {

    constructor(props) {
        super(props)
        this.state = {
            account: "",
            count: "",
            pisicount: "",
            myPisies: [],
            bodyColor: [],
            beardSize: [],
            eyeColor: [],
            hungerness: [],
            fragility: [],
            fertility: [],
            appeal: [],
            eyeColor: [],
            eyeSize: [],
            headColor: [],
            headSize: [],
            beardSize: [],
            bodyColor: [],
            tailColor: [],
            tailAccentColor: [],
            tailSize: [],
            bodyAccentColor: [],
            stripeType: [],
            gene: [false],
            putSale: [false],
            checkBreed: [false],
            Breed: false,
            putSalePrice: [""],
            mainBreed: "",
            breedCheck: false,
            errorcheck: false,
            breedindex: [],
            breedCount:0,
            pissieCatBody: [
                chartreux_calicool,
                chartreux_jaguar,
                chartreux_luckystripe,
                chartreux_spock,
                chartreux_tigerpunk,
                cymric_calicool,
                cymric_jaguar,
                cymric_luckystripe,
                cymric_spock,
                cymric_tigerpunk,
                cymric_totesbasic,
                himalayan_calicool,
                himalayan_jaguar,
                himalayan_luckystripe,
                himalayan_spock,
                himalayan_tigerpunk,
                himalayan_totesbasic,
                laperm_calicool,
                laperm_jaguar,
                laperm_luckystripe,
                laperm_spock,
                laperm_tigerpunk,
                laperm_totesbasic,
                mainecoon_jaguar,
                mainecoon_calicool,
                munchkin_luckystripe,
                munchkin_spock,
                ragamuffin_totesbasic,
                munchkin_tigerpunk,
                sphynx_calicool,
                sphynx_jaguar,
                sphynx_tigerpunk,
                sphynx_luckystripe,
                sphynx_spock,
                sphynx_totesbasic
            ],
            pissieCatMouth: [
                beard,
                dali,
                gerbil,
                happygokitty,
                pouty,
                saycheese,
                soserious,
                whixtensions
            ],
            pissieCatEye: [
                crazy,
                fabulous,
                googly,
                otaku,
                raisedbrow,
                simple,
                thicccbrowz,
                wingtips
            ],
            pissieName: [
                "Pamuk",
                "Bihter",
                "Duman",
                "Fadik",
                "Cazibe",
                "Cindy",
                "Doli",
                "Winnie",
                "Yumoş",
                "Gümüş",
                "Pekmez",
                "Lila",
                "Heidi",
                "Ivy",
                "Layla",
                "Jasmine",
                "Ellie",
                "Lola",
                "Dacota",
                "Alis",
                "Tasha",
                "Mia",
                "Prenses",
                "Zilli",
                "Safiye",
                "Mia",
                "İrmik",
                "Moli",
                "Lucy",
                "Angel",
                "Salvia",
                "Sina",
                "Ariel",
                "Belle",
                "Fiona",
                "Jessie",
                "Buddy",
                "Lord",
                "Oliver",
                "Camaro",
                "Methy",
                "Katya",
                "Nani",
                "Fıstık",
                "Pati",
                "Boncuk",
                "İlda",
                "Juliet",
                "Kekik",
                "Miyu",
                "Nina",
                "Peri",
                "Şaşkın",
                "Sabun",
                "Riba",
                "Peti",
                "Sufle",
                "Toşya"
            ]
        }
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
    async componentDidMount() {
        await this.loadWeb3()
        const address = localStorage.getItem("accounttaddress");
        this.setState({ account: address })
        const web3 = window.web3
        const networkId = await web3.eth.net.getId()
        const networkData = Pisi.networks[networkId]

        if (networkData) {
            const abi = Pisi.abi
            const address = networkData.address

            const contract = new web3.eth.Contract(abi, address)
            this.setState({ contract })
            localStorage.setItem("contractAddress", networkData.address)

            const count = (await contract.methods.onSaleCount().call()).toNumber();
            this.setState({ count: count })

            var myPissie = [];


            console.log("acc", localStorage.getItem("accounttaddress"))

            console.log("count", count)
            var { gene, putSale, putSalePrice, Breed, eyeColor, eyeSize, headColor, headSize, beardSize, bodyColor,
                tailColor, tailAccentColor, tailSize, bodyAccentColor, stripeType } = this.state;

            for (var i = 0; i < 3; i++) {
                const pisiessale = await contract.methods._pisiHashesToSell(i).call();
                gene[i] = false;
                putSale[i] = false;


                putSalePrice[i] = "";
                const Sale = await contract.methods.getSale(pisiessale).call()
                console.log("sale", Sale)
                if (Sale) {


                    const EyeColor = await contract.methods.getEyeColor(pisiessale).call();
                    const EyeSize = await contract.methods.getEyeSize(pisiessale).call();
                    const HeadColor = await contract.methods.getHeadColor(pisiessale).call();
                    const HeadSize = await contract.methods.getHeadSize(pisiessale).call();
                    const BeardSize = await contract.methods.getBeardSize(pisiessale).call();
                    const TailColor = await contract.methods.getTailColor(pisiessale).call();
                    const TailAccentColor = await contract.methods.getTailAccentColor(pisiessale).call();
                    const TailSize = await contract.methods.getTailSize(pisiessale).call();
                    const BodyColor = await contract.methods.getBodyColor(pisiessale).call();
                    const BodyAccentColor = await contract.methods.getBodyAccentColor(pisiessale).call();
                    const StripeType = await contract.methods.getStripeType(pisiessale).call();

                    eyeColor[i] = EyeColor;
                    eyeSize[i] = EyeSize;
                    headColor[i] = HeadColor;
                    headSize[i] = HeadSize;
                    beardSize[i] = BeardSize;
                    bodyColor[i] = BodyColor;
                    tailColor[i] = TailColor;
                    tailAccentColor[i] = TailAccentColor;
                    tailSize[i] = TailSize;
                    bodyAccentColor[i] = BodyAccentColor;
                    stripeType[i] = StripeType;
                    myPissie.push(pisiessale)

                }
            }
            console.log("eyecolors", this.state.eyeColor)
            // this.setState({ pisicount: pisicount })
            this.setState({ myPisies: myPissie })

            this.setState({ eyeColor: eyeColor })
            this.setState({ eyeSize: eyeSize })
            this.setState({ headColor: headColor })
            this.setState({ headSize: headSize })
            this.setState({ beardSize: beardSize })
            this.setState({ bodyColor: bodyColor })
            this.setState({ tailColor: tailColor })
            this.setState({ tailAccentColor: tailAccentColor })
            this.setState({ tailSize: tailSize })
            this.setState({ bodyAccentColor: bodyAccentColor })
            this.setState({ stripeType: stripeType })
            this.setState({ gene: gene })
            this.setState({ putSale: putSale })
            this.setState({ putSalePrice: putSalePrice })
            this.setState({ Breed: Breed })
            console.log("pissies", myPissie)
            console.log("gene", gene)



        } else {
            window.alert("Smart contract is not deployed in this network!!!")
        }

    }


    handleProgresCcolor = (value) => {
        if (value < 25)
            return "danger";
        else if (value < 45)
            return "warning";
        else
            return "success";
    }
    handleBody = (hash) => {
        var value = hash,
            sum = 0;

        while (value) {
            sum += value % 10;
            value = Math.floor(value / 10);
        }
        return sum % this.state.pissieCatBody.length;

    }
    handleName = (hash) => {
        var value = hash,
            sum = 0;

        while (value) {
            sum += value % 10;
            value = Math.floor(value / 10);
        }
        return sum % this.state.pissieName.length;

    }

    handleMouth = (hash) => {
        var value = hash,
            sum = 0;

        while (value) {
            sum += value % 10;
            value = Math.floor(value / 10);
        }
        return sum % this.state.pissieCatMouth.length;

    }

    handleEye = (hash) => {
        var value = hash,
            sum = 0;

        while (value) {
            sum += value % 10;
            value = Math.floor(value / 10);
        }
        return sum % this.state.pissieCatEye.length;

    }

    async putToSale(i) {
        const web3 = window.web3
        const amountToSend = web3.utils.toWei("11", "ether")
        const contract = this.state.contract;

        const hash = this.state.myPisies[i];
        const price = this.state.putSalePrice[i];

        await contract.methods.putToSale(hash).call();

    }

    handleGene(i) {
        var { gene } = this.state;
        gene[i] = !gene[i];
        this.setState({ gene: gene });
    }

    handlePutSale(i) {
        var { putSale } = this.state;
        putSale[i] = !putSale[i];
        this.setState({ putSale: putSale });
    }

    handleCheck(e, i) {
        var { checkBreed } = this.state;
        if (this.state.mainBreed !== i){
            checkBreed[i] = e.target.checked;   
        }
        else{

        }
        this.setState({ checkBreed: checkBreed });

    }

    handleBreed(index) {
        var { Breed, checkBreed } = this.state;
        console.log("bredindex", index)
        Breed = !Breed;
        for (var i = 0; i < checkBreed.length; i++) {
            if (index === i) {
                checkBreed[index] = true;
            } 
            else
            checkBreed[index] = false;
        }
        this.setState({ Breed: Breed });
        this.setState({ checkBreed: checkBreed });
        this.setState({ mainBreed: index });

    }

    // handleBreed() {
    //     var { breedindex,checkBreed } = this.state;

    //     if (breedindex.length === 2) {
            
    //          Breed = !Breed;

    //         for (var i = 0; i < checkBreed.length; i++) {
    //             if (index === i) {
    //                 checkBreed[index] = true;
    //             }
    //             else {
    //                 checkBreed[index] = false;
    //             }
    //         }
    //         this.setState({ Breed: Breed });
    //         this.setState({ checkBreed: checkBreed });
    //         this.setState({ mainBreed: index });
    //     }

    // }

    handleBreedd(index) {
        console.log("handleBreedd index", index)
        var { checkBreed, breedindex } = this.state;
        if (this.state.mainBreed !== index)
            checkBreed[index] = true;
        var count = 0;
        console.log("checkBreed", this.state.checkBreed)

        for (var i = 0; i < checkBreed.length; i++) {
            if (checkBreed[i] === true) {               
                count++;
            }
        }
        this.setState({ breedCount: count })

        if (count === 2) {
            count=0;
            for (var i = 0; i < checkBreed.length; i++) {
                if (checkBreed[i] === true) { 
                    breedindex[count] = i;
                    count++;
                }
            }
            this.setState({ breedindex: breedindex });
            this.setState({ breedCheck: true })
            this.setState({ errorcheck: false })
        }
        else {
            window.alert("You should select only 2 Pisies!")
            
        }

        this.setState({ checkBreed: checkBreed });
      
        console.log("breedindex", this.state.breedindex)
    }

    handlePrice(e, i) {
        var { putSalePrice } = this.state;
        putSalePrice[i] = e.target.value;
        this.setState({ putSalePrice: putSalePrice });

    }
    handleColor = (color) => {
        color = "#" + color;
        return color;
    }
    openModal = (str, e) => {
        this.setState({ [str]: true })
    }

    closeModal = (str, e) => {
        this.setState({ [str]: false })
        window.location.reload(false)
    }
    // handleColor = (color) => {
    //     color = "#" + color;
    //     return color;
    // }

    // handleColor = (color) => {
    //     color = "#" + color;
    //     return color;
    // }

    // handleColor = (color) => {
    //     color = "#" + color;
    //     return color;
    // }

    render() {
        return (
            <div className="container">
                <img src={Cats} alt="cat" style={{ width: "100%", marginBottom: "80px" }}></img>
                <div className="Header">
                    My Pisi Collection
        </div>
                <div className="cardContainer" style={{ justifyContent: "center" }}>
                    {
                        this.state.myPisies.map((pisi, index) => (
                            <div className="marketCard ">
                                <Card style={{ width: '40rem', backgroundColor: "#faf2e6" }}>

                                    <Card.Body style={{ marginTop: "0px" }}>
                                        <div className="pisiContainer">
                                            <div className="pisiBody">
                                                <img className="Pissi" src={this.state.pissieCatBody[this.handleBody(this.state.bodyColor[index])]} alt="body"></img>
                                            </div>
                                            <div className="pisieye">
                                                <img className="Pissi" src={this.state.pissieCatEye[this.handleEye(this.state.eyeColor[index])]} alt="eye"></img>
                                            </div>
                                            <div className="pisimouth">
                                                <img className="Pissi" src={this.state.pissieCatMouth[this.handleMouth(this.state.beardSize[index])]} alt="mouth"></img>
                                            </div>
                                        </div>
                                    </Card.Body>


                                    <Card.Body style={{ marginTop: "-20px" }}>
                                        <Card.Text style={{ fontSize: "2rem", color: " #885086" }}>
                                            Your Pisi <p className="pisiName"> {this.state.pissieName[this.handleName(this.state.myPisies[index])]} </p>is Here! <br></br>
                                            {/* <p className="pisiName"> {this.state.price}  <i className="fab fa-ethereum"></i></p> */}
                                        </Card.Text>
                                        <ProgressBar className="Progress" variant={this.handleProgresCcolor(42)} label={"HUNGERNESS   " + `${42}%`} animated now={43} />
                                        <ProgressBar className="Progress" variant={this.handleProgresCcolor(22)} label={"FRAGILITY   " + `${22}%`} animated now={22} />
                                        <ProgressBar className="Progress" variant={this.handleProgresCcolor(66)} label={"FERTILITY   " + `${66}%`} animated now={66} />
                                        <ProgressBar className="Progress" variant={this.handleProgresCcolor(36)} label={"APPEAL   " + `${36}%`} animated now={36} />

                                        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
                                            <Button variant="outline-info" onClick={() => this.handlePutSale(index)}>Put Me on Sale</Button>
                                            <Button variant="outline-primary" style={{}} onClick={() => this.handleGene(index)}>Check My Genes!</Button>
                                            {this.state.Breed === false ?
                                                <Button variant="outline-success" style={{ marginRight: "5px" }} onClick={() => this.handleBreed(index)} >Breed!</Button>
                                                : null}
                                            <Button variant="outline-warning" style={{ marginRight: "5px" }} onClick={() => this.openModal("showfeed")} >Feed!</Button>
                                        </div>
                                        {this.state.Breed === true ?
                                            <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center", color: "#881c84", fontSize: "20px" }}>
                                                <input style={{ width: "30px", height: "30px", marginRight: "10px" }} type="checkbox" onChange={(e) => this.handleCheck(e, index)} checked={this.state.checkBreed[index]} />
                                                <Button variant="outline-success" onClick={() => this.handleBreedd(index)}>Breed {this.state.mainBreed !== index ? "with" : null} me</Button>
                                                <Modal
                                                    isOpen={this.state.breedCheck}
                                                    onRequestClose={() => this.closeModal("breedCheck")}
                                                    style={customStyles}

                                                >
                                                    <div style={{ width: "100vh", height: "70vh" }}>
                                                        <div className="modal-header">
                                                            <Button variant="outline-success" style={{ marginRight: "5px" }} onClick={() => this.handleBreed_()} >Breed Them!</Button>
                                                            <button type="button" className="close" aria-hidden="true" onClick={() => this.closeModal("breedCheck")}>×</button>
                                                        </div>
                                                        <div className="Text" style={{ display: "flex", justifyContent: "center" }}>
                                                            {
                                                                this.state.breedindex.map((h) =>

                                                                    <div style={{ display: "block", justifyContent: "center", margin: "30px" }}>
                                                                        <div className="pisi_Container">
                                                                            <div className="pisiBody">
                                                                                <img className="Pissi_" src={this.state.pissieCatBody[this.handleBody(this.state.bodyColor[h])]} alt="body"></img>
                                                                            </div>
                                                                            <div className="pisieye">
                                                                                <img className="Pissi_" src={this.state.pissieCatEye[this.handleEye(this.state.eyeColor[h])]} alt="eye"></img>
                                                                            </div>
                                                                            <div className="pisimouth">
                                                                                <img className="Pissi_" src={this.state.pissieCatMouth[this.handleMouth(this.state.beardSize[h])]} alt="mouth"></img>
                                                                            </div>


                                                                        </div>
                                                                        <div style={{ display: "flex", justifyContent: "center" }}>
                                                                            <p style={{ width: "15rem", marginTop: "20px" }} className="pisiName"> {this.state.pissieName[this.handleName(this.state.myPisies[h])]} </p>
                                                                        </div>

                                                                        <ProgressBar className="Progress" variant={this.handleProgresCcolor(42)} label={"HUNGERNESS   " + `${42}%`} animated now={43} />
                                                                        <ProgressBar className="Progress" variant={this.handleProgresCcolor(22)} label={"FRAGILITY   " + `${22}%`} animated now={22} />
                                                                        <ProgressBar className="Progress" variant={this.handleProgresCcolor(66)} label={"FERTILITY   " + `${66}%`} animated now={66} />
                                                                        <ProgressBar className="Progress" variant={this.handleProgresCcolor(36)} label={"APPEAL   " + `${36}%`} animated now={36} />
                                                                    </div>

                                                                )
                                                            }
                                                        </div>

                                                    </div>
                                                </Modal>


                                            </div>
                                            : null}
                                        {/* {this.state.mainBreed === index ?

                                            <div>
                                                {this.state.errorcheck === true ?
                                                    <div style={{ color: "#881c84", marginTop: "10px" }}>Please select 2 of your Pisies! </div>
                                                    : null}
                                            </div>
                                            : null} */}

                                        {this.state.putSale[index] === true ?
                                            <div style={{ marginTop: "10px", color: "ivory" }}>
                                                <form>
                                                    <label>
                                                        <input type="number" name="name" placeholder="Enter Price" onChange={(e) => this.handlePrice(e, index)} />
                                                    </label>
                                                    <Button variant="info" style={{ marginLeft: "10px" }} onClick={() => this.putToSale(index)}>Put Me on Sale</Button>

                                                </form>


                                            </div>
                                            : null
                                        }
                                        {this.state.gene[index] === true ?
                                            <div className="genes">

                                                <table >
                                                    <tr>
                                                        <td><div className="gene">Eye Color:</div>  </td>
                                                        <td><div className="color" style={{ backgroundColor: this.handleColor(this.state.eyeColor[index]) }}></div></td>
                                                        <td><div className="Gene">#{this.state.eyeColor[index]}</div></td>
                                                    </tr>
                                                    <tr>
                                                        <td><div className="gene">Head Color:</div>  </td>
                                                        <td><div className="color" style={{ backgroundColor: this.handleColor(this.state.headColor[index]) }}></div></td>
                                                        <td><div className="Gene">#{this.state.headColor[index]}</div></td>
                                                    </tr>
                                                    <tr>
                                                        <td><div className="gene">Body Color:</div>  </td>
                                                        <td><div className="color" style={{ backgroundColor: this.handleColor(this.state.bodyColor[index]) }}></div></td>
                                                        <td><div className="Gene">#{this.state.bodyColor[index]}</div></td>
                                                    </tr>
                                                    <tr>
                                                        <td><div className="gene">Body Accent Color:</div>  </td>
                                                        <td><div className="color" style={{ backgroundColor: this.handleColor(this.state.bodyAccentColor[index]) }}></div></td>
                                                        <td><div className="Gene">#{this.state.bodyAccentColor[index]}</div></td>
                                                    </tr>
                                                    <tr>
                                                        <td><div className="gene">Tail Color:</div>  </td>
                                                        <td><div className="color" style={{ backgroundColor: this.handleColor(this.state.tailColor[index]) }}></div></td>
                                                        <td><div className="Gene">#{this.state.tailColor[index]}</div></td>
                                                    </tr>
                                                    <tr>
                                                        <td><div className="gene">Tail Accent Color:</div>  </td>
                                                        <td><div className="color" style={{ backgroundColor: this.handleColor(this.state.tailAccentColor[index]) }}></div></td>
                                                        <td><div className="Gene">#{this.state.tailAccentColor[index]}</div></td>
                                                    </tr>
                                                    <tr>
                                                        <td><div className="gene">Eye Size:</div>  </td>
                                                        <td><div></div></td>
                                                        <td><div className="Gene">{this.state.eyeSize[index]}</div></td>
                                                    </tr>
                                                    <tr>
                                                        <td><div className="gene">Head Size:</div>  </td>
                                                        <td><div></div></td>
                                                        <td><div className="Gene">{this.state.headSize[index]}</div></td>
                                                    </tr>
                                                    <tr>
                                                        <td><div className="gene">Beard Size:</div>  </td>
                                                        <td><div></div></td>
                                                        <td><div className="Gene">  {this.state.beardSize[index]}</div></td>
                                                    </tr>
                                                    <tr>
                                                        <td><div className="gene">Tail Size:</div>  </td>
                                                        <td><div></div></td>
                                                        <td><div className="Gene">{this.state.tailSize[index]}</div></td>
                                                    </tr>
                                                    <tr>
                                                        <td><div className="gene">Stripe Type:</div>  </td>
                                                        <td><div></div></td>
                                                        <td><div className="Gene">{this.state.stripeType[index]}</div></td>
                                                    </tr>
                                                </table>

                                            </div>
                                            : null}

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
