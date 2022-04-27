import { Button, CodeSnippet } from 'carbon-components-react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { InstructionItem } from '../../components';
import { Block1, Block2, Block3 } from '../../containers/InstructionBlocks';

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
    margin-bottom: 10px;
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
  'Emphasize performance and optimization. Try to re-use/cache data where possible and avoid making unnecessary calls.'
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

const InstructionSet = ({ instructionSet }: { instructionSet: string }) => {
  switch (instructionSet) {
    case '1':
      return <Block1 />;
    case '2':
      return <Block2 />;
    case '3':
      return <Block3 />;
    default:
      return <React.Fragment />;
  }
};

const InstructionPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  instructionSet
}): ReactElement => {
  return (
    <Styled.Container>
      <Styled.H1>{`Instructions Part ${instructionSet}`}</Styled.H1>
      <Styled.InstructionBlock>
        <InstructionSet instructionSet={instructionSet} />
      </Styled.InstructionBlock>

      {instructionSet === '1' && (
        <>
          <Styled.H1>Notes</Styled.H1>
          <Styled.InstructionBlock>
            <InstructionItem number={1} instruction={notes[0]} />
            <InstructionItem number={2} instruction={notes[1]} />
          </Styled.InstructionBlock>
        </>
      )}

      {parseInt(instructionSet) < 3 && (
        <Link href={'/instructions/' + (parseInt(instructionSet) + 1)}>
          <Button>Next</Button>
        </Link>
      )}
    </Styled.Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { number: '1' } }, { params: { number: '2' } }, { params: { number: '3' } }],
    fallback: false // false or 'blocking'
  };
};

export const getStaticProps: GetStaticProps<{ instructionSet: string }> = async ({ params }) => {
  return {
    props: {
      instructionSet: params!['number'] as string
    }
  };
};

export default InstructionPage;
