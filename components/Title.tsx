import { TTitle } from "../types/types"

export default function Title({ name }: TTitle) {
  return (
    <div className="mx-3 text-center">
      <h1>{name}</h1>
    </div>
  )
}
