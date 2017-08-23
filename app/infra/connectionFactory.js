var mysql  = require('mysql');

function createDBConnection(){
    if(!process.env.NODE_ENV) {
        return mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'root',
                database:'casadocodigo_nodejs'
        });
    }

    if(process.env.NODE_ENV == 'test') {
        return mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'root',
                database:'casadocodigo_nodejs_test'
        });
    }

    if(process.env.NODE_ENV == 'production') {
	    return mysql.createConnection({
	            host: 'us-cdbr-iron-east-03.cleardb.net',
	            user:'b2d77da8735e14',
	            password:'e7e23a40',
	            database:'heroku_fa1317dbe7cfacc'
	    });
	}

}

module.exports = function(){
    return createDBConnection;
}