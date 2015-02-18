var browserSync = require('browser-sync');

var port = 3000;

browserSync({
  server: {
    baseDir: 'client/'
  },
  // proxy: 'localhost:' + port,
  files: 'client/**',
  open: false,
  notify: false
});
