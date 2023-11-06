export const getFormattedDate = (date: string): string =>
    new Date(Date.parse(date)).toLocaleDateString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
    });

export const setUrlParams = (
    url: string,
    params: Array<{ param: string; value: number | string }>
): string => {
    const newUrl = new URL(url);
    params.forEach(({ param, value }) => {
        newUrl.searchParams.append(param, `${value}`);
    });
    return newUrl.toString();
};

export const setRouteId = (route: string, id: number | string): string =>
    route.replace(':id', `${id}`);
