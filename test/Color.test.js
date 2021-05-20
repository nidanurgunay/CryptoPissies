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
})