module.exports = {
    chainList: [
        'avax',
        'bsc',
        'celo',
        'heco',
        'fantom',
        'harmony',
        'klaytn-v2',
        'matic',
        'moonriver',
        'orbit',
        'oec',
        'xdai',
    ],

    // Bridge Addresses
    BridgeAddress: {
        OrbitHubContract: "0xb5680a55d627c52de992e3ea52a86f19da475399",
        BscBridgeContract: "0x89c527764f03BCb7dC469707B23b79C1D7Beb780",
        HecoBridgeContract: "0xE7688F64e96A733EaDdCb5850392347e67Bb197f",
        KlaytnBridgeContract: "0x1af95905bb0042803f90e36d79d13aea6cd58969",
        OrbitBridgeContract: "0x77a49649964a186Fd2b8754758c39c9438a6E9aB",
        MessageMultiSigWallet: {
            Hub: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            Orbit: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            Avax: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            Bsc: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            Celo: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            Fantom: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            Harmony: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            Heco: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            Klaytn: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            Matic: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            Moonriver: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            Oec: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            Xdai: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
        },
        Avax: {
            AvaxMinterContract: "0x38C92A7C2B358e2F2b91723e5c4Fc7aa8b4d279F",
            MessageMultiSigWallet: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            AvaxAdminContract: "0x2bA5049df54aEde8d26786DFBE0cf0fDF7eDBBAd",
        },
        Bsc: {
            BscMinterContract: "0x38C92A7C2B358e2F2b91723e5c4Fc7aa8b4d279F",
            MessageMultiSigWallet: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            BscAdminContract: "0x2bA5049df54aEde8d26786DFBE0cf0fDF7eDBBAd",
        },
        Celo: {
            CeloMinterContract: "0x38C92A7C2B358e2F2b91723e5c4Fc7aa8b4d279F",
            MessageMultiSigWallet: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            CeloAdminContract: "0x2bA5049df54aEde8d26786DFBE0cf0fDF7eDBBAd",
        },
        Fantom: {
            FantomMinterContract: "0x38C92A7C2B358e2F2b91723e5c4Fc7aa8b4d279F",
            MessageMultiSigWallet: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            FantomAdminContract: "0x2bA5049df54aEde8d26786DFBE0cf0fDF7eDBBAd",
        },
        Harmony: {
            HarmonyMinterContract: "0x38C92A7C2B358e2F2b91723e5c4Fc7aa8b4d279F",
            MessageMultiSigWallet: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            HarmonyAdminContract: "0x2bA5049df54aEde8d26786DFBE0cf0fDF7eDBBAd",
        },
        Heco: {
            HecoVaultContract: "0x38C92A7C2B358e2F2b91723e5c4Fc7aa8b4d279F",
            MessageMultiSigWallet: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            HecoAdminContract: "0x2bA5049df54aEde8d26786DFBE0cf0fDF7eDBBAd",
        },
        Klay: {
            KlaytnMinterContract: "0x38C92A7C2B358e2F2b91723e5c4Fc7aa8b4d279F",
            MessageMultiSigWallet: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
        },
        Matic: {
            MaticMinterContract: "0x38C92A7C2B358e2F2b91723e5c4Fc7aa8b4d279F",
            MessageMultiSigWallet: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            MaticAdminContract: "0x2bA5049df54aEde8d26786DFBE0cf0fDF7eDBBAd",
        },
        Moonriver: {
            MoonriverMinterContract: "0x38C92A7C2B358e2F2b91723e5c4Fc7aa8b4d279F",
            MessageMultiSigWallet: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            MoonriverAdminContract: "0x2bA5049df54aEde8d26786DFBE0cf0fDF7eDBBAd",
        },
        Oec: {
            OecMinterContract: "0x38C92A7C2B358e2F2b91723e5c4Fc7aa8b4d279F",
            MessageMultiSigWallet: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            OecAdminContract: "0x2bA5049df54aEde8d26786DFBE0cf0fDF7eDBBAd",
        },
        Xdai: {
            XdaiMinterContract: "0x38C92A7C2B358e2F2b91723e5c4Fc7aa8b4d279F",
            MessageMultiSigWallet: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            XdaiAdminContract: "0x2bA5049df54aEde8d26786DFBE0cf0fDF7eDBBAd",
        },
        Orbit: {
            OrbitMinterContract: "0x38C92A7C2B358e2F2b91723e5c4Fc7aa8b4d279F",
            MessageMultiSigWallet: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
        },
        Governance: {
            Chain: "HECO",
            Address: "0x38C92A7C2B358e2F2b91723e5c4Fc7aa8b4d279F",
            Bytes: "0x38C92A7C2B358e2F2b91723e5c4Fc7aa8b4d279F",
            Id: "0x1958c3d245eed5312fa97ca358876d36b45c0905dd322b73efd66c8f836fb67f",
        },
    },

    // Node Endpoints
    Endpoints : {
        Orbit: {
            rpc : "https://bridge-en.orbitchain.io:7443",
            socket: "wss://bridge-en.orbitchain.io:7444",
        },
        Avax: {
            rpc: "https://api.avax.network/ext/bc/C/rpc",
            socket: "https://api.avax.network/ext/bc/C/ws",
        },
        Bsc: {
            rpc : "https://bsc-dataseed.binance.org",
            socket: "wss://bsc-ws-node.nariox.org:443",
        },
        Celo: {
            rpc: "https://forno.celo.org",
            socket: "wss://forno.celo.org/ws",
        },
        Fantom: {
            rpc: "https://rpc.ftm.tools",
            socket: "wss://wsapi.fantom.network",
        },
        Harmony: {
            rpc: "https://api.harmony.one",
            socket: "wss://ws.s0.t.hmny.io",
        },
        Heco: {
            rpc : "https://http-mainnet-node.huobichain.com",
            socket: "wss://ws-mainnet.hecochain.com",
        },
        Klaytn: {
            isKas: true,
            Kas: {
                // KAS Default
                rpc: "https://node-api.klaytnapi.com/v1/klaytn",
                chainId: 8217,

                // Your Credential
                accessKeyId: "",
                secretAccessKey: ""
            }
        },
        Matic: {
            rpc : "https://rpc-mainnet.maticvigil.com",
            socket: "wss://rpc-mainnet.matic.quiknode.pro",
        },
        Moonriver: {
            rpc: "https://pub.elara.patract.io/moonriver",
            socket: "wss://pub.elara.patract.io/moonriver",
        },
        Oec: {
            rpc: "https://exchainrpc.okex.org",
            socket: "wss://exchainws.okex.org:8443",
        },
        Xdai: {
            rpc: "https://rpc.xdaichain.com",
            socket: "ws://xdai.poanetwork.dev:8546",
        },
    },

    DEBUG: true,
    LOGLEVEL: 'debug',

    VALIDATOR_ACCOUNT: {
        TYPE: "PK",
        DATA: "0000000000000000000000000000000000000000000000000000000000000000",
    },

    VALIDATOR_MONITOR: {
        Ozys: {
            Endpoint: "https://bridge-en.orbitchain.io:7743/hecovault/v1/validator/report",
            Interval: 60 * 1000,
        },
    },
}