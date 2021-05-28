import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import "./MyPisies.css"
import Web3 from "web3";
import Pisi from "../../abis/Pisi.json";
import Cats from "../../Cats.jpg"
import ProgressBar from 'react-bootstrap/ProgressBar'

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


class MyPisi extends Component {

    constructor(props) {
        super(props)
        this.state = {
            account: "",
            count: "",
            pisicount: "",
            myPisies: [],
            myPisiBody: [],
            myPisiBeard: [],
            myPisiEye: [],
            hungerness: [],
            fragility: [],
            fertility: [],
            appeal: [],
            eyeColor: [],
            eyeSize: [],
            headColor: [],
            headSize: [],
            beardSize: [],
            beardSize: [],
            bodyColor: [],
            tailColor: [],
            tailAccentColor: [],
            tailSize: [],
            bodyAccentColor: [],
            stripeType: [],
            gene: [false],
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
            var PPisiesEye = [];
            var PPisiesBody = [];
            var PPisiesBeard = [];

            console.log("acc", localStorage.getItem("accounttaddress"))

            console.log("count", count)
            var { gene } = this.state;

            for (var i = 0; i < count; i++) {
                const pisiessale = await contract.methods._pisiHashesToSell(i).call();
                gene[i] = false;
                const Sale = await contract.methods.getSale(pisiessale).call()
                if (Sale) {
                    const eyecolor = await contract.methods.getEyeColor(pisiessale).call();
                    const beard = await contract.methods.getBeardSize(pisiessale).call();
                    const body = await contract.methods.getBodyColor(pisiessale).call();

                    myPissie.push(pisiessale)
                    PPisiesEye.push(eyecolor)
                    PPisiesBody.push(beard)
                    PPisiesBeard.push(body)
                }
            }
            // this.setState({ pisicount: pisicount })
            this.setState({ myPisies: myPissie })
            this.setState({ myPisiBody: PPisiesBody })
            this.setState({ myPisiBeard: PPisiesBeard })
            this.setState({ myPisiEye: PPisiesEye })
            this.setState({ gene: gene })
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

    async handleGene(i) {
        var { gene } = this.state;
        var check = gene[i];
        console.log("check",check)
        gene[i] = !gene[i];
        this.setState({ gene: gene });
        if (check) {
            const web3 = window.web3

            var { eyeColor, eyeSize, headColor, headSize, beardSize, bodyColor, tailColor,
                tailAccentColor, tailSize, bodyAccentColor, stripeType } = this.state;


            const contract = this.state.contract;

            const EyeColor = await contract.methods.getEyeColor(this.state.myPisies[i]).call();
            const EyeSize = await contract.methods.getEyeSize(this.state.myPisies[i]).call();
            const HeadColor = await contract.methods.getHeadColor(this.state.myPisies[i]).call();
            const HeadSize = await contract.methods.getHeadSize(this.state.myPisies[i]).call();
            const BeardSize = await contract.methods.getBeardSize(this.state.myPisies[i]).call();
            const TailColor = await contract.methods.getTailColor(this.state.myPisies[i]).call();
            const TailAccentColor = await contract.methods.getTailAccentColor(this.state.myPisies[i]).call();
            const TailSize = await contract.methods.getTailSize(this.state.myPisies[i]).call();
            const BodyColor = await contract.methods.getBodyColor(this.state.myPisies[i]).call();
            const BodyAccentColor = await contract.methods.getBodyAccentColor(this.state.myPisies[i]).call();
            const StripeType = await contract.methods.getStripeType(this.state.myPisies[i]).call();



            eyeColor[i]=EyeColor;
            eyeSize[i]=EyeSize;
            headColor[i]=HeadColor;
            headSize[i]=HeadSize;
            beardSize[i]=BeardSize;
            bodyColor[i]=BodyColor;
            tailColor[i]=TailColor;
            tailAccentColor[i]=TailAccentColor;
            tailSize[i]=TailSize;
            bodyAccentColor[i]=BodyAccentColor;
            stripeType[i]=StripeType;

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
        }
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
                                                <img className="Pissi" src={this.state.pissieCatBody[this.handleBody(this.state.myPisiBody[index])]} alt="body"></img>
                                            </div>
                                            <div className="pisieye">
                                                <img className="Pissi" src={this.state.pissieCatEye[this.handleEye(this.state.myPisiEye[index])]} alt="eye"></img>
                                            </div>
                                            <div className="pisimouth">
                                                <img className="Pissi" src={this.state.pissieCatMouth[this.handleMouth(this.state.myPisiBeard[index])]} alt="mouth"></img>
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
                                        {this.state.genes}
                                        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
                                            <Button variant="info" onClick={() => this.Buy()}>Put Me on Sale</Button>
                                            <Button variant="primary" style={{ backgroundColor: "#f7bc56", borderColor: "#f7bc56" }} onClick={() => this.handleGene(index)}>Check My Genes!</Button>
                                        </div>

                                        {this.state.gene[index] === true ?
                                            <div className="genes">
                                                <table >
                                                    <tr>
                                                        <td><div className="gene">Eye Color:</div>  </td>
                                                        <td><div className="color" style={{ backgroundColor: this.handleColor(this.state.eyeColor[index]) }}></div></td>
                                                        <td><div className="Gene">#{this.state.eyeColor}</div></td>
                                                    </tr>
                                                    <tr>
                                                        <td><div className="gene">Head Color:</div>  </td>
                                                        <td><div className="color" style={{ backgroundColor: this.handleColor(this.state.headColor[index]) }}></div></td>
                                                        <td><div className="Gene">#{this.state.headColor}</div></td>
                                                    </tr>
                                                    <tr>
                                                        <td><div className="gene">Body Color:</div>  </td>
                                                        <td><div className="color" style={{ backgroundColor: this.handleColor(this.state.bodyColor[index]) }}></div></td>
                                                        <td><div className="Gene">#{this.state.bodyColor}</div></td>
                                                    </tr>
                                                    <tr>
                                                        <td><div className="gene">Body Accent Color:</div>  </td>
                                                        <td><div className="color" style={{ backgroundColor: this.handleColor(this.state.bodyAccentColor[index]) }}></div></td>
                                                        <td><div className="Gene">#{this.state.bodyAccentColor}</div></td>
                                                    </tr>
                                                    <tr>
                                                        <td><div className="gene">Tail Color:</div>  </td>
                                                        <td><div className="color" style={{ backgroundColor: this.handleColor(this.state.tailColor[index]) }}></div></td>
                                                        <td><div className="Gene">#{this.state.tailColor}</div></td>
                                                    </tr>
                                                    <tr>
                                                        <td><div className="gene">Tail Accent Color:</div>  </td>
                                                        <td><div className="color" style={{ backgroundColor: this.handleColor(this.state.tailAccentColor[index]) }}></div></td>
                                                        <td><div className="Gene">#{this.state.tailAccentColor}</div></td>
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
