# Disqus module for Enonic XP

Add Disqus comments to pages on a website. This does not yet support Single Sign On (SSO). It also does not yet support comment count.

## Building

Gradle is required to build the project. From the base of the project, enter ./gradlew in the terminal or on Windows, double-click the
gradlew.bat file. Or type 'gradle clean build' from the command line.

Put the jar file from build/lib into the XP_HOME/deploy directory.

## Documentation

* Create a Disqus profile and note the shortname.  https://disqus.com/admin/create/
* Add this module to your XP site.
* Add the shortname to the module configuration.
* Add the disqus component part to a region in your template or page content where you want the Disqus comments to appear.

## Testing

Unfortunately, Disqus can only be tested on a live server. A separate shortname can be created for a test environment.
