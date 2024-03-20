import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

const Nav = styled.header`
  text-transform: uppercase;
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-between;
  color: #fff;
  border-bottom: 0.1rem solid #a7a1a1;
  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
    padding: 1.5rem 2.5rem;
  }

  @media screen and (min-width: 601px) and (max-width: 900px) {
    padding: 1.8rem 2.5rem;
  }
`;

const H1 = styled.h1`
  font-size: 2.6rem;
  @media screen and (max-width: 600px) {
    font-size: 1.8rem;
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 601px) and (max-width: 900px) {
    justify-content: space-between;
    gap: 0.1rem;
  }
`;

const Li = styled.li`
  font-size: 1.4rem;
  font-weight: bold;
  width: 15rem;
  padding: 1.5rem 1.2rem;
  text-align: center;
  border-bottom: 0.1rem solid transparent;
  @media screen and (min-width: 601px) and (max-width: 900px) {
    padding: 1rem 0.3rem;
    font-size: 1.2rem;
    width: 10rem;
  }

  &:hover {
    border-bottom: 0.1rem solid #e9ecef;
    color: #e9ecef;
  }
`;

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
const Bar = styled.div`
  background: #fff;
  width: 2rem;
  height: 0.2rem;
`;

function Header() {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  return (
    <Nav>
      <H1>WillTech</H1>
      {isMobile ? (
        <Hamburger>
          <Bar class="bar bar-1"></Bar>
          <Bar class="bar bar-2"></Bar>
          <Bar class="bar bar-3"></Bar>
        </Hamburger>
      ) : (
        <Ul className="nav">
          <Li>services</Li>
          <Li>contact us</Li>
          <Li>login</Li>
        </Ul>
      )}
    </Nav>
  );
}

export default Header;
