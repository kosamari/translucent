Translucent
===========

Turn any image into PNG file with a translucent pixel so that Twitter won't use JPEG for your image.


Download [OSX app](https://github.com/kosamari/translucent/raw/master/translucent.zip)

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