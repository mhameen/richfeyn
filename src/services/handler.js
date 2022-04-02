const RESPONSE_CODES = {
    success: [200],
    failure: [400, 401, 404, 500],
    custom: [409]
};

export const notifySuccess = (message) => {
    console.log(message);
};

export const notifyError = (message) => {
    console.log(message);
};

export const notifyWarning = (message) => {
    console.log(message);
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
                // history.push('/misc/error/500');
                return error;
            }
            if (error.response.status === 401) {
                notifyError('You are not authorized to view this content');
                // localStorage.removeItem('userData');
                // localStorage.removeItem('access_token');
                // localStorage.removeItem("refresh_token");
                // setTimeout(() => {
                //     history.push('/login');
                // }, 2000);
                return error.response;
            } else if (error.response && RESPONSE_CODES.failure.includes(error.response.data.code)) {
                if (showToast) {
                    notifyError(error.response.data.response);
                }
                return error.response;
            }
            return error.response;
        });
}
