exports.log = function (data) {
    log.info('STK log %s', JSON.stringify(data, null, 4));
};

exports.dqScript = function(shortname) {
    return '<script type="text/javascript">\n' +
    '/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */\n' +
    'var disqus_shortname = ' + shortname + '; // required: replace example with your forum shortname\n\n' +

    '/* * * DON\'T EDIT BELOW THIS LINE * * */' +
    '(function () {\n' +
    '  var s = document.createElement("script"); s.async = true;\n' +
    '  s.type = "text/javascript";\n' +
    '  s.src = "//" + disqus_shortname + ".disqus.com/count.js";\n' +
    '  (document.getElementsByTagName("HEAD")[0] || document.getElementsByTagName("BODY")[0]).appendChild(s);\n' +
    '}());\n' +
    '</script>';
};