import ApiFunction from '../APIFunction'
import { GET_CITY_BY_STATE, ADD_CITY, CITY_LIST} from '../constants';

export const getCityByStateId = async (id) => {
    const apiFunction = new ApiFunction();
    return await apiFunction.get(GET_CITY_BY_STATE, id);
}

export const addCity = async (params) => {
    const apiFunction = new ApiFunction();
    return await apiFunction.post(params, ADD_CITY);
}

export const getAllcityList = async () => {
    const apiFunction = new ApiFunction();
    return await apiFunction.get(CITY_LIST);
}
