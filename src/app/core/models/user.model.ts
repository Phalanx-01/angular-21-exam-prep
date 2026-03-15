export interface User {
id: string;
email: string;
name: string;
role: UserRole;
avatarUrl?: string;
}

export type UserRole = 'admin' | 'manager' | 'member';