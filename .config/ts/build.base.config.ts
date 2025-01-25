import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  name: 'Base config for all build processes',
  failOnWarn: false,
  declaration: true,
});
