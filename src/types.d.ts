type User = {
    _id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

type initialStateType = {
    users: User[];
}