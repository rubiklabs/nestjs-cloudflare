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

//Burası

export interface IGetZonesByZoneIdentifierCertificateAuthoritiesHostnameAssociationsParams {
  zone_identifier: string,
  mtls_certificate_id?: string,
}

export interface IGetZonesByZoneIdentifierCertificateAuthoritiesHostnameAssociationsResponse {
  data: {
    result: {
      hostnames: Array<string>,
      mtls_certificate_id: string,
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

export interface IPutZonesByZoneIdentifierCertificateAuthoritiesHostnameAssociationsParams {
  zone_identifier: string,
  hostnames?: Array<string>,
  mtls_certificate_id?: string,
}

export interface IPutZonesByZoneIdentifierCertificateAuthoritiesHostnameAssociationsResponse {
  data: {
    result: {
      hostnames: Array<string>,
      mtls_certificate_id: string,
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

export interface IGetZonesByZoneIdentifierClientCertificatesParams {
  zone_identifier: string,
  limit?: number,
  offset?: number,
  page?: number,
  per_page?: number,
  status?: boolean, // buna bak
}

export interface IGetZonesByZoneIdentifierClientCertificatesResponse {
  data: {
    result: Array<object>,
    errors: Array<{
      code: number,
      message: string,
    }>,
    messages: Array<{
      code: number,
      message: string,
    }>,
    success: boolean,
    result_info?: {
      count?: number,
      page?: number,
      per_page?: number,
      total_count?: number,
    }
  }
}

export interface IPostZonesByZoneIdentifierClientCertificatesParams {
  zone_identifier: string,
  csr: string,
  validity_days: number,
}

export interface IPostZonesByZoneIdentifierClientCertificatesResponse {
  data: {
    result: {
      certificate: string,
      certificate_authority: object,
      common_name: string,
      country: string,
      csr: string,
      expires_on: string,
      fingerprint_sha256: string,
      id: string,
      issued_on: string,
      location: string,
      organization: string,
      organizational_unit: string,
      serial_number: string,
      signature: string,
      ski: string,
      state: string,
      status: boolean, //buraya bak
      validity_days: number,
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

export interface IDeleteZonesByZoneIdentifierClientCertificatesIdentifierParams {
  client_certificate_identifier: string,
  zone_identifier: string,
}

export interface IDeleteZonesByZoneIdentifierClientCertificatesIdentifierResponse {
  data: {
    result: {
      certificate: string,
      certificate_authority: object,
      common_name: string,
      country: string,
      csr: string,
      expires_on: string,
      fingerprint_sha256: string,
      id: string,
      issued_on: string,
      location: string,
      organization: string,
      organizational_unit: string,
      serial_number: string,
      signature: string,
      ski: string,
      state: string,
      status: boolean, //buraya bak
      validity_days: number,
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

export interface IGetZonesByZoneIdentifierClientCertificatesIdentifierParams {
  client_certificate_identifier: string,
  zone_identifier: string,
}

export interface IGetZonesByZoneIdentifierClientCertificatesIdentifierResponse {
  data: {
    result: {
      certificate: string,
      certificate_authority: object,
      common_name: string,
      country: string,
      csr: string,
      expires_on: string,
      fingerprint_sha256: string,
      id: string,
      issued_on: string,
      location: string,
      organization: string,
      organizational_unit: string,
      serial_number: string,
      signature: string,
      ski: string,
      state: string,
      status: boolean, //buraya bak
      validity_days: number,
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

export interface IPatchZonesByZoneIdentifierClientCertificatesIdentifierParams {
  client_certificate_identifier: string,
  zone_identifier: string,
}

export interface IPatchZonesByZoneIdentifierClientCertificatesIdentifierResponse {
  data: {
    result: {
      certificate: string,
      certificate_authority: object,
      common_name: string,
      country: string,
      csr: string,
      expires_on: string,
      fingerprint_sha256: string,
      id: string,
      issued_on: string,
      location: string,
      organization: string,
      organizational_unit: string,
      serial_number: string,
      signature: string,
      ski: string,
      state: string,
      status: boolean, //buraya bak
      validity_days: number,
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

export interface IGetZonesByZoneIdApiGatewayOperationsParams {
  zone_id: string,
  direction?: string,
  endpoint?: string,
  feature?: Array<string>,
  host?: Array<string>,
  method?: Array<string>,
  order?: string,
  page?: number,
  per_page?: number,
}

export interface IGetZonesByZoneIdApiGatewayOperationsResponse {
  data: {
    result: Array<object>,

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

export interface IPostZonesByZoneIdApiGatewayOperationsParams {
  zone_id: string,
  endpoint: string,
  host: string
  method: string,
}

export interface IPostZonesByZoneIdApiGatewayOperationsResponse {
  data: {
    result: Array<object>,

    errors: Array<{
      code: number,
      message: string,
    }>,
    messages: Array<{
      code: number,
      message: string,
    }>,
    success: boolean,
    result_info?: {
      count: number,
      page: number,
      per_page: number,
      total_count: number,
    }
  }
}
export interface IDeleteZonesByZoneIdApiGatewayOperationsOperationsIdParams {
  operation_id: string,
  zone_id: string,
}

export interface IDeleteZonesByZoneIdApiGatewayOperationsOperationsIdResponse {
  data: {

    errors: Array<{
      code: number,
      message: string,
    }>,
    messages: Array<{
      code: number,
      message: string,
    }>,
    success: boolean,
    result: object,
  }
}

export interface IGetZonesByZoneIdApiGatewayOperationsOperationsIdParams {
  operation_id: string,
  zone_id: string,
  feature?: Array<string>,
}

export interface IGetZonesByZoneIdApiGatewayOperationsOperationsIdResponse {
  data: {
    result: {
      endpoint: string,
      host: string,
      method: string,
      features: {
        last_updated: string,
        operation_id: string,
      }
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

export interface IGetZonesByZoneIdApiGatewaySchemasParams {
  zone_id: string,
  feature?: Array<string>,
  host?: Array<string>,
}

export interface IGetZonesByZoneIdApiGatewaySchemasResponse {
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

export interface IPatchZonesByZoneIdApiGatewayOperationsSchemaValidationParams {
  zone_id: string,
}

export interface IPatchZonesByZoneIdApiGatewayOperationsSchemaValidationResponse {
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
export interface IGetZonesByZoneIdApiGatewayOperationsOperationIdSchemaValidationParams {
  operation_id: string,
  zone_id: string,
}

export interface IGetZonesByZoneIdApiGatewayOperationsOperationIdSchemaValidationResponse {
  data: {
    mitigation_action: string,
  }
}

export interface IPutZonesByZoneIdApiGatewayOperationsOperationIdSchemaValidationParams {
  operation_id: string,
  zone_id: string,
  mitigation_action?: string,
}

export interface IPutZonesByZoneIdApiGatewayOperationsOperationIdSchemaValidationResponse {
  data: {
    mitigation_action: string,
  }
}

export interface IGetZonesByZoneIdApiGatewaySettingsSchemaValidationParams {
  zone_id: string,
}

export interface IGetZonesByZoneIdApiGatewaySettingsSchemaValidationResponse {
  data: {
    validation_default_mitigation_action: string,
    validation_override_mitigation_action: string,
  }
}

export interface IPatchZonesByZoneIdApiGatewaySettingsSchemaValidationParams {
  zone_id: string,
  validation_default_mitigation_action?: string,
  validation_override_mitigation_action?: string,
}

export interface IPatchZonesByZoneIdApiGatewaySettingsSchemaValidationResponse {
  data: {
    validation_default_mitigation_action: string,
    validation_override_mitigation_action: string,
  }
}

export interface IPutZonesByZoneIdApiGatewaySettingsSchemaValidationParams {
  zone_id: string,
  validation_default_mitigation_action?: string,
  validation_override_mitigation_action?: string,
}

export interface IPutZonesByZoneIdApiGatewaySettingsSchemaValidationResponse {
  data: {
    validation_default_mitigation_action: string,
    validation_override_mitigation_action: string,
  }
}
export interface IGetZonesByZoneIdApiGatewayUserSchemasParams {
  zone_id: string,
  omit_source?: boolean,
  page?: number,
  per_page?: number,
  validation_enabled?: boolean,
}

export interface IGetZonesByZoneIdApiGatewayUserSchemasResponse {
  data: {
    result: Array<object>,

    errors: Array<{
      code: number,
      message: string,
    }>,
    messages: Array<{
      code: number,
      message: string,
    }>,
    success: boolean,
    result_info?: {
      count: number,
      page: number,
      per_page: number,
      total_count: number,
    }
  }
}
export interface IPostZonesByZoneIdApiGatewayUserSchemasParams {
  zone_id: string,
  file: string,
  kind: string,
  name?: string,
  validation_enabled?: string,
}

export interface IPostZonesByZoneIdApiGatewayUserSchemasResponse {
  data: {
    result: {
      schemas: object,
      upload_details: object,
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
export interface IDeleteZonesByZoneIdApiGatewayUserSchemasSchemaIdParams {
  schema_id: string,
  zone_id: string,
}

export interface IDeleteZonesByZoneIdApiGatewayUserSchemasSchemaIdResponse {
  data: {
    errors: Array<{
      code: number,
      message: string,
    }>,
    messages: Array<{
      code: number,
      message: string,
    }>,
    result: object,
    success: boolean,
  }
}
export interface IGetZonesByZoneIdApiGatewayUserSchemasSchemaIdParams {
  schema_id: string,
  zone_id: string,
  omit_source?: boolean,
}

export interface IGetZonesByZoneIdApiGatewayUserSchemasSchemaIdResponse {
  data: {
    result: {
      created_at: string,
      kind: string,
      name: string,
      schema_id: string,
      source?: string,
      validation_enabled?: boolean,
    }
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
export interface IPatchZonesByZoneIdApiGatewayUserSchemasSchemaIdParams {
  schema_id: string,
  zone_id: string,
  validation_enabled?: boolean,
}

export interface IPatchZonesByZoneIdApiGatewayUserSchemasSchemaIdResponse {
  data: {
    result: {
      created_at: string,
      kind: string,
      name: string,
      schema_id: string,
      source?: string,
      validation_enabled?: boolean,
    }
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

export interface IGetZonesByZoneIdApiGatewayUserSchemasSchemaIdOperationsParams {
  schema_id: string,
  zone_id: string,
  endpoint:string, 
  feature: Array<string>, 
  host: Array<string>, 
  method: Array<string>, 
  operation_status: string, 
  page?: number, 
  per_page?: number,
}

export interface IGetZonesByZoneIdApiGatewayUserSchemasSchemaIdOperationsResponse {
  data: {
    result: Array<any>
    errors: Array<{
      code: number,
      message: string,
    }>,
    messages: Array<{
      code: number,
      message: string,
    }>,
    
    success: boolean,
    result_info?: {
      count: number,
      page: number,
      per_page: number,
      total_count: number,
    }
  }
}