export interface ILogin{
    email: string,
    password: string
}


export interface IUser {
    email: string,
    name: string,
    id: number,
    age: string,
    avatar: string
}

export interface IRegisterFieldValues {
    name: string;
    email: string;
    password: string;
    confirm: string;
    avatar: string;
  }