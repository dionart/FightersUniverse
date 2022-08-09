import axios, { AxiosInstance } from "axios";
import { API_URL } from "react-native-dotenv";
export class UniverseService {
  private readonly httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: API_URL,
    });
  }

  public async getUniverses(): Promise<any> {
    const response = await this.httpClient.get<any>("universes");
    return response.data;
  }
}
