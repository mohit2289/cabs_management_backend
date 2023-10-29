import ApiFunction from '../APIFunction'
import { GET_ALL_CITY_DISTANCE,ADD_CITY_DISTANCE} from '../constants';

export const addCityDistance = async (params) => {
    const apiFunction = new ApiFunction();
    return await apiFunction.post(params, ADD_CITY_DISTANCE);
}

export const getAllCityDistance = async () => {
    const apiFunction = new ApiFunction();
    return await apiFunction.get(GET_ALL_CITY_DISTANCE);
}