import { Pagination, Stack } from '@mui/material';
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { ILog, LogsResponseType } from '../types/types';
import LogsTable from './LogsTable';
import SearchInput from './SearchInput';
import { setUrlParams } from '../utils/helpers';
import { apiRoutes } from '../configs/configs';

function LogsList() {
    const [logsList, setLogsList] = useState<ILog[]>([]);

    const [currentPage, setCurrentPage] = useState<number>(1);

    const [pagesCount, setPagesCount] = useState<number>(1);

    const [searchQuery, setSearchQuery] = useState<number | null>(null);

    const url = useMemo(() => {
        const params = [
            {
                param: 'page',
                value: currentPage,
            },
        ];
        if (searchQuery) {
            params.push({
                param: 'id',
                value: searchQuery,
            });
        }
        return setUrlParams(apiRoutes.logsList, params);
    }, [searchQuery, currentPage]);

    const fetchLogsData = useCallback(async () => {
        try {
            const res = await fetch(url);
            const { logs, pagesCount }: LogsResponseType = await res.json();
            setLogsList(logs);
            setPagesCount(pagesCount);
        } catch (err) {
            console.log(err);
        }
    }, [url]);

    useEffect(() => {
        fetchLogsData();
    }, [fetchLogsData]);

    const handlePageChange = (_evt: ChangeEvent<unknown>, value: number) =>
        setCurrentPage(value);

    return (
        <Stack gap={2} alignItems="center">
            <SearchInput handleSearch={(id) => setSearchQuery(id)} />
            <LogsTable logsList={logsList} />
            <Pagination
                count={pagesCount}
                page={currentPage}
                onChange={handlePageChange}
            />
        </Stack>
    );
}

export default LogsList;
