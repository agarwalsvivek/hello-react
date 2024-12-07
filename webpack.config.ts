import path from "path";
import { Configuration } from "webpack";
import CopyWebpackPlugin from "copy-webpack-plugin";
import { ServerConfiguration } from "webpack-dev-server"; // Import devServer type

//const config: Configuration & { devServer?: ServerConfiguration } = {
const config: Configuration = {
  mode:
    (process.env.NODE_ENV as "production" | "development" | undefined) ??
    "development",
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "public" }],
    }),
  ],
  // devServer: {
  //   contentBase: path.join(__dirname, "dist"), // Directory to serve static files from
  //   compress: true, // Enable gzip compression
  //   port: 300, // Port to run the server on
  //   hot: true, // Enable hot module replacement (HMR)
  //   open: true, // Automatically open the browser
  //   historyApiFallback: true, // For single-page apps, fallback to index.html for 404s
  //   proxy: {
  //     "/api": "http://localhost:5000", // Example of proxying API requests to another server
  //   },
  //   static: {
  //     directory: path.join(__dirname, "public"), // Optionally serve static files from another directory
  //   },
  // },
};

export default config;
