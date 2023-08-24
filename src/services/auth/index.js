import ApiFunction from '../APIFunction'
import { LOGIN_TO_APP, VERIFY_OTP_TO_APP, CAB_CATEGORY } from './constants';

export const loginService = async (params) => {
    const apiFunction = new ApiFunction();
    return await apiFunction.post(params, LOGIN_TO_APP);
}

export const addCabCategory = async (params) => {
    const apiFunction = new ApiFunction();
    return await apiFunction.post(params, CAB_CATEGORY);
}

