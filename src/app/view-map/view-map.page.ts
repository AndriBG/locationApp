import { Component, OnInit } from '@angular/core';
// import { ViewChild, ElementRef } from '@angular/core';

// declare var google: any;

@Component({
  selector: 'app-view-map',
  templateUrl: './view-map.page.html',
  styleUrls: ['./view-map.page.scss'],
})
export class ViewMapPage implements OnInit {

  // map: any;

  // @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;

  // infoWindows: any = [];

  constructor() { }

  ngOnInit() {
  }

  // ionViewDidEnter() {
  //   this.showMap();
  // }

  // addMarkerToMap() {
  //   let position = new google.maps.LatLng(-17.824858, 31.053058);
  //   let mapMarker = new google.maps.Marker({
  //     position,
  //     title: 'Rep.Dom',
  //     latitude: -17.824858,
  //     longitude: 31.053058
  //   });
  //   mapMarker.setMap(this.map);
  //   this.addInfoWindowToMarker(mapMarker);
  // }

  // addInfoWindowToMarker(marker) {
  //   let infoWindowContent =
  //   `<div id="content">
  //     <h2 id="firstHeading" class="firstHeading">${marker.title}</h2>
  //     <p>Latitude: ${marker.latitude}</p>
  //     <p>Longitude: ${marker.longitude}</p>
  //   </div>`;

  //   let infoWindow = new google.maps.infoWindow({
  //     content: infoWindowContent
  //   });

  //   marker.addEventListener('click', (e) => {
  //     this.closeAllInfoWindows();
  //     infoWindow.open(this.map, marker);
  //   });
  //   this.infoWindows.push(infoWindow);
  // }

  // closeAllInfoWindows(){
  //   for(let window of this.infoWindows) {
  //     window.close();
  //   }
  // }

  // showMap() {
  //   const location = new google.maps.LatLng(-17.824858, 31.053058);
  //   const options = {
  //     center: location,
  //     zoom: 15,
  //     disableDefaultUI: true
  //   }
  //   this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  //   this.addMarkerToMap();
  // }

}
