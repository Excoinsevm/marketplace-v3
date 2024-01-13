import { Chain } from "@thirdweb-dev/chains";

const CustomChain: Chain = {
  name: "Leopardkeen",
  chainId: 1063590932,
  rpc: "https://leopardkeen-rpc.eu-north-2.gateway.fm",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
  },
  shortName: "custom",
  testnet: false,
  slug: "leopardkeen",
};

export default CustomChain;
