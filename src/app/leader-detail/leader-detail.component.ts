import { Component, OnInit } from '@angular/core';
import { LeaderService } from '../services/leader.service';
import { Params,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Leader } from '../shared/Leader';

@Component({
  selector: 'app-leader-detail',
  templateUrl: './leader-detail.component.html',
  styleUrls: ['./leader-detail.component.scss']
})
export class LeaderDetailComponent implements OnInit {

  
  leader: Leader;
  constructor(private leaderService: LeaderService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
  let id = +this.route.snapshot.params['id'];
  this.leader = this.leaderService.getLeader(id);
  }

  goBack(){
  this.location.back();
  }

}
