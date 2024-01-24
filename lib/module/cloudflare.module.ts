import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';

import { ConfigurableModuleClass } from '../utils';
import { CloudflareService } from './cloudflare.service';

@Global()
@Module({
  imports: [HttpModule],
  providers: [CloudflareService],
  exports: [CloudflareService],
})
export class CloudflareModule extends ConfigurableModuleClass {}