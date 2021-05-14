const Pisi = artifacts.require("Pisi");

module.exports = function(deployer) {
  deployer.deploy(Pisi);
};
