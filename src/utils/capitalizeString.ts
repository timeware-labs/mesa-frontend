// \w = Primeira letra
// \w\s = Primeira letra depois do espaço
const CAPITALIZE_REGEX = /(^\w|\s\w)/g

/**
 * Capitaliza todas as letras da string
 */
export default function capitalizeString(str: string) {
	return str.toLowerCase().replace(CAPITALIZE_REGEX, (m) => m.toUpperCase())
}
