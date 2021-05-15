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
            let eyeSize = "25";  
            let headColor = "FFFFFF";  
            let headSize = "25";  
            let beardSize = "25";  
            let tailColor = "FFFFFF";  
            let tailAccentColor = "FFFFFF";  
            let tailSize = "25";  
            let bodyColor = "FFFFFF";  
            let bodyAccentColor = "FFFFFF";  
            let stripeType = "25";  
            let hungerness = "25";  
            let fragility = "25";  
            let fertility = "25";  
            let appeal = "25";

            const pisi = "FFFFFF25FFFFFF2525FFFFFFFFFFFF25FFFFFFFFFFFF2525252525"
            
            await contract.decodeAttributes(pisi)

            assert.equal(await contract.getEyeColor(pisi), eyeColor, "Eye color is correct")
            assert.equal(await contract.getEyeSize(pisi), eyeSize, "Eye size is correct")
            assert.equal(await contract.getHeadColor(pisi), headColor, "Head color is correct")
            assert.equal(await contract.getHeadSize(pisi), headSize, "Head size is correct")
            assert.equal(await contract.getBeardSize(pisi), beardSize, "Beard size is correct")
            assert.equal(await contract.getTailColor(pisi), tailColor, "Tail color is correct")
            assert.equal(await contract.getTailAccentColor(pisi), tailAccentColor, "Tail Accent color is correct")
            assert.equal(await contract.getTailSize(pisi), tailSize, "Tail size is correct")
            assert.equal(await contract.getBodyColor(pisi), bodyColor, "Body color is correct")
            assert.equal(await contract.getBodyAccentColor(pisi), bodyAccentColor, "Body Accent color is correct")
            assert.equal(await contract.getStripeType(pisi), stripeType, "Stripe type is correct")
            assert.equal(await contract.getHungerness(pisi), hungerness, "Hungerness is correct")
            assert.equal(await contract.getFragility(pisi), fragility, "Fragility is correct")
            assert.equal(await contract.getFertility(pisi), fertility, "Fertility is correct")
            assert.equal(await contract.getAppeal(pisi), appeal, "Appeal is correct")
        })
    })
})