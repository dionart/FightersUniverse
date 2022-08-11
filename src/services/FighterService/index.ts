import axios, { AxiosInstance } from "axios";
import { API_URL } from "react-native-dotenv";

export class FighterService {
  private readonly httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: API_URL,
    });
  }

  public async getFighters(universe?: string): Promise<any> {
    const params = new URLSearchParams({
      universe: universe || "",
    });

    const response = await this.httpClient.get<any>(`fighters?${params}`);
    return response.data;
  }
}
