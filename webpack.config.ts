
import buildWebpackConfig from "./config/build/buildWebpackConfig";
import { Configuration } from "webpack";
import { BuildEnv, BuildPaths } from "./config/build/types/config";
import path from "path";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public/index.html')
  }
  
  const mode = env.mode || 'development'
  const isDev = mode === 'development';
  const port = env.port || 3000
  
  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port
  });

  return config
};