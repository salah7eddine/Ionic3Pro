import { CarService } from './../../services/car-service';
import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-group-vehicle',
  templateUrl: 'group-vehicle.html',
})
export class GroupVehiclePage {

  open:boolean=false;
  group:any={content:[]};
  selectedIdVehicles:any=[];
  allGrp:any=null;
  size:number=5;
  currentPage:number=0;
  totalPages:number;
  status:boolean=false; 
  vehicule:any=null;

  constructor(private view:ViewController,public carService:CarService ) {
    
  }

 
  ionViewWillLoad() {
    this.loadGroup();    
  }

  loadGroup(){
    //debugger;
    this.carService.loadSelectMobileGroup(this.currentPage,this.size).subscribe(data=>{
      
      this.totalPages = JSON.parse(JSON.stringify(data)).totalPages; 
      JSON.parse(JSON.stringify(data)).content.forEach(v => {
        this.group.content.push(v);
      });
    },err=>{
      console.log(err);
    });
  }

  closeModal(data){
    this.view.dismiss(data); 
  }

  filterIdSelected(selectedIdV:any,groupVSelected:any){
      if(selectedIdV!=null){  
      selectedIdV.forEach(IdV => {
        if(groupVSelected!=null){
          groupVSelected.vehicules.forEach(grV => {
            if(IdV==grV.idVehicule){
              grV.status=!grV.status;
            }
          });
        }
      });
    }





  }

  toggleSection(group){
    this.filterIdSelected(this.selectedIdVehicles,group);
    if(group.open){
      group.open=false;
    }else{
      group.open = !group.open;
    }
  }

  selectVehicule(data){
    this.vehicule =data;
    //debugger;
    
      if(!this.selectedIdVehicles.includes(data.idVehicule)){
        this.selectedIdVehicles.push(data.idVehicule);
      }else{
        if(data.status){
          data.status=!data.status;
        }else{
          this.selectedIdVehicles.filter((val,index)=>{
            if(val==data.idVehicule){
              this.selectedIdVehicles.splice(index,1);
            }
          });
        }
        
      }
    
    
  }

  onSelectVehicules(){  
    this.closeModal(this.selectedIdVehicles);
  }

  doInfinite(infinite){
    if(this.currentPage<this.totalPages){
      ++this.currentPage;
      this.loadGroup();
      infinite.complete();
    }
  }

}
