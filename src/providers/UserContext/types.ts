export interface iLoginFormData {
    email: string;
    password: string;
}

export interface iUser{
    email: string;
    name: string;
    password?: number;
    nickname: string;
    avatar: string;
    id: number;
}

export interface iDataUser {
    accessToken: string;
    user: iUser;
}
export interface iDefaultProviderProps{
    children: React.ReactNode;
}

export interface iRegisterFormValues {
    name: string;
    nickname: string;
    avatar: string;
    email: string;
    password: string;
    repeatPassword?: string;
}

export interface iEditFormValues {
    name?: string;
    nickname?: string;
    avatar?: string;
    email?: string;
    password?: string;
    repeatPassword?: string;
}

export interface iIdUser {
    id: number;
}
// {
//     "book": "As aventuras de ...",
//     "author": "hristopher Paolini",
//     "year": 2022,
//     "ilustrador": "John Jude Palencar",
//     "userId": 4,
//     "id": 3
// }

export interface iFavoriteAnime{
    book: string;
    author: string;
    year: number;
    ilustrador: string;
    userId: number;
    id: number;
}