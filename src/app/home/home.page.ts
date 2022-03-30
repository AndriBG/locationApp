import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from './modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name: string = '';
  longitude: string = '';
  latitude: string = '';
  isModal: boolean;

  constructor(private modal: ModalController) {}

  ionViewDidEnter() {
    this.viewMap();
    // Environment.setBackgroundColor('#87ceeb');
  }

  // getLocation() {
  //   this.isModal = true;
  //   let mapModal = this.modal.create(ModalPage);
  //   mapModal.onDidDismiss((data) => {
  //     this.isModal = false;
  //     if(data) {
  //       this.location = data.location;
  //       this.locImage = data.image;
  //     }
  //   });
  //   mapModal.present();
  // }

  // async openMap() {
  //   this.isModal = true;
  //   let mapModal = this.modal.create('MapFilterPage');
  //   mapModal.onDidDismiss((data) => {
  //     this.isModal = false;
  //   });
  //   await mapModal.present();
  // }

  async viewMap () {
    const modal = await this.modal.create({
      component: ModalPage,
      cssClass: 'my-custom-class',
      // breakpoints: [0, 0.25, 0.5, 0.75, 1],
      keyboardClose: false,
      // handle: true,
      // htmlAttributes: ModalAttributes,
      // leaveAnimation:  (ba: any) => ,
      componentProps: {
        name: this.name,
        latitude: this.latitude,
        longitude: this.longitude
      }
    });

    return await modal.present();
  }

}
