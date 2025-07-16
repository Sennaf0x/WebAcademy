
export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
  userTypeId: string;
}

export interface UpdateUserDto {
  name?: string;
  email?: string;
  password?: string;
}

export interface UserDto {
  id: string;
  name: string;
  email: string;
  userTypeId: string;
  createdAt: Date;
  updatedAt: Date;
}