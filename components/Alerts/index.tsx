interface Props {
  header: string
  body: string
}

export default function Alert({ header, body }: Props) {
  return (
    <div className="container-fluid w-75">
      <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">{header}</h4>
        <hr />
        <small>{body}</small>
      </div>
    </div>
  )
}
