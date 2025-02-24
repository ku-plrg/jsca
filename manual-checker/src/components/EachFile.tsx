'use client';
import { Box, Heading, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Type2Match, Type3Match } from '../utils/types';
import EachMatch from './EachMatch';

interface EachFileProps {
  url: string;
  filePath: string;
}

function EachFile({ url, filePath }: EachFileProps) {
  const { data, isLoading, error } = useQuery<{
    fileContent: string;
    type3Libs: Type3Match[];
    type2Libs: Type2Match[];
  }>({
    queryKey: ['fileHashMatch', url, filePath],
    queryFn: async () => {
      const encodedFilePath = encodeURIComponent(filePath);
      const res = await axios.get(
        `/api/getHashMatches?filePath=${encodedFilePath}&url=${url}`
      );
      return res.data;
    },
  });
  if (isLoading) return <div>{filePath} Loading...</div>;
  if (error)
    return (
      <Text color="red">
        {filePath} Error: {error.message}
      </Text>
    );
  if (!data) return <div>{filePath} No data</div>;

  if (data.type3Libs.length === 0 && data.type2Libs.length === 0)
    return <Text color="gray.400">{filePath} No Type 2,3 Matches</Text>;

  return (
    <Box
      border="1px solid"
      borderColor="blue.700"
      borderRadius="4"
      p="1"
      mt="1"
      mb="1"
    >
      <Heading>{filePath}</Heading>
      <Box>
        <Heading p="2">Type 3 Libs : {data.type3Libs.length}</Heading>
        {data.type3Libs.length > 0 && (
          <div>
            {data.type3Libs.map((libMatches) => (
              <EachMatch
                key={libMatches.hash}
                lib={libMatches.libName}
                funcBody={libMatches.func}
                version={[libMatches.version]}
                targetHash={libMatches.hash}
              />
            ))}
          </div>
        )}
        <Box h="1px" bgColor="blue.800" />
        <Heading p="2">Type 2 Libs : {data.type2Libs.length}</Heading>
        {data.type2Libs.length > 0 && (
          <div>
            {data.type2Libs.map((libMatches) => (
              <EachMatch
                key={libMatches.hash}
                lib={libMatches.libName}
                funcBody={libMatches.func}
                version={libMatches.versions}
                targetHash={libMatches.hash}
              />
            ))}
          </div>
        )}
      </Box>
    </Box>
  );
}

export default EachFile;
