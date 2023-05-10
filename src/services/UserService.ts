import { API_PATH } from '@/constants/api';
import { AxiosInstance } from 'axios';
import { client } from './client';

interface ReturnType {
  name: string;
}

export class UserAPI {
  private instance: AxiosInstance;

  private apiPath: API_PATH;

  constructor(instance: AxiosInstance, apiPath: API_PATH) {
    this.instance = instance;
    this.apiPath = apiPath;
  }

  async get(): Promise<ReturnType> {
    const response = await this.instance.get(`${this.apiPath}/list`);
    return response.data;
  }
}

const UserService = new UserAPI(client, API_PATH.AUTH);

export { UserService };
