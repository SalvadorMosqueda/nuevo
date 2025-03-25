import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DateService } from '../../services/data.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  imports: [MatDatepickerModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [provideNativeDateAdapter()],
  standalone:true
})
export class HeaderComponentComponent {
  dateControl = new FormControl(null);


  constructor(private dateService: DateService) {

    this.dateControl.valueChanges.subscribe(value => {
      console.log('entro')
     this.dateService.setDate(value)
    });
  }

  logDateValue() {
    console.log('Valor actual:', this.dateControl.value);
  }
}

