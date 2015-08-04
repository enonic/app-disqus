var util = require('utilities');

var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');

exports.get = handleGet;

function handleGet(req) {
    var me = this;
    me.site = portal.getSite();
    me.siteConfig = me.site.siteConfigs[module.name] || {};
    me.shortname = me.siteConfig.shortname;

    function renderView() {
        return {
            body: thymeleaf.render(
                resolve('comment-count.html'),
                createModel()
            ),
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