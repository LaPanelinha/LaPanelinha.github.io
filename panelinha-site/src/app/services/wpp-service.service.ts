import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mensagem, resMensagem, respImg, sendImg } from '../models/panelinha.model';

@Injectable({
  providedIn: 'root'
})
export class WppServiceService {
  

  constructor(private http: HttpClient) { 
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json').set('API_KEY','HqhobpBwNXD6FdQzZq4FYztdI768II5r');
  }

  chamaEle(mensagem: mensagem): Observable<resMensagem> {
    const url = `https://wa.panelinha.dev/sendText`
    return this.http.post<resMensagem>(url, mensagem, {headers: {'Content-Type' : 'application/json', 'API_KEY' : 'HqhobpBwNXD6FdQzZq4FYztdI768II5r'}});
  }

  sendImg(img: sendImg): Observable<respImg> {
    const url = `https://wa.panelinha.dev/sendImage`
    return this.http.post<respImg>(url, img, {headers: {'Content-Type' : 'application/json', 'API_KEY' : 'HqhobpBwNXD6FdQzZq4FYztdI768II5r'}});
  }
}
