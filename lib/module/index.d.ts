export interface IGetZonesByZoneIdApiGatewayDiscoveryParams {
  zone_id: string;
}

export interface IGetZonesByZoneIdApiGatewayDiscoveryResponse {
  data: {
    result: {
      schemas: Array<object>,
      timestamp: string,
    },
    errors: Array<{
      code: number,
      message: string,
    }>,
    messages: Array<{
      code: number,
      message: string,
    }>,
    success: boolean,
  }
}

export interface IGetZonesByZoneIdApiGatewayDiscoveryOperationsParams {
  zone_id: string;
  diff?: boolean;
  direction?: string;
  endpoint?: string;
  host?: string;
  method?: string;
  order?: string;
  origin?: string;
  page?: number;
  per_page?: number;
  state?: string;
}

export interface IGetZonesByZoneIdApiGatewayDiscoveryOperationsResponse {
  data: {
    result: Array<{
      features: {
        id: string,
        last_updated: string,
        origin: Array<string>,
        state: string,
        endpoint: string,
        host: string,
        method: string,
      }
    }>,
    errors: Array<{
      code: number,
      message: string,
    }>,
    messages: Array<{
      code: number,
      message: string,
    }>,
    success: boolean,
    result_info: {
      count: number,
      page: number,
      per_page: number,
      total_count: number,
    }
  }
}

export interface IPatchZonesByZoneIdApiGatewayDiscoveryOperationsParams {
  zone_id: string;
}

export interface IPatchZonesByZoneIdApiGatewayDiscoveryOperationsResponse {
  data: {
    result: object,
    errors: Array<{
      code: number,
      message: string,
    }>,
    messages: Array<{
      code: number,
      message: string,
    }>,
    success: boolean,
  }
}

export interface IPatchZonesByZoneIdApiGatewayDiscoveryOperationsByOperationIdParams {
  operation_id: string;
  zone_id: string;
  state?: string;
}

export interface IPatchZonesByZoneIdApiGatewayDiscoveryOperationsByOperationIdResponse {
  data: {
    result: {
      state: string,
    },
    errors: Array<{
      code: number,
      message: string,
    }>,
    messages: Array<{
      code: number,
      message: string,
    }>,
    success: boolean,
  }
}