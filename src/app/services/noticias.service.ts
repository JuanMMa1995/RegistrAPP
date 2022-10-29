import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../paginas/Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private httpclient: HttpClient) { }


  getTopHeadLines(){
    return (this.httpclient.get<RespuestaTopHeadlines>('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=feaf52d70ca7482b85877d0cce0e1d96'));

  }
}
