import { Component, OnInit } from '@angular/core';
import { GitService } from '../common/services/git.service';

@Component({
  selector: 'app-git-follower',
  templateUrl: './git-follower.component.html',
  styleUrls: ['./git-follower.component.css']
})
export class GitFollowerComponent implements OnInit {

  gitFollowerList: any[] = [];
  constructor(private gitService: GitService) {
  }

  ngOnInit() {
    this.gitService.getFollowersList('alxhub')
      .subscribe(res => {
        this.gitFollowerList = res as any;
      });
  }

}
