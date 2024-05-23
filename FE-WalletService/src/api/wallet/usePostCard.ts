import {API_BASE} from '@env';
import {AxiosRequestConfig, AxiosResponse} from 'axios';
import API_PATH from '../../constants/apiPath';
import {useAppSelector} from '../../stores/hooks';
import {RootState} from '../../stores/store';
import useAxios from '../interceptor';

interface PostCardRequestData {
  card_num: string;
  card_expiration_date: string;
  card_cvc: string;
  card_name: string;
  card_company: string;
  card_img: string;
}

interface PostCardResponseData {
  card_id: number;
}

type PostCardResponse = BaseResponse<PostCardResponseData>;

const usePostCard = () => {
  const appAxios = useAxios();
  const data = useAppSelector((state: RootState) => state.addCard.cardInfo);

  const postCardConfig = () => {
    const axiosConfig: AxiosRequestConfig<PostCardRequestData> = {
      url: `${API_BASE}${API_PATH.WALLET.POST_CARD}`,
      method: 'post',
      data,
    };

    return axiosConfig;
  };

  const postCard = async () => {
    const config = postCardConfig();
    const result: AxiosResponse<PostCardResponse, PostCardRequestData> =
      await appAxios.request(config);

    return result;
  };

  return postCard;
};

export type {PostCardRequestData, PostCardResponse};
export default usePostCard;
