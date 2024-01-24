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
  ) {
  }

  getZonesByZoneIdApiGatewayDiscovery = async (zoneId: string): Promise<boolean> => {
    this.httpService.get(this.url + `/zones/${zoneId}/api_gateway/discovery`)
    return true;
  }

  getZonesByZoneIdApiGatewayDiscoveryOperations = async (zoneId: string): Promise<boolean> => {
    this.httpService.get(this.url + `/zones/${zoneId}/api_gateway/discovery/operations`)
    return true;
  }

  patchZonesByZoneIdApiGatewayDiscoveryOperations = async (zoneId: string): Promise<boolean> => {
    this.httpService.patch(this.url + `/zones/${zoneId}/api_gateway/discovery/operations`)
    return true;
  }

  patchZonesByZoneIdApiGatewayDiscoveryOperationsByOperationId = async (zoneId: string, operationId: string): Promise<boolean> => {
    this.httpService.patch(this.url + `/zones/${zoneId}/api_gateway/discovery/operations/${operationId}`)
    return true;
  }

}