import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

class UsersServices {
    constructor(private userSchema: Prisma.UserDelegate) {}

    public createUser = (data: Prisma.UserCreateInput) =>
        this.userSchema.create({ data });

    public findUsers = () => this.userSchema.findMany({ orderBy: { id: 'asc' } });

    public updateUser = async (
        id: number,
        data: Prisma.UserUpdateInput
    ): Promise<void> => {
        await this.userSchema.update({ where: { id }, data });
    };
}

export default new UsersServices(prisma.user);
