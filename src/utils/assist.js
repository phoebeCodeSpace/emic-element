export const oneOf = (value,valueList) => {
  return valueList.some(item=>item === value)
}