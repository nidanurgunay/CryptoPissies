import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import "./MyPisies.css"
import Web3 from "web3";
import Pisi from "../../abis/Pisi.json";
import Cats from "../../Cats.jpg"
import ProgressBar from 'react-bootstrap/ProgressBar'
import { withRouter } from 'react-router-dom';////////////*****  ***  PISSIESSS  *** *****///////////
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
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

class Pissi extends Component {

    constructor(props) {
        super(props)
        this.state = {
            gene: false,
            price: "",
            account: "",
            count: "",
            pisihash: "",
            myPisies: "",
            hungerness: "",
            fragility: "",
            fertility: "",
            appeal: "",
            eyeColor: "",
            eyeSize: "",
            headColor: "",
            headSize: "",
            beardSize: "",
            beardSize: "",
            bodyColor: "",
            tailColor: "",
            tailAccentColor: "",
            tailSize: "",
            bodyAccentColor: "",
            stripeType: "",
            transferSuccess: false,
            onSale: false,
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
                "Yumo??",
                "G??m????",
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
                "??rmik",
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
                "F??st??k",
                "Pati",
                "Boncuk",
                "??lda",
                "Juliet",
                "Kekik",
                "Miyu",
                "Nina",
                "Peri",
                "??a??k??n",
                "Sabun",
                "Riba",
                "Peti",
                "Sufle",
                "To??ya"
            ]
        }
        this.Buy = this.Buy.bind(this);
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

        const web3 = window.web3
        const accounts = await web3.eth.getAccounts()
        this.setState({ account: accounts[0] })
        localStorage.setItem("accountaddress", accounts[0])

        const networkId = await web3.eth.net.getId()
        const networkData = Pisi.networks[networkId]

