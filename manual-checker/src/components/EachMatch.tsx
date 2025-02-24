'use client';

import { Grid, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { CFGHash } from '../../../cfg/src/utils/types';
import CodeHighlighter from './CodeHighlighter';

type EachMatchProps = {
  lib: string;
  version: string[];
  targetHash: string;
  funcBody: string;
};

function EachMatch({ lib, version, targetHash, funcBody }: EachMatchProps) {
  const { data } = useQuery<{
    filteredHashes: (CFGHash & { funcBody: string })[];
  }>({
    queryKey: ['fileHashMatch', lib, version[0], targetHash],
    queryFn: async () => {
      const res = await axios.get(
        `/api/getFuncByHashAndLibVersion?lib=${lib}&version=${version[0]}&hash=${targetHash}`
      );
      return res.data;
    },
  });

  return (
    <div>
      <Text
        w="100%"
        bgColor="green.100"
        color="green.800"
        p="1"
        borderRadius="2"
      >
        Hash: {targetHash}
      </Text>
      <Grid templateColumns="1fr 1fr" gap={4}>
        <div>
          <div>Function:</div>
          <CodeHighlighter code={funcBody} />
        </div>
        <div>
          <div>
            <span>{lib}</span>
            <span>@</span>
            <span>{version.join(', ')}</span>
          </div>
          {data?.filteredHashes.map((hashMatch, idx) => (
            <div key={idx}>
              <CodeHighlighter code={hashMatch.funcBody} />
            </div>
          ))}
        </div>
      </Grid>
    </div>
  );
}

export default EachMatch;
