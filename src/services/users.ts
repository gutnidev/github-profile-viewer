import httpClient from 'httpClient';
import { IServiceMethodFunc, IUser } from 'types';
import { IRepositoryItem } from 'types/repos';

interface IUsersService {
    getUserByUsername: IServiceMethodFunc<string, IUser>;
    getUserRepos: IServiceMethodFunc<string, IRepositoryItem[]>;
}

export const userService: IUsersService = {
  getUserByUsername: (username: string) => httpClient.get(`/users/${username}`),
  getUserRepos: (username: string) => httpClient.get(`/users/${username}/repos?sort=updated_at`),
};
