import styled from "styled-components";

function Header() {
  const Header = styled.header`
    font-size: 24px;
    display: flex;
    justify-content: center;
  `;

  const Title = styled.h1`
    overflow: hidden;
    white-space: nowrap;
    border-right: 3px solid;
    animation: typing 2s steps(30) 1s 1 normal both,
               blinking 500ms steps(30) infinite normal;

    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }

    @keyframes blinking {
      0% {border-right-color: transparent}
      100% {border-right-color: #ff652f}
    }
  `;

  return (
    <Header>
      <Title>Another typing speed test</Title>
    </Header>
  )
}

export default Header;