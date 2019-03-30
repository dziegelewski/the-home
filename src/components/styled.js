import styled from 'styled-components';

const font = {
    big: '2.5rem',
    medium: '1.5rem',
    small: '1.2rem',
}

const color = {
  gray: '#AAAAAA',
}

export const Main = styled.main`
  max-width: 550px;
  margin: 1rem auto;
  font-size: ${font.medium};
  padding: 0 1rem;
  line-height: 140%;
`;

export const Article = styled.article`
  margin: 1.5rem 0 1rem;
`;

export const H2 = styled.h2`
  font-size: ${font.big};
  font-weight: 400;
  margin: 2rem 0 1rem;
`;

export const H3 = styled.h3`
  font-size: ${font.medium};
  margin: .5rem 0;
`;

export const Lang = styled.span`
  font-size: ${font.small};
  color: ${color.gray};
`;

export const Text = styled.p`
  font-size: ${font.medium};
  margin: 0 0 .5rem;

  ${({ extra }) => extra && `
    font-size: ${font.small};
  `}
`;

export const A = styled.a`
  font-size: ${font.medium};
  margin-right: .5em;
`;