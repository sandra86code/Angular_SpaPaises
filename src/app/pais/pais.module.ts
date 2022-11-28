import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PaisService } from './services/pais.service';
import { FormsModule } from '@angular/forms';
import { VerPaisDetalleComponent } from './pages/ver-pais-detalle/ver-pais-detalle.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    VerPaisDetalleComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    VerPaisComponent
  ],
  providers: [
    PaisService
  ]
})
export class PaisModule { }
