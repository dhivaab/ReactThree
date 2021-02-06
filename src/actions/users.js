import users from "../reducers/users";
import { Types } from "./types";

export const get_users_request = () => ({
    type: Types.GET_USERS_REQUEST
});
