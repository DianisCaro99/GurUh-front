import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-content-list',
  template: `<router-outlet></router-outlet>`,
})
export class ContentListComponent implements OnInit{
  ngOnInit= ()=>{
    console.log('entra al content-list')
  }

}
