'use client';

import { Input, ListItem, ListRoot, VStack } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import Fuse from 'fuse.js';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

export default function Home() {
  const { data: allWebsiteUrls = [] } = useQuery<string[]>({
    queryKey: ['websiteUrls'],
    queryFn: async () => {
      const res = await fetch('/api/getAllWebsiteUrls');
      const data = await res.json();
      return data.urls;
    },
  });

  const [urlInput, setUrlInput] = useState('');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const router = useRouter();

  const filteredUrls = useMemo(() => {
    if (urlInput.trim() === '') return [];
    const fuse = new Fuse(allWebsiteUrls, { keys: [''], threshold: 0.3 });
    return fuse.search(urlInput).map((result) => result.item);
  }, [urlInput, allWebsiteUrls]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (filteredUrls.length === 0) return;

    if (e.key === 'ArrowDown') {
      setSelectedIndex((prev) =>
        prev === null ? 0 : Math.min(prev + 1, filteredUrls.length - 1)
      );
    } else if (e.key === 'ArrowUp') {
      setSelectedIndex((prev) =>
        prev === null ? filteredUrls.length - 1 : Math.max(prev - 1, 0)
      );
    } else if (e.key === 'Enter' && selectedIndex !== null) {
      router.push(`/url/${encodeURIComponent(filteredUrls[selectedIndex])}`);
    }
  };

  return (
    <VStack maxH="100vh" py="4vh">
      <Input
        onChange={(e) => setUrlInput(e.target.value)}
        value={urlInput}
        onKeyDown={handleKeyDown}
        w="70%"
        maxW="600px"
      />
      <ListRoot w="70%" maxW="600px" maxH="80vh" overflow="scroll">
        {filteredUrls.map((url, index) => (
          <ListItem
            key={url}
            bg={index === selectedIndex ? 'bg.info' : 'white'}
            onClick={() => router.push(`/url/${encodeURIComponent(url)}`)}
            onMouseEnter={() => setSelectedIndex(index)}
          >
            {url}
          </ListItem>
        ))}
      </ListRoot>
    </VStack>
  );
}
