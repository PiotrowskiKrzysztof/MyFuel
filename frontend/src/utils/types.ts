export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  Statistics: undefined;
  Login: undefined;
  Register: undefined;
  Scan: undefined;
  Profile: { name: string };
};

export type HeaderVariant = 'authenticated' | 'unauthenticated';

export type User = {
  id: string;
  username: string;
  email: string;
  token: string;
};
