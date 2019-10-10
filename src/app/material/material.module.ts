import { NgModule } from '@angular/core';
import {MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule
} from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';


const MaterialComponents = [
      MatButtonModule,
      MatButtonToggleModule,
      MatIconModule,
      MatBadgeModule,
      MatProgressSpinnerModule,
      MatToolbarModule,
      MatSidenavModule,
      MatMenuModule
];

@NgModule({
  declarations: [],
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
