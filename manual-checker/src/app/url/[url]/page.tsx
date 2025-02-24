'use client';

import { Box, Heading } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { use } from 'react';
import EachFile from '../../../components/EachFile';

interface EachUrlPageProps {
  params: Promise<{ url: string }>;
}

function EachUrlPage({ params }: EachUrlPageProps) {
  const { url } = use(params);

  const { data: allFiles = [] } = useQuery<string[]>({
    queryKey: ['files', url],
    queryFn: async () => {
      const res = await axios.get(`/api/getAllFilesByUrl?url=${url}`);
      return res.data.files;
    },
  });
  if (typeof url !== 'string') return <></>;

  return (
    <Box p="4">
      <Heading>
        {url} - {allFiles.length} files
      </Heading>
      <div>
        {allFiles.map((file) => (
          <EachFile url={url} filePath={file} key={file} />
        ))}
      </div>
    </Box>
  );
}

export default EachUrlPage;
