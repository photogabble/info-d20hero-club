const Metalsmith = require('metalsmith');
const permalinks = require('metalsmith-permalinks');

var app = Metalsmith(__dirname)
    .metadata({
        sitetitle: "d20 Heroes",
        siteurl: "https://info.d20hero.club/",
    })
    .source('./src')
    .destination('./public')
    .use(require('metalsmith-layouts')())
    .use(require('metalsmith-sense-sass')())
    .use(permalinks({             // change URLs to permalink URLs
        relative: false           // put css only in /css
    }));

if (module.parent) {
    module.exports = app
} else {
    app.build(function (err) { if (err) { console.error(err); process.exit(1) } })
}