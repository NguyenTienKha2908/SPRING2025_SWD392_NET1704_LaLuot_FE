import { post } from "../../utils/HttpRequest";
export const login = async (username, password) => {
    try {
        const res = await post("api/account/login", {
            username,
            password,
        });
        return res;
    } catch (error) {
        return {
            errCode: error,
        };
    }
};
