module.exports = {
    staticFileGlobs: [
        '/index.html',
        '/foo.html',
        '/manifest.json',
        '/off.js',
        '/bower_components/webcomponentsjs/webcomponents-lite.min.js',
        '/gen/*'
    ],
    navigateFallback: '/index.html',
    navigateFallbackWhitelist: [/^(?!.*\.html$|\/data\/).*/],
    runtimeCaching: [
        {
            urlPattern: /\/data\/images\/.*/,
            handler: 'cacheFirst',
            options: {
                cache: {
                    maxEntries: 200000,
                    name: 'items-cache'
                }
            }
        },
        {
            urlPattern: /\/data\/.*json/,
            handler: 'fastest',
            options: {
                cache: {
                    maxEntries: 1000000,
                    name: 'data-cache'
                }
            }
        }
    ]
};