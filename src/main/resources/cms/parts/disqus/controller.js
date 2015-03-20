var stk = require('stk/stk');

exports.get = function(req) {

    var content = execute('portal.getContent');
    var component = execute('portal.getComponent');
    var config = component.config;
    var site = execute('portal.getSite');
    var moduleConfig = site.moduleConfigs[module.name] || {};
    var disqus = {};
    var style  = null;

    disqus.shortname = moduleConfig.shortname? moduleConfig.shortname : 'configure';
    disqus.identifier = content._id;
    disqus.title = content.displayName;
    disqus.url = moduleConfig.siteUrl + execute('portal.pageUrl', {
        path: content._path
    });

    //stk.log(req);

    // Ensure that the part can be selected in live-edit.
    if (req.mode == 'edit') {
        style = 'min-height: 100px;'
    }

    var params = {
        disqus: disqus,
        style: style,
        mode: req.mode
    }

    var view = resolve('disqus.html');
    return stk.view.render(view, params);
};