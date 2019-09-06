// @pushrocks scope
import * as consolecolor from '@pushrocks/consolecolor';
import * as smartlog from '@pushrocks/smartlog';
smartlog.defaultLogger.enableConsole();
import * as smartrequest from '@pushrocks/smartrequest';

export { consolecolor, smartlog, smartrequest };

// third party scope
import packageJson from 'package-json';

export { packageJson };
