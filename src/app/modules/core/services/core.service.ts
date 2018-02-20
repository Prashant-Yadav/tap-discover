import { Injectable } from '@angular/core';
import {ApiPaths} from "../../../shared/constants/api-paths";
import {HttpClientService} from "../../../shared/services/http-client.service";
import {HttpClient} from "@angular/common/http";
import {Image} from "../../../shared/models/image";
import {ImageUrls} from "../../../shared/models/image-urls";

@Injectable()
export class CoreService {

  public static _imageCount: number;
  get imageCount() { return CoreService._imageCount; }
  set imageCount(value: number) { CoreService._imageCount = value; }

  public static _imageUrls: ImageUrls = new ImageUrls();
  get imageUrls() { return CoreService._imageUrls; }
  set imageUrls(url: ImageUrls) { CoreService._imageUrls = url; }

  public static images: Image[] = [];
  get images() { return CoreService.images; }
  set images(images: Image[]) { CoreService.images = images; }

  constructor(
    private http: HttpClient,
    private httpClientService: HttpClientService
  ) { }


  getImages(offset, params) {
    // const url = ApiPaths.getImages;
    // const url = 'http://tapdiscover.com:9000/design-suggestions/';
    const url = this.imageUrls[offset];

    const headers = this.httpClientService.setHeaders();
    params = this.httpClientService.setParams(params);

    return this.http.get(url, {headers, params});

  }

}
