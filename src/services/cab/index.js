import ApiFunction from '../APIFunction'
import {CAB_CATEGORY,GET_CAB_CATEGORY } from './constants';

export const addCabCategory = async (params) => {
    const apiFunction = new ApiFunction();
    return await apiFunction.post(params, CAB_CATEGORY);
}

export const getCabCategory = async () => {
    const apiFunction = new ApiFunction();
    return await apiFunction.get(GET_CAB_CATEGORY);
}
