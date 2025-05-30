import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

const ContainerImg = styled.img`
  width: 300px;
  border-radius: 10px;
  margin-bottom: 3px;
`;

const ContainerSpan = styled.span`
  font-size: 12px;
  color: #d7fa00;
  border: 1px solid #d7fa00;
  padding: 4px 5px;
  border-radius: 3px;
`;

const ContainerDiv = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const ContainerP = styled.p`
  font-size: 12px;
  color: rgb(160, 160, 160);
`;

export default function Content({ content }) {
  return (
    <ContentContainer>
      <ContainerImg src={content.img} alt={content.title} />
      <ContainerSpan>모집중</ContainerSpan>
      <ContainerDiv>{content.title}</ContainerDiv>
      <ContainerP>{content.subtitle}</ContainerP>
    </ContentContainer>
  );
}
