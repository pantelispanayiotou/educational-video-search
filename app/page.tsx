'use client';

import { Layout } from '@/components/Layout/Layout';
import Search from '@/components/Search/Search';
import { VideoCard } from '@/components/VideoCard/VideoCard';
import { Flex, Grid, Text, useMantineTheme } from '@mantine/core';
import { IconCameraSearch } from '@tabler/icons-react';
import { useState } from 'react';

export default function About() {
    const theme = useMantineTheme();


    const [searchResults, setSearchResults] = useState<string[]>([]);

    const getSearchResults = (query: string) => {
        if (query === '') {
            setSearchResults([])
            return;
        }
        setSearchResults(['TuadTdhmne0', '85aTwqNZIpE', 'H6q4eaBXGiU', 'MRtg6A1f2Ko', '7fcqhU-23TA', 'LPPUIFz29uc', '6MAzUT1YhWE']);
    }

    return (
        <Layout>
            <Search getSearchResults={getSearchResults} />
            <Flex pt={30} justify={'center'} align={'center'} direction={'column'}>
                <Grid>
                    {searchResults.map((video) => (
                        <Grid.Col key={video} span={{ base: 12, md: 6, lg: 3 }}>
                            <VideoCard videoId={video} />
                        </Grid.Col>
                    ))}
                </Grid>
                {searchResults.length === 0 && (
                    <>
                        <IconCameraSearch color={theme.colors.blue[2]} size={128} />
                        <Text c={'black'} size='lg'>Start Your Search</Text>
                        <Text c={'black'} size='md'>Enter a query in the search bar to explore relevant results.</Text>
                    </>
                )}

            </Flex>
        </Layout>
    );
}