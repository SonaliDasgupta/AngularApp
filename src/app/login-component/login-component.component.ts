import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  user = { username:'', password:'', remember: false };
  constructor(private dialogRef: MatDialogRef<LoginComponentComponent>) { }

  ngOnInit() {
  }

  onSubmit(){
  console.log("User: ",this.user);
  this.dialogRef.close();
  }

}
