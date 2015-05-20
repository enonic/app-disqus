var util = require('utilities');

exports.get = handleGet;

function handleGet(req) {
    var me = this;

    function renderView() {
        var view = resolve('disqus.html');
        var model = createModel();
        return {
            body: execute('thymeleaf.render', {
                view: view,
                model: model
            })
        };
    }

    function createModel() {
        var content = execute('portal.getContent');
        var component = execute('portal.getComponent');
        var config = component.config;
        var site = execute('portal.getSite');
        var moduleConfig = site.moduleConfigs[module.name] || {};
        var disqus = {};
        var style  = null;
        if (req.mode == 'edit' || req.mode == 'preview') {
            style = 'min-height: 100px; background-color:#BBBBBB; text-align: center; padding: 10px;'
        }

        disqus.shortname = moduleConfig.shortname? moduleConfig.shortname : 'configure';
        disqus.identifier = content._id;
        disqus.title = content.displayName;
        disqus.url = moduleConfig.siteUrl + execute('portal.pageUrl', {
            path: content._path
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