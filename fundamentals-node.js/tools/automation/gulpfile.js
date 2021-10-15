const gulp = require("gulp");
const server = require("gulp-server-livereload");

gulp.task("build", function (cb) {
  console.log("Construyendo el sitio");
  setTimeout(cb, 1200);
});

/* [12:41:28] Starting 'build'...
Construyendo el sitio
[12:41:29] Finished 'build' after 1.2 s */

//to start a server
gulp.task("serve", function (cb) {
  gulp.src("www").pipe(
    //stream to server
    server({
      livereload: true, //if there is a change in the code it actualize right away
      open: true,
    })
  );
});

//execute 2 tasks, one after the other
gulp.task("default", gulp.series("build", "serve"));
/* [13:24:16] Starting 'default'...
[13:24:16] Starting 'build'...
Construyendo el sitio
[13:24:17] Finished 'build' after 1.2 s
[13:24:17] Starting 'serve'...
[13:24:17] Webserver started at http://localhost:8000 */
