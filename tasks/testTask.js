var fs = require('fs');
var path = require('path');

//	var wrk = process.cwd();	//	Find the working directory

var src = 'www.x1.ltd.uk/src/pages/';	//	The directory to check files in
var dist = 'www.x1.ltd.uk/test/';	//	The directory to check files in

init();


//	FUNCTIONS	//	FUNCTIONS	//



function init () {

	getFileNames();

}





function getFileNames () {

	fs.readdir( src, useFolderNames );

}





function useFolderNames ( err, files ) {

	files.forEach(function( fileName, index, array ){

		if ( fileName.indexOf( '.' ) < 0 ) {
			dealWithFolder( fileName );
		}

	});

}





function dealWithFolder ( folderName ) {

	var _src = src + folderName;
	var _dist = dist + folderName;

	if ( !fs.existsSync( dist ) ) {
		fs.mkdirSync( dist );
	}

	if ( !fs.existsSync( _dist ) ) {
		fs.mkdirSync( _dist );
	}

	fs.readdir( _src, useFileNames( folderName ) );

}





function useFileNames ( folderName ) {
	return function ( err, files ) {
		files.forEach(function( fileName, index, array ){

			if ( fileName.indexOf( '.' ) > -1 ) {
				dealWithFile( fileName );
			}

		});
	}

	function dealWithFile ( fileName ) {
		var _src = path.resolve( src,  folderName, fileName );
		var _dist = path.resolve( dist, folderName, fileName );

		fs.readFile( _src, { encoding: 'utf8' }, writeFile(folderName, fileName) );
	}
}

function writeFile ( folderName, fileName ) {
	var _src = path.resolve( src, folderName, fileName );
	var _dist = path.resolve( dist, folderName, fileName );

	return function ( err, data ) {
		fs.writeFile( _dist, buildHTML( data ), function (err) {
			if (err) throw err;
			console.log( 'Saved: ' + _dist );
		});
	}
}

function buildHTML ( data ) {
	var lines = data.split('\n');
	var newHTML = '';

	lines.forEach(function( _line, index, array ){
		var line = _line.replace( /(^\s+)|(\s+$)/g, '' );
		var lineHead;

		if ( !!line ) {
			lineHead = line.slice( 0, 1 );

			switch ( lineHead ) {
				case '#':
					if ( line.slice( 1, 2 ) === '#' ) {
						newHTML += '<h2>' + line.substr(2) + '</h2>\n';
					} else {
						newHTML += '<h1>' + line.substr(1) + '</h1>\n';
					}

					break;

				case '*':
					newHTML += '<img src="' + line.substr(1) + '">\n';
					break;

				default:
					newHTML += '<p>' + line + '</p>\n';
					break;
			}
		}

	});

	return newHTML;
}



