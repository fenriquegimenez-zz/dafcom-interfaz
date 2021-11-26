export function validator(object: Object) {
  return (
    Object.values(object).filter((value) => {
      return value === ''
    }).length > 0
  )
}
