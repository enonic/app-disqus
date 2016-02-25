var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');
//var util = require('utilities');

exports.get = handleGet;

function handleGet(req) {
    var me = this;

    function renderView() {
        var view = resolve('disqus.html');
        var model = createModel();
        return {
            body: thymeleaf.render(view, model)
        };
    }

    function createModel() {
        var content = portal.getContent();
        var component = portal.getComponent();
        var config = component.config;
        var siteConfig = portal.getSiteConfig();
        var disqus = {};
        var style = null;
        var live = true;
        if (req.mode != 'live') {
            style = 'min-height: 100px; text-align:center; background-color:#ffffff; border: 1px solid #333333; border-radius:5px;';
            live = false;
        }

        disqus.shortname = siteConfig.shortname ? siteConfig.shortname : 'configure';
        disqus.identifier = content._id;
        disqus.title = content.displayName;
        disqus.url = portal.pageUrl({
            path: content._path,
            type: 'absolute'
        });

        var model = {
            disqus: disqus,
            style: style,
            live: live
        }

        return model;
    }

    return renderView();
}
