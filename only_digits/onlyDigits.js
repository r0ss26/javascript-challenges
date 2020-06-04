const onlyDigits = (string) => {
	return /[^\D+$]/.test(string);
}