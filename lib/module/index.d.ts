/**
 * Retrieve the most up to date view of discovered operations, rendered as OpenAPI schemas.
 */
export interface IGetZonesByZoneIdApiGatewayDiscoveryParams {
  /**
   * Zone ID
   * @type {string}
   * @readonly
   * @description <= 32 characters
   * @example 023e105f4ecef8ad9ca31a8372d0c353
   */
  zone_id: string;
}

/**
 * Retrieve discovered operations on a zone, rendered as OpenAPI schemas response.
 */
export interface IGetZonesByZoneIdApiGatewayDiscoveryResponse {
  data: {
    /**
     * @type {object}
     * @returns Any of: object
     */
    result: {
      /**
       * @type {Array<object>}
       */
      schemas: Array<object>,
      /**
       * @type {string<date-time>}
       * @example 2019-01-01T05:20:00.12345Z
       */
      timestamp: string,
    },
    /**
     * @type {Array<object>}
     * @example []
     */
    errors: Array<{
      /**
       * @type {number}
       * @description <= 1000
       * @example 1000
       */
      code: number,
      /**
       * @type {string}
       */
      message: string,
    }>,
    /**
     * @type {Array<object>}
     * @example []
     */
    messages: Array<{
      /**
       * @type {number}
       * @description <= 1000
       * @example 1000
       */
      code: number,
      /**
       * @type {string}
       */
      message: string,
    }>,
    /**
     * @type {boolean}
     * @description Whether the API call was successful.
     * @example true
     */
    success: boolean,
  }
}

/**
 * Retrieve the most up to date view of discovered operations.
 * @param {IGetZonesByZoneIdApiGatewayDiscoveryParams} params
 */
