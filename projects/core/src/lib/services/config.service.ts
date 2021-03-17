import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IAppConfig } from "../models/app-config.model";

@Injectable({ providedIn: 'root' })
export class ConfigService {
  appConfig!: IAppConfig;

  constructor(private http: HttpClient) {}

  loadConfig() {
    return this.http
      .get<IAppConfig>('./assets/config.json')
      .toPromise()
      .then((config: IAppConfig) => {
        this.appConfig = config;
      });
  }
}
