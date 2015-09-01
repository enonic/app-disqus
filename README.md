# Disqus app for Enonic XP version 6

Add Disqus comments to pages on a website.

## Building

Gradle is required to build the project. From the base of the project, enter ./gradlew in the terminal or on Windows, double-click the
gradlew.bat file. Or type 'gradle clean build' from the command line.

Put the jar file from the project's build/lib into the $XP_HOME/deploy directory.

## Documentation

This app has two component parts: "Disqus" should be added to a page where you want the comments to appear. The other part is called
"Disqus comment count" and this should be added to any page where you want the comment count to appear, for example, on a list of
articles.

To use either of these parts, the app must be added to the site, and the site configuration must be filled out.

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
