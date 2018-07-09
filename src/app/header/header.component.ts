import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponentComponent } from '../login-component/login-component.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openLoginForm(){
	this.dialog.open(LoginComponentComponent, {width: "400px", height: "350px"});
  }

}
