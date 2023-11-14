import ApiFunction from '../APIFunction'
import { GET_BOOKING_LIST} from '../constants';

export const getAllBookingList = async () => {
    const apiFunction = new ApiFunction();
    return await apiFunction.get(GET_BOOKING_LIST);
}