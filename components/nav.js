import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const StyledNav = styled.nav`
  text-align: center;
`
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  ${({ paddingExtra }) => paddingExtra && 'padding: 4px 16px;'}
`
const Li = styled.li`
  display: flex;
  padding: 6px 8px;
`
const A = styled.a`
  color: #067df7;
  text-decoration: none;
  font-size: 13px;
`

const links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'Github' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <StyledNav>
    <Ul paddingExtra>
      <Li>
        <Link prefetch href="/">
          <A>Home</A>
        </Link>
      </Li>
      <Ul>
        {links.map(({ key, href, label }) => (
          <Li key={key}>
            <Link href={href}>
              <A>{label}</A>
            </Link>
          </Li>
        ))}
      </Ul>
    </Ul>
  </StyledNav>
)

export default Nav
