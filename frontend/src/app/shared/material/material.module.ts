import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';


const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatCheckboxModule,
  MatSelectModule,
  MatGridListModule,
  MatMenuModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatTooltipModule,
]

@NgModule({
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ],
})
export class MaterialModule { }