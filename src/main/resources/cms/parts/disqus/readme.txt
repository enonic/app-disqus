This code goes before the closing <body> to enable comment count
This feature can't be implemented until XP supports header/footer/body injection

<script type="text/javascript">
/*<![CDATA[*/
    /* * * CONFIGURATION VARIABLES * * */
    var disqus_shortname = /*[[${disqus.shortname}]]*/ '';

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function () {
        var s = document.createElement('script'); s.async = true;
        s.type = 'text/javascript';
        s.src = '//' + disqus_shortname + '.disqus.com/count.js';
        (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
    }());
/*]]>*/
</script>