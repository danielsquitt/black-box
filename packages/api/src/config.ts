import dotenv from 'dotenv';

dotenv.config();

const checkEnv = (envVar: string) => {
  if (!process.env[envVar]) {
    throw new Error(`Please define the Enviroment variable ${envVar}`);
  } else {
    return process.env[envVar] as string;
  }
};

export const PORT: number = parseInt(checkEnv('PORT'), 10);
export const DB_URL: string = checkEnv('DB_URL');
export const DB_NAME: string = checkEnv('DB_NAME');
export const AUTH0_DOMAIN: string = checkEnv('AUTH0_DOMAIN');
export const AUTH0_AUDIENCE: string = checkEnv('AUTH0_AUDIENCE');
export const AUTH0_SCOPE: string = checkEnv('AUTH0_SCOPE');
