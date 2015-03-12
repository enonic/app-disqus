var stk = require('stk/stk');

exports.get = function(req) {

    var content = execute('portal.getContent');
    var component = execute('portal.getComponent');
    var config = component.config;
    var site = execute('portal.getSite');
    var moduleConfig = site.moduleConfigs[module.name];
    var disqus = {};

    disqus.shortname = moduleConfig.shortname? moduleConfig.shortname : 'configure';
    disqus.identifier = content._id;
    disqus.title = content.displayName;
    disqus.url = execute('portal.pageUrl', {
        path: content._path
    });

    var params = {
        disqus: disqus
    }

    var view = resolve('categories.html');
    return stk.view.render(view, params);
};