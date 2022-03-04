import {getUser, getToken} from './getters'

export const Auth = async () => {
    const user = {'name': "monica"}
    const token  = "test"

    data = {
        'user': user,
        'token':token
    }
    return data;
};
