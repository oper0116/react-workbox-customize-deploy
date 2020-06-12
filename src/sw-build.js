const workboxBuild = require('workbox-build');

const buildSW = () => {
  return workboxBuild
    .injectManifest({
      globDirectory: 'build',
      globPatterns: ["**/*.{js,css,html,png,jpg,svg}"],
      swDest: 'build/sw.js', // 빌드가 완료된 후 생성되는 파일 위치
      swSrc: 'src/sw-custom.js' // 커스텀할 service-worker.js 파일
    })
    .then(({ count, size, warnings }) => {
      // Optionally, log any warnings and details.
      // warnings.forEach(console.warn);
    });
};
buildSW();
