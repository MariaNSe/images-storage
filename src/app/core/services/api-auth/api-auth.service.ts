import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { AuthTokenResponse } from './types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public url = `${environment.IMAGES_API_ENDPOINT}/auth`;
  private userToken: string;

  constructor(private httpClient: HttpClient) {}

  public get token(): string {
    return this.userToken;
  }

  public async setToken() {
    const storedToken = localStorage.getItem(
      environment.IMAGES_API_LOCAL_TOKEN_KEY
    );
    const data = { apiKey: environment.IMAGES_API_KEY_ENDPOINT };

    if (storedToken) {
      this.userToken = storedToken;
      return;
    }

    const result = await this.httpClient
      .post<AuthTokenResponse>(this.url, data)
      .toPromise();
    this.userToken = result.token;
    localStorage.setItem(environment.IMAGES_API_LOCAL_TOKEN_KEY, result.token);
  }

  public refreshToken() {
    localStorage.removeItem(environment.IMAGES_API_LOCAL_TOKEN_KEY);
    return this.setToken();
  }
}
