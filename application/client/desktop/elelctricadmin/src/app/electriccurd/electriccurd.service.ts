import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class ElectriccurdService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpCreate(curd): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.post(this.sharedService.DESKTOP_API + '/curd' + `?jwt_token=${jwt_token}`, curd);
    }
    GpUpdate(curd): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.put(this.sharedService.DESKTOP_API + '/curd' + `?jwt_token=${jwt_token}`, curd);
    }
    GpDelete(curdId): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.delete(this.sharedService.DESKTOP_API + '/curd/' + curdId + `?jwt_token=${jwt_token}`);
    }
}