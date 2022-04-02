import handleResponse from './handler';
import { makePostCall } from './utils';

export const loginUser = (data) => {
    const apiPath = `/auth/login/`;
    let response = makePostCall(apiPath, data);
    return handleResponse(response, false).then((resp) => {
        return resp;
    });
};

export const createLoginOTP = (data) => {
    const apiPath = `/otp/create/`;
    let response = makePostCall(apiPath, data);
    return handleResponse(response, false).then((resp) => {
        return resp;
    });
};

export const verifyOtp = (data) => {
    const apiPath = `/otp/login/verify/`;
    let response = makePostCall(apiPath, data);
    return handleResponse(response, false).then((resp) => {
        return resp;
    });
};
