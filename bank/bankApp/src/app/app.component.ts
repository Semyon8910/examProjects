import { NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AccActionComponent } from './components/acc-action/acc-action.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    FormsModule, 
    NgFor, 
    NgIf, 
    AccActionComponent, 
    MatSelectModule, 
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    NgSwitchCase,
    NgSwitch,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bankApp';
  accountNumber = "";
  searchResult: any = null; 
  actionType = "";
  action: any = {};

  constructor(private http: HttpClient) {}

  search(): void {
    if (this.accountNumber) {
      this.http.get(`http://localhost:8080/api/v1/accounts/account/${this.accountNumber}`)
      .subscribe(response => {
        this.searchResult = response;
        console.log(this.searchResult);
      }, err => {
        console.log(err);
        alert("Account not found");
      });
    }
  }

  submitAction(): void {
    if (this.actionType && this.action.amount && this.action.date) {
      if (this.actionType === 'credit' && (!this.action.interestRate || !this.action.numberOfPayments)) {
        console.log('Missing fields for credit action');
        return;
      }
  
      const newAction = {
        accountId: this.searchResult.account._id,
        type: this.actionType,
        ...this.action
      };
  
      this.http.post('http://localhost:8080/api/v1/accounts/addAction', newAction)
        .subscribe(response => {
          console.log('Action submitted:', response);
          this.search();
        }, err => {
          console.log(err);
        });
    }
  }
}
