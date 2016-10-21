# Disqus app for Enonic XP version 6

Add [Disqus comments](https://disqus.com) to pages on [Enonic XP](https://github.com/enonic/xp) websites. The comment count can also be
displayed.

## Building and deploying

There are two options. One is to simply download the app [JAR file](http://repo.enonic.com/public/com/enonic/app/disqus/1.2.0/disqus-1.2.0.jar) and move it to the XP installation's `$XP_HOME/deploy` folder.

Or you can build this app with gradle. In the terminal, from the root of the project, enter `./gradlew build`. On Windows, just enter `gradlew build`
in the command line from the project root. Next, move the JAR file from `build/libs` to your `$XP_HOME/deploy` directory. The Disqus comments
app will now be available to add to your websites through the Content Manager app.

If you are upgrading to a newer version of this app, make sure to remove the old version's JAR file from the `$XP_HOME/deploy` directory.

## How to use this app

* Visit the [Disqus website](https://disqus.com/admin/create/) and create a site profile. Note the shortname for your website.
* Next, add this app to your XP site. Edit the *site content* and add the Disqus app with the "Applications" dropdown selector.
* Add the shortname to the app configuration.

This app has two component parts: "Disqus comments" and "Disqus comment count".

The "Disqus comments" part should be added to a page template or an individual page where you want the comments to appear.

The "Disqus comment count" part should be added to any page where you want the comment count to appear, for example, on a list of articles.
The links that will show the comment count must end with \#disqus_thread, for example: `http://example.com/article-name#disqus_thread`

The link text will be replaced with the comment count, for example: "2 Comments". So it is a good idea to have two links, one with the
name of the article, and one that has \#disqus_thread and no text. For example: `<a href="example.com/my-article">My article</a>
<a href="example.com/my-article\#disqus_thread"></a>`

## Releases and Compatibility

| App version | Required XP version | Download |
| ----------- | ------------------- | -------- |
| 1.2.0 | 6.3.1 | [Download](http://repo.enonic.com/public/com/enonic/app/disqus/1.2.0/disqus-1.2.0.jar) |
| 1.3.0 | 6.7.0 | [Download](http://repo.enonic.com/public/com/enonic/app/disqus/1.3.0/disqus-1.2.0.jar) |

## Changelog

### Version 1.2.0

* Changed app name and group to conform with Enonic defaults.
* Removed sitename from configuration and changed it back to shortname to match Disqus documentation.
* Upgraded the Gradle wrapper to use version 2.9

### Version 1.1.0

* New embed script.
* Added sitename to configuration.
* Updated for XP 6.3.1 libs

### Version 1.0.1

* Changed the app name for new naming convention.

## Testing

Unfortunately, the Disqus app can only be tested on a live website. A separate shortname can be created for a test environment.

## Notes

* The Disqus comments will not be visible in the admin console or in preview mode.
* Single Sign On (SSO) is not yet supported but may be added in a future version.
