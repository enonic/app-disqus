var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');
//var util = require('utilities');

exports.get = handleGet;

function handleGet(req) {
    var me = this;
    me.siteConfig = portal.getSiteConfig();
    me.shortname = me.siteConfig.shortname;
    me.contribution = '<script id="dsq-count-scr" src="//' + me.shortname + '.disqus.com/count.js" async></script>';

    // Don't add the script when in edit mode
    if (req.mode == 'edit') {
      me.contribution = null;
    }

    function renderView() {
        return {
            body: thymeleaf.render(
                resolve('comment-count.html'),
                createModel()
            ),
            contentType: 'text/html',
            pageContributions: {
                bodyEnd: me.contribution
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
            edit: req.mode == 'edit' ? true : false
        }

        return model;
    }

    return renderView();
}
