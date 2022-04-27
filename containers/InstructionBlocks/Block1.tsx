import { CodeSnippet } from 'carbon-components-react';
import styled from 'styled-components';
import { InstructionItem } from '../../components/InstructionItem';

const Styled = {
  CodeSnippet: styled(CodeSnippet)`
    color: gray;
  `
};

const instructions = [
  'Create a page that accepts a userId as a parameter and renders all relevent data for that user.',
  'Use the following endpoint with the following header: '
];

const exampleUserResponse = `exampleUserResponse: {
  "id": "60d0fe4f5311236168a109ca",
  "title": "ms",
  "firstName": "sara",
  "lastName": "Andersen",
  "picture": "https://randomuser.me/api/portraits/women/58.jpg"
}`;

const headers = `headers: {
  'app-id': '626877ff0ba676c3fcce86bf'
}`;

export const Block1 = () => {
  return (
    <>
      <InstructionItem number={1} instruction={instructions[0]} />
      <InstructionItem number={2} instruction={instructions[1]} />
      <Styled.CodeSnippet hideCopyButton>
        {'https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca'}
        <br />
        <br />
        {headers}
      </Styled.CodeSnippet>
      <Styled.CodeSnippet hideCopyButton>{exampleUserResponse}</Styled.CodeSnippet>
    </>
  );
};
