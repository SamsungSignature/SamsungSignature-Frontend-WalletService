import {API_BASE} from '@env';
import {AxiosRequestConfig, AxiosResponse} from 'axios';
import API_PATH from '../../constants/apiPath';
import {Card} from '../../pages/wallet/WalletMain';
import useAxios from '../interceptor';

interface GetPayablesRequestParams {
  signature_detail_id?: number;
}

interface GetPayablesResponseData {
  cards: Card[];
}

type GetPayablesResponse = BaseResponse<GetPayablesResponseData>;

const useGetPayables = () => {
  const appAxios = useAxios();

  const getPayablesConfig = (params: GetPayablesRequestParams) => {
    const axionConfig: AxiosRequestConfig<null> = {
      url: `${API_BASE}${API_PATH.WALLET.GET_PAYABLES}`,
      method: 'get',
      params,
    };

    return axionConfig;
  };

  const getPayables = async (params: GetPayablesRequestParams) => {
    const config = getPayablesConfig(params);
    const result: AxiosResponse<GetPayablesResponse, null> =
      await appAxios.request(config);

    return result;
  };

  return getPayables;
};

export type {GetPayablesRequestParams};
export default useGetPayables;
