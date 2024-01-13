import { Chain } from "@thirdweb-dev/chains";

const chains: Chain = {
  name: "Leopardkeen",
  chainId: 1063590932,
  rpc: "https://leopardkeen-rpc.eu-north-2.gateway.fm",
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  shortName: "LK",
  testnet: false, // Optional, include if applicable
  slug: "leopardkeen",

export default chains;
