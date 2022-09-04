import { IRecentUser } from 'types';

export const getListText = (user: IRecentUser) => {
  const { login, name } = user;
  let text = login;

  if (name) text = `${name} (${text})`;

  return text;
};
