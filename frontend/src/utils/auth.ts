import { SERVER } from './constans';
import { User } from './types';

const onLoggedIn = (token: string, onSuccess: () => void) => {
  fetch(`${SERVER}/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => {
      if (res.status === 200) {
        onSuccess();
      }
    })
    .catch(console.error);
};

type Login = {
  email: string;
  password: string;
};

export const handleLogin = async (
  data: Login,
  onSuccess: (user: User) => void,
) => {
  const res = await fetch(`${SERVER}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (res.status === 200) {
    const body = await res.json();
    const { user } = body;
    onLoggedIn(user.token, () => onSuccess(user));
  }

  return res;
};

type Register = {
  username: string;
  email: string;
  password: string;
  rePassword: string;
};

export const handleRegister = async (data: Register, onSuccess: () => void) => {
  const res = await fetch(`${SERVER}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (res.status === 200) {
    onSuccess();
  }

  return res;
};
