import ApiFunction from '../APIFunction'
import { GET_ALL_FARE_DETAILS,ADD_FARE} from '../constants';

export const getAllFareDetails = async () => {
    const apiFunction = new ApiFunction();
    return await apiFunction.get(GET_ALL_FARE_DETAILS);
}

export const addFare =  async(params) =>{
     const apiFunction = new ApiFunction();
    return await apiFunction.post(params,ADD_FARE);
}