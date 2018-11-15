import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    
   }

   ngOnInit(): void {
    $("#owl-demo").owlCarousel({
      loop:true,
      center: true,
      items: 6,
      margin: 30,
      autoplay: true,
      dots:true,
      nav:true,
      autoplayTimeout: 3500,
      smartSpeed: 600,
      itemsDesktop : [1199,4],
      itemsDesktopSmall : [980,3],
      itemsTablet: [768,2],
      itemsTabletSmall: false,
      itemsMobile : [479,1],
      singleItem : false,
   
    });
  }
  title = 'app';

}
