import * as React from 'react'
import styled from 'styled-components'

const Placeholder = styled.span`
  border-bottom: 2px solid #f3f3f3;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: default;
`

Placeholder.displayName = 'PlaceholderHeaderStyle'

const Link = styled.a`
  color: #f3f3f3;
  font-size: 1.2rem;
  text-decoration: none;

  &:hover {
    border-bottom: 2px solid #d7d8da;
    color: #d7d8da;
  }
`

Link.displayName = 'LinkHeaderStyle'

export default function HeaderLink ({ children, href, isCurrentPage, onClick }) {
  return isCurrentPage ? (
    <Placeholder>{children}</Placeholder>
  ) : (
    <Link href={href} onClick={onClick}>
      {children}
    </Link>
  )
}
