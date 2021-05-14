const { assert } = require("chai")

const Pisi = artifacts.require("./Pisi.sol")

require("chai")
    .use(require("chai-as-promised"))
    .should()

contract("Color", (accounts) => {
    let contract

    before(async() => {
        contract = await Pisi.deployed()
    })

    describe("deployment", async() => {
        it("deploys successfully", async() => {
            const address = contract.address
            assert.notEqual(address, "")
            assert.notEqual(address, 0x0)
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
        })

        it("has a name", async() => {
            const name = await contract.name()
            assert.equal(name, "Color")
        })

        it("has a symbol", async() => {
            const symbol = await contract.symbol()
            assert.equal(symbol, "COLOR")
        })
    })

    describe("minting", async() => {
        it("creates a new token", async() => {
            const result = await contract.mint("#FFFFFF")
            const totalSupply = await contract.totalSupply()
            
            assert.equal(totalSupply, 1)
            const event = result.logs[0].args
            assert.equal(event.tokenId.toNumber(), 1, "id is correct")
            assert.equal(event.from, 0x0, "from is correct")
            assert.equal(event.to, accounts[0], "to is correct")

            await contract.mint("#FFFFFF").should.be.rejected;
        })
    })

    describe("indexing", async() => {
        it("lists colors", async() => {
            let expected = ["#FFFFFF", "#FFCC66", "#999999", "#FFFF66"]
            await contract.mint(expected[1])
            await contract.mint(expected[2])
            await contract.mint(expected[3])
            const totalSupply = await contract.totalSupply()
            
            let color
            let result = []

            for (var i = 0; i < totalSupply; i++){
                color = await contract.colors(i)
                result.push(color)
            }

            assert.equal(result.join(","), expected.join(","))
        })
    })

    describe("attributes", async() => {
        it("decode attribute", async() => {
            let eyeColor = "FFFFFF";
            let eyeSize = "256";  
            let headColor = "FFFFFF";  
            let headSize = "256";  
            let beardSize = "256";  
            let tailColor = "FFFFFF";  
            let tailAccentColor = "FFFFFF";  
            let tailSize = "256";  
            let bodyColor = "FFFFFF";  
            let bodyAccentColor = "FFFFFF";  
            let stripeType = "256";  
            let hungerness = "256";  
            let fragility = "256";  
            let fertility = "256";  
            let appeal = "256";

            const pisi = "FFFFFF256FFFFFF256256FFFFFFFFFFFF256FFFFFFFFFFFF256256256256256"
            
            await contract.decodeAttributes(pisi)

            assert.equal(await contract.getEyeColor(pisi), eyeColor)
            assert.equal(await contract.getEyeSize(pisi), eyeSize)
            assert.equal(await contract.getHeadColor(pisi), headColor)
            assert.equal(await contract.getHeadSize(pisi), headSize)
            assert.equal(await contract.getBeardSize(pisi), beardSize)
            assert.equal(await contract.getTailColor(pisi), tailColor)
            assert.equal(await contract.getTailAccentColor(pisi), tailAccentColor)
            assert.equal(await contract.getTailSize(pisi), tailSize)
            assert.equal(await contract.getBodyColor(pisi), bodyColor)
            assert.equal(await contract.getBodyAccentColor(pisi), bodyAccentColor)
            assert.equal(await contract.getStripeType(pisi), stripeType)
            assert.equal(await contract.getHungerness(pisi), hungerness)
            assert.equal(await contract.getFragility(pisi), fragility)
            assert.equal(await contract.getFertility(pisi), fertility)
            assert.equal(await contract.getAppeal(pisi), appeal)
        })
    })
})