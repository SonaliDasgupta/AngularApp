import { Component, OnInit } from '@angular/core';
import { LeaderService } from '../services/leader.service';
import { Params,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Leader } from '../shared/Leader';
import { visibility, expand, flyInOut } from '../animations/app.animations';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-leader-detail',
  templateUrl: './leader-detail.component.html',
  styleUrls: ['./leader-detail.component.scss'],
   host: {
 '[@flyInOut]':'true',
 'style':'display: block;'

 },
 animations: [ flyInOut(), expand(), visibility() ]
})
export class LeaderDetailComponent implements OnInit {

  
  leader: Leader;
  visibility='shown';
  errMsg: string;
  constructor(private leaderService: LeaderService, private route: ActivatedRoute, private location: Location, @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
  this.route.params.switchMap((params: Params)=> { 
    this.visibility='hidden';
    return this.leaderService.getLeader(+params['id'])})
     .subscribe(leader => { this.leader = leader; 
      console.log(leader);
      
    
     this.visibility='shown';
     }, errmess=> this.errMsg=errmess);
  }

  goBack(){
  this.location.back();
  }

}
