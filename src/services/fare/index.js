import ApiFunction from '../APIFunction'
import { GET_ALL_FARE_DETAILS} from '../constants';

export const getAllFareDetails = async () => {
    const apiFunction = new ApiFunction();
    return await apiFunction.get(GET_ALL_FARE_DETAILS);
}