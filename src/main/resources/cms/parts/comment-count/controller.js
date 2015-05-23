var util = require('utilities');

exports.get = handleGet;

function handleGet(req) {
    var me = this;
    me.site = execute('portal.getSite');
    me.moduleConfig = me.site.moduleConfigs[module.name] || {};
    me.shortname = me.moduleConfig.shortname;

    function renderView() {
        return {
            body: execute('thymeleaf.render', {
                view: resolve('comment-count.html'),
                model: createModel()
            }),
            contentType: 'text/html',
            pageContributions: {
                bodyEnd: util.dqScript(me.shortname)
            }
        };
    }

    function createModel() {

        // Ensure that the part can be selected in live-edit.
        var style = null;
        if (req.mode == 'edit') {
            style = 'min-height: 100px; text-align:center; background-color:#ffffff; border: 1px solid #333333; border-radius:5px;'
        }

        var model = {
            style: style,
        }

        return model;
    }

    return renderView();
}