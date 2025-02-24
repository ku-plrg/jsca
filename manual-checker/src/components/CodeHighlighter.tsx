'use client';

import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

type CodeHighlighterProps = { code: string };

export default function CodeHighlighter({ code }: CodeHighlighterProps) {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={oneDark}
      customStyle={{ maxWidth: '48vw' }}
    >
      {code}
    </SyntaxHighlighter>
  );
}
