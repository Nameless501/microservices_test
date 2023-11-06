export interface IUser {
    name: string;
    email: string;
    id: number;
}

export interface ILog {
    userId: number;
    time: string;
    type: 'update' | 'create';
    id: number;
}

export type LogsResponseType = {
    page: number;
    pagesCount: number;
    logs: ILog[];
};
