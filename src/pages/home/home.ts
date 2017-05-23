import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public storedData: string;
  public userKey: string;
  public userData: string;

  constructor(public navCtrl: NavController,
              private storage: Storage) {

  }


  public saveData() {

    if(!this.userKey || !this.userData)
    {
      this.storedData = 'You must fill key and value';
      return;
    }

    this.storage.set(this.userKey, this.userData);
    this.clean();
  }

  public loadData() {
    this.storage.get(this.userKey).then((data) => {
      this.storedData ='Stored data: ' + data;
      this.clean();
    })

  }

  private clean(){
    this.userKey = '';
    this.userData = '';
  }

}
