import ApiFunction from '../APIFunction'
import { GET_All_STATES} from '../constants';

export const getAllStates = async () => {
    const apiFunction = new ApiFunction();
    return await apiFunction.get(GET_All_STATES);
}

