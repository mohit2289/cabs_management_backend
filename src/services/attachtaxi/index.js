import ApiFunction from '../APIFunction'
import { GET_ATTACH_TAXI_LIST} from '../constants';

export const getAllAttachTaxiList = async () => {
    const apiFunction = new ApiFunction();
    return await apiFunction.get(GET_ATTACH_TAXI_LIST);
}