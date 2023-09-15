import ApiFunction from '../APIFunction'
import { LOCAL_PACKAGES} from '../constants';

export const getAllLocalPackage = async () => {
    const apiFunction = new ApiFunction();
    return await apiFunction.get(LOCAL_PACKAGES);
}