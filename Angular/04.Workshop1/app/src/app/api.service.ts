import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment'
import { ITheme } from './interfaces/theme';
import { IPost } from './interfaces/post';

const apiUrl = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  loadThemes() {
    return this.httpClient.get<ITheme[]>(`${apiUrl}/themes`);
  }

  // http://localhost:3000/api/posts?limit=5

  loadPosts(limit?: number) {
    return this.httpClient.get<IPost[]>(`${apiUrl}/posts${limit ? `?limit=${limit}` : ''}`)
  }
}
