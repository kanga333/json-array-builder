export function buildArray(
  str: string,
  separator: string,
  append_to: string
): string {
  const converted = convert_separator(separator)
  const splited: string[] = str.split(converted)
  if (append_to !== '') {
    const dest: string[] = JSON.parse(append_to)
    dest.push(...splited)
    return JSON.stringify(dest)
  }
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
