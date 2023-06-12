export interface Person {
    firstName: string;
    lastName: string;
}

export interface ExtendedPerson extends Person {
    age: number
}