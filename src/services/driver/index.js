import ApiFunction from '../APIFunction'
import { ADD_DRIVER, GET_ALL_DRIVER } from '../constants';

export const getAllDriverData = async () => {
    const apiFunction = new ApiFunction();
    return await apiFunction.get(GET_ALL_DRIVER);
}

export const addDriver = async (params) => {
    const apiFunction = new ApiFunction();
    return await apiFunction.post(params, ADD_DRIVER);
}

