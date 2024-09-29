'use client';

import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Button, Flex, Group } from '@mantine/core';
import { Navbar } from '../Navbar/Navbar';
import Search from '../Search/Search';

export function Layout({ children }: { children: any }) {

    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

    return (
        <AppShell
            withBorder={true}
            header={{ height: 60 }}
            navbar={{
                width: 250,
                breakpoint: 'sm',
                collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Flex align={'center'} justify={'space-between'} dir='column'>
                    <Flex align={'center'} justify={'center'}>
                        <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
                        <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
                    </Flex>
                    <Flex m={'0 auto'}>

                    </Flex>
                </Flex>
            </AppShell.Header>
            <AppShell.Navbar p="md">
                <Navbar />
            </AppShell.Navbar>
            <AppShell.Main>
                {children}
            </AppShell.Main>
        </AppShell>
    )
}