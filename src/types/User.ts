export type User = {
    firstname: string
    lastname: string;
    email: string;
    password: string;
    clininc: string;
    title: string;
    role: string
}

export type LoginUser = {
    email: string;
    password: string;
}