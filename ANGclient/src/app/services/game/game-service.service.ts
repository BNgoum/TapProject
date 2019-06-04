/*
Imports
*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../../environments/environment";
//

/*
Definition
*/
@Injectable()
export class GameService {

  // Inject module(s) in the service
  constructor( private HttpClient: HttpClient ){};

  // Get the API response
  private getData(res: any){
    return res || {};
  };

  // Get the API error
  private handleError(err: any){
    return Promise.reject(err.error);
  };

  public getListScore(): Promise<any>{
    // GET '/score'
    return this.HttpClient.get(`${environment.apiUrl}/score`)
    .toPromise().then(this.getData).catch(this.handleError);
  };

  // Function to save score of a current user
  public saveScore(score: number): Promise<any>{
    // Set header
    let myHeader = new HttpHeaders();
    myHeader.append('Content-Type', 'application/json');

    // POST '/score'
    return this.HttpClient.post(`${environment.apiUrl}/score`, { score }, { headers: myHeader })
    .toPromise().then(this.getData).catch(this.handleError);
  };
};
//
