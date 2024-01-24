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

  //Burası

  getZonesByZoneIdentifierCertificateAuthoritiesHostnameAssociations = async ({ zone_identifier, mtls_certificate_id }: IGetZonesByZoneIdentifierCertificateAuthoritiesHostnameAssociationsParams): Promise<IGetZonesByZoneIdentifierCertificateAuthoritiesHostnameAssociationsResponse> => {
    this.httpService.get(this.url + `/zones/${zone_identifier}/certificate_authorities/hostname_associations`)
    return true;
  }

  putZonesByZoneIdentifierCertificateAuthoritiesHostnameAssociations = async ({ zone_identifier, hostnames, mtls_certificate_id }: IPutZonesByZoneIdentifierCertificateAuthoritiesHostnameAssociationsParams): Promise<IPutZonesByZoneIdentifierCertificateAuthoritiesHostnameAssociationsResponse> => {
    this.httpService.put(this.url + `/zones/${zone_identifier}/certificate_authorities/hostname_associations`)
    return true;
  }

  getZonesByZoneIdentifierClientCertificates = async ({ zone_identifier, limit, offset, page, per_page, status }: IGetZonesByZoneIdentifierClientCertificatesParams): Promise<IGetZonesByZoneIdentifierClientCertificatesResponse> => {
    this.httpService.get(this.url + `/zones/${zone_identifier}/client_certificates`)
    return true;
  }

  postZonesByZoneIdentifierClientCertificates = async ({ zone_identifier, csr, validity_days }: IPostZonesByZoneIdentifierClientCertificatesParams): Promise<IPostZonesByZoneIdentifierClientCertificatesResponse> => {
    this.httpService.post(this.url + `/zones/${zone_identifier}/client_certificates`)
    return true;
  }

  deleteZonesByZoneIdentifierClientCertificatesIdentifier = async ({ client_certificate_identifier, zone_identifier }: IDeleteZonesByZoneIdentifierClientCertificatesIdentifierParams): Promise<IDeleteZonesByZoneIdentifierClientCertificatesIdentifierResponse> => {
    this.httpService.delete(this.url + `/zones/${zone_identifier}/client_certificates/${client_certificate_identifier}`)
    return true;
  }

  getZonesByZoneIdentifierClientCertificatesIdentifier = async ({ client_certificate_identifier, zone_identifier }: IGetZonesByZoneIdentifierClientCertificatesIdentifierParams): Promise<IGetZonesByZoneIdentifierClientCertificatesIdentifierResponse> => {
    this.httpService.get(this.url + `/zones/${zone_identifier}/client_certificates/${client_certificate_identifier}`)
    return true;
  }

  patchZonesByZoneIdentifierClientCertificatesIdentifier = async ({ client_certificate_identifier, zone_identifier }: IPatchZonesByZoneIdentifierClientCertificatesIdentifierParams): Promise<IPatchZonesByZoneIdentifierClientCertificatesIdentifierResponse> => {
    this.httpService.get(this.url + `/zones/${zone_identifier}/client_certificates/${client_certificate_identifier}`)
    return true;
  }

  getZonesByZoneIdApiGatewayOperations = async ({   zone_id, direction, endpoint, feature, host, method, order, page, per_page }: IGetZonesByZoneIdApiGatewayOperationsParams): Promise<IGetZonesByZoneIdApiGatewayOperationsResponse> => {
    this.httpService.get(this.url + `/zones/${zone_id}/api_gateway/operations`)
    return true;
  }

  postZonesByZoneIdApiGatewayOperations = async ({   zone_id,  endpoint,  host, method   }: IPostZonesByZoneIdApiGatewayOperationsParams): Promise<IPostZonesByZoneIdApiGatewayOperationsResponse> => {
    this.httpService.post(this.url + `/zones/${zone_id}/api_gateway/operations`)
    return true;
  }

  deleteZonesByZoneIdApiGatewayOperationsOperationsId = async ({   zone_id,  operation_id   }: IDeleteZonesByZoneIdApiGatewayOperationsOperationsIdParams): Promise<IDeleteZonesByZoneIdApiGatewayOperationsOperationsIdResponse> => {
    this.httpService.delete(this.url + `/zones/${zone_id}/api_gateway/operations/${operation_id}`)
    return true;
  }

  getZonesByZoneIdApiGatewayOperationsOperationsId = async ({   zone_id,  operation_id, feature  }: IGetZonesByZoneIdApiGatewayOperationsOperationsIdParams): Promise<IGetZonesByZoneIdApiGatewayOperationsOperationsIdResponse> => {
    this.httpService.get(this.url + `/zones/${zone_id}/api_gateway/operations/${operation_id}`)
    return true;
  }

  getZonesByZoneIdApiGatewaySchemas = async ({   zone_id,  feature, host  }: IGetZonesByZoneIdApiGatewaySchemasParams): Promise<IGetZonesByZoneIdApiGatewaySchemasResponse> => {
    this.httpService.get(this.url + `/zones/${zone_id}/api_gateway/schemas`)
    return true;
  }

  patchZonesByZoneIdApiGatewayOperationsSchemaValidation = async ({   zone_id  }: IPatchZonesByZoneIdApiGatewayOperationsSchemaValidationParams): Promise<IPatchZonesByZoneIdApiGatewayOperationsSchemaValidationResponse> => {
    this.httpService.patch(this.url + `/zones/${zone_id}/api_gateway/operations/schema_validation`)
    return true;
  }

  getZonesByZoneIdApiGatewayOperationsOperationIdSchemaValidation = async ({   zone_id, operation_id  }: IGetZonesByZoneIdApiGatewayOperationsOperationIdSchemaValidationParams): Promise<IGetZonesByZoneIdApiGatewayOperationsOperationIdSchemaValidationResponse> => {
    this.httpService.get(this.url + `/zones/${zone_id}/api_gateway/operations/${operation_id}/schema_validation`)
    return true;
  }

  putZonesByZoneIdApiGatewayOperationsOperationIdSchemaValidation = async ({   zone_id, operation_id  }: IPutZonesByZoneIdApiGatewayOperationsOperationIdSchemaValidationParams): Promise<IPutZonesByZoneIdApiGatewayOperationsOperationIdSchemaValidationResponse> => {
    this.httpService.put(this.url + `/zones/${zone_id}/api_gateway/operations/${operation_id}/schema_validation`)
    return true;
  }

  getZonesByZoneIdApiGatewaySettingsSchemaValidation = async ({   zone_id }: IGetZonesByZoneIdApiGatewaySettingsSchemaValidationParams): Promise<IGetZonesByZoneIdApiGatewaySettingsSchemaValidationResponse> => {
    this.httpService.get(this.url + `/zones/${zone_id}/api_gateway/settings/schema_validation`)
    return true;
  }

  patchZonesByZoneIdApiGatewaySettingsSchemaValidation = async ({   zone_id, validation_default_mitigation_action , validation_override_mitigation_action }: IPatchZonesByZoneIdApiGatewaySettingsSchemaValidationParams): Promise<IPatchZonesByZoneIdApiGatewaySettingsSchemaValidationResponse> => {
    this.httpService.patch(this.url + `/zones/${zone_id}/api_gateway/settings/schema_validation`)
    return true;
  }

  putZonesByZoneIdApiGatewaySettingsSchemaValidation = async ({   zone_id, validation_default_mitigation_action , validation_override_mitigation_action }: IPutZonesByZoneIdApiGatewaySettingsSchemaValidationParams): Promise<IPutZonesByZoneIdApiGatewaySettingsSchemaValidationResponse> => {
    this.httpService.put(this.url + `/zones/${zone_id}/api_gateway/settings/schema_validation`)
    return true;
  }

  getZonesByZoneIdApiGatewayUserSchemas = async ({   zone_id, omit_source, page, per_page, validation_enabled }: IGetZonesByZoneIdApiGatewayUserSchemasParams): Promise<IGetZonesByZoneIdApiGatewayUserSchemasResponse> => {
    this.httpService.get(this.url + `/zones/${zone_id}/api_gateway/user_schemas`)
    return true;
  }

  postZonesByZoneIdApiGatewayUserSchemas = async ({   zone_id, file, kind, name, validation_enabled }: IPostZonesByZoneIdApiGatewayUserSchemasParams): Promise<IPostZonesByZoneIdApiGatewayUserSchemasResponse> => {
    this.httpService.post(this.url + `/zones/${zone_id}/api_gateway/user_schemas`)
    return true;
  }

  deleteZonesByZoneIdApiGatewayUserSchemasSchemaId = async ({   zone_id, schema_id }: IDeleteZonesByZoneIdApiGatewayUserSchemasSchemaIdParams): Promise<IDeleteZonesByZoneIdApiGatewayUserSchemasSchemaIdResponse> => {
    this.httpService.delete(this.url + `/zones/${zone_id}/api_gateway/user_schemas/${schema_id}`)
    return true;
  }

  getZonesByZoneIdApiGatewayUserSchemasSchemaId = async ({   zone_id, schema_id , omit_source}: IGetZonesByZoneIdApiGatewayUserSchemasSchemaIdParams): Promise<IGetZonesByZoneIdApiGatewayUserSchemasSchemaIdResponse> => {
    this.httpService.get(this.url + `/zones/${zone_id}/api_gateway/user_schemas/${schema_id}`)
    return true;
  }

  patchZonesByZoneIdApiGatewayUserSchemasSchemaId = async ({   zone_id, schema_id , validation_enabled}: IPatchZonesByZoneIdApiGatewayUserSchemasSchemaIdParams): Promise<IPatchZonesByZoneIdApiGatewayUserSchemasSchemaIdResponse> => {
    this.httpService.patch(this.url + `/zones/${zone_id}/api_gateway/user_schemas/${schema_id}`)
    return true;
  }

  getZonesByZoneIdApiGatewayUserSchemasSchemaIdOperations = async ({   zone_id, schema_id ,   endpoint, feature, host, method, operation_status, page, per_page  }: IGetZonesByZoneIdApiGatewayUserSchemasSchemaIdOperationsParams): Promise<IGetZonesByZoneIdApiGatewayUserSchemasSchemaIdOperationsResponse> => {
    this.httpService.get(this.url + `/zones/${zone_id}/api_gateway/user_schemas/${schema_id}/operations`)
    return true;
  }

  //API Shields Settings Start











}