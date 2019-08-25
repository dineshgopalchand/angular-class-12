import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitService } from '../common/services/git.service';
import { JSONtype } from '../common/helper/json.type';

@Component({
  selector: 'app-git-user-profile',
  templateUrl: './git-user-profile.component.html',
  styleUrls: ['./git-user-profile.component.css']
})
export class GitUserProfileComponent implements OnInit {
  username = '';
  userid = '';
  userDetails: JSONtype = {};
  constructor(
    private route: ActivatedRoute,
    private gitService: GitService
  ) { }

  ngOnInit() {
    // console.log('username', this.route.snapshot.paramMap.get('username'));
    // console.log('userid', this.route.snapshot.paramMap.get('userid'));
    this.route.paramMap
      .subscribe(res => {
        this.username = res.get('username');
        this.userid = res.get('userid');
        console.log(this.userid);
        console.log(this.username);
        this.gitService.getUserProfile(this.username)
          .subscribe(userDetails => {
            this.userDetails = userDetails;
          });
      });
  }

}
