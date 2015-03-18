var fs = require('fs');

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
		var _src = src + folderName + '/' + fileName;
		var _dist = dist + folderName + '/' + fileName;

		fs.readFile( _src, writeFile(folderName, fileName) );
	}
}

function writeFile ( folderName, fileName ) {
	var _src = src + folderName + '/' + fileName;
	var _dist = dist + folderName + '/' + fileName;

	return function ( err, data ) {
		fs.writeFile( _dist, data, function (err) {
			if (err) throw err;
			console.log( 'Saved: ' + _dist );
		});
	}
}




