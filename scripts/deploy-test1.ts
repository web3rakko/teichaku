import { ethers } from "hardhat";
import setupDemo from "./demo/setupDemo";
import setupDeploy from "./demo/setupDeploy";
import setupEmptyDemo from "./demo/setupEmptyDemo";

async function main() {
  // tokenの発行
  const Token = await ethers.getContractFactory("DAOToken");
  const NAME = "Web3HachathonCoin"
  const SYMBOL = "W3HC"
  const INITIAL_SUPPLY = ethers.utils.parseEther("0");
  const token = await Token.deploy(NAME, SYMBOL, INITIAL_SUPPLY);
  await token.deployed();
  console.log("DAOToken deployed to:", token.address);

  // PollCreatorのデプロイ
  const PollCreator = await ethers.getContractFactory("PollCreator");
  const pollCreator = await PollCreator.deploy();
  await pollCreator.deployed();
  console.log("PollCreator deployed to:", pollCreator.address);

  // DaoHistoryのデプロイ
  const DaoHistory = await ethers.getContractFactory("DAOHistory");
  const daoHistory = await DaoHistory.deploy(pollCreator.address);
  await daoHistory.deployed();
  console.log("DAOHistory deployed to:", daoHistory.address);

  // Pollの取得
  await daoHistory.addDao("demo", "season1", "demo season1", "demo season1 description", "https://englister.yunomy.com", "https://yunomy-image-folder.s3.ap-northeast-1.amazonaws.com/englister/dao_membership/DAOmember_0000.png");

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
