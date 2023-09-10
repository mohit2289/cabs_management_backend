import ApiFunction from '../APIFunction'
import {CAB_CATEGORY,GET_CAB_CATEGORY, ADD_CABS, GET_ALL_CABS ,GET_CABS_BY_CATEGORY_ID  } from './constants';

export const addCabCategory = async (params) => {
    const apiFunction = new ApiFunction();
    return await apiFunction.post(params, CAB_CATEGORY);
}

export const getCabCategory = async () => {
    const apiFunction = new ApiFunction();
    return await apiFunction.get(GET_CAB_CATEGORY);
}

export const addCabsDetails = async (params) => {
    const apiFunction = new ApiFunction();
    return await apiFunction.post(params, ADD_CABS);
}

export const getAllCabs= async (params) => {
    const apiFunction = new ApiFunction();
    return await apiFunction.get(GET_ALL_CABS);
}

export const getVechicleByCategoryId = async (params) => {
    const apiFunction = new ApiFunction();
    return await apiFunction.get(GET_CABS_BY_CATEGORY_ID, params );
}
