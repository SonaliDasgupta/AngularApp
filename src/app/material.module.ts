import { NgModule } from '@angular/core';

import { 
	MatButtonModule,
	MatMenuModule,
	MatToolbarModule,
	MatIconModule,
	MatCardModule,
  MatListModule,
  MatGridListModule, 
  MatDialogModule} from '@angular/material';

@NgModule({
	imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule
  ]
	})

export class MaterialModule {}	
