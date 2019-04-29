import { VehiculeIdModel } from './../model/help/Vehicule.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class CarService{

  private host:string="http://dev.rimtrack.com/ws_rimtrack_all/";
  private jwt = null;
  private hostTest="http://dev.rimtrack.com/ws_rimtrack_all/mobile/groupe?";
  
  constructor(private http:HttpClient){

  }

    loadAllCar(){
    if (this.jwt == null) this.loadToken();
    return this.http.get(this.host+"mobile/rt/all",{headers: new HttpHeaders({'Authorization': this.jwt})});
  }

  loadAllGroup(){
    if (this.jwt == null) this.loadToken();
    return this.http.get("https://dev.rimtrack.com/ws_rimtrack_all/groupes/details?keyword=",{headers: new HttpHeaders({'Authorization': this.jwt})})
  }
  
  // I must change of this service async / await
   loadSelectMobileGroup(page:number,size:number){
    if (this.jwt == null) this.loadToken();
    return  this.http.get(this.host+'mobile/groupe?page='+page+'&size='+size,{headers: new HttpHeaders({'Authorization': this.jwt})});
   }

   loadViheculesById(vehiculeId:VehiculeIdModel){
    if (this.jwt == null) this.loadToken();
    console.log(vehiculeId);
    return  this.http.post(this.host+'mobile/rt/vehicule',vehiculeId,{headers: new HttpHeaders({'Authorization': this.jwt})});
   }


  nominatim(lat:number,lon:number) {
      if(this.jwt == null) this.loadToken();
      return this.http.get('http://dev.rimtrack.com/nominatim/reverse.php?format=json&lat='+lat+'&lon='+lon+'&zoom=18&accept-language=fr&addressdetails=1',{headers: new HttpHeaders({'Authorization': this.jwt})});  
  }

  loadToken() {
    this.jwt = localStorage.getItem('token'); 
  }

}