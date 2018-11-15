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
      
           autoPlay: 30, //Set AutoPlay to 3 seconds
      
           items : 6,
           itemsDesktop : [1199,3],
           itemsDesktopSmall : [979,3]
      
       });
  }
  title = 'app';

}
