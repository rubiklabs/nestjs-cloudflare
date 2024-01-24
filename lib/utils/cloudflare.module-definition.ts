import { ConfigurableModuleBuilder } from '@nestjs/common';
import { CloudflareModuleOptions } from './cloudflare.interface';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<CloudflareModuleOptions>().build();