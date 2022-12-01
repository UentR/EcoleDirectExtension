document.getElementById('Button').addEventListener('click', Send);

function Send() {
	console.log("oui");
	chrome.runtime.sendMessage("hello", (response) => {
		console.log("?");
		// console.log(response.farewell);
	});
};

