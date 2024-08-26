import client from "@/lib/client";
import { getContract, defineChain } from "thirdweb";

export const NETWORK = defineChain({
  chain: "bitrock",
  name: "Bitrock",
  chainId: 7171,
  rpc: ["https://connect.bit-rock.io"],
  nativeCurrency: {
    name: "Bitrock",
    symbol: "BROCK",
    decimals: 18,
  },
  shortName: "custom",
  testnet: false,
  slug: "bitrock",
});

const MARKETPLACE_ADDRESS = "0xE96952f138850Cd67a61Ac8D97AdB58b3119E157";
export const MARKETPLACE = getContract({
	address: MARKETPLACE_ADDRESS,
	client,
	chain: NETWORK,
});

const NFT_COLLECTION_ADDRESS = "0x281F8a70b8DE841266461C36CD75B8E68B9647E0";
export const NFT_COLLECTION = getContract({
	address: NFT_COLLECTION_ADDRESS,
	client,
	chain: NETWORK,
});

export const ETHERSCAN_URL = "https://explorer.bit-rock.io";
