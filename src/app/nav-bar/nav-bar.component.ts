import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent  implements OnInit {
  @Input() pageTitle: string="COMUNICACION";
  @Input() pageTitle2: string="ADMINISTRACION";
  constructor() { }

  ngOnInit() {}

}
