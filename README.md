# docs-gen
node script that shows all the comments inside a source file as a list of cards. Generates a *.html file.

Let's say you have a index.js file and you want to extract all the comments inside them and show them in a visually appealing way.
You can use this module like that:

```
node DIRECTORY/TO/MODULE/index.js sourceFile fileName encoding
```
Where the parameters mean the following:

__sourceFile__ = The path to the file you want to extract comments from.

__fileName__ = The name the html file that's being generated should have.

__encoding__ = If your file has a fancy url encoding, pass it here.

# Dependencies:

[extract-comments](https://www.npmjs.com/package/extract-comments)

[mkdirp](https://www.npmjs.com/package/mkdirp)

# License:
[MIT](https://opensource.org/licenses/MIT)
