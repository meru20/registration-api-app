type User = {
    // _id: number;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

type InitialStateType = {
    users: User[];
    user: User | undefined;
    postUsers: (register:User) =>  void;
    getUsers: () => void;
}