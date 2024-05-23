import {API_BASE} from '@env';
import {AxiosRequestConfig, AxiosResponse} from 'axios';
import API_PATH from '../../constants/apiPath';
import useAxios from '../interceptor';

interface PaymentRequestData {
  card_id: number;
  payment_info: {
    price: number;
    market_name: string;
  };
}

type PaymentResponse = BaseResponse<null>;

const usePayment = () => {
  const appAxios = useAxios();

  const paymentConfig = (data: PaymentRequestData) => {
    const axiosConfig: AxiosRequestConfig<PaymentRequestData> = {
      url: `${API_BASE}${API_PATH.WALLET.PAYMENT}`,
      method: 'post',
      data,
    };

    return axiosConfig;
  };

  const payment = async (data: PaymentRequestData) => {
    const config = paymentConfig(data);
    const result: AxiosResponse<PaymentResponse, PaymentRequestData> =
      await appAxios.request(config);

    return result;
  };

  return payment;
};

export type {PaymentRequestData};
export default usePayment;