export interface IGetZonesByZoneIdApiGatewayDiscoveryOperationsParams {
  /**
   * Zone ID
   * @type {string}
   * @readonly
   * @description <= 32 characters
   * @example 023e105f4ecef8ad9ca31a8372d0c353
   */
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
  endpoint: string,
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

export interface IGetZonesByZoneIdApiGatewayConfigurationParams {
  zone_id: string,
  proporties?: Array<string>,
}

export interface IGetZonesByZoneIdApiGatewayConfigurationResponse {
  data: {
    result: {
      auth_id_characteristics: Array<object>,
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

export interface IPutZonesByZoneIdApiGatewayConfigurationParams {
  zone_id: string,
  auth_id_characteristics?: Array<{
    name: string,
    type: string,
  }>
}

export interface IPutZonesByZoneIdApiGatewayConfigurationResponse {
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

export interface IGetAccountsByAccountIdentifierIntelAsnByAsnParams {
  account_identifier: string,
  asn: {
    asn: number,
    country: string,
    description: string,
    domain_count: number,
    top_domains: Array<string>,
    type: string,

  }
}

export interface IGetAccountsByAccountIdentifierIntelAsnByAsnResponse {
  data: {
    result: any,
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

export interface IGetAccountsByAccountIdentifierIntelAsnByAsnSubnetsParams {
  account_identifier: string,
  asn: number,
}

export interface IGetAccountsByAccountIdentifierIntelAsnByAsnSubnetsResponse {
  data: {
    asn: number,
    count: number,
    ip_count_total: number,
    page: number,
    per_page: number,
    subnets: Array<string>,
  }
}

export interface IGetAccountsByIdentifierAccessBookmarksParams {
  identifier: string,
}

export interface IGetAccountsByIdentifierAccessBookmarksResponse {
  data: {
    result: any,
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
export interface IDeleteAccountsByIdentifierAccessBookmarksUuidParams {
  identifier: string,
  uuid: string,
}

export interface IDeleteAccountsByIdentifierAccessBookmarksUuidResponse {
  data: {
    result: {
      id: string,
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

export interface IGetAccountsByIdentifierAccessBookmarksUuidParams {
  identifier: string,
  uuid: string,
}

export interface IGetAccountsByIdentifierAccessBookmarksUuidResponse {
  data: {
    result: {
      app_launcher_visible: boolean,
      created_at: string,
      domain: string,
      id: any,
      logo_url: string,
      name: string,
      updated_at: string,
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

export interface IPostAccountsByIdentifierAccessBookmarksUuidParams {
  identifier: string,
  uuid: string,
}

export interface IPostAccountsByIdentifierAccessBookmarksUuidResponse {
  data: {
    result: {
      app_launcher_visible: boolean,
      created_at: string,
      domain: string,
      id: string,
      logo_url: string,
      name: string,
      updated_at: string,
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

export interface IPutAccountsByIdentifierAccessBookmarksUuidParams {
  identifier: string,
  uuid: string,
}

export interface IPutAccountsByIdentifierAccessBookmarksUuidResponse {
  data: {
    result: {
      app_launcher_visible: boolean,
      created_at: string,
      domain: string,
      id: any,
      logo_url: string,
      name: string,
      updated_at: string,
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

export interface ISelfHostedApplication {
  allowed_idps: Array<string>,
  app_launcher_visible: boolean,
  auto_redirect_to_identity: boolean,
  cors_headers: {
    allow_all_headers: boolean,
    allow_all_methods: boolean,
    allow_all_origins: boolean,
    allow_credentials: boolean,
    allowed_headers: Array,
    allowed_methods: Array<string>,
    allowed_origins: Array,
    max_age: number,
  },
  custom_deny_message: string,
  custom_deny_url: string,
  custom_non_identity_deny_url: string,
  custom_pages: Array<string>,
  domain: string,
  enable_binding_cookie: boolean,
  http_only_cookie_attribute: boolean,
  logo_url: string,
  name: string,
  path_cookie_attribute: boolean,
  same_site_cookie_attribute: string,
  self_hosted_domains: Array<string>,
  service_auth_401_redirect: boolean,
  session_duration: string,
  skip_interstitial: boolean,
  tags: Array<string>,
  type: string,
}
export interface ISaasApplication {
  allowed_idps: Array<string>,
  app_launcher_visible: boolean,
  auto_redirect_to_identity: boolean,
  custom_pages: Array<string>,
  logo_url: string,
  name: string,
  saas_app: {
    consumer_service_url: string,
    custom_attributes: {
      name: string,
      name_format: string,
      source: {
        name: string,
      }
    },
    default_relay_state: string,
    idp_entity_id: string,
    name_id_format: string,
    public_key: string,
    sp_entity_id: string,
    sso_endpoint: string,
  },
  tags: Array<string>,
  type: string,
}
export interface IBrowserSshApplication {
  allowed_idps: Array<string>,
  app_launcher_visible: boolean,
  auto_redirect_to_identity: boolean,
  cors_headers: {
    allow_all_headers: boolean,
    allow_all_methods: boolean,
    allow_all_origins: boolean,
    allow_credentials: boolean,
    allowed_headers: Array,
    allowed_methods: Array<string>,
    allowed_origins: Array,
    max_age: number,
  },
  custom_deny_message: string,
  custom_deny_url: string,
  custom_non_identity_deny_url: string,
  custom_pages: Array<string>,
  domain: string,
  enable_binding_cookie: boolean,
  http_only_cookie_attribute: boolean,
  logo_url: string,
  name: string,
  path_cookie_attribute: boolean,
  same_site_cookie_attribute: string,
  self_hosted_domains: Array<string>,
  service_auth_401_redirect: boolean,
  session_duration: string,
  skip_interstitial: boolean,
  tags: Array<string>,
  type: string,
}
export interface IBrowserVncApplication {
  allowed_idps: Array<string>,
  app_launcher_visible: boolean,
  auto_redirect_to_identity: boolean,
  cors_headers: {
    allow_all_headers: boolean,
    allow_all_methods: boolean,
    allow_all_origins: boolean,
    allow_credentials: boolean,
    allowed_headers: Array,
    allowed_methods: Array<string>,
    allowed_origins: Array,
    max_age: number,
  },
  custom_deny_message: string,
  custom_deny_url: string,
  custom_non_identity_deny_url: string,
  custom_pages: Array<string>,
  domain: string,
  enable_binding_cookie: boolean,
  http_only_cookie_attribute: boolean,
  logo_url: string,
  name: string,
  path_cookie_attribute: boolean,
  same_site_cookie_attribute: string,
  self_hosted_domains: Array<string>,
  service_auth_401_redirect: boolean,
  session_duration: string,
  skip_interstitial: boolean,
  tags: Array<string>,
  type: string,
}
export interface IAppLauncherApplication {
  allowed_idps: Array<string>,
  auto_redirect_to_identity: boolean,
  session_duration: string,
  type: string,
}
export interface IDeviceEnrollmentPermissionsApplication {
  allowed_idps: Array<string>,
  auto_redirect_to_identity: boolean,
  session_duration: string,
  type: string,
}
export interface IBrowserIsolationPermissionsApplication {
  allowed_idps: Array<string>,
  auto_redirect_to_identity: boolean,
  session_duration: string,
  type: string,
}
export interface IBookmarkApplication {
  app_launcher_visible: boolean,
  domain: string,
  logo_url: string,
  name: string,
  tags: Array<string>,
  ty
}

export interface IGetAccountsByIdentifierAccessAppsParams {
  identifier: string,
  app_type?: ISelfHostedApplication | ISaasApplication | IBrowserSshApplication | IBrowserVncApplication | IAppLauncherApplication | IDeviceEnrollmentPermissionsApplication | IBrowserIsolationPermissionsApplication | IBookmarkApplication,
}

export interface IGetAccountsByIdentifierAccessAppsResponse {
  data: {
    result: any,
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

export interface IPostAccountsByIdentifierAccessAppsParams {
  identifier: string,
  allowed_ipds: Array<string>,
  app_launcher_visible: boolean,
  auto_redirect_to_identity: boolean,
  cors_headers: {
    allow_all_headers: boolean,
    allow_all_methods: boolean,
    allow_all_origins: boolean,
    allow_credentials: boolean,
    allowed_headers: Array,
    allowed_methods: Array<string>,
    allowed_origins: Array,
    max_age: number,
  },
  custom_deny_message: string,
  custom_deny_url: string,
  custom_non_identity_deny_url: string
  custom_pages: Array<string>,
  domain: string,
  enable_binding_cookie: boolean,
  http_only_cookie_attribute: boolean,
  logo_url: string,
  name: string,
  path_cookie_attribute: boolean,
  same_site_cookie_attribute: string,
  self_hosted_domains: Array<string>,
  service_auth_401_redirect: boolean,
  session_duration: string,
  skip_interstitial: boolean,
  tags: Array<string>,
  type: string,
}

export interface IPostAccountsByIdentifierAccessAppsResponse {
  data: {
    result: {
      aud: string,
      created_at: string,
      id: string,
      updated_at: string,
      allowed_ipds: Array<string>,
      app_launcher_visible: boolean,
      auto_redirect_to_identity: boolean,
      cors_headers: {
        allow_all_headers: boolean,
        allow_all_methods: boolean,
        allow_all_origins: boolean,
        allow_credentials: boolean,
        allowed_headers: Array,
        allowed_methods: Array<string>,
        allowed_origins: Array,
        max_age: number,
      },
      custom_deny_message: string,
      custom_deny_url: string,
      custom_non_identity_deny_url: string
      custom_pages: Array<string>,
      domain: string,
      enable_binding_cookie: boolean,
      http_only_cookie_attribute: boolean,
      logo_url: string,
      name: string,
      path_cookie_attribute: boolean,
      same_site_cookie_attribute: string,
      self_hosted_domains: Array<string>,
      service_auth_401_redirect: boolean,
      session_duration: string,
      skip_interstitial: boolean,
      tags: Array<string>,
      type: string,
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

export interface IGetAccountsByIdentifierAccessAppsByAppIdParams {
  app_id: string,
  identifier: string,
}

export interface IGetAccountsByIdentifierAccessAppsByAppIdResponse {
  data: {
    result: {
      aud: string,
      created_at: string,
      id: string,
      updated_at: string,
      allowed_ipds: Array<string>,
      app_launcher_visible: boolean,
      auto_redirect_to_identity: boolean,
      cors_headers: {
        allow_all_headers: boolean,
        allow_all_methods: boolean,
        allow_all_origins: boolean,
        allow_credentials: boolean,
        allowed_headers: Array,
        allowed_methods: Array<string>,
        allowed_origins: Array,
        max_age: number,
      },
      custom_deny_message: string,
      custom_deny_url: string,
      custom_non_identity_deny_url: string
      custom_pages: Array<string>,
      domain: string,
      enable_binding_cookie: boolean,
      http_only_cookie_attribute: boolean,
      logo_url: string,
      name: string,
      path_cookie_attribute: boolean,
      same_site_cookie_attribute: string,
      self_hosted_domains: Array<string>,
      service_auth_401_redirect: boolean,
      session_duration: string,
      skip_interstitial: boolean,
      tags: Array<string>,
      type: string,
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

export interface IPutAccountsByIdentifierAccessAppsByAppIdParams {
  app_id: string,
  identifier: string,
}

export interface IPutAccountsByIdentifierAccessAppsByAppIdResponse {
  data: {
    result: {
      aud: string,
      created_at: string,
      id: string,
      updated_at: string,
      allowed_ipds: Array<string>,
      app_launcher_visible: boolean,
      auto_redirect_to_identity: boolean,
      cors_headers: {
        allow_all_headers: boolean,
        allow_all_methods: boolean,
        allow_all_origins: boolean,
        allow_credentials: boolean,
        allowed_headers: Array,
        allowed_methods: Array<string>,
        allowed_origins: Array,
        max_age: number,
      },
      custom_deny_message: string,
      custom_deny_url: string,
      custom_non_identity_deny_url: string
      custom_pages: Array<string>,
      domain: string,
      enable_binding_cookie: boolean,
      http_only_cookie_attribute: boolean,
      logo_url: string,
      name: string,
      path_cookie_attribute: boolean,
      same_site_cookie_attribute: string,
      self_hosted_domains: Array<string>,
      service_auth_401_redirect: boolean,
      session_duration: string,
      skip_interstitial: boolean,
      tags: Array<string>,
      type: string,
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

export interface IPostAccountsByIdentifierAccessAppsByAppIdRevokeTokensParams {
  app_id: string,
  identifier: string,
}

export interface IPostAccountsByIdentifierAccessAppsByAppIdRevokeTokensResolve {
  data: {
    result: object,
    success: boolean,
  }
}

export interface IGetAccountsByIdentifierAccessAppsByAppIdUserPolicyChecksParams {
  app_id: string,
  identifier: string,
}

export interface IGetAccountsByIdentifierAccessAppsByAppIdUserPolicyChecksResolve {
  data: {
    result: {
      app_state: object,
      user_identity: object,
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

export interface IGetAccountsByIdentifierAccessLogsAccessRequestParams {
  identifier: string,
}

export interface IGetAccountsByIdentifierAccessLogsAccessRequestResponse {
  data: {
    result: any,
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

export interface IGetAccountsByIdentifierAccessCustomPagesParams {
  identifier: string,
}

export interface IGetAccountsByIdentifierAccessCustomPagesResponse {
  data: {
    result: any,
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

export interface IPostAccountsByIdentifierAccessCustomPagesParams {
  identifier: string,
  app_count?: number,
  custom_html: string,
  name: string,
  type: string,
}

export interface IPostAccountsByIdentifierAccessCustomPagesResponse {
  data: {
    result: {
      app_count: number,
      created_at: string,
      type: string,
      uid: string,
      updated_at: string,
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

export interface IDeleteAccountsByIdentifierAccessCustomPagesByUuidParams {
  identifier: string,
  uuid: string,
}

export interface IDeleteAccountsByIdentifierAccessCustomPagesByUuidResponse {
  data: {
    errors: Array<{
      code: number,
      message: string,
    }>,
    messages: Array<{
      code: number,
      message: string,
    }>,
    result: {
      id: string,
    },
    success: boolean,
  }
}

export interface IGetAccountsByIdentifierAccessCustomPagesByUuidParams {
  identifier: string,
  uuid: string,
}

export interface IGetAccountsByIdentifierAccessCustomPagesByUuidResponse {
  data: {
    result: {
      app_count?: number,
      created_at?: string,
      custom_html: string,
      name: string,
      type: string,
      uid?: string,
      updated_at?: string,
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

export interface IPutAccountsByIdentifierAccessCustomPagesByUuidParams {
  identifier: string,
  uuid: string,
  app_count?: number,
  custom_html: string,
  name: string,
  type: string,
}

export interface IPutAccountsByIdentifierAccessCustomPagesByUuidResponse {
  data: {
    result: {
      app_count?: number,
      created_at?: string,
      custom_html: string,
      name: string,
      type: string,
      uid?: string,
      updated_at?: string,
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