import handleResponse from "./handler";
import { makeAuthenticatedPutCall, makeAuthenticatedPostCall, makeAuthenticatedGetCall, makeAuthenticatedDeleteCall } from "./utils";

// api to get list of all user
export const getAllUsers = (pageNo = 1, pageSize = 10, query = "", status = "") => {
	const apiPath = `/users/?page=${pageNo}&page_size=${pageSize}&q=${query}&status=${status}`;
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

// to delete a given user
export const deleteUser = (id, data) => {
	const apiPath = `/user/${id}/`;
	const response = makeAuthenticatedDeleteCall(apiPath, data);
	return handleResponse(response, false).then((resp) => {
		return resp;
	});
};

export const deleteToken = (id, data) => {
	const apiPath = `/user/token/delete/${id}/`;
	const response = makeAuthenticatedDeleteCall(apiPath, data);
	return handleResponse(response, false).then((resp) => {
		return resp;
	});
};

// api to get list of all types
export const getAllProductTypes = (pageNo = 1, pageSize = 10, query = "", status = "") => {
	const apiPath = `/product-type/?page=${pageNo}&page_size=${pageSize}&q=${query}&status=${status}`;
	const response = makeAuthenticatedGetCall(apiPath, true);
	return handleResponse(response, false).then((resp) => {
		return resp;
	});
};

// to create a given type
export const createType = (data) => {
	const apiPath = `/product-type/`;
	const response = makeAuthenticatedPostCall(apiPath, data);
	return handleResponse(response, false).then((resp) => {
		return resp;
	});
};

// to update a given type
export const updateType = (id, data) => {
	const apiPath = `/product-type/${id}/`;
	const response = makeAuthenticatedPutCall(apiPath, data);
	return handleResponse(response, false).then((resp) => {
		return resp;
	});
};

// to delete a given type
export const deleteType = (id, data) => {
	const apiPath = `/product-type/${id}/`;
	const response = makeAuthenticatedDeleteCall(apiPath, data);
	return handleResponse(response, false).then((resp) => {
		return resp;
	});
};

export const getAllCompanies = (pageNo = 1, pageSize = 10, query = "", status = "", company_type = "") => {
	const apiPath = `/company/?page=${pageNo}&page_size=${pageSize}&q=${query}&status=${status}&company_type=${company_type}`;
	const response = makeAuthenticatedGetCall(apiPath, true);
	return handleResponse(response, false).then((resp) => {
		return resp;
	});
};

// api to get list of all products
export const getAllProducts = (pageNo = 1, pageSize = 10, query = "", status = "", category = "") => {
	const apiPath = `/product/?page=${pageNo}&page_size=${pageSize}&q=${query}&status=${status}&category=${category}`;
	const response = makeAuthenticatedGetCall(apiPath, true);
	return handleResponse(response, false).then((resp) => {
		return resp;
	});
};

// to create a given product
export const createProduct = (data) => {
	const apiPath = `/product/`;
	const response = makeAuthenticatedPostCall(apiPath, data);
	return handleResponse(response, false).then((resp) => {
		return resp;
	});
};

// to update a given product
export const updateProduct = (id, data) => {
	const apiPath = `/product/${id}/`;
	const response = makeAuthenticatedPutCall(apiPath, data);
	return handleResponse(response, false).then((resp) => {
		return resp;
	});
};

// to delete a given product
export const deleteProduct = (id, data) => {
	const apiPath = `/product/${id}/`;
	const response = makeAuthenticatedDeleteCall(apiPath, data);
	return handleResponse(response, false).then((resp) => {
		return resp;
	});
};

// to create a given company
export const createCompany = (data) => {
	const apiPath = `/company/`;
	const response = makeAuthenticatedPostCall(apiPath, data);
	return handleResponse(response, false).then((resp) => {
		return resp;
	});
};

// to update a given company
export const updateCompany = (id, data) => {
	const apiPath = `/company/${id}/`;
	const response = makeAuthenticatedPutCall(apiPath, data);
	return handleResponse(response, false).then((resp) => {
		return resp;
	});
};

// to detail a given company
export const detailCompany = (id) => {
	const apiPath = `/company/${id}/`;
	const response = makeAuthenticatedGetCall(apiPath);
	return handleResponse(response, false).then((resp) => {
		return resp;
	});
};

// to delete a given company
export const deleteCompany = (id, data) => {
	const apiPath = `/company/${id}/`;
	const response = makeAuthenticatedDeleteCall(apiPath, data);
	return handleResponse(response, false).then((resp) => {
		return resp;
	});
};

// to get billing list
export const getAllBills = (pageNo = 1, pageSize = 10, type = "", query = "", status = "", parentCompany = "", companyType = "") => {
	const apiPath = `/billing/?page=${pageNo}&page_size=${pageSize}&q=${query}&status=${status}&bill_type=${type}&company_id=${parentCompany}&company_type=${companyType}`;
	const response = makeAuthenticatedGetCall(apiPath, true);
	return handleResponse(response, false).then((resp) => {
		return resp;
	});
};

// to save billing
export const saveBill = (data) => {
	const apiPath = `/billing/`;
	const response = makeAuthenticatedPostCall(apiPath, data);
	return handleResponse(response, false).then((resp) => {
		return resp;
	});
};

// api to get a given billing
export const getBill = (id) => {
	const apiPath = `/billing/${id}/`;
	const response = makeAuthenticatedGetCall(apiPath, true);
	return handleResponse(response, false).then((resp) => {
		return resp;
	});
};

// api to update a given
export const updateBill = (data, id) => {
	const apiPath = `/billing/update/${id}/`;
	const response = makeAuthenticatedPutCall(apiPath, data);
	return handleResponse(response, false).then((resp) => {
		return resp;
	});
};

// api to get all bank accounts
export const getAllAccounts = (pageNo = 1, pageSize = 10, query = "", status = "", id) => {
	const apiPath = `/bank-account/?company_id=${id}&page=${pageNo}&page_size=${pageSize}&q=${query}&status=${status}`;
	const response = makeAuthenticatedGetCall(apiPath, true);
	return handleResponse(response, false).then((resp) => {
		return resp;
	});
};

export const createBankAccount = (data) => {
	const apiPath = `/bank-account/`;
	const response = makeAuthenticatedPostCall(apiPath, data);
	return handleResponse(response, false).then((resp) => {
		return resp;
	});
};

// api to get bank account for select dropdown
export const getBanks = (pageNo = 1, pageSize = 10, query = "") => {
	const apiPath = `/bank-details/?&page=${pageNo}&page_size=${pageSize}&q=${query}`;
	const response = makeAuthenticatedGetCall(apiPath, true);
	return handleResponse(response, false).then((resp) => {
		return resp;
	});
};

// api for payment related calls
export const getPayments = (pageNo = 1, pageSize = 10, query = "", status = "") => {
	const apiPath = `/payment/?&page=${pageNo}&page_size=${pageSize}&q=${query}&status=${status}`;
	const response = makeAuthenticatedGetCall(apiPath, true);
	return handleResponse(response, false).then((resp) => {
		return resp;
	});
};

// api for getting single payment details
export const getPaymentDetails = (id) => {
	const apiPath = `/payment/${id}`;
	const response = makeAuthenticatedGetCall(apiPath, true);
	return handleResponse(response, false).then((resp) => {
		return resp;
	});
};

// api call to create payment
export const createPayment = (data) => {
	const apiPath = `/payment/`;
	const response = makeAuthenticatedPostCall(apiPath, data);
	return handleResponse(response, false).then((resp) => {
		return resp;
	});
};

// get gst details
export const getGSTInfo = (data) => {
	const apiPath = `/gst/?gst_no=${data}`;
	const response = makeAuthenticatedGetCall(apiPath, data);
	return handleResponse(response, false).then((resp) => {
		return resp;
	});
};

// get company related stats
export const getDashboardStats = () => {
	const apiPath = `/stats/`;
	const response = makeAuthenticatedGetCall(apiPath, true);
	return handleResponse(response, false).then((resp) => {
		return resp;
	});
};

// get sales report
export const getSalesStats = () => {
	const apiPath = `/sales-report/`;
	const response = makeAuthenticatedGetCall(apiPath, true);
	return handleResponse(response, false).then((resp) => {
		return resp;
	});
};
