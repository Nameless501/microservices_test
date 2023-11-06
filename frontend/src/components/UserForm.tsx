import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodSchema } from 'zod';
import FormWrapper from './FormWrapper';
import FormInput from './FormInput';

interface IUserForm {
    url: string;
    schema: ZodSchema;
    method: 'POST' | 'PATCH';
}

function UserForm({ url, method, schema }: IUserForm) {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FieldValues>({
        mode: 'all',
        resolver: zodResolver(schema),
    });

    const handleUserCreate: SubmitHandler<FieldValues> = async (data) => {
        const res = await fetch(url, {
            method,
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        });
        if (!res.ok) throw new Error(res.statusText);
    };

    return (
        <FormWrapper
            disabled={!isValid}
            handleSubmit={handleSubmit(handleUserCreate)}
        >
            <FormInput
                register={register}
                name="name"
                label="Username"
                errors={errors}
            />
            <FormInput
                register={register}
                name="email"
                label="Email"
                errors={errors}
            />
        </FormWrapper>
    );
}

export default UserForm;
