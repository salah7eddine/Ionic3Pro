import { VehiculeIdModel } from './../../model/help/Vehicule.model';
import { CarService } from './../../services/car-service';
import { AlertController, LoadingController, ModalController, Modal, ModalOptions } from 'ionic-angular';
import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ToastOptions } from 'ionic-angular';
import { layerGroup } from 'leaflet';
import leaflet from 'leaflet';


@IonicPage()
@Component({
  selector: 'page-real-time',
  templateUrl: 'real-time.html',
})
export class RealTimePage {

  hostImages:string='http://79.137.75.178/images/cars/';
  avatarUri:string=''; 

  pos:any=[ 31.791702, -7.092620000000011 ];
  toastOptions: ToastOptions
  testCheckboxOpen:any;
  testCheckboxResult:any;
  positions=[];
  checkStatus=false;
  checkStatusSecond=false;
  infoV:any=[];
  allCar:any;
  allGrp:any;
  page:number=0;
  size:number=3;
  avatar:string='';
  haveAvatar:boolean;
  vehiculeId:VehiculeIdModel=new VehiculeIdModel();
  loadingMark:any;
  

  // tooltipEvent: 'click' | 'press' = 'click';
  // showArrow: boolean = true;
  // duration: number = 500;

  markers   = leaflet.layerGroup();

  map:any=null;
 
  layerGroup = layerGroup(); 

    constructor(public navCtrl: NavController,
            public navParams: NavParams,
            private toastCtrl: ToastController,
            public alertCtrl: AlertController,
            public loadingCtrl:LoadingController,
            public carService:CarService,
            public modalCtrl: ModalController
            ) {
  
              this.toastOptions = {
               message: 'Hello!!!',
               duration: 3000,
               position: 'bottom',
               showCloseButton: true,
               cssClass:"toast"
              }
            }


    loadGroup(){

      let loading=this.loadingCtrl.create({
        content: 'Chargements des données pr All Grp...'
      });
      loading.present();


      this.carService.loadSelectMobileGroup(this.page,this.size).subscribe(data=>{
        this.allGrp = JSON.parse(JSON.stringify(data));
        loading.dismiss();      
      },err=>{
        loading.dismiss();      
        console.log(err);
      });
    
    }

    loadAll(){
      this.carService.loadAllCar().subscribe(data=>{
        this.infoV=data;
        this.DropMarkers(this.infoV);
      },err=>{
        console.log(err);
      });
    
    }

    ionViewDidLoad() {
      this.loadmap();
    }


