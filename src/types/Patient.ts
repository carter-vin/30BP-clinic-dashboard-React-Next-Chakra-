
export type PatientType  = {
    id: string | number;
    age: number
    name: string;
    email: string;
    dob: string;
    gender: string;
    ethnicity: string;
    location: string
    zipcode: string
    phone: string
    street: string
}

export type SearcPatientType  = {
    id: string | number;
    name: string;
    email: string;
    zipcode: string;
    dob: string;
}