const Migrations = artifacts.require("Migrations");
const CryptoPizza = artifacts.require("CryptoPizza");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(CryptoPizza);
};
