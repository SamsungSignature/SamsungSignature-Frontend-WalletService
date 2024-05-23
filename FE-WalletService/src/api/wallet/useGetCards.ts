import {API_BASE} from '@env';
import {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import {Alert} from 'react-native';
import API_PATH from '../../constants/apiPath';
import {Card} from '../../pages/wallet/WalletMain';
import {useAppDispatch} from '../../stores/hooks';
import {setCards} from '../../stores/slices/addCard';
import useAxios from '../interceptor';

interface GetCardsResponseData {
  cards: Card[];
}

type GetCardsResponse = BaseResponse<GetCardsResponseData>;

const useGetCards = () => {
  const appAxios = useAxios();
  const dispatch = useAppDispatch();

  const getCardsConfig = () => {
    const axiosConfig: AxiosRequestConfig<null> = {
      url: `${API_BASE}${API_PATH.WALLET.GET_CARDS}`,
      method: 'get',
    };

    return axiosConfig;
  };

  const getCards = async () => {
    const config = getCardsConfig();
    const result = await appAxios
      .request(config)
      .then((res: AxiosResponse<GetCardsResponse, null>) => {
        dispatch(setCards(res.data.body.cards));
      })
      .catch((err: AxiosError<GetCardsResponse, null>) => {
        Alert.alert(err.message);
      });

    return result;
  };

  return getCards;
};

export type {GetCardsResponse, GetCardsResponseData};
export default useGetCards;
