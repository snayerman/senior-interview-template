import React from 'react';
import styled from 'styled-components';
import { InstructionItem } from '../components';
import { CodeSnippet } from 'carbon-components-react';

const Styled = {
  Container: styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    --heading-color: #4876e0;
    --text-color: #f6f9ff;
  `,
  H1: styled.h1`
    color: var(--heading-color);
  `
};

const instructions = ['Create a page that '];

const exampleUserResponse = `{
  "id": "60d0fe4f5311236168a109ca",
  "title": "ms",
  "firstName": "sara",
  "lastName": "Andersen",
  "picture": "https://randomuser.me/api/portraits/women/58.jpg"
}`;

export default () => {
  return (
    <Styled.Container>
      <Styled.H1>Instructions</Styled.H1>
      <InstructionItem number={1} instruction='hi' />
      <CodeSnippet type='multi'>{exampleUserResponse}</CodeSnippet>
    </Styled.Container>
  );
};
