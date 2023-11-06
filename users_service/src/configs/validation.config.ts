import { z } from 'zod';

export const createUserCredentialsSchema = z.object({
    name: z
        .string({
            required_error: 'Name is required',
            invalid_type_error: 'Name must be a string',
        })
        .max(40, { message: 'Name must be 40 or fewer characters long' }),
    email: z
        .string({
            required_error: 'Name is required',
            invalid_type_error: 'Name must be a string',
        })
        .email({ message: 'Invalid email address' }),
});

export const updateUserCredentialsSchema = z.object({
    name: z
        .string()
        .max(40, { message: 'Name must be 40 or fewer characters long' })
        .optional(),
    email: z.string().email({ message: 'Invalid email address' }).optional(),
});
