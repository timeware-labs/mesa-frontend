export default function compareStrings(
	compareString: string,
	stringToCompare: string,
	insensitive?: boolean,
	regexRemove?: RegExp
) {
	if (regexRemove) {
		compareString = compareString.replace(regexRemove, '')
		stringToCompare = stringToCompare.replace(regexRemove, '')
	}

	if (insensitive) {
		return compareString.toLowerCase().includes(stringToCompare.toLowerCase())
	} else {
		return compareString.includes(stringToCompare)
	}
}
