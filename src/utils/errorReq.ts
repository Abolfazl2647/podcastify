import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export const errorCallback = (res: AxiosError) => {
    toast.error(res.message);
};
