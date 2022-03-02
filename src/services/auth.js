import {getUser, getToken} from './getters'

export const Auth = async () => {
    const user = await getUser()
    const token  = await getToken()
    
    data = {
        'user': await getUser(),
        'token': await getToken()
    }
    return data;
};
