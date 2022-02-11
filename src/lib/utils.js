function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function formatCurrency(num) {
	return numberWithCommas(num.toFixed(2));
}
