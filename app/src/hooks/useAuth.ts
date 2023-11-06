import Cookies from "js-cookie";
import { USER__CASHE__KEY } from "../constants/browserApiKey";
import { IUserCashe } from "../typesOrInterface/interface";

const useAuth = (): IUserCashe | undefined => {
    const userData: string | undefined = Cookies.get(USER__CASHE__KEY);
    let payload: IUserCashe | undefined = undefined;

    if (userData) {
        payload = JSON.parse(userData);
    }


    return payload;
}

export default useAuth;