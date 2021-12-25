import {
  FunctionData,
  ParameterData,
  TypeParameterData
} from 'generate-ts-docs'

const INDENT_SIZE = 2
const EN_DASH = '–'

export function renderFunctionDataToMarkdown(
  functionData: FunctionData,
  options?: { headerLevel: number }
): string {
  const headerLevel = typeof options === 'undefined' ? 1 : options.headerLevel
  const { description, name, parameters, type, typeParameters, returnType } =
    functionData
  const lines: Array<string> = []
  lines.push(
    `${'#'.repeat(headerLevel)} \`${createFunctionTitle(
      name,
      typeParameters,
      parameters
    )}\``
  )
  lines.push('')
  if (type !== 'function') {
    lines.push(`(\`${type}\`)`)
    lines.push('')
  }
  if (description !== null) {
    lines.push(`${description}`)
    lines.push('')
  }
  if (type !== 'function') {
    return lines.join('\n')
  }
  if (typeParameters !== null && typeParameters.length > 0) {
    lines.push('***Type parameters***')
    lines.push('')
    for (const typeParameter of typeParameters) {
      lines.push(stringifyTypeParameter(typeParameter, 0))
    }
    lines.push('')
  }
  if (parameters !== null && parameters.length > 0) {
    lines.push('***Parameters***')
    lines.push('')
    for (const parameter of parameters) {
      lines.push(stringifyParameter(parameter, 0))
    }
    lines.push('')
  }
  if (returnType !== null) {
    lines.push('***Return type***')
    lines.push('')
    if (returnType.description !== null) {
      lines.push(returnType.description)
      lines.push('')
    }
    lines.push('```')
    lines.push(returnType.type)
    lines.push('```')
    lines.push('')
  }
  return lines.join('\n')
}

function createFunctionTitle(
  name: string,
  typeParameters: null | Array<TypeParameterData>,
  parameters: null | Array<ParameterData>
): string {
  if (typeParameters === null || parameters === null) {
    return name
  }
  const typeParameterNames = typeParameters.map(function ({
    name
  }: TypeParameterData): string {
    return name
  })
  const typeParametersString =
    typeParameterNames.length === 0 ? '' : `<${typeParameterNames.join(', ')}>`
  const parameterNames = parameters.map(function ({
    name,
    rest
  }: ParameterData): string {
    if (rest === true) {
      return `...${name}`
    }
    return name
  })
  const firstOptionalParameterIndex = parameters.findIndex(function ({
    optional
  }: ParameterData): boolean {
    return optional === true
  })
  if (firstOptionalParameterIndex === -1) {
    // No optional parameters
    return `${name}${typeParametersString}(${parameterNames.join(', ')})`
  }
  const requiredParameters = parameterNames.slice(
    0,
    firstOptionalParameterIndex
  )
  const optionalParameters = parameterNames.slice(firstOptionalParameterIndex)
  if (requiredParameters.length === 0) {
    return `${name}${typeParametersString}([${optionalParameters.join(', ')}])`
  }
  return `${name}${typeParametersString}(${requiredParameters.join(
    ', '
  )} [, ${optionalParameters.join(', ')}])`
}

function stringifyTypeParameter(
  { defaultType, name, type }: TypeParameterData,
  indent: number
) {
  const line: Array<string> = []
  line.push(`${' '.repeat(indent * INDENT_SIZE)}-`)
  line.push(`\`${name}\``)
  if (typeof type === 'string') {
    line.push(`(\`${type}\`)`)
  }
  if (typeof defaultType === 'string') {
    line.push(EN_DASH)
    line.push(`*Defaults to \`${defaultType}\`.*`)
  }
  return line.join(' ')
}

function stringifyParameter(
  { description, name, optional, type }: ParameterData,
  indent: number
) {
  const line: Array<string> = []
  line.push(`${' '.repeat(indent * INDENT_SIZE)}-`)
  line.push(`\`${name}\``)
  line.push(`(\`${typeof type === 'string' ? type : type.type}\`)`)
  if (optional === true || description !== null) {
    line.push(EN_DASH)
  }
  if (optional === true) {
    line.push('*Optional.*')
  }
  if (description !== null) {
    line.push(description)
  }
  const lines = [line.join(' ')]
  if (typeof type !== 'string') {
    for (const key of type.keys) {
      lines.push(stringifyParameter(key, indent + 1))
    }
  }
  return lines.join('\n')
}
