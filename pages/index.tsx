import React from 'react';
import styled from 'styled-components';
import { InstructionItem } from '../components';
import { Button, CodeSnippet } from 'carbon-components-react';
import Link from 'next/link';

const Styled = {
  Container: styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    --heading-color: #4876e0;
    --text-color: #84a8ff;
  `,
  InstructionBlock: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 600px;
    overflow-wrap: break-word;
  `,
  H1: styled.h1`
    color: var(--heading-color);
  `,
  CodeSnippet: styled(CodeSnippet)`
    color: gray;
  `
};

const instructions = [
  'Create a page that, given a user id, renders and displays all relevent data for that user.',
  'Use the following endpoint with the following header: '
];
const notes = [
  'Dont focus on styling and making things look pretty.',
  'Emphasize performance and optimization. Dont make unnecessary calls, re-use/cache data, etc.'
];

const exampleUserResponse = `{
  "id": "60d0fe4f5311236168a109ca",
  "title": "ms",
  "firstName": "sara",
  "lastName": "Andersen",
  "picture": "https://randomuser.me/api/portraits/women/58.jpg"
}`;

const headers = `headers: {
  'app-id': '626877ff0ba676c3fcce86bf'
}`;

export default () => {
  return (
    <Styled.Container>
      <Button>
        <Link href='/instructions/1'>Instructions</Link>
      </Button>
    </Styled.Container>
  );
};
