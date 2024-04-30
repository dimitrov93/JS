import { Link, LinkProps } from '@mui/material'
import { PropsWithChildren } from 'react'

type ExternalLinkParams = PropsWithChildren<LinkProps>

export default function ExternalLink({ children, ...props }: ExternalLinkParams) {
  return (
    <Link target="_blank" rel="noreferrer noopener" {...props}>
      {children}
    </Link>
  )
}
