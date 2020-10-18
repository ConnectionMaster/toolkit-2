export function getOptionalInput(name: string): string | undefined {
  const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`]
  if (val !== undefined && val !== '<<undefined>>') {
    return val.trim()
  }
  return undefined
}

export function getOptionalBooleanInput(name: string): boolean | undefined {
  let value = getOptionalInput(name)
  if (value !== undefined) {
    value = value.toLowerCase()
    if (value !== 'true' && value !== 'false') {
      throw new Error(`Optional input <${name}> only accepts true or false. Got <${value}>.`)
    }
    return value === 'true'
  }
  return undefined
}

export function getOptionalYesNoInput(name: string): boolean | undefined {
  let value = getOptionalInput(name)
  if (value !== undefined) {
    value = value.toUpperCase()
    if (value !== 'YES' && value !== 'NO') {
      throw new Error(`Optional input <${name}> only accepts yes or no. Got <${value}>.`)
    }
    return value === 'YES'
  }
  return undefined
}
