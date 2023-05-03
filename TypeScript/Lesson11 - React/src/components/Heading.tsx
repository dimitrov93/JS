import { ReactElement } from "react"

type HeadingPropr = {title: string}

const Heading = ({ title }: HeadingPropr): ReactElement => {
  return (
    <h1>{title}</h1>
  )
}

export default Heading