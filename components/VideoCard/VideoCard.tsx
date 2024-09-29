import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react';
import {
    Card,
    Text,
    ActionIcon,
    Badge,
    Group,
    Center,
    Avatar,
    useMantineTheme,
    rem,
    Skeleton,
} from '@mantine/core';
import classes from './VideoCard.module.css';
import { useState } from 'react';
import Image from 'next/image'

export function VideoCard({ videoId }: { videoId: string }) {
    const linkProps = { href: 'https://mantine.dev', target: '_blank', rel: 'noopener noreferrer' };
    const theme = useMantineTheme();
    const [isLoading, setIsLoading] = useState(true)

    const getYoutubeUrl = `https://i.ytimg.com/vi/${videoId}/hq720.jpg`;


    return (
        <Card withBorder radius="md" className={classes.card}>
            <Card.Section>
                <a {...linkProps}>
                    {isLoading && (
                        <Skeleton
                            w={350}
                            h={180}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                zIndex: 1,
                            }}
                        />
                    )}
                    <Image
                        alt="test"
                        width={350}
                        height={180}
                        src={getYoutubeUrl}
                        style={{
                            transition: 'opacity 0.5s ease',
                            opacity: isLoading ? 0 : 1,
                        }}
                        onLoad={() => setIsLoading(false)}
                    />

                </a>
            </Card.Section>
            <Text className={classes.title} fw={500} component="a" {...linkProps}>
                Resident Evil Village review
            </Text>

            <Text fz="sm" c="dimmed" lineClamp={4}>
                Resident Evil Village is a direct sequel to 2017’s
            </Text>
        </Card>
    );
}