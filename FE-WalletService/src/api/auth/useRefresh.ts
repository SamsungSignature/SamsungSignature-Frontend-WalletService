import {API_BASE} from '@env';
import {AxiosRequestConfig, AxiosResponse} from 'axios';
import API_PATH from '../../constants/apiPath';
import useAxios from '../interceptor';
import {LoginResponse} from './useLogin';

const useRefresh = () => {
  const appAxios = useAxios();

  const refreshConfig = () => {
    const axiosConfig: AxiosRequestConfig<null> = {
      url: `${API_BASE}${API_PATH.AUTH.REFRESH}`,
      method: 'post',
    };

    return axiosConfig;
  };

  const refresh = async () => {
    const config = refreshConfig();
    const result: AxiosResponse<LoginResponse, null> = await appAxios.request(
      config,
    );

    return result;
  };

  return refresh;
};

export default useRefresh;
