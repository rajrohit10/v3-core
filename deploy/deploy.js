const hre = require("hardhat");

async function main() {
  

    // Deploy UniswapV3Factory
    const UniswapV3Factory = await hre.ethers.getContractFactory("UniswapV3Factory");
    const uniswapV3Factory = await UniswapV3Factory.deploy();
    await uniswapV3Factory.deployed();
    console.log(`uniswapV3Factory deployed to ${uniswapV3Factory.address}`);




}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
