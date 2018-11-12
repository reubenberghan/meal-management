import * as React from 'react'
import styled from 'styled-components'

const Placeholder = styled.span`
  border-bottom: 2px solid #f3f3f3;
  cursor: default;
  font-size: 1.2rem;
  margin: 0 1rem;
  padding-bottom: 0.5rem;
`

Placeholder.displayName = 'PlaceholderfooterStyle'

const Link = styled.a`
  color: #d7d8da;
  font-size: 1.2rem;
  margin: 0 1rem;
  padding-bottom: 0.5rem;
  text-decoration: none;

  &:hover {
    border-bottom: 2px solid #d7d8da;
  }
`

Link.displayName = 'LinkFooterStyle'

export default function FooterLink ({ children, href, isCurrentPage, onClick }) {
  return isCurrentPage ? (
    <Placeholder>{children}</Placeholder>
  ) : (
    <Link href={href} onClick={onClick}>
      {children}
    </Link>
  )
}
