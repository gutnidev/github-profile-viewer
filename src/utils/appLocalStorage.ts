import { IRecentUser, IUser } from 'types';

// ! helpers
const moveCandidateToTop = (candidate: IRecentUser, existingUsers: IRecentUser[]) => {
  const restUsers = existingUsers.filter((item) => item.id !== candidate.id);
  return [candidate, ...restUsers];
};

const setToLocalStorage = (candidate: IRecentUser, existingUsers: IRecentUser[]) => {
  window.localStorage.setItem('recentUsers', JSON.stringify([candidate, ...existingUsers]));
};

// ! main functions
const getRecentUsers = (): IRecentUser[] => {
  const recentJson = window.localStorage.getItem('recentUsers');
  if (!recentJson) return [];
  return JSON.parse(recentJson);
};

const setSearchedUser = ({
  login, avatar_url, id, name = '',
}: IUser) => {
  const recentUser: IRecentUser = {
    login,
    avatar_url,
    id,
    name,
  };

  const existingUsers = getRecentUsers();

  // if there are no users
  if (!existingUsers.length) {
    setToLocalStorage(recentUser, existingUsers);
    return;
  }

  // check if array contains current user
  const candidate = existingUsers.find((item) => item.id === id);
  if (candidate) {
    const newUsers = moveCandidateToTop(candidate, existingUsers);
    window.localStorage.setItem('recentUsers', JSON.stringify(newUsers));
    return;
  }

  // if we have too many users
  if (existingUsers.length === 6) existingUsers.shift();

  setToLocalStorage(recentUser, existingUsers);
};

// ! service
export const appLocalStorage = {
  getRecentUsers,
  setSearchedUser,
};
