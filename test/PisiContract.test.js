const { assert } = require("chai")

const Pisi = artifacts.require("./Pisi.sol")

require("chai")
    .use(require("chai-as-promised"))
    .should()

contract("Pisi", (accounts) => {
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
            assert.equal(name, "Pisi")
        })

        it("has a symbol", async() => {
            const symbol = await contract.symbol()
            assert.equal(symbol, "PISI")
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
            let hungerness = 25;  
            let fragility = 25;  
            let fertility = 25;  
            let appeal = 25;

            const pisi = "FFFFFF25FFFFFF2525FFFFFFFFFFFF25FFFFFFFFFFFF2519191919"
            
            await contract.testAttributes(pisi)

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
            assert.equal((await contract.getHungerness(pisi)).toNumber(), hungerness, "Hungerness is correct")
            assert.equal((await contract.getFragility(pisi)).toNumber(), fragility, "Fragility is correct")
            assert.equal((await contract.getFertility(pisi)).toNumber(), fertility, "Fertility is correct")
            assert.equal((await contract.getAppeal(pisi)).toNumber(), appeal, "Appeal is correct")
            assert.equal(await contract.getOwner(pisi), accounts[0], "Owner is correct")
        })

        describe("selling", async() => {
            it("put on sale", async() => {
                await contract.mint()
                
                const pisiHash = await contract.mint.call()

                await contract.putToSale(pisiHash, 100)

                assert.equal(await contract.onSaleCount(), 1, "sale count increased")
                assert.equal(await contract._pisiHashesToSell(0), pisiHash, "pisi added to sale list")

                await contract.putDownFromSale(pisiHash)
            })

            it("put down sale", async() => {
                await contract.mint()
                
                const pisiHash = await contract.mint.call()

                await contract.putToSale(pisiHash, 100)

                await contract.putDownFromSale(pisiHash)

                assert.equal(await contract.onSaleCount(), 0, "sale count decreased")
                await contract._pisiHashesToSell(0).should.be.rejected
            })
        })
    })

    describe("actions", async() => {
        describe("breeding", async() => {
            it("pisi1 is better", async() => {
                const pisi1 = "FFFFFF25FFFFFF2525FFFFFFFFFFFF25FFFFFFFFFFFF251919FFFF"
                const pisi2 = "FFFFFF25FFFFFF2525FFFFFFFFFFFF25FFFFFFFFFFFF251919FEFE"
            
                await contract.testAttributes(pisi1)
                await contract.testAttributes(pisi2)

                await contract.breed(pisi1, pisi2)

                const newPisi = await contract.breed.call(pisi1, pisi2)

                assert.equal(newPisi, pisi1)
            })
            
            it("pisi2 is better", async() => {
                const pisi1 = "FFFFFF25FFFFFF2525FFFFFFFFFFFF25FFFFFFFFFFFF251919FEFE"
                const pisi2 = "FFFFFF25FFFFFF2525FFFFFFFFFFFF25FFFFFFFFFFFF251919FFFF"
            
                await contract.testAttributes(pisi1)
                await contract.testAttributes(pisi2)

                await contract.breed(pisi1, pisi2)

                const newPisi = await contract.breed.call(pisi1, pisi2)

                assert.equal(newPisi, pisi2)
            })
            
            it("no appeal", async() => {
                let pisi1 = "FFFFFF25FFFFFF2525FFFFFFFFFFFF25FFFFFFFFFFFF251919FE00"
                let pisi2 = "FFFFFF25FFFFFF2525FFFFFFFFFFFF25FFFFFFFFFFFF251919FFFF"
            
                await contract.testAttributes(pisi1)
                await contract.testAttributes(pisi2)

                await contract.breed(pisi1, pisi2).should.be.rejected

                pisi1 = "FFFFFF25FFFFFF2525FFFFFFFFFFFF25FFFFFFFFFFFF251919FEFF"
                pisi2 = "FFFFFF25FFFFFF2525FFFFFFFFFFFF25FFFFFFFFFFFF251919FF00"
            
                await contract.testAttributes(pisi1)
                await contract.testAttributes(pisi2)

                await contract.breed(pisi1, pisi2).should.be.rejected
            })
        })
    })
})
