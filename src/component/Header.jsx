import styled from 'styled-components';

const Nav = styled.header`
  text-transform: uppercase;
  font-size: 1.6rem;
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-between;
  color: #fff;
  border-bottom: 0.1rem solid #a7a1a1;
`;

const H1 = styled.h1`
  font-size: 2.6rem;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

const Li = styled.li`
  font-size: 1.4rem;
  font-weight: bold;
  width: 15rem;
  padding: 1.5rem 1.2rem;
  text-align: center;
  border-bottom: 0.1rem solid transparent;

  &:hover {
    border-bottom: 0.1rem solid #e9ecef;
    color: #e9ecef;
  }
`;

function Header() {
  return (
    <Nav>
      <H1>WillTech</H1>
      <Ul className="nav">
        <Li>services</Li>
        <Li>contact us</Li>
        <Li>login</Li>
      </Ul>
    </Nav>
  );
}

export default Header;
