import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public hoverOnMeBool = false;
  public profilePicUrl = '../../assets/profile.png';

  private links: {
    linkedin: string,
    viktoriassecret: string,
    goodreads: string,
    cv: string,
  }

  constructor() { }

  ngOnInit(): void {
    this.links = {
      linkedin: 'https://www.linkedin.com/in/viktoriawehner/',
      viktoriassecret: 'https://spark.adobe.com/page/FIAMddxNMAbj4/',
      goodreads: 'https://www.goodreads.com/user/show/43954538-viktoria/',
      cv: 'https://drive.google.com/file/d/1Bw2L6b4PoQp43kDviFh9LGaC5T8Jpf4Z/view',
    };
  }

  openLink(linkId) {
    const url = this.links[linkId];

    window.open(url, '_blank');
  }

  contactMe() {
    window.open('mailto:viktoria@viktoriawehner.com', '_blank');
  }

  hoverOnMe(bool) {
    this.hoverOnMeBool = bool;

    if(bool) {
      this.profilePicUrl='../../assets/profile-hover.png';
    } else {
      this.profilePicUrl='../../assets/profile.png';
    }
  }

}
