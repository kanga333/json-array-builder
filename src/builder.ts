export function buildArray(str: string, separator: string): string {
  const converted = convert_separator(separator)
  const splited: string[] = str.split(converted)
  return JSON.stringify(splited)
}

function convert_separator(separator: string): string {
  switch (separator) {
    case 'newline':
      return '\n'
    case 'space':
      return ' '
    default:
      return separator
  }
}
