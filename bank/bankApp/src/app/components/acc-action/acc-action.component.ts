import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-acc-action',
  standalone: true,
  imports: [NgIf, MatCardModule],
  templateUrl: './acc-action.component.html',
  styleUrl: './acc-action.component.css'
})
export class AccActionComponent {
  @Input() action: any;
}
