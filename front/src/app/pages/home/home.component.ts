import { Component, OnInit } from '@angular/core';
import {LoaderService} from "../../services/loading.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {

    this.loaderService.setLoading(true);
    setTimeout(() => {
      this.loaderService.setLoading(false);
    } , 500);
  }

}
