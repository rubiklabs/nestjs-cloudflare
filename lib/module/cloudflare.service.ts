import { Inject, Injectable } from "@nestjs/common";
import { CloudflareModuleOptions, MODULE_OPTIONS_TOKEN } from "../utils";
import { HttpService } from "@nestjs/axios";

@Injectable()
export class CloudflareService {
  private url = 'https://api.cloudflare.com/client/v4';
  private headers = {
    'X-Auth-Email': this.options.email,
    'X-Auth-Key': this.options.key,
    'Content-Type': 'application/json',
    'X-Auth-User-Service-Key': this.options.userServiceKey || '',
  };

  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) private options: CloudflareModuleOptions,
    private readonly httpService: HttpService,
  ) {}
}