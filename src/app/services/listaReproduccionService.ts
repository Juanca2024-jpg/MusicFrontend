import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaReproduccionService {
    private apiUrl = 'http://localhost:8080/api/v1';
    private token = 'eyJhbGciOiJIUzM4NCJ9.eyJyb2wiOlsiQ2xpZW50ZSJdLCJzdWIiOiJwcnVlYmEiLCJpYXQiOjE3MzI4MjAwNDMsImV4cCI6MTczNTQxMjA0M30.p1Zw85XexX4EEJBT2d20iRCoioa1J-KexrDaSfYSQ-cjVAvZUMtIwSk0iLu9fPOM';
    constructor(private http: HttpClient) { }

    getCanciones(): Observable<any[]> {
        const headers = new HttpHeaders({
            Authorization: `Bearer ${this.token}`,
        });
        return this.http.get<any[]>(this.apiUrl, { headers });
    }
    getListaReproducciones(): Observable<any[]> {
        const headers = new HttpHeaders({
            Authorization: `Bearer ${this.token}`,
        });
        return this.http.get<any[]>(`${this.apiUrl}/list`, { headers });
    }
    deleteListaReproduccion(): Observable<any[]> {
        const headers = new HttpHeaders({
            Authorization: `Bearer ${this.token}`, 
        });
        return this.http.delete<any[]>(this.apiUrl, { headers })
    }
    saveListaReproduccion(): Observable<any[]> {
        const headers = new HttpHeaders({
            Authorization: `Bearer ${this.token}`, 
        });
        return this.http.post<any[]>(this.apiUrl, null);
    }


}