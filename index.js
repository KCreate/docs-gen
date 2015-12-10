// imports
var extract = require('extract-comments');
var fs		= require('fs');
var mkdirp = require('mkdirp');

/*
	Argument parsing

	sourceFile: the name of the file
	you want to generate documentation for.
	# default value: "index.js"

	fileName: name of the file that will be generated
	# default value: "docs.html"

	encoding: the encoding used in the file.
	# default value: "utf8"
*/
var sourceFile = process.argv[2] || "index.js";
var fileName = process.argv[3] || "docs.html";
var encoding = process.argv[4] || "utf8";

// get the file contents
fs.readFile(sourceFile, encoding, function(err,data){
	if (err) {
		return console.log(err);
	}
	generate_html(extract(data), data);
});

// generate the html
function generate_html(comments, file) {
	var temp = [];

	// generate html for each comment
	comments.forEach(function(comment, index) {
		// strip all the tabs
		var lineNumber = comment.loc.start.line;
		var lineText = '<span class="docs-linenumber">'+lineNumber + ": </span>"+comment.raw;

		// generate the html
		var html;
		html = [
			'<div class="docs-comment">',
			'<pre>'+lineText+'</pre>',
			'</div>'
		].join("");

		temp[index] = html;
	});

	// inject the style sheet and add a starting body tag
	temp.unshift(
		'<head>',
		'<link rel="stylesheet" href="./default.css">',
		'</head>',
		'<body>'
	);

	// close the body
	temp.push("</body>");

	return temp.join("");
}

function saveFile(html) {
	// create the dist directory if it doesn't already exist
	mkdirp('dist', function(err){
		return console.log("Unable to create dist directory.");
	});

	// write to the file
	fs.writeFile("dist/"+fileName, temp.join(""), function(err,data){
		if (err) {
			return console.log("Failed to write to file.");
		}
		return console.log("File saved at dist/"+fileName);
	});
}
