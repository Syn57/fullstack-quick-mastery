export interface UserDB {
    id: string;
    name: string | null;
    email: string;
    password: string;
    contact: string | null;
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
}
