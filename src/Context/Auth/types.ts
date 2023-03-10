export interface User {
    id: string;
    uid: string;
    email?: string;
    originId?: number;
  }
  export interface AuthContextType {
    userConfig?: UserConfig | any;
    setUserConfig: (value: UserConfig) => void;
    user?: User;
    setUser: (value: User | undefined) => void;
    googleSignIn: () => void;
    getTokenFromJwt: (token: string) => Promise<void>;
    logOut: () => Promise<void>;
  }
  export interface UserConfig {
    uid: string;
    email?: string;
    displayName?: string;
    photoURL?: string;
  }