import { Component, OnInit } from '@angular/core';
import {CoreService} from "../services/core.service";
import {HttpParams} from "@angular/common/http";
import {ApiPaths} from "../../../shared/constants/api-paths";
import {ImageConstants} from "../../../shared/constants/image-constants";

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  // private offset: string = ImageConstants.offsetValue;
  private offset: string = 'next';

  constructor(public coreService: CoreService) { }

  ngOnInit() {
    this.coreService.imageUrls.next = ApiPaths.getImages;

    this.getImagesData();
  }


  /**
   * @desc    Call getImages API from coreService
   */
  getImagesData() {

    const params = new HttpParams();

    const success = (response) => {

      if (!response) return;

      this.coreService.imageCount = response.count;
      this.coreService.imageUrls.previous = response.previous;
      this.coreService.imageUrls.next = response.next;
      this.coreService.images = response.results;

    };

    this.coreService.getImages(this.offset, params).subscribe(
      response => success(response),
      error   => console.log(error)
    );

  }

}
