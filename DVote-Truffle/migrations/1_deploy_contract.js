const contract = artifacts.require('DVote')

module.exports = function (deployer) {
    deployer.deploy(contract)
}