    loadmap(){
      this.map = leaflet.map("map").setView(this.pos,5);
      leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{ maxZoom: 18, attribution: 'mapRimTrack' }).addTo(this.map);
    }


    presentToast() {
      // let toast =this.toastCtrl.create(this.toastOptions);
      // toast.present();

      // toast.onDidDismiss(() => {
      //   console.log('Dismissed toast');
      // });
    }  

    onShowToast(){
      this.presentToast();
    }

    getIcons(){

      return leaflet.Icon.extend({
        options: {
          iconSize:     [40.4, 44],
          iconAnchor:   [20, 43],
          iconUrl: '../../assets/img/locatee.png',
          popupAnchor:  [0, -51]
          // shadowSize:   [50, 64],
          // shadowAnchor: [4, 62],
      }
      })
    }

    customIcon:any = leaflet.Icon.extend({
      options: {
          iconSize: [10, 10],
          iconAnchor: [2, 4],
          //popupAnchor: [0, -51]
      }
    });

    showLoader(){
      this.loadingMark=this.loadingCtrl.create({
        content: 'Chargements des données pr All...',
        duration:30000
      });
      this.loadingMark.present();
    }


    loadAllGroup(){
      this.carService.loadAllGroup().subscribe(data=>{
        console.log(data);
        //this.DropMarkers(data);
      },err=>{
        console.log(err);
      })
    }
    DropMarkers(data){
      this.avatarUri='http://79.137.75.178/files/14/drivers/'+data.driverId+'/avatar.png';
      this.showLoader();
      this.checkStatus = false;
      this.checkStatusSecond = false;
      if(this.markers!=null){
        this.markers.clearLayers();
      }
      for (let dataM of data){
        this.carService.nominatim(dataM.latitude,dataM.longitude).subscribe(data=>{
          dataM.loc =JSON.parse(JSON.stringify(data));
            
          let addr = dataM.loc.address.city_district+", "+dataM.loc.address.county+", "+dataM.loc.address.city;          
          let position:any = [dataM.latitude, dataM.longitude];
          let date =new Date(dataM.recordTime);
          let marker:any = leaflet.marker(position,{icon: new this.customIcon({
            iconUrl:dataM.vehiculeIcon? this.hostImages+dataM.vehiculeIcon: '../../assets/img/locatee.png'
            //,{icon: new this.customIcon({iconUrl: '../../assets/img/locatee.png'})}
           })}).bindPopup(
            '<strong>Chauffeur:</strong> '+dataM.lastName+'<br>'
            +'<strong>Matricule:</strong> '+dataM.matricule+'<br>'
            +'<strong>Mark:</strong> '+dataM.mark+'<br>'
            +'<strong>Lat,Lng:</strong> '+position+'<br>'
            +'<strong>date et l\'heure:</strong>'
            +date.getDay()+"/"
            +date.getMonth()+"/"
            +date.getFullYear()+"/"
            +" "+date.getHours()+":"
            +date.getMinutes()
            +'<br>'
            +'<strong>Signal GSM:</strong> '+dataM.signal+' <ion-icon name="wifi"></ion-icon><br>'
            +'<strong>Sat en vue:</strong> '+dataM.satInView+'<ion-icon ios="ios-globe" md="md-globe"></ion-icon><br><hr>'
            +addr
            ).openPopup().on('click',()=>{ 
              this.checkStatusSecond = false;
              this.showInfo(dataM);
            });
            this.markers.addLayer(marker).addTo(this.map); 
      },err=>{
        console.log(err);
      });

      }
      this.loadingMark.dismiss();       
    }

    showInfo(data){
      this.checkStatus = true;
      this.infoV = data;
    }

    infoVehicle(){
      const myModalOptions:ModalOptions={
        enableBackdropDismiss:false
      };  

      const MyModal:Modal = this.modalCtrl.create('CarDetailsPage',{data:this.infoV},myModalOptions);
      
      MyModal.present(); 

      MyModal.onWillDismiss((data)=>{
        if(data!=null){
          this.loadSelectVihecules(data);
        }
      });
    }




    onAll(){
      let toast = this.toastCtrl.create({
        message: 'Tout',
        duration: 1000,
        position: 'top'
      });
      toast.present();
      let alert = this.alertCtrl.create({
        title: 'Information',
        message: '<h4>Votre application va prendre un temps pour afficher</h4>',
        buttons: [
          {
            text: 'non',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'oui',
            handler: () => {
              let loadMarkerkers=this.loadingCtrl.create({
                content: 'localiser les véhicules ...'
              });
              loadMarkerkers.present();
              this.loadAll();   
              loadMarkerkers.dismiss();
            }
          }
        ]
      });
      alert.present();
    }

    onSelect(){
  
      let toast = this.toastCtrl.create({
        message: 'Choix',
        duration: 1000,
        position: 'top'
      });
      toast.present();

      this.openModal();
      //this.loadGroup();

    }

    

    openModal(){
    
      const myModalOptions:ModalOptions={
        enableBackdropDismiss:false
      };  
      
      const MyModal:Modal = this.modalCtrl.create('GroupVehiclePage',{data:this.allGrp},myModalOptions);
      
      MyModal.present(); 
    
      MyModal.onWillDismiss((data)=>{
        if(data!=null){
          this.loadSelectVihecules(data);
        }
      });
    }


    loadGroupVihcule(Group){
      console.log(Group); 
      //TODO: the pb in webService, return just the name, mark of the vehicle and the web service to have the information of lat-lan of the vehicle
    }

    showCheckbox(data) {

      let alert = this.alertCtrl.create();

      alert.setTitle('choisir un ou plrs auto ?');

      alert.addButton({
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      });

      alert.addButton({
          text: 'Ok',
          cssClass: 'alert-danger',
          handler: data => {
            this.testCheckboxOpen = false;
            this.testCheckboxResult = data;
            let loading=this.loadingCtrl.create({
              content: 'Chargements des données qui sont choisis ...'
            });
            loading.present();
            this.loadGroupVihcule(this.testCheckboxResult);
            loading.dismiss();
          }
      });

      for(let g of data.content) {
        alert.addInput({
          "type":'checkbox',
          "value" : g,
          "label":  g.groupName,
          "checked" : false

        })
      }

      alert.present();
    }

    onShowSecond(){
      this.checkStatusSecond=true;
    }

    onCall(data){ 
      let alert = this.alertCtrl.create({
        title: 'Confirmation',
        message: 'Est ce que vous voulez appelez '+data.firstName+' telle que son numero est '+ data.telephone ,
        buttons: [
          {
            text: 'non',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Appel',
            handler: () => {
              console.log("Appeller ce numéro : "+data.telephone)   
            }
          }
        ]
      });
      alert.present();
    }

  

  loadSelectVihecules(Ids:any){
    this.vehiculeId.vehiculeIds=Ids;
    console.log(this.vehiculeId); 
    this.carService.loadViheculesById(this.vehiculeId).subscribe(data=>{
      this.DropMarkers(data);  
    },err=>{
      console.log(err);
    })
  }

  showHistory(){
    const myModalOptions:ModalOptions={
      enableBackdropDismiss:false
    };  

    const MyModal:Modal = this.modalCtrl.create('HistoryCarPage',{data:this.infoV},myModalOptions);
    
    MyModal.present(); 

    MyModal.onWillDismiss((data)=>{
      if(data!=null){
        this.loadSelectVihecules(data);
      }
    });
  }
}
