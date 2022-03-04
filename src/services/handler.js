// import { toast } from "react-toastify";
// import { history } from "./history";

// import "react-toastify/dist/ReactToastify.css";

// const RESPONSE_CODES = {
// 	success: [200],
// 	failure: [400, 401, 404, 500],
// 	custom: [409],
// };

// const notifySuccess = (message) => toast.success(message);
// const notifyError = (message) => toast.error(message);

// const handleDownload = (response) => {
// 	const url = window.URL.createObjectURL(new Blob([response.data]));
// 	const link = document.createElement("a");
// 	link.href = url;
// 	link.setAttribute("download", "reports.zip"); //or any other extension
// 	document.body.appendChild(link);
// 	link.click();
// 	link.remove();
// };

// export default function handleResponse(result, showToast = true, download = false, customMessage) {
// 	return result
// 		.then((response) => {
// 			if (showToast) {
// 				if (customMessage) {
// 					notifySuccess(response.data.response.message);
// 				} else {
// 					notifySuccess(response.data.message || response.data.response);
// 				}
// 			}
// 			if (download) {
// 				handleDownload(response);
// 			}
// 			return response;
// 		})
// 		.catch((error) => {
// 			if (!error.response) {
// 				history.push("/misc/error/500");
// 				return error;
// 			}
// 			if (error.response.status === 401) {
// 				notifyError("You are not authorized to view this content");
// 				localStorage.removeItem("user");
// 				localStorage.removeItem("access_token");
// 				localStorage.removeItem("refresh_token");
// 				setTimeout(() => {
// 					history.push("/login");
// 				}, 2000);
// 				return error.response;
// 			} else if (error.response && RESPONSE_CODES.failure.includes(error.response.data.code)) {
// 				if (showToast) {
// 					notifyError(error.response.data.response);
// 				}
// 				return error.response;
// 			}
// 			return error.response;
// 		});
// }
