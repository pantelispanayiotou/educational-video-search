'use client';

import { Input } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { ChangeEvent, KeyboardEvent, useState } from 'react';

export default function Search({ getSearchResults }: { getSearchResults: (query: string) => void }) {
    const [value, setValue] = useState('');

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);

    }

    const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            getSearchResults(value);
        }
    }

    return (
        <Input
            w={'100%'}
            onKeyDown={(event) => onKeyDown(event)}
            placeholder="Search"
            value={value}
            onChange={(event) => onChange(event)}
            mt="md"
            rightSection={<IconSearch size={24} />}
        />
    )
}