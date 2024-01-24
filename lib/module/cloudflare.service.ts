import { Inject, Injectable } from "@nestjs/common";
import { CloudflareModuleOptions, MODULE_OPTIONS_TOKEN } from "../utils";
import { HttpService } from "@nestjs/axios";
import { IGetZonesByZoneIdApiGatewayDiscoveryOperationsParams, IGetZonesByZoneIdApiGatewayDiscoveryOperationsResponse, IGetZonesByZoneIdApiGatewayDiscoveryParams, IGetZonesByZoneIdApiGatewayDiscoveryResponse, IPatchZonesByZoneIdApiGatewayDiscoveryOperationsByOperationIdParams, IPatchZonesByZoneIdApiGatewayDiscoveryOperationsByOperationIdResponse, IPatchZonesByZoneIdApiGatewayDiscoveryOperationsParams } from "./index.d"

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

  getZonesByZoneIdApiGatewayDiscovery = async (zoneId: IGetZonesByZoneIdApiGatewayDiscoveryParams): Promise<IGetZonesByZoneIdApiGatewayDiscoveryResponse> => {
    this.httpService.get(this.url + `/zones/${zoneId}/api_gateway/discovery`)
    return {
      data: {
        result: {
          schemas: [],
          timestamp: '',
        },
        errors: [],
        messages: [],
        success: true,
      }
    };
  }

  getZonesByZoneIdApiGatewayDiscoveryOperations = async (zoneId: IGetZonesByZoneIdApiGatewayDiscoveryOperationsParams): Promise<IGetZonesByZoneIdApiGatewayDiscoveryOperationsResponse> => {
    this.httpService.get(this.url + `/zones/${zoneId}/api_gateway/discovery/operations`)
    return {
      data: {
        result: [],
        errors: [],
        messages: [],
        success: true,
        result_info: {
          count: 0,
          page: 0,
          per_page: 0,
          total_count: 0,
        }
      }
    };
  }
  patchZonesByZoneIdApiGatewayDiscoveryOperations = async (zoneId: IPatchZonesByZoneIdApiGatewayDiscoveryOperationsParams): Promise<IGetZonesByZoneIdApiGatewayDiscoveryOperationsResponse> => {
    this.httpService.patch(this.url + `/zones/${zoneId}/api_gateway/discovery/operations`)
    return {
      data: {
        result: [],
        errors: [],
        messages: [],
        success: true,
        result_info: {
          count: 0,
          page: 0,
          per_page: 0,
          total_count: 0,
        }
      }
    };
  }

  patchZonesByZoneIdApiGatewayDiscoveryOperationsByOperationId = async ({ zone_id, operation_id }: IPatchZonesByZoneIdApiGatewayDiscoveryOperationsByOperationIdParams): Promise<IPatchZonesByZoneIdApiGatewayDiscoveryOperationsByOperationIdResponse> => {
    this.httpService.patch(this.url + `/zones/${zone_id}/api_gateway/discovery/operations/${operation_id}`)
    return {
      data: {
        result: {
          state: '',
        },
        errors: [],
        messages: [],
        success: true,
      }
    };
  }
}