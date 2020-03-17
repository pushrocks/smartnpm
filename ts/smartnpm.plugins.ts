// node native modules
import * as path from 'path';

export { path };

// @pushrocks scope
import * as consolecolor from '@pushrocks/consolecolor';
import * as smartarchive from '@pushrocks/smartarchive';
import * as smartfile from '@pushrocks/smartfile';
import * as smartlog from '@pushrocks/smartlog';
smartlog.defaultLogger.enableConsole();
import * as smartrequest from '@pushrocks/smartrequest';

export { consolecolor, smartarchive, smartfile, smartlog, smartrequest };

// third party scope
import packageJson from 'package-json';

export { packageJson };
