import handleResponse from "./handler";
import { makePostCall } from "./utils";

export const customLogin = (data) => {
	const apiPath = `/auth/login/`;
	const response = makePostCall(apiPath, data);
	return handleResponse(response, false).then((resp) => {
		return resp;
	});
};
