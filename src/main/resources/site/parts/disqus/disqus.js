var util = require('utilities');
var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');

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
        var style  = null;
        if (req.mode == 'edit' || req.mode == 'preview') {
            style = 'min-height: 100px; background-color:#BBBBBB; text-align: center; padding: 10px;'
        }

        disqus.shortname = siteConfig.shortname? siteConfig.shortname : 'configure';
        disqus.identifier = content._id;
        disqus.title = content.displayName;
        disqus.url = portal.pageUrl({
            path: content._path,
            type: 'absolute'
        });

        // Ensure that the part can be selected in live-edit.
        if (req.mode == 'edit') {
            style = 'min-height: 100px;'
        }

        var model = {
            disqus: disqus,
            style: style,
            mode: req.mode
        }

        return model;
    }

    return renderView();
}