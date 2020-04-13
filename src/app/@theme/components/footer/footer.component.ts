import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      © GurUh 2020. All Rights Reserved.
    </span>
    <div class="socials">
      <a href="https://www.facebook.com/GurUhPage/" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://www.youtube.com/watch?v=jmrleoJjoRw&t=8s" target="_blank" class="ion ion-social-youtube"></a>
    </div>
  `,
})
export class FooterComponent {
}
