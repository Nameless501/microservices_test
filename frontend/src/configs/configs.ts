import { z } from 'zod';

export const appRoutes = {
    usersList: '/',
    newUser: '/new',
    updateUser: '/user/:id',
    logsList: '/logs',
};

export const navigationLinks = [
    { title: 'Users', route: appRoutes.usersList },
    { title: 'Logs', route: appRoutes.logsList },
    { title: 'New user', route: appRoutes.newUser },
];

export const apiRoutes = {
    usersList: import.meta.env.API_USERS_LIST ?? 'http://localhost:8001',
    newUser: import.meta.env.API_NEW_USER ?? 'http://localhost:8001',
    updateUser: import.meta.env.API_UPDATE_USER ?? 'http://localhost:8001',
    logsList: import.meta.env.API_LOGS_LIST ?? 'http://localhost:8000',
}

export const newUserValidation = z.object({
    name: z
        .string()
        .min(1, { message: 'Username must be at least 3 characters' })
        .max(40, { message: 'Name must be 40 or fewer characters long' }),
    email: z
        .string()
        .min(1, { message: 'Email is required' })
        .email('Invalid email address'),
});

export const updateUserValidation = z.object({
    name: z.preprocess(
        (name) => {
            if (!name || typeof name !== 'string') return undefined;
            return name === '' ? undefined : name;
        },
        z
            .string()
            .min(1, { message: 'Username must be at least 3 characters' })
            .max(40, { message: 'Name must be 40 or fewer characters long' })
            .optional()
    ),
    email: z.preprocess((email) => {
        if (!email || typeof email !== 'string') return undefined;
        return email === '' ? undefined : email;
    }, z.string().email('Invalid email address').optional()),
});

export const searchValidation = z.object({
    id: z.preprocess((id) => {
        if (!id) return undefined;
        if (id == Number(id)) return Number(id);
        return id;
    }, z.number().optional()),
});
