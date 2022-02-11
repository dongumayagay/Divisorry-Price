function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function formatCurrency(num) {
	return numberWithCommas(num.toFixed(2));
}

export function capitalize(string) {
	return string.replace(/(^\w|\s\w)(\S*)/g, (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase());
}

export function formatErrorCode(code) {
	let error = code.replace('-', ' ');
	error = error.split('/').pop();
	return capitalize(error);
}
