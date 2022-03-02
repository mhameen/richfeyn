import axios from "axios";
import { BASE_API_URL } from "../constants/constants";

export const hideError = () => ({
	type: "HIDE_SNACK_ERROR",
});

const headers = new Headers({
	"Content-Type": "application/json",
});

export const makePostCall = (endPoint, data) => axios.post(BASE_API_URL + endPoint, data);

export const makeGetCall = (endPoint) => axios.get(`${BASE_API_URL}${endPoint}`, headers);

export async function getToken() {
	const token = localStorage.getItem("access_token");
	return token;
}

export async function makeAuthenticatedPostCall(endPoint, data, keepToken = true) {
	const token = localStorage.getItem("access_token");

	if (!token) {
		console.log("unauthorized");
	}
	headers.Authorization = `Token ${token.replaceAll('"', "")}`;

	if (!keepToken) {
		delete headers.Authorization;
		console.log("deleted auth token");
	}
	return axios.post(`${BASE_API_URL}${endPoint}`, data, {
		headers,
	});
}

export async function makeAuthenticatedGetCall(endPoint, keepToken = true, isExact = false) {
	const apiPath = isExact ? endPoint : `${BASE_API_URL}${endPoint}`;
	const token = localStorage.getItem("access_token");
	if (!token) {
		console.log("unauthorized");
	}

	const headers = {
		"Content-Type": "application/json",
	};
	headers.Authorization = `Token ${token.replaceAll('"', "")}`;
	if (!keepToken) {
		delete headers.Authorization;
	}

	return axios.get(apiPath, {
		headers,
	});
}

export async function makeAuthenticatedPutCall(endPoint, data, keepToken = true) {
	const token = localStorage.getItem("access_token");

	if (!token) {
		console.log("unauthorized");
	}
	headers.Authorization = `Token ${token.replaceAll('"', "")}`;

	if (!keepToken) {
		delete headers.Authorization;
		console.log("deleted auth token");
	}
	return axios.put(`${BASE_API_URL}${endPoint}`, data, {
		headers,
	});
}

export async function makeAuthenticatedDeleteCall(endPoint, keepToken = true) {
	const token = localStorage.getItem("access_token");

	if (!token) {
		console.log("unauthorized");
	}
	headers.Authorization = `Token ${token.replaceAll('"', "")}`;

	if (!keepToken) {
		delete headers.Authorization;
		console.log("deleted auth token");
	}
	return axios.delete(`${BASE_API_URL}${endPoint}`, {
		headers,
	});
}

export async function makeAuthenticatedDownloadCall(endPoint, keepToken = true, isExact = false) {
	const apiPath = isExact ? endPoint : `${BASE_API_URL}${endPoint}`;
	const token = localStorage.getItem("access_token");
	if (!token) {
		console.log("unauthorized");
		return;
	}

	const headers = new Headers({
		"Content-Type": "multipart/json",
	});
	headers.Authorization = `Bearer ${token}`;

	if (!keepToken) {
		delete headers.Authorization;
		console.log("deleted auth token");
	}
	return axios.get(apiPath, {
		responseType: "arraybuffer",
		headers,
	});
}
