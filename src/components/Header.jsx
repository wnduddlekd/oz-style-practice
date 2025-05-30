import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: black;
`;

const HeaderH1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const HeaderUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  list-style: none;
  font-weight: 400;
  font-size: 13px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderH1>OZ코딩스쿨</HeaderH1>
      <HeaderUl>
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </HeaderUl>
    </HeaderContainer>
  );
}