        if (networkData) {
            const abi = Pisi.abi
            const address = networkData.address

            const contract = new web3.eth.Contract(abi, address)
            this.setState({ contract })
            localStorage.setItem("contractAddress", networkData.address)
            const pisihas = this.props.match.params.id;
            this.setState({ pisihash: pisihas })
            const eyecolor = await contract.methods.getEyeColor(pisihas).call();
            const beard = await contract.methods.getBeardSize(pisihas).call();
            const body = await contract.methods.getBodyColor(pisihas).call();
            const Price = (await contract.methods.getPrice(pisihas).call()).toNumber();

            const owner = await contract.methods.getOwner(pisihas).call();

            if (owner === this.state.account) {

                var Hungerness = (await contract.methods.getHungerness(pisihas).call({ from: this.state.account }));
                var Fragility = (await contract.methods.getFragility(pisihas).call({ from: this.state.account }));
                var Fertility = (await contract.methods.getFertility(pisihas).call({ from: this.state.account }));
                var Appeal = (await contract.methods.getAppeal(pisihas).call({ from: this.state.account }));
                const Sale = await contract.methods.getSale(pisihas).call();

                Hungerness = this.handlePercent(Hungerness)
                Fragility = this.handlePercent(Fragility)
                Fertility = this.handlePercent(Fertility)
                Appeal = this.handlePercent(Appeal)

                this.setState({ transferSuccess: true })
                if (Sale)
                    this.setState({ onSale: true });

                this.setState({ hungerness: Hungerness })
                this.setState({ fragility: Fragility })
                this.setState({ fertility: Fertility })
                this.setState({ appeal: Appeal })

            }


            this.setState({ price: Price })
            this.setState({ myPisies: pisihas })
            this.setState({ myPisiBody: body })
            this.setState({ myPisiBeard: beard })
            this.setState({ myPisiEye: eyecolor })


        } else {
            window.alert("Smart contract is not deployed in this network!!!")
        }

    }
    handlePercent = (num) => {
        var res = ((num + 1) / 256) * 100;
        return res;
    }
    handleProgresCcolor = (value) => {
        if (value < 25)
            return "danger";
        else if (value < 65)
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


    async Buy() {
        const web3 = window.web3
        const contract = this.state.contract;
        const owner = await contract.methods.getOwner(this.state.pisihash).call();
        if (owner === this.state.account)
            window.alert("Owner and transfer account is the same, you are already owner!")
        else {
            const amountToSend = (await contract.methods.getPrice(this.state.pisihash).call()).toNumber();
            console.log(typeof amountToSend)
            const Sale = await contract.methods.transferPisi(this.state.pisihash).send({ from: this.state.account, value: amountToSend });
            this.setState({ transferSuccess: true })
            console.log("sale", Sale)
            /////ERROR HANDLING//////
            console.log("transferSuccess", this.state.transferSuccess)
        }


    }

    async handleGene() {
        var { gene } = this.state;
        this.setState({ gene: !gene });
        const web3 = window.web3

        const contract = this.state.contract;

        const EyeColor = await contract.methods.getEyeColor(this.state.pisihash).call();
        const EyeSize = await contract.methods.getEyeSize(this.state.pisihash).call();
        const HeadColor = await contract.methods.getHeadColor(this.state.pisihash).call();
        const HeadSize = await contract.methods.getHeadSize(this.state.pisihash).call();
        const BeardSize = await contract.methods.getBeardSize(this.state.pisihash).call();
        const TailColor = await contract.methods.getTailColor(this.state.pisihash).call();
        const TailAccentColor = await contract.methods.getTailAccentColor(this.state.pisihash).call();
        const TailSize = await contract.methods.getTailSize(this.state.pisihash).call();
        const BodyColor = await contract.methods.getBodyColor(this.state.pisihash).call();
        const BodyAccentColor = await contract.methods.getBodyAccentColor(this.state.pisihash).call();
        const StripeType = await contract.methods.getStripeType(this.state.pisihash).call();

        this.setState({ eyeColor: EyeColor })
        this.setState({ eyeSize: EyeSize })
        this.setState({ headColor: HeadColor })
        this.setState({ headSize: HeadSize })
        this.setState({ beardSize: BeardSize })
        this.setState({ bodyColor: BodyColor })
        this.setState({ tailColor: TailColor })
        this.setState({ tailAccentColor: TailAccentColor })
        this.setState({ tailSize: TailSize })
        this.setState({ bodyAccentColor: BodyAccentColor })
        this.setState({ stripeType: StripeType })
    }
    handleColor = (color) => {
        color = "#" + color;
        return color;
    }
    render() {
        return (
            <div className="container">
                <img src={Cats} alt="cat" style={{ width: "100%", marginBottom: "80px" }}></img>
                <div className="Header">
                    P??si
        </div>
                <div className="cardContainer" style={{ justifyContent: "center" }}>

                    <div className="marketCard ">
                        <Card style={{ width: '40rem', backgroundColor: "#faf2e6" }}>

                            <Card.Body style={{ marginTop: "0px" }}>
                                <div className="pisiContainer">
                                    <div className="pisiBody">
                                        <img className="Pissi" src={this.state.pissieCatBody[this.handleBody(this.state.myPisiBody)]} alt="body"></img>
                                    </div>
                                    <div className="pisieye">
                                        <img className="Pissi" src={this.state.pissieCatEye[this.handleEye(this.state.myPisiEye)]} alt="eye"></img>
                                    </div>
                                    <div className="pisimouth">
                                        <img className="Pissi" src={this.state.pissieCatMouth[this.handleMouth(this.state.myPisiBeard)]} alt="mouth"></img>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Body style={{ marginTop: "-20px" }}>
                                <Card.Text style={{ fontSize: "2rem", color: " #885086" }}>


                                    {this.state.transferSuccess === false ?
                                        <div> Your Future Pisi <p className="pisiName"> {this.state.pissieName[this.handleName(this.state.pisihash)]} </p>is Here! <br></br>

                                            <p className="pisiName"> {this.state.price}  <i className="fab fa-ethereum"></i></p>
                                        </div>
                                        :

                                        <div style={{ paddingTop: "30px" }}> You are the owner of <p className="pisiName"> {this.state.pissieName[this.handleName(this.state.pisihash)]} </p>
                                            <i style={{ marginTop: "-2rem", marginBottom: "10px" }} className="fas fa-check-double"></i>
                                        </div>
                                    }
                                </Card.Text>

                                {this.state.genes}

                                {this.state.transferSuccess === true ?
                                    <div>
                                        <ProgressBar className="Progress" variant={this.handleProgresCcolor(this.state.hungerness)} label={"HUNGERNESS   " + `${this.state.hungerness}%`} animated now={this.state.hungerness} />
                                        <ProgressBar className="Progress" variant={this.handleProgresCcolor(this.state.fragility)} label={"FRAGILITY   " + `${this.state.fragility}%`} animated now={this.state.fragility} />
                                        <ProgressBar className="Progress" variant={this.handleProgresCcolor(this.state.fertility)} label={"FERTILITY   " + `${this.state.fertility}%`} animated now={this.state.fertility} />
                                        <ProgressBar className="Progress" variant={this.handleProgresCcolor(this.state.appeal)} label={"APPEAL   " + `${this.state.appeal}%`} animated now={this.state.appeal} />

                                        {this.state.onSale === true ?
                                            <div style={{marginTop:"20px"}}>
                                                <Button variant="info" style={{ backgroundColor: "#885086" }} onClick={() => this.routeChange()}>Put Down from Sale!<i style={{marginLeft:"5px"}}className="fa fas fa-cat"></i></Button>

                                            </div>
                                            :
                                            <div>
                                                <Button variant="info" style={{ backgroundColor: "#885086" }} onClick={() => this.routeChange()}>Put Me on Sale!<i className="fa fas fa-cat"></i></Button>
                                            </div>
                                        }
                                        <i style={{ fontSize: "10rem", color: "#885086", marginBottom: "20px" }} className="fa fas fa-cat"></i>

                                    </div>
                                    :
                                    <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
                                        <Button variant="info" onClick={() => this.Buy()}>Purchase Me!</Button>
                                        <Button variant="primary" style={{ backgroundColor: "#f7bc56", borderColor: "#f7bc56" }} onClick={() => this.handleGene()}>Check My Genes!</Button>
                                    </div>}
                                {this.state.gene === true ?
                                    <div className="genes">
                                        <table >
                                            <tr>
                                                <td><div className="gene">Eye Color:</div>  </td>
                                                <td><div className="color" style={{ backgroundColor: this.handleColor(this.state.eyeColor) }}></div></td>
                                                <td><div className="Gene">#{this.state.eyeColor}</div></td>
                                            </tr>
                                            <tr>
                                                <td><div className="gene">Head Color:</div>  </td>
                                                <td><div className="color" style={{ backgroundColor: this.handleColor(this.state.headColor) }}></div></td>
                                                <td><div className="Gene">#{this.state.headColor}</div></td>
                                            </tr>
                                            <tr>
                                                <td><div className="gene">Body Color:</div>  </td>
                                                <td><div className="color" style={{ backgroundColor: this.handleColor(this.state.bodyColor) }}></div></td>
                                                <td><div className="Gene">#{this.state.bodyColor}</div></td>
                                            </tr>
                                            <tr>
                                                <td><div className="gene">Body Accent Color:</div>  </td>
                                                <td><div className="color" style={{ backgroundColor: this.handleColor(this.state.bodyAccentColor) }}></div></td>
                                                <td><div className="Gene">#{this.state.bodyAccentColor}</div></td>
                                            </tr>
                                            <tr>
                                                <td><div className="gene">Tail Color:</div>  </td>
                                                <td><div className="color" style={{ backgroundColor: this.handleColor(this.state.tailColor) }}></div></td>
                                                <td><div className="Gene">#{this.state.tailColor}</div></td>
                                            </tr>
                                            <tr>
                                                <td><div className="gene">Tail Accent Color:</div>  </td>
                                                <td><div className="color" style={{ backgroundColor: this.handleColor(this.state.tailAccentColor) }}></div></td>
                                                <td><div className="Gene">#{this.state.tailAccentColor}</div></td>
                                            </tr>
                                            <tr>
                                                <td><div className="gene">Eye Size:</div>  </td>
                                                <td><div></div></td>
                                                <td><div className="Gene">{this.state.eyeSize}</div></td>
                                            </tr>
                                            <tr>
                                                <td><div className="gene">Head Size:</div>  </td>
                                                <td><div></div></td>
                                                <td><div className="Gene">{this.state.headSize}</div></td>
                                            </tr>
                                            <tr>
                                                <td><div className="gene">Beard Size:</div>  </td>
                                                <td><div></div></td>
                                                <td><div className="Gene">  {this.state.beardSize}</div></td>
                                            </tr>
                                            <tr>
                                                <td><div className="gene">Tail Size:</div>  </td>
                                                <td><div></div></td>
                                                <td><div className="Gene">{this.state.tailSize}</div></td>
                                            </tr>
                                            <tr>
                                                <td><div className="gene">Stripe Type:</div>  </td>
                                                <td><div></div></td>
                                                <td><div className="Gene">{this.state.stripeType}</div></td>
                                            </tr>
                                        </table>

                                    </div>
                                    : null}



                            </Card.Body>
                        </Card>
                    </div>


                </div>
            </div>
        );
    }
}

export default withRouter(Pissi);