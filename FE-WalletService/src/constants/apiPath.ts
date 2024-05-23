interface Auth {
  LOGIN: string;
  SIGNUP: string;
  VALIDATE: string;
  REFRESH: string;
}

interface Wallet {
  POST_CARD: string;
  GET_CARDS: string;
  GET_PAYABLES: string;
  PAYMENT: string;
}

interface ApiPath {
  AUTH: Auth;
  WALLET: Wallet;
}

const API_PATH: ApiPath = {
  AUTH: {
    LOGIN: '/auth-service/v1/members/signin',
    SIGNUP: '/auth-service/v1/members',
    VALIDATE: '/auth-service/v1/members/validate',
    REFRESH: '/auth-service/v1/members/tokens',
  },
  WALLET: {
    POST_CARD: '/wallet-service/v1/cards',
    GET_CARDS: '/wallet-service/v1/cards',
    GET_PAYABLES: '/wallet-service/v1/payable-cards',
    PAYMENT: '/wallet-service/v1/payments',
  },
};

export default API_PATH;
