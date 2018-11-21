import styled from 'styled-components'

const Card = styled.a`
    padding: 18px 18px 24px;
    width: 220px;
    text-align: left;
    text-decoration: none;
    color: #434343;
    border: 1px solid #9b9b9b;
    transition: 0.1s background-color linear;

    :hover {
        border-color: #067df7;
    }
`

Card.Header = styled.h3`
    margin: 0;
    color: #067df7;
    font-size: 18px;
`

Card.Body = styled.p`
    margin: 0;
    padding: 12px 0 0;
    font-size: 13px;
    color: #333;
`

export default Card