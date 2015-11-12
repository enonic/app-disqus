# Disqus app for Enonic XP version 6

Add Disqus comments to pages on [Enonic XP](https://github.com/enonic/xp) websites. It runs on Enonic XP version 6.2.

## Building

Build the app with gradle. In the terminal, from the root of the project, enter `./gradlew build`. Then move the JAR file from build/libs to
your $XP_HOME/deploy directory. Next, edit the site content where you want to use this app and add the Disqus app to the supported
applications.

## Documentation

This app has two component parts: "Disqus" should be added to a page where you want the comments to appear. The other part is called
"Disqus comment count" and this should be added to any page where you want the comment count to appear, for example, on a list of
articles.

To use either of these parts, the app must be added to the site in the Content Manager app, and the app configuration must be filled out.

* Create a Disqus profile and note the shortname. https://disqus.com/admin/create/
* To add this app to your XP site, edit the site content and add the Disqus app with the "Applications" dropdown selector.
* Add the shortname to the app configuration.

### Disqus comments

* Add the disqus component part to a region in your template or page content where you want the Disqus comments to appear.

### Disqus comment count

* Add the "Disqus comment count" part to any page where you want the comment count to appear on a list of links.
* Each link that will show a comment count must end with \#disqus_thread, for example: http://example.com/article#disqus_thread

## Testing

Unfortunately, Disqus can only be tested on a live server. A separate shortname can be created for a test environment.

## Notes

Single Sign On (SSO) is not supported but may be added in a future version.
