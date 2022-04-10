import Toast from 'react-native-toast-message';
import { storeData, getData, deleteData } from '../../src/services/utils';
import { navigate } from '../../src/services/reactNavigation';

const RESPONSE_CODES = {
    success: [200],
    failure: [400, 401, 404, 500],
    custom: [409]
};

export const notifySuccess = (message) => {
    Toast.show({
        type: 'success',
        text1: message
    });
};

export const notifyError = (message) => {
    Toast.show({
        type: 'error',
        text1: message
    });
};

export const notifyWarning = (message) => {
    Toast.show({
        type: 'info',
        text1: message
    });
};

export default function handleResponse(result, showToast = true, download = false, customMessage) {
    return result
        .then((response) => {
            console.log(response, 'toast response');
            if (showToast) {
                if (customMessage) {
                    notifySuccess(response.data.response.message);
                } else {
                    notifySuccess(response.data.message || response.data.response);
                }
            }
            if (download) {
                console.log('in download');
            }
            return response;
        })
        .catch((error) => {
            console.log(error, 'error response');
            if (!error.response) {
                navigate('LoginScreen');
                deleteData('token');
                deleteData('full_name');
                deleteData('uuid');
                return error;
            }
            if (error.response.status === 401) {
                notifyError('You are not authorized to view this content!');
                navigate('LoginScreen');
                deleteData('token');
                deleteData('full_name');
                deleteData('uuid');
                return error.response;
            } else if (error.response && RESPONSE_CODES.failure.includes(error.response.data.code)) {
                navigate('LoginScreen');
                deleteData('token');
                deleteData('full_name');
                deleteData('uuid');
                if (showToast) {
                    notifyError(error.response.data.response);
                }
                return error.response;
            }
            return error.response;
        });
}
