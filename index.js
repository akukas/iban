export function validateIBAN(IBAN) {
	const stringIBAN = String(IBAN);
	const filteredIBAN = stringIBAN.replaceAll(/[^0-9A-Z]/g, "");
	const rotatedIBAN = filteredIBAN.slice(4) + filteredIBAN.slice(0, 4);
	let digits = "";
	for (const char of rotatedIBAN) {
		if (char >= "0" && char <= "9") {
			digits += char;
		} else {
			digits += char.charCodeAt(0) - 55;
		}
	}
	return BigInt(digits) % 97n === 1n;
}
