import * as plugins from './smartnpm.plugins';

export const packageDir = plugins.path.join(__dirname, '../');
export const nogitDir = plugins.path.join(packageDir, '.nogit/');
plugins.smartfile.fs.ensureDirSync(nogitDir);
