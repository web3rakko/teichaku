import { AppInfo } from "@/constants/AppInfo";
import { Box, Button, Modal, Text } from "@mantine/core";
import useEth from "../../../hooks/web3/useEth";
import useMetaMask from "../../../hooks/web3/useMetaMask";
import { MetamaskCheck } from "./MetamaskCheck";

const NetworkCheck = () => {
    const { network } = useEth();
    const { address, login } = useMetaMask()
    const expectedNetwork = process.env.NEXT_PUBLIC_EXPECTED_NETWORK;
    const expectedNetworkChainId = process.env.NEXT_PUBLIC_EXPECTED_NETWORK_CHAIN_ID;
    const expectedRpcUrl = process.env.NEXT_PUBLIC_EXPECTED_RPC_URL;
    const isMetaMaskInstalled = () => {
        const { ethereum } = window as any;
        return Boolean(ethereum && ethereum.isMetaMask);
    };
    const chengeNetworkRequest = async () => {
        try {
            await (window as any).ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: expectedNetworkChainId }],
            });
            window.location.reload();
        } catch (e: any) {
            await (window as any).ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                    {
                        chainId: expectedNetworkChainId,
                        chainName: expectedNetwork,
                        rpcUrls: [expectedRpcUrl],
                    },
                ],
            });
            window.location.reload();

        }
    }

    if (!isMetaMaskInstalled()) {
        return <MetamaskCheck />
    }
    if (network && expectedNetwork) {
        return <Modal
            opened={(network !== expectedNetwork)}
            onClose={() => { }}
            withCloseButton={false}
            centered
            radius="md"
            shadow="xl"
            title="The currently connected network is not supported."
        >
            <Text>
                {AppInfo.name} is running on {expectedNetwork}!<br />
            </Text>
            <Box my="lg" />
            <Button onClick={chengeNetworkRequest}>
                Change Network to {expectedNetwork}
            </Button>
        </Modal>
    }



    return <div />


}

export default NetworkCheck;