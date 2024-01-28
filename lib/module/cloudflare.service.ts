import { Inject, Injectable } from "@nestjs/common";
import { CloudflareModuleOptions, MODULE_OPTIONS_TOKEN } from "../utils";
import { HttpService } from "@nestjs/axios";
import { IDeleteAccountsByIdentifierAccessAppsByUuid1PoliciesByUuidParams, IDeleteAccountsByIdentifierAccessAppsByUuid1PoliciesByUuidResponse, IDeleteAccountsByIdentifierAccessBookmarksUuidParams, IDeleteAccountsByIdentifierAccessBookmarksUuidResponse, IDeleteAccountsByIdentifierAccessCertificatesSettingsByUuidParams, IDeleteAccountsByIdentifierAccessCertificatesSettingsByUuidResponse, IDeleteAccountsByIdentifierAccessCustomPagesByUuidParams, IDeleteAccountsByIdentifierAccessCustomPagesByUuidResponse, IDeleteAccountsByIdentifierAccessGroupsByUuidParams, IDeleteAccountsByIdentifierAccessGroupsByUuidResponse, IDeleteAccountsByIdentifierAccessIdentityProvidersByUuidParams, IDeleteAccountsByIdentifierAccessIdentityProvidersByUuidResponse, IDeleteZonesByZoneIdApiGatewayOperationsOperationsIdParams, IDeleteZonesByZoneIdApiGatewayOperationsOperationsIdResponse, IDeleteZonesByZoneIdApiGatewayUserSchemasSchemaIdParams, IDeleteZonesByZoneIdApiGatewayUserSchemasSchemaIdResponse, IDeleteZonesByZoneIdentifierClientCertificatesIdentifierParams, IDeleteZonesByZoneIdentifierClientCertificatesIdentifierResponse, IGetAccountsByAccountIdentifierIntelAsnByAsnParams, IGetAccountsByAccountIdentifierIntelAsnByAsnResponse, IGetAccountsByAccountIdentifierIntelAsnByAsnSubnetsParams, IGetAccountsByAccountIdentifierIntelAsnByAsnSubnetsResponse, IGetAccountsByIdentifierAccessAppsByAppIdParams, IGetAccountsByIdentifierAccessAppsByAppIdResponse, IGetAccountsByIdentifierAccessAppsByAppIdUserPolicyChecksParams, IGetAccountsByIdentifierAccessAppsByAppIdUserPolicyChecksResolve, IGetAccountsByIdentifierAccessAppsByUuid1PoliciesByUuidParams, IGetAccountsByIdentifierAccessAppsByUuid1PoliciesByUuidResponse, IGetAccountsByIdentifierAccessAppsParams, IGetAccountsByIdentifierAccessAppsResponse, IGetAccountsByIdentifierAccessBookmarksParams, IGetAccountsByIdentifierAccessBookmarksResponse, IGetAccountsByIdentifierAccessBookmarksUuidParams, IGetAccountsByIdentifierAccessBookmarksUuidResponse, IGetAccountsByIdentifierAccessCertificatesParams, IGetAccountsByIdentifierAccessCertificatesResponse, IGetAccountsByIdentifierAccessCertificatesSettingsByUuidParams, IGetAccountsByIdentifierAccessCertificatesSettingsByUuidResponse, IGetAccountsByIdentifierAccessCertificatesSettingsParams, IGetAccountsByIdentifierAccessCertificatesSettingsResponse, IGetAccountsByIdentifierAccessCustomPagesByUuidParams, IGetAccountsByIdentifierAccessCustomPagesByUuidResponse, IGetAccountsByIdentifierAccessCustomPagesParams, IGetAccountsByIdentifierAccessCustomPagesResponse, IGetAccountsByIdentifierAccessGroupsByUuidParams, IGetAccountsByIdentifierAccessGroupsByUuidResponse, IGetAccountsByIdentifierAccessGroupsParams, IGetAccountsByIdentifierAccessGroupsResponse, IGetAccountsByIdentifierAccessIdentityProvidersByUuidParams, IGetAccountsByIdentifierAccessIdentityProvidersByUuidResponse, IGetAccountsByIdentifierAccessIdentityProvidersParams, IGetAccountsByIdentifierAccessIdentityProvidersResponse, IGetAccountsByIdentifierAccessKeysParams, IGetAccountsByIdentifierAccessKeysResponse, IGetAccountsByIdentifierAccessLogsAccessRequestParams, IGetAccountsByIdentifierAccessLogsAccessRequestResponse, IGetZonesByZoneIdApiGatewayConfigurationParams, IGetZonesByZoneIdApiGatewayConfigurationResponse, IGetZonesByZoneIdApiGatewayDiscoveryOperationsParams, IGetZonesByZoneIdApiGatewayDiscoveryOperationsResponse, IGetZonesByZoneIdApiGatewayDiscoveryParams, IGetZonesByZoneIdApiGatewayDiscoveryResponse, IGetZonesByZoneIdApiGatewayOperationsOperationIdSchemaValidationParams, IGetZonesByZoneIdApiGatewayOperationsOperationIdSchemaValidationResponse, IGetZonesByZoneIdApiGatewayOperationsOperationsIdParams, IGetZonesByZoneIdApiGatewayOperationsOperationsIdResponse, IGetZonesByZoneIdApiGatewayOperationsParams, IGetZonesByZoneIdApiGatewayOperationsResponse, IGetZonesByZoneIdApiGatewaySchemasParams, IGetZonesByZoneIdApiGatewaySchemasResponse, IGetZonesByZoneIdApiGatewaySettingsSchemaValidationParams, IGetZonesByZoneIdApiGatewaySettingsSchemaValidationResponse, IGetZonesByZoneIdApiGatewayUserSchemasParams, IGetZonesByZoneIdApiGatewayUserSchemasResponse, IGetZonesByZoneIdApiGatewayUserSchemasSchemaIdOperationsParams, IGetZonesByZoneIdApiGatewayUserSchemasSchemaIdOperationsResponse, IGetZonesByZoneIdApiGatewayUserSchemasSchemaIdParams, IGetZonesByZoneIdApiGatewayUserSchemasSchemaIdResponse, IGetZonesByZoneIdentifierCertificateAuthoritiesHostnameAssociationsParams, IGetZonesByZoneIdentifierCertificateAuthoritiesHostnameAssociationsResponse, IGetZonesByZoneIdentifierClientCertificatesIdentifierParams, IGetZonesByZoneIdentifierClientCertificatesIdentifierResponse, IGetZonesByZoneIdentifierClientCertificatesParams, IGetZonesByZoneIdentifierClientCertificatesResponse, IPatchZonesByZoneIdApiGatewayDiscoveryOperationsByOperationIdParams, IPatchZonesByZoneIdApiGatewayDiscoveryOperationsByOperationIdResponse, IPatchZonesByZoneIdApiGatewayDiscoveryOperationsParams, IPatchZonesByZoneIdApiGatewayOperationsSchemaValidationParams, IPatchZonesByZoneIdApiGatewayOperationsSchemaValidationResponse, IPatchZonesByZoneIdApiGatewaySettingsSchemaValidationParams, IPatchZonesByZoneIdApiGatewaySettingsSchemaValidationResponse, IPatchZonesByZoneIdApiGatewayUserSchemasSchemaIdParams, IPatchZonesByZoneIdApiGatewayUserSchemasSchemaIdResponse, IPatchZonesByZoneIdentifierClientCertificatesIdentifierParams, IPatchZonesByZoneIdentifierClientCertificatesIdentifierResponse, IPostAccountsByIdentifierAccessAppsByAppIdRevokeTokensParams, IPostAccountsByIdentifierAccessAppsByAppIdRevokeTokensResolve, IPostAccountsByIdentifierAccessAppsParams, IPostAccountsByIdentifierAccessAppsResponse, IPostAccountsByIdentifierAccessBookmarksUuidParams, IPostAccountsByIdentifierAccessBookmarksUuidResponse, IPostAccountsByIdentifierAccessCertificatesParams, IPostAccountsByIdentifierAccessCertificatesResponse, IPostAccountsByIdentifierAccessCustomPagesParams, IPostAccountsByIdentifierAccessCustomPagesResponse, IPostAccountsByIdentifierAccessIdentityProvidersParams, IPostAccountsByIdentifierAccessIdentityProvidersResponse, IPostAccountsByIdentifierAccessKeysRotateParams, IPostAccountsByIdentifierAccessKeysRotateResponse, IPostZonesByZoneIdApiGatewayOperationsParams, IPostZonesByZoneIdApiGatewayOperationsResponse, IPostZonesByZoneIdApiGatewayUserSchemasParams, IPostZonesByZoneIdApiGatewayUserSchemasResponse, IPostZonesByZoneIdentifierClientCertificatesParams, IPostZonesByZoneIdentifierClientCertificatesResponse, IPutAccountsByIdentifierAccessAppsByAppIdParams, IPutAccountsByIdentifierAccessAppsByAppIdResponse, IPutAccountsByIdentifierAccessAppsByUuid1PoliciesByUuidParams, IPutAccountsByIdentifierAccessAppsByUuid1PoliciesByUuidResponse, IPutAccountsByIdentifierAccessBookmarksUuidParams, IPutAccountsByIdentifierAccessBookmarksUuidResponse, IPutAccountsByIdentifierAccessCertificatesSettingsByUuidParams, IPutAccountsByIdentifierAccessCertificatesSettingsByUuidResponse, IPutAccountsByIdentifierAccessCustomPagesByUuidParams, IPutAccountsByIdentifierAccessCustomPagesByUuidResponse, IPutAccountsByIdentifierAccessGroupsByUuidParams, IPutAccountsByIdentifierAccessGroupsByUuidResponse, IPutAccountsByIdentifierAccessGroupsParams, IPutAccountsByIdentifierAccessGroupsResponse, IPutAccountsByIdentifierAccessKeysParams, IPutAccountsByIdentifierAccessKeysResponse, IPutZonesByZoneIdApiGatewayConfigurationParams, IPutZonesByZoneIdApiGatewayConfigurationResponse, IPutZonesByZoneIdApiGatewayOperationsOperationIdSchemaValidationParams, IPutZonesByZoneIdApiGatewayOperationsOperationIdSchemaValidationResponse, IPutZonesByZoneIdApiGatewaySettingsSchemaValidationParams, IPutZonesByZoneIdApiGatewaySettingsSchemaValidationResponse, IPutZonesByZoneIdentifierCertificateAuthoritiesHostnameAssociationsParams, IPutZonesByZoneIdentifierCertificateAuthoritiesHostnameAssociationsResponse } from "./index.d"

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

  /**
   * Retrieve discovered operations on a zone rendered as OpenAPI schemas.
   * @param zone_id 
   * @interface IGetZonesByZoneIdApiGatewayDiscoveryResponse
   * @see https://developers.cloudflare.com/api/operations/api-shield-api-discovery-retrieve-discovered-operations-on-a-zone-as-openapi 
   * @returns {Promise<IGetZonesByZoneIdApiGatewayDiscoveryResponse>}
   */
  getZonesByZoneIdApiGatewayDiscovery = async ({ zone_id }: IGetZonesByZoneIdApiGatewayDiscoveryParams): Promise<IGetZonesByZoneIdApiGatewayDiscoveryResponse> => {
    this.httpService.get(this.url + `/zones/${zone_id}/api_gateway/discovery`)
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

  /**
   * Retrieve discovered operations on a zone.
   * @param zone_id
   * @interface IGetZonesByZoneIdApiGatewayDiscoveryOperationsResponse
   * @see https://developers.cloudflare.com/api/operations/api-shield-api-discovery-retrieve-discovered-operations-on-a-zone
   * @returns 
   */
  getZonesByZoneIdApiGatewayDiscoveryOperations = async ({ zone_id }: IGetZonesByZoneIdApiGatewayDiscoveryOperationsParams): Promise<IGetZonesByZoneIdApiGatewayDiscoveryOperationsResponse> => {
    this.httpService.get(this.url + `/zones/${zone_id}/api_gateway/discovery/operations`)
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

  patchZonesByZoneIdApiGatewayDiscoveryOperations = async ({ zone_id }: IPatchZonesByZoneIdApiGatewayDiscoveryOperationsParams): Promise<IGetZonesByZoneIdApiGatewayDiscoveryOperationsResponse> => {
    this.httpService.patch(this.url + `/zones/${zone_id}/api_gateway/discovery/operations`)
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

  patchZonesByZoneIdApiGatewayDiscoveryOperationsByOperationId = async ({ zone_id, operation_id, state }: IPatchZonesByZoneIdApiGatewayDiscoveryOperationsByOperationIdParams): Promise<IPatchZonesByZoneIdApiGatewayDiscoveryOperationsByOperationIdResponse> => {
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

  getZonesByZoneIdentifierCertificateAuthoritiesHostnameAssociations = async ({ zone_identifier, mtls_certificate_id }: IGetZonesByZoneIdentifierCertificateAuthoritiesHostnameAssociationsParams): Promise<IGetZonesByZoneIdentifierCertificateAuthoritiesHostnameAssociationsResponse> => {
    this.httpService.get(this.url + `/zones/${zone_identifier}/certificate_authorities/hostname_associations`)
    return {
      data: {
        result: {
          hostnames: [],
          mtls_certificate_id: '',
        },
        errors: [],
        messages: [],
        success: true,
      }
    }
  }

  putZonesByZoneIdentifierCertificateAuthoritiesHostnameAssociations = async ({ zone_identifier, hostnames, mtls_certificate_id }: IPutZonesByZoneIdentifierCertificateAuthoritiesHostnameAssociationsParams): Promise<IPutZonesByZoneIdentifierCertificateAuthoritiesHostnameAssociationsResponse> => {
    this.httpService.put(this.url + `/zones/${zone_identifier}/certificate_authorities/hostname_associations`)
    return {
      data: {
        result: {
          hostnames: [],
          mtls_certificate_id: '',
        },
        errors: [],
        messages: [],
        success: true,
      }
    }
  }

  getZonesByZoneIdentifierClientCertificates = async ({ zone_identifier, limit, offset, page, per_page, status }: IGetZonesByZoneIdentifierClientCertificatesParams): Promise<IGetZonesByZoneIdentifierClientCertificatesResponse> => {
    this.httpService.get(this.url + `/zones/${zone_identifier}/client_certificates`)
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
    }
  }

  postZonesByZoneIdentifierClientCertificates = async ({ zone_identifier, csr, validity_days }: IPostZonesByZoneIdentifierClientCertificatesParams): Promise<IPostZonesByZoneIdentifierClientCertificatesResponse> => {
    this.httpService.post(this.url + `/zones/${zone_identifier}/client_certificates`)
    return {
      data: {
        result: {
          certificate: "",
          certificate_authority: {},
          common_name: "",
          country: "",
          csr: "",
          expires_on: "",
          fingerprint_sha256: "",
          id: "",
          issued_on: "",
          location: "",
          organization: "",
          organizational_unit: "",
          serial_number: "",
          signature: "",
          ski: "",
          state: "",
          status: true,
          validity_days: 0,
        },
        errors: [],
        messages: [],
        success: true,
      }
    }
  }

  deleteZonesByZoneIdentifierClientCertificatesIdentifier = async ({ client_certificate_identifier, zone_identifier }: IDeleteZonesByZoneIdentifierClientCertificatesIdentifierParams): Promise<IDeleteZonesByZoneIdentifierClientCertificatesIdentifierResponse> => {
    this.httpService.delete(this.url + `/zones/${zone_identifier}/client_certificates/${client_certificate_identifier}`)
    return {
      data: {
        result: {
          certificate: "",
          certificate_authority: {},
          common_name: "",
          country: "",
          csr: "",
          expires_on: "",
          fingerprint_sha256: "",
          id: "",
          issued_on: "",
          location: "",
          organization: "",
          organizational_unit: "",
          serial_number: "",
          signature: "",
          ski: "",
          state: "",
          status: true,
          validity_days: 0,
        },
        errors: [],
        messages: [],
        success: true,
      }
    }
  }

  getZonesByZoneIdentifierClientCertificatesIdentifier = async ({ client_certificate_identifier, zone_identifier }: IGetZonesByZoneIdentifierClientCertificatesIdentifierParams): Promise<IGetZonesByZoneIdentifierClientCertificatesIdentifierResponse> => {
    this.httpService.get(this.url + `/zones/${zone_identifier}/client_certificates/${client_certificate_identifier}`)
    return {
      data: {
        result: {
          certificate: "",
          certificate_authority: {},
          common_name: "",
          country: "",
          csr: "",
          expires_on: "",
          fingerprint_sha256: "",
          id: "",
          issued_on: "",
          location: "",
          organization: "",
          organizational_unit: "",
          serial_number: "",
          signature: "",
          ski: "",
          state: "",
          status: true,
          validity_days: 0,
        },
        errors: [],
        messages: [],
        success: true,
      }
    }
  }

  patchZonesByZoneIdentifierClientCertificatesIdentifier = async ({ client_certificate_identifier, zone_identifier }: IPatchZonesByZoneIdentifierClientCertificatesIdentifierParams): Promise<IPatchZonesByZoneIdentifierClientCertificatesIdentifierResponse> => {
    this.httpService.get(this.url + `/zones/${zone_identifier}/client_certificates/${client_certificate_identifier}`)
    return {
      data: {
        result: {
          certificate: "",
          certificate_authority: {},
          common_name: "",
          country: "",
          csr: "",
          expires_on: "",
          fingerprint_sha256: "",
          id: "",
          issued_on: "",
          location: "",
          organization: "",
          organizational_unit: "",
          serial_number: "",
          signature: "",
          ski: "",
          state: "",
          status: true,
          validity_days: 0,
        },
        errors: [],
        messages: [],
        success: true,
      }
    }
  }

  getZonesByZoneIdApiGatewayOperations = async ({ zone_id, direction, endpoint, feature, host, method, order, page, per_page }: IGetZonesByZoneIdApiGatewayOperationsParams): Promise<IGetZonesByZoneIdApiGatewayOperationsResponse> => {
    this.httpService.get(this.url + `/zones/${zone_id}/api_gateway/operations`)
    return {
      data: {
        result: [],
        errors: [],
        messages: [],
        success: true,
      }
    }
  }

  postZonesByZoneIdApiGatewayOperations = async ({ zone_id, endpoint, host, method }: IPostZonesByZoneIdApiGatewayOperationsParams): Promise<IPostZonesByZoneIdApiGatewayOperationsResponse> => {
    this.httpService.post(this.url + `/zones/${zone_id}/api_gateway/operations`)
    return {
      data: {
        result: [],
        errors: [],
        messages: [],
        success: true,
      }
    }
  }

  deleteZonesByZoneIdApiGatewayOperationsOperationsId = async ({ zone_id, operation_id }: IDeleteZonesByZoneIdApiGatewayOperationsOperationsIdParams): Promise<IDeleteZonesByZoneIdApiGatewayOperationsOperationsIdResponse> => {
    this.httpService.delete(this.url + `/zones/${zone_id}/api_gateway/operations/${operation_id}`)
    return {
      data: {
        result: [],
        errors: [],
        messages: [],
        success: true,
      }
    }
  }

  getZonesByZoneIdApiGatewayOperationsOperationsId = async ({ zone_id, operation_id, feature }: IGetZonesByZoneIdApiGatewayOperationsOperationsIdParams): Promise<IGetZonesByZoneIdApiGatewayOperationsOperationsIdResponse> => {
    this.httpService.get(this.url + `/zones/${zone_id}/api_gateway/operations/${operation_id}`)
    return {
      data: {
        result: {
          endpoint: "",
          host: "",
          method: "",
          features: {
            last_updated: "",
            operation_id: "",
          }
        },
        errors: [],
        messages: [],
        success: true,
      }
    }
  }

  getZonesByZoneIdApiGatewaySchemas = async ({ zone_id, feature, host }: IGetZonesByZoneIdApiGatewaySchemasParams): Promise<IGetZonesByZoneIdApiGatewaySchemasResponse> => {
    this.httpService.get(this.url + `/zones/${zone_id}/api_gateway/schemas`)
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
    }
  }

  patchZonesByZoneIdApiGatewayOperationsSchemaValidation = async ({ zone_id }: IPatchZonesByZoneIdApiGatewayOperationsSchemaValidationParams): Promise<IPatchZonesByZoneIdApiGatewayOperationsSchemaValidationResponse> => {
    this.httpService.patch(this.url + `/zones/${zone_id}/api_gateway/operations/schema_validation`)
    return {
      data: {
        result: {
          endpoint: "",
          host: "",
          method: "",
          features: {
            last_updated: "",
            operation_id: "",
          }
        },
        errors: [],
        messages: [],
        success: true,
      }
    }
  }

  getZonesByZoneIdApiGatewayOperationsOperationIdSchemaValidation = async ({ zone_id, operation_id }: IGetZonesByZoneIdApiGatewayOperationsOperationIdSchemaValidationParams): Promise<IGetZonesByZoneIdApiGatewayOperationsOperationIdSchemaValidationResponse> => {
    this.httpService.get(this.url + `/zones/${zone_id}/api_gateway/operations/${operation_id}/schema_validation`)
    return {
      data: {
        mitigation_action: "",
      }
    }
  }

  putZonesByZoneIdApiGatewayOperationsOperationIdSchemaValidation = async ({ zone_id, operation_id }: IPutZonesByZoneIdApiGatewayOperationsOperationIdSchemaValidationParams): Promise<IPutZonesByZoneIdApiGatewayOperationsOperationIdSchemaValidationResponse> => {
    this.httpService.put(this.url + `/zones/${zone_id}/api_gateway/operations/${operation_id}/schema_validation`)
    return {
      data: {
        mitigation_action: "",
      }
    }
  }

  getZonesByZoneIdApiGatewaySettingsSchemaValidation = async ({ zone_id }: IGetZonesByZoneIdApiGatewaySettingsSchemaValidationParams): Promise<IGetZonesByZoneIdApiGatewaySettingsSchemaValidationResponse> => {
    this.httpService.get(this.url + `/zones/${zone_id}/api_gateway/settings/schema_validation`)
    return {
      data: {
        validation_default_mitigation_action: "",
        validation_override_mitigation_action: "",
      }
    }
  }

  patchZonesByZoneIdApiGatewaySettingsSchemaValidation = async ({ zone_id, validation_default_mitigation_action, validation_override_mitigation_action }: IPatchZonesByZoneIdApiGatewaySettingsSchemaValidationParams): Promise<IPatchZonesByZoneIdApiGatewaySettingsSchemaValidationResponse> => {
    this.httpService.patch(this.url + `/zones/${zone_id}/api_gateway/settings/schema_validation`)
    return {
      data: {
        validation_default_mitigation_action: "",
        validation_override_mitigation_action: "",
      }
    }
  }

  putZonesByZoneIdApiGatewaySettingsSchemaValidation = async ({ zone_id, validation_default_mitigation_action, validation_override_mitigation_action }: IPutZonesByZoneIdApiGatewaySettingsSchemaValidationParams): Promise<IPutZonesByZoneIdApiGatewaySettingsSchemaValidationResponse> => {
    this.httpService.put(this.url + `/zones/${zone_id}/api_gateway/settings/schema_validation`)
    return {
      data: {
        validation_default_mitigation_action: "",
        validation_override_mitigation_action: "",
      }
    }
  }

  getZonesByZoneIdApiGatewayUserSchemas = async ({ zone_id, omit_source, page, per_page, validation_enabled }: IGetZonesByZoneIdApiGatewayUserSchemasParams): Promise<IGetZonesByZoneIdApiGatewayUserSchemasResponse> => {
    this.httpService.get(this.url + `/zones/${zone_id}/api_gateway/user_schemas`)
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
    }
  }

  postZonesByZoneIdApiGatewayUserSchemas = async ({ zone_id, file, kind, name, validation_enabled }: IPostZonesByZoneIdApiGatewayUserSchemasParams): Promise<IPostZonesByZoneIdApiGatewayUserSchemasResponse> => {
    this.httpService.post(this.url + `/zones/${zone_id}/api_gateway/user_schemas`)
    return {
      data: {
        result: {
          schemas: {},
          upload_details: {},
        },
        errors: [],
        messages: [],
        success: true,
      }
    }
  }

  deleteZonesByZoneIdApiGatewayUserSchemasSchemaId = async ({ zone_id, schema_id }: IDeleteZonesByZoneIdApiGatewayUserSchemasSchemaIdParams): Promise<IDeleteZonesByZoneIdApiGatewayUserSchemasSchemaIdResponse> => {
    this.httpService.delete(this.url + `/zones/${zone_id}/api_gateway/user_schemas/${schema_id}`)
    return {
      data: {
        result: {
          schemas: {},
          upload_details: {},
        },
        errors: [],
        messages: [],
        success: true,
      }
    }
  }

  getZonesByZoneIdApiGatewayUserSchemasSchemaId = async ({ zone_id, schema_id, omit_source }: IGetZonesByZoneIdApiGatewayUserSchemasSchemaIdParams): Promise<IGetZonesByZoneIdApiGatewayUserSchemasSchemaIdResponse> => {
    this.httpService.get(this.url + `/zones/${zone_id}/api_gateway/user_schemas/${schema_id}`)
    return {
      data: {
        result: {
          created_at: "",
          kind: "",
          name: "",
          schema_id: "",
          source: "",
          validation_enabled: true
        },
        errors: [],
        messages: [],
        success: true,
      }
    }
  }

  patchZonesByZoneIdApiGatewayUserSchemasSchemaId = async ({ zone_id, schema_id, validation_enabled }: IPatchZonesByZoneIdApiGatewayUserSchemasSchemaIdParams): Promise<IPatchZonesByZoneIdApiGatewayUserSchemasSchemaIdResponse> => {
    this.httpService.patch(this.url + `/zones/${zone_id}/api_gateway/user_schemas/${schema_id}`)
    return {
      data: {
        result: {
          created_at: "",
          kind: "",
          name: "",
          schema_id: "",
          source: "",
          validation_enabled: true
        },
        errors: [],
        messages: [],
        success: true,
      }
    }
  }

  getZonesByZoneIdApiGatewayUserSchemasSchemaIdOperations = async ({ zone_id, schema_id, endpoint, feature, host, method, operation_status, page, per_page }: IGetZonesByZoneIdApiGatewayUserSchemasSchemaIdOperationsParams): Promise<IGetZonesByZoneIdApiGatewayUserSchemasSchemaIdOperationsResponse> => {
    this.httpService.get(this.url + `/zones/${zone_id}/api_gateway/user_schemas/${schema_id}/operations`)
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
    }
  }

  getZonesByZoneIdApiGatewayConfiguration = async ({ zone_id, proporties }: IGetZonesByZoneIdApiGatewayConfigurationParams): Promise<IGetZonesByZoneIdApiGatewayConfigurationResponse> => {
    this.httpService.get(this.url + `/zones/${zone_id}/api_gateway/configuration`)
    return {
      data: {
        result: {
          auth_id_characteristics: [],
        },
        errors: [],
        messages: [],
        success: true,
      }
    };
  }

  putZonesByZoneIdApiGatewayConfiguration = async ({ zone_id, auth_id_characteristics }: IPutZonesByZoneIdApiGatewayConfigurationParams): Promise<IPutZonesByZoneIdApiGatewayConfigurationResponse> => {
    this.httpService.put(this.url + `/zones/${zone_id}/api_gateway/configuration`)
    return {
      data: {
        errors: [],
        messages: [],
        result: {},
        success: true,
      }
    };
  }

  getAccountsByAccountIdentifierIntelAsnByAsn = async ({ account_identifier, asn }: IGetAccountsByAccountIdentifierIntelAsnByAsnParams): Promise<IGetAccountsByAccountIdentifierIntelAsnByAsnResponse> => {
    this.httpService.get(this.url + `/accounts/${account_identifier}/intel/asn/${asn}`)
    return {
      data: {
        result: "",
        errors: [],
        messages: [],
        success: true,
      }
    };
  }

  getAccountsByAccountIdentifierIntelAsnByAsnSubnets = async ({ account_identifier, asn }: IGetAccountsByAccountIdentifierIntelAsnByAsnSubnetsParams): Promise<IGetAccountsByAccountIdentifierIntelAsnByAsnSubnetsResponse> => {
    this.httpService.get(this.url + `/accounts/${account_identifier}/intel/asn/${asn}/subnets`)
    return {
      data: {
        asn: 0,
        count: 1,
        ip_count_total: 0,
        page: 1,
        per_page: 20,
        subnets: [],
      }
    };
  }

  getAccountsByIdentifierAccessBookmarks = async ({ identifier }: IGetAccountsByIdentifierAccessBookmarksParams): Promise<IGetAccountsByIdentifierAccessBookmarksResponse> => {
    this.httpService.get(this.url + `/accounts/${identifier}/access/bookmarks`)
    return {
      data: {
        result: "",
        errors: [],
        messages: [],
        success: true,
        result_info: {
          count: 1,
          page: 1,
          per_page: 20,
          total_count: 0,
        },
      }
    };
  }

  deleteAccountsByIdentifierAccessBookmarksUuid = async ({ identifier, uuid }: IDeleteAccountsByIdentifierAccessBookmarksUuidParams): Promise<IDeleteAccountsByIdentifierAccessBookmarksUuidResponse> => {
    this.httpService.delete(this.url + `/accounts/${identifier}/access/bookmarks/${uuid}`)
    return {
      data: {
        result: {
          id: "",
        },
        errors: [],
        messages: [],
        success: true,
      }
    };
  }

  getAccountsByIdentifierAccessBookmarksUuid = async ({ identifier, uuid }: IGetAccountsByIdentifierAccessBookmarksUuidParams): Promise<IGetAccountsByIdentifierAccessBookmarksUuidResponse> => {
    this.httpService.get(this.url + `/accounts/${identifier}/access/bookmarks/${uuid}`)
    return {
      data: {
        result: {
          app_launcher_visible: true,
          created_at: "",
          domain: "",
          id: "",
          logo_url: "",
          name: "",
          updated_at: "",
        },
        errors: [],
        messages: [],
        success: true,
      }
    };
  }

  postAccountsByIdentifierAccessBookmarksUuid = async ({ identifier, uuid }: IPostAccountsByIdentifierAccessBookmarksUuidParams): Promise<IPostAccountsByIdentifierAccessBookmarksUuidResponse> => {
    this.httpService.post(this.url + `/accounts/${identifier}/access/bookmarks/${uuid}`)
    return {
      data: {
        result: {
          app_launcher_visible: true,
          created_at: "",
          domain: "",
          id: "",
          logo_url: "",
          name: "",
          updated_at: "",
        },
        errors: [],
        messages: [],
        success: true,
      }
    };
  }

  putAccountsByIdentifierAccessBookmarksUuid = async ({ identifier, uuid }: IPutAccountsByIdentifierAccessBookmarksUuidParams): Promise<IPutAccountsByIdentifierAccessBookmarksUuidResponse> => {
    this.httpService.put(this.url + `/accounts/${identifier}/access/bookmarks/${uuid}`)
    return {
      data: {
        result: {
          app_launcher_visible: true,
          created_at: "",
          domain: "",
          id: "",
          logo_url: "",
          name: "",
          updated_at: "",
        },
        errors: [],
        messages: [],
        success: true,
      }
    };
  }

  getAccountsByIdentifierAccessApps = async ({ identifier }: IGetAccountsByIdentifierAccessAppsParams): Promise<IGetAccountsByIdentifierAccessAppsResponse> => {
    this.httpService.get(this.url + `/accounts/${identifier}/access/apps`)
    return {
      data: {
        result: {},
        errors: [],
        messages: [],
        success: true,
        result_info: {
          count: 1,
          page: 1,
          per_page: 20,
          total_count: 0,
        },
      }
    };
  }

  postAccountsByIdentifierAccessApps = async ({ identifierBURASI }: IPostAccountsByIdentifierAccessAppsParams): Promise<IPostAccountsByIdentifierAccessAppsResponse> => {
    this.httpService.post(this.url + `/accounts/${identifier}/access/apps`)
    return {
      data: {
        result: {},
        errors: [],
        messages: [],
        success: true,
        result_info: {
          count: 1,
          page: 1,
          per_page: 20,
          total_count: 0,
        },
      }
    };
  }

  deleteAccountsByIdentifierAccessAppsByAppId = async ({ app_id, identifier }: IDeleteAccountsByIdentifierAccessAppsByAppIdParams): Promise<IDeleteAccountsByIdentifierAccessAppsByAppIdResponse> => {
    this.httpService.delete(this.url + `/accounts/${identifier}/access/apps/${app_id}`)
    return {
      data: {
        result: {
          id: "",
        },
        errors: [],
        messages: [],
        success: true,
      }
    };
  }

  getAccountsByIdentifierAccessAppsByAppId = async ({ app_id, identifier }: IGetAccountsByIdentifierAccessAppsByAppIdParams): Promise<IGetAccountsByIdentifierAccessAppsByAppIdResponse> => {
    this.httpService.get(this.url + `/accounts/${identifier}/access/apps/${app_id}`)
    return true;
  }

  putAccountsByIdentifierAccessAppsByAppId = async ({ app_id, identifier }: IPutAccountsByIdentifierAccessAppsByAppIdParams): Promise<IPutAccountsByIdentifierAccessAppsByAppIdResponse> => {
    this.httpService.put(this.url + `/accounts/${identifier}/access/apps/${app_id}`)
    return true;
  }

  postAccountsByIdentifierAccessAppsByAppIdRevokeTokens = async ({ app_id, identifier }: IPostAccountsByIdentifierAccessAppsByAppIdRevokeTokensParams): Promise<IPostAccountsByIdentifierAccessAppsByAppIdRevokeTokensResolve> => {
    this.httpService.post(this.url + `/accounts/${identifier}/access/apps/${app_id}`)
    return {
      data: {
        result: {},
        success: true,
      }
    };
  }

  getAccountsByIdentifierAccessAppsByAppIdUserPolicyChecks = async ({ app_id, identifier }: IGetAccountsByIdentifierAccessAppsByAppIdUserPolicyChecksParams): Promise<IGetAccountsByIdentifierAccessAppsByAppIdUserPolicyChecksResolve> => {
    this.httpService.get(this.url + `/accounts/${identifier}/access/apps/${app_id}/user_policy_checks`)
    return {
      data: {
        result: {
          app_state: {},
          user_identity: {},
        },
        errors: [],
        messages: [],
        success: true,
      }
    };
  }

  getAccountsByIdentifierAccessLogsAccessRequest = async ({ identifier }: IGetAccountsByIdentifierAccessLogsAccessRequestParams): Promise<IGetAccountsByIdentifierAccessLogsAccessRequestResponse> => {
    this.httpService.get(this.url + `/accounts/${identifier}/access/logs/access_requests`)
    return {
      data: {
        result: {},
        errors: [],
        messages: [],
        success: true,
        result_info: {
          count: 1,
          page: 1,
          per_page: 20,
          total_count: 0,
        },
      }
    };
  }

  getAccountsByIdentifierAccessCustomPages = async ({ identifier }: IGetAccountsByIdentifierAccessCustomPagesParams): Promise<IGetAccountsByIdentifierAccessCustomPagesResponse> => {
    this.httpService.get(this.url + `/accounts/${identifier}/access/custom_pages`)
    return {
      data: {
        result: {},
        errors: [],
        messages: [],
        success: true,
        result_info: {
          count: 1,
          page: 1,
          per_page: 20,
          total_count: 0,
        },
      }
    };
  }

  postAccountsByIdentifierAccessCustomPages = async ({ identifier, app_count, custom_html, name, type }: IPostAccountsByIdentifierAccessCustomPagesParams): Promise<IPostAccountsByIdentifierAccessCustomPagesResponse> => {
    this.httpService.post(this.url + `/accounts/${identifier}/access/custom_pages`)
    return {
      data: {
        result: {
          app_count: 1,
          created_at: "",
          type: "",
          uid: "",
          updated_at: "",
        },
        errors: [],
        messages: [],
        success: true,
      }
    };
  }

  deleteAccountsByIdentifierAccessCustomPagesByUuid = async ({ identifier, uuid }: IDeleteAccountsByIdentifierAccessCustomPagesByUuidParams): Promise<IDeleteAccountsByIdentifierAccessCustomPagesByUuidResponse> => {
    this.httpService.delete(this.url + `/accounts/${identifier}/access/custom_pages/${uuid}`)
    return {
      data: {
        errors: [],
        messages: [],
        result: {
          id: "",
        },
        success: true,
      }
    };
  }

  getAccountsByIdentifierAccessCustomPagesByUuid = async ({ identifier, uuid }: IGetAccountsByIdentifierAccessCustomPagesByUuidParams): Promise<IGetAccountsByIdentifierAccessCustomPagesByUuidResponse> => {
    this.httpService.get(this.url + `/accounts/${identifier}/access/custom_pages/${uuid}`)
    return {
      data: {
        result: {
          app_count: 1,
          created_at: "",
          custom_html: "",
          name: "",
          type: "",
          uid: "",
          updated_at: "",
        },
        errors: [],
        messages: [],
        success: true,
      }
    };
  }

  putAccountsByIdentifierAccessCustomPagesByUuid = async ({ identifier, uuid }: IPutAccountsByIdentifierAccessCustomPagesByUuidParams): Promise<IPutAccountsByIdentifierAccessCustomPagesByUuidResponse> => {
    this.httpService.put(this.url + `/accounts/${identifier}/access/custom_pages/${uuid}`)
    return {
      data: {
        result: {
          app_count: 1,
          created_at: "",
          custom_html: "",
          name: "",
          type: "",
          uid: "",
          updated_at: "",
        },
        errors: [],
        messages: [],
        success: true,
      }
    };
  }

  getAccountsByIdentifierAccessGroups = async ({ identifier }: IGetAccountsByIdentifierAccessGroupsParams): Promise<IGetAccountsByIdentifierAccessGroupsResponse> => {
    this.httpService.get(this.url + `/accounts/${identifier}/access/groups`)
    return {
      data: {
        result: "",
        errors: [],
        messages: [],
        success: true,
        result_info: {
          count: 1,
          page: 1,
          per_page: 20,
          total_count: 0,
        },
      }
    };
  }


  // Buraya bak. https://developers.cloudflare.com/api/operations/access-groups-create-an-access-group
  putAccountsByIdentifierAccessGroups = async ({ identifier }: IPutAccountsByIdentifierAccessGroupsParams): Promise<IPutAccountsByIdentifierAccessGroupsResponse> => {
    this.httpService.put(this.url + `/accounts/${identifier}/access/groups`)
    return {
      data: {
        result: "",
        errors: [],
        messages: [],
        success: true,
        result_info: {
          count: 1,
          page: 1,
          per_page: 20,
          total_count: 0,
        },
      }
    };
  }

  deleteAccountsByIdentifierAccessGroupsByUuid = async ({ identifier, uuid }: IDeleteAccountsByIdentifierAccessGroupsByUuidParams): Promise<IDeleteAccountsByIdentifierAccessGroupsByUuidResponse> => {
    this.httpService.delete(this.url + `/accounts/${identifier}/access/groups/${uuid}`)
    return {
      data: {
        result: {
          id: "",
        },
        errors: [],
        messages: [],
        success: true,
      }
    };
  }
  // Buraya bak 2.
  getAccountsByIdentifierAccessGroupsByUuid = async ({ identifier, uuid }: IGetAccountsByIdentifierAccessGroupsByUuidParams): Promise<IGetAccountsByIdentifierAccessGroupsByUuidResponse> => {
    this.httpService.get(this.url + `/accounts/${identifier}/access/groups/${uuid}`)
    return {
      data: {
        result: {
          id: "",
        },
        errors: [],
        messages: [],
        success: true,
      }
    };
  }
  // Buraya bak 3.
  putAccountsByIdentifierAccessGroupsByUuid = async ({ identifier, uuid }: IPutAccountsByIdentifierAccessGroupsByUuidParams): Promise<IPutAccountsByIdentifierAccessGroupsByUuidResponse> => {
    this.httpService.put(this.url + `/accounts/${identifier}/access/groups/${uuid}`)
    return {
      data: {
        result: {
          id: "",
        },
        errors: [],
        messages: [],
        success: true,
      }
    };
  }

  getAccountsByIdentifierAccessIdentityProviders = async ({ identifier }: IGetAccountsByIdentifierAccessIdentityProvidersParams): Promise<IGetAccountsByIdentifierAccessIdentityProvidersResponse> => {
    this.httpService.put(this.url + `/accounts/${identifier}/access/identity_providers`)
    return {
      data: {
        result: "",
        errors: [],
        messages: [],
        success: true,
        result_info: {
          count: 1,
          page: 1,
          per_page: 20,
          total_count: 0,
        },
      }
    };
  }

  // Buraya dikkat 4. https://developers.cloudflare.com/api/operations/access-identity-providers-add-an-access-identity-provider

  postAccountsByIdentifierAccessIdentityProviders = async ({ identifier }: IPostAccountsByIdentifierAccessIdentityProvidersParams): Promise<IPostAccountsByIdentifierAccessIdentityProvidersResponse> => {
    this.httpService.post(this.url + `/accounts/${identifier}/access/identity_providers`)
    return {
      data: {
        result: "",
        errors: [],
        messages: [],
        success: true,
        result_info: {
          count: 1,
          page: 1,
          per_page: 20,
          total_count: 0,
        },
      }
    };
  }

  deleteAccountsByIdentifierAccessIdentityProvidersByUuid = async ({ identifier, uuid }: IDeleteAccountsByIdentifierAccessIdentityProvidersByUuidParams): Promise<IDeleteAccountsByIdentifierAccessIdentityProvidersByUuidResponse> => {
    this.httpService.delete(this.url + `/accounts/${identifier}/access/identity_providers/${uuid}`)
    return {
      data: {
        result: {
          id: "",
        },
        errors: [],
        messages: [],
        success: true,
      }
    };
  }

  // Buraya dikkat 5.
  getAccountsByIdentifierAccessIdentityProvidersByUuid = async ({ identifier, uuid }: IGetAccountsByIdentifierAccessIdentityProvidersByUuidParams): Promise<IGetAccountsByIdentifierAccessIdentityProvidersByUuidResponse> => {
    this.httpService.get(this.url + `/accounts/${identifier}/access/identity_providers/${uuid}`)
    return {
      data: {
        result: {
          id: "",
        },
        errors: [],
        messages: [],
        success: true,
      }
    };
  }

  // Buraya dikkat 6.
  putAccountsByIdentifierAccessIdentityProvidersByUuid = async ({ identifier, uuid }: IPutAccountsByIdentifierAccessIdentityProvidersByUuidParams): Promise<IPutAccountsByIdentifierAccessIdentityProvidersByUuidResponse> => {
    this.httpService.put(this.url + `/accounts/${identifier}/access/identity_providers/${uuid}`)
    return {
      data: {
        result: {
          id: "",
        },
        errors: [],
        messages: [],
        success: true,
      }
    };
  }

  getAccountsByIdentifierAccessKeys = async ({ identifier }: IGetAccountsByIdentifierAccessKeysParams): Promise<IGetAccountsByIdentifierAccessKeysResponse> => {
    this.httpService.get(this.url + `/accounts/${identifier}/access/keys`)
    return {
      data: {
        days_until_next_rotation: 1,
        key_rotation_interval_days: 30,
        last_key_rotation_at: "",
        errors: [],
        messages: [],
        result: {},
        success: true,
      }
    };
  }

  putAccountsByIdentifierAccessKeys = async ({ identifier, key_rotation_interval_days }: IPutAccountsByIdentifierAccessKeysParams): Promise<IPutAccountsByIdentifierAccessKeysResponse> => {
    this.httpService.put(this.url + `/accounts/${identifier}/access/keys`)
    return {
      data: {
        days_until_next_rotation: 1,
        key_rotation_interval_days: 30,
        last_key_rotation_at: "",
        errors: [],
        messages: [],
        result: {},
        success: true,
      }
    };
  }

  postAccountsByIdentifierAccessKeysRotate = async ({ identifier }: IPostAccountsByIdentifierAccessKeysRotateParams): Promise<IPostAccountsByIdentifierAccessKeysRotateResponse> => {
    this.httpService.post(this.url + `/accounts/${identifier}/access/keys/rotate`)
    return {
      data: {
        days_until_next_rotation: 1,
        key_rotation_interval_days: 30,
        last_key_rotation_at: "",
        errors: [],
        messages: [],
        result: {},
        success: true,
      }
    };
  }

  getAccountsByIdentifierAccessCertificates = async ({ identifier }: IGetAccountsByIdentifierAccessCertificatesParams): Promise<IGetAccountsByIdentifierAccessCertificatesResponse> => {
    this.httpService.get(this.url + `/accounts/${identifier}/access/certificates`)
    return {
      data: {
        result: "",
        errors: [],
        messages: [],
        success: true,
        result_info: {
          count: 1,
          page: 1,
          per_page: 20,
          total_count: 0,
        },
      }
    };
  }

  postAccountsByIdentifierAccessCertificates = async ({ identifier, associated_hostnames, certificate, name }: IPostAccountsByIdentifierAccessCertificatesParams): Promise<IPostAccountsByIdentifierAccessCertificatesResponse> => {
    this.httpService.post(this.url + `/accounts/${identifier}/access/certificates`)
    return {
      data: {
        result: {
          associated_hostnames: [],
          created_at: "",
          expires_on: "",
          fingerprint: "",
          id: "",
          name: "",
          updated_at: "",
        },
        errors: [],
        messages: [],
        success: true,
      }
    };
  }

  getAccountsByIdentifierAccessCertificatesSettings = async ({ identifier }: IGetAccountsByIdentifierAccessCertificatesSettingsParams): Promise<IGetAccountsByIdentifierAccessCertificatesSettingsResponse> => {
    this.httpService.get(this.url + `/accounts/${identifier}/access/certificates/settings`)
    return {
      data: {
        result: "",
        errors: [],
        messages: [],
        success: true,
        result_info: {
          count: 1,
          page: 1,
          per_page: 20,
          total_count: 0,
        },
      }
    };
  }

  deleteAccountsByIdentifierAccessCertificatesSettingsByUuid = async ({ identifier, uuid }: IDeleteAccountsByIdentifierAccessCertificatesSettingsByUuidParams): Promise<IDeleteAccountsByIdentifierAccessCertificatesSettingsByUuidResponse> => {
    this.httpService.delete(this.url + `/accounts/${identifier}/access/certificates/settings/${uuid}`)
    return {
      data: {
        errors: [],
        messages: [],
        result: {
          id:"",
        },
        success: true,
      }
    };
  }

  getAccountsByIdentifierAccessCertificatesSettingsByUuid = async ({ identifier, uuid }: IGetAccountsByIdentifierAccessCertificatesSettingsByUuidParams): Promise<IGetAccountsByIdentifierAccessCertificatesSettingsByUuidResponse> => {
    this.httpService.get(this.url + `/accounts/${identifier}/access/certificates/settings/${uuid}`)
    return {
      data: {
        result: {
          associated_hostnames: [],
          created_at: "",
          expires_on: "",
          fingerprint: "",
          id: "",
          name: "",
          updated_at: "",
        },
        errors: [],
        messages: [],
        success: true,
      }
    };
  }

  putAccountsByIdentifierAccessCertificatesSettingsByUuid = async ({ identifier, uuid, associated_hostnames, name }: IPutAccountsByIdentifierAccessCertificatesSettingsByUuidParams): Promise<IPutAccountsByIdentifierAccessCertificatesSettingsByUuidResponse> => {
    this.httpService.put(this.url + `/accounts/${identifier}/access/certificates/settings/${uuid}`)
    return {
      data: {
        result: {
          associated_hostnames: [],
          created_at: "",
          expires_on: "",
          fingerprint: "",
          id: "",
          name: "",
          updated_at: "",
        },
        errors: [],
        messages: [],
        success: true,
      }
    };
  }

  deleteAccountsByIdentifierAccessAppsByUuid1PoliciesByUuid = async ({ identifier, uuid1, uuid }: IDeleteAccountsByIdentifierAccessAppsByUuid1PoliciesByUuidParams): Promise<IDeleteAccountsByIdentifierAccessAppsByUuid1PoliciesByUuidResponse> => {
    this.httpService.delete(this.url + `/accounts/${identifier}/access/apps/${uuid1}/policies/${uuid}`)
    return {
      data: {
        result: {
          id: "",
        },
        errors: [],
        messages: [],
        success: true,
      }
    };
  }

  getAccountsByIdentifierAccessAppsByUuid1PoliciesByUuid = async ({ identifier, uuid1, uuid }: IGetAccountsByIdentifierAccessAppsByUuid1PoliciesByUuidParams): Promise<IGetAccountsByIdentifierAccessAppsByUuid1PoliciesByUuidResponse> => {
    this.httpService.get(this.url + `/accounts/${identifier}/access/apps/${uuid1}/policies/${uuid}`)
    return {
      data: {
        result: {
          approval_groups: [{
            approval_needed: 1,
            email_addresses: [],
            email_list_uuid: "",
          }],
          approval_required: false,
          created_at: "",
          decision: "",
          exclude: [],
          isolation_required: false,
          name: "",
          precedence: 1,
          purpose_justification_prompt: "",
          purpose_justification_required: false,
          require: [],
          session_duration: "",
          updated_at: "",
        },
        errors: [],
        messages: [],
        success: true,
      }
    };
  }

  putAccountsByIdentifierAccessAppsByUuid1PoliciesByUuid = async ({ identifier, uuid1, uuid, approval_groups, approval_required, decision, exclude, isolation_required, name, precedence, purpose_justification_prompt, purpose_justification_required, require,  session_duration
  }: IPutAccountsByIdentifierAccessAppsByUuid1PoliciesByUuidParams): Promise<IPutAccountsByIdentifierAccessAppsByUuid1PoliciesByUuidResponse> => {
    this.httpService.put(this.url + `/accounts/${identifier}/access/apps/${uuid1}/policies/${uuid}`)
    return {
      data: {
        result: {
          approval_groups: [{
            approval_needed: 1,
            email_addresses: [],
            email_list_uuid: "",
          }],
          approval_required: false,
          created_at: "",
          decision: "",
          exclude: [],
          id: "",
          include: [],
          isolation_required: false,
          name: "",
          precedence: 1,
          purpose_justification_prompt: "",
          purpose_justification_required: false,
          require: [],
          session_duration: "",
          updated_at: "",
        },
        errors: [],
        messages: [],
        success: true,
      }
    };
  }

  getAccountsByIdentifierAccessAppsByUuidPolicies = async ({ identifier, uuid  }: IGetAccountsByIdentifierAccessAppsByUuidPoliciesParams): Promise<IGetAccountsByIdentifierAccessAppsByUuidPoliciesResponse> => {
    this.httpService.get(this.url + `/accounts/${identifier}/access/apps/${uuid}/policies`)
    return {
      data: {
        result: "",
        errors: [],
        messages: [],
        success: true,
        result_info: {
          count: 1,
          page: 1,
          per_page: 20,
          total_count: 0,
        },
      }
    };
  }

  postAccountsByIdentifierAccessAppsByUuidPolicies = async ({ identifier, uuid1, uuid, approval_groups, approval_required, decision, exclude, include, isolation_required, name, precedence, purpose_justification_prompt, purpose_justification_required, require,  session_duration  }: IPostAccountsByIdentifierAccessAppsByUuidPoliciesParams): Promise<IPostAccountsByIdentifierAccessAppsByUuidPoliciesResponse> => {
    this.httpService.post(this.url + `/accounts/${identifier}/access/apps/${uuid}/policies`)
    return {
      data: {
        result: {
          approval_groups: [{
            approval_needed: 1,
            email_addresses: [],
            email_list_uuid: "",
          }],
          approval_required: false,
          created_at: "",
          decision: "",
          exclude: [],
          id: "",
          include: [],
          isolation_required: false,
          name: "",
          precedence: 1,
          purpose_justification_prompt: "",
          purpose_justification_required: false,
          require: [],
          session_duration: "",
          updated_at: "",
        },
        errors: [],
        messages: [],
        success: true,
      }
    };
  }

  //Access Service Tokens Start










}