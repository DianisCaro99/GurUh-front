import { Component } from '@angular/core';

@Component({
  selector: 'ngx-one-column-layout-landing',
  styleUrls: ['./one-column-landing.layout.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-headerLandingPage></ngx-headerLandingPage>
      </nb-layout-header>

      <nb-layout-column>

      <nb-card>
      <div class="legend-title">¿Quiénes somos?</div>
      Somos una herramienta de información que te ayuda a tomar una buena decisión
      en cuanto a qué carrera estudiar. Nuestra solución tiene tres pilares:
    </nb-card>

      <div class="row">
      <div class="col-md-6">
        <nb-card size="small">
          <nb-card-body><img SRC="../../assets/images/imagen 1.jpg" width="100%" height ="100%"></nb-card-body>
        </nb-card>
      </div>
      <div class="col-md-6">
        <nb-card status="danger" size="small">
        <nb-card-header>Conexión</nb-card-header>
        <nb-card-body>
        Te conectaremos con estudiantes ACTUALES de la carrera en la que estás
        interesado en distintas universidades. Sabemos que cada universidad tiene
        un enfoque diferente. Por lo tanto, queremos que estés enterado de esos
        enfoques y tomes una decisión bien informado.
        </nb-card-body>
      </nb-card>
      </div>
    </div>
      
    <div class="row">
    <div class="col-md-6">
      <nb-card size="small" status="warning">
        <nb-card-header>Acercamiento</nb-card-header>
        <nb-card-body>
          Muchos estudiantes entran a una carrera solo por la profesión pero no
          tienen idea de lo que requiere estudiar esta carrera. Queremos brindarte
          un acercamiento a distintas carreras o áreas de conocimiento. Tenemos
          ejercicios, lecturas, videos para que tengas una idea de cómo es
          ESTUDIAR esa carrera.
        </nb-card-body>
      </nb-card>
    </div>
    <div class="col-md-6">
      <nb-card size="small"> 
        <nb-card-body><img SRC="../../assets/images/imagen 2.jpg" width="100%" height ="100%"></nb-card-body>
      </nb-card>
    </div>
  </div>

  <div class="row">
    <div class="col-md-6">
      <nb-card size="small">
        <nb-card-body><img SRC="../../assets/images/imagen 3.jpg" width="100%" height ="100%"></nb-card-body>
      </nb-card>
    </div>
    <div class="col-md-6">
      <nb-card status="danger" size="small">
      <nb-card-header>Seguimiento</nb-card-header>
      <nb-card-body>
        Queremos acompañarte y guiarte de la mejor forma. Por eso podrás ver
        información de cómo han variado tus intereses durante el uso de nuestra
        aplicación.
      </nb-card-body>
    </nb-card>
    </div>
  </div>

      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class OneColumnLandingLayoutComponent {}
