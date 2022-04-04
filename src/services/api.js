import handleResponse from './handler';
import {
    makeAuthenticatedPutCall,
    makeAuthenticatedPostCall,
    makeAuthenticatedGetCall,
    makeAuthenticatedDeleteCall
} from './utils';

// api to cart for a given user
export const getUserCart = (pageNo = 1, pageSize = 10, query = '', status = 'CART') => {
    const apiPath = `/cart/?page=${pageNo}&page_size=${pageSize}&q=${query}&status=${status}`;
    const response = makeAuthenticatedGetCall(apiPath, true);
    return handleResponse(response, false).then((resp) => {
        return resp;
    });
};

// to create a given user
export const createUser = (data) => {
    const apiPath = `/users/`;
    const response = makeAuthenticatedPostCall(apiPath, data);
    return handleResponse(response, false).then((resp) => {
        return resp;
    });
};

// to update a given user
export const updateUser = (id, data) => {
    const apiPath = `/user/update/${id}/`;
    const response = makeAuthenticatedPutCall(apiPath, data);
    return handleResponse(response, false).then((resp) => {
        return resp;
    });
};

// api to cart for a given user
export const getProducts = (pageNo = 1, pageSize = 10, query = '', status = 'CART') => {
    const apiPath = `/product/list/?page=${pageNo}&page_size=${pageSize}&q=${query}&status=${status}`;
    const response = makeAuthenticatedGetCall(apiPath, true);
    return handleResponse(response, false).then((resp) => {
        return resp;
    });
};
