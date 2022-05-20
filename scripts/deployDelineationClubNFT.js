
const hre = require("hardhat");

async function main() {
  const DelineationClubNFT = await hre.ethers.getContractFactory("DelineationClubNFT");
  const delineationClubNFT = await DelineationClubNFT.deploy();

  await delineationClubNFT.deployed();

  console.log("Greeter deployed to:", delineationClubNFT.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
