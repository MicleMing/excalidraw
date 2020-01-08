const gulp = require("gulp");
const electron = require("electron-connect").server.create();
const packager = require("electron-packager");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");

gulp.task("build_web", function() {
  return new Promise(resolve => {
    webpack(webpackConfig({}), (err, stats) => {
      if (err) console.log("Webpack", err);
      console.log(stats.toString());
      resolve();
    });
  });
});

gulp.task("electron", function() {
  // Start browser process
  electron.start();

  // Restart browser process
  gulp.watch("./src/desktop/main.js", electron.restart);

  // Reload renderer process
  gulp.watch(["index.html"], electron.reload);
});

gulp.task("packapp", function() {
  const config = {
    dir: ".",
    platform: "darwin"
  };
  return packager(config).then(path => {
    console.log(path);
  });
});

gulp.task("build", gulp.parallel("electron", "build_web"));
