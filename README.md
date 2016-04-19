Translucent
===========

Turn any image into PNG file with a translucent pixel so that Twitter won't use JPEG for your image.

Try [web version](http://kosamari.github.io/translucent), download [OSX app](https://github.com/kosamari/translucent/raw/master/translucent.zip) or build it for your platform from source.

## Why?
Twitter use JPEG to any opaque image uploaded regardless of original file format (which drives me nuts 😖), exception is PNG with transparency. This app will turn a single pixel on top left corner to 99.6% opacity (hardly any different from original) and export as PNG.

Please see below for sample result, you can see opaque image upload gets pretty rough JPEG artifacts. (original [tweet is here](https://twitter.com/kosamari/status/722299200239706113))

![sample](https://cloud.githubusercontent.com/assets/4581495/14628905/13e7124c-05fa-11e6-9038-b53a5392a763.png)


## Dependency
In order to run this from source, you'll need electron installed.
`npm install -g electron`

## To start
```
cd [repo's directory]
npm install
electron .
```

## To build .app file
```
cd [repo's directory]
electron-packager . translucent --platform=darwin --arch=x64 --version=0.36.1 --icon=translucent.icns
```

## Credit
I learned about Twitter's transparent image trick from [@RavenWorks](https://twitter.com/ravenworks)'s [twitimagefix](http://ravenworks.ca/twitimagefix/).
Thank you [@matthewmcvickar](https://twitter.com/matthewmcvickar) for linking me to the project !
