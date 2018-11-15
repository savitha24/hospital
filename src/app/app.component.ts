import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
declare var $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    $("#owl-demo").owlCarousel({
      
           autoPlay: 30, //Set AutoPlay to 3 seconds
      
           items : 4,
           itemsDesktop : [1199,3],
           itemsDesktopSmall : [979,3]
      
       });
  }
  title = 'app';

    
     
    
  

}
