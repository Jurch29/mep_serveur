let express = require('express');
let body_parser = require('body-parser');
let cors = require('cors');
let path = require('path');
let fs = require('fs');
import mariadb from './api_mariadb.js';
import mongodb from './api_mongodb.js';

export default class Server {

    readonly port : number;

    constructor(port : number){
        this.port = port;
    }

    start() {

        const app = express();

        let mariadb_instance = new mariadb();
        let mongodb_instance = new mongodb();

        app.use(body_parser.urlencoded({    //pour le parsing
            extended : true
        }));
        app.use(body_parser.json());
        
        app.use(express.static(path.join(__dirname, 'public'))); //pour le css

        var corsOptions = {
            origin: '*',
            optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
        }
        app.use(cors(corsOptions));

        app.post('/save_trip', async function(req : any, res : any) {
			let request = 'INSERT INTO Trips VALUES (NULL, "' + req.body.name + '", "' + req.body.starting + '", "' + req.body.ending + '", ' + req.body.price + ', "' + req.body.caption + '");';
			console.log(request);
			mariadb_instance.execquery(request)
			.then(function(result_1) {
				if(req.body.photos != 0) {
					let request = 'INSERT INTO Photos VALUES ';
					for(let i = 0; i < req.body.photos; i++) {
						request += '(NULL, "' + req.body['photo' + i] + '")';
						if(i != (req.body.photos - 1)) {
							request += ', ';
						}
					}
					request += ';';
					console.log(request);
					mariadb_instance.execquery(request)
					.then(result_2 => {
						console.log(result_1.insertId);
						let request = 'INSERT INTO Photos_Trips VALUES ';
						for(let i = 0; i < req.body.photos; i++) {
							request += '(' + (result_2.insertId + i) + ', ' + result_1.insertId + ')';
							if(i != (req.body.photos - 1)) {
								request += ', ';
							}
						}
						request += ';';
						console.log(request);
						mariadb_instance.execquery(request)
						.then(function(result) {
							res.write('');
							res.send();
						})
						.catch(function(error) {
                            console.log(error);
							res.write(error);
							res.send();
						});
					})
					.catch(function(error) {
                        console.log(error);
						res.write(error);
						res.send();
					});
				} else {
                    res.write('');
					res.send();
                }
			})
			.catch(function(error) {
                console.log(error);
				res.write(error);
			    res.send();
			});
        });

        app.post('/save_comment', async function(req : any, res : any) {
			let request = 'INSERT INTO Comments VALUES (NULL, ' + req.body.trip_id + ', ' + req.body.user_id + ', "' + req.body.content + '", NOW());';
			console.log(request);
			mariadb_instance.execquery(request)
			.then(function(result_1) {
				if(req.body.photos != 0) {
					let request = 'INSERT INTO Photos VALUES ';
					for(let i = 0; i < req.body.photos; i++) {
						request += '(NULL, "' + req.body['photo' + i] + '")';
						if(i != (req.body.photos - 1)) {
							request += ', ';
						}
					}
					request += ';';
					console.log(request);
					mariadb_instance.execquery(request)
					.then(result_2 => {
						console.log(result_1.insertId);
						let request = 'INSERT INTO Photos_Comments VALUES ';
						for(let i = 0; i < req.body.photos; i++) {
							request += '(' + (result_2.insertId + i) + ', ' + result_1.insertId + ')';
							if(i != (req.body.photos - 1)) {
								request += ', ';
							}
						}
						request += ';';
						console.log(request);
						mariadb_instance.execquery(request)
						.then(function(result) {
							res.write('');
                            res.send();
						})
						.catch(function(error) {
                            console.log(error);
                            res.write(error);
                            res.send();
						});
					})
					.catch(function(error) {
                        console.log(error);
						res.write(error);
                        res.send();
					});
				} else {
                    res.write('');
					res.send();
                }
			})
			.catch(function(error) {
                console.log(error);
				res.write(error);
                res.send();
			});
        });

        app.post('/save_order', async function(req : any, res : any) {
            let request = 'INSERT INTO Orders VALUES (NULL, ' + req.body.user_id + ', ' + req.body.trip_id + ', NOW());';
            console.log(request);
			mariadb_instance.execquery(request)
			.then(function(result_1) {
                let request = 'SELECT * FROM Trips WHERE Trips.trip_id = ' + req.body.trip_id;
                mariadb_instance.execquery(request)
			    .then(function(result_2) {
                    console.log(result_2[0].trip_name);
                    let document = {
                        user_id : parseInt(req.body.user_id),
                        trip_id : parseInt(req.body.trip_id),
                        trip_name : result_2[0].trip_name,
                        trip_starting_date : result_2[0].trip_starting_date,
                        trip_ending_date : result_2[0].trip_ending_date,
                        trip_price : parseFloat(result_2[0].trip_price),
                        trip_caption : result_2[0].trip_caption,
                        order_date : new Date()
                    };
                    console.log(document);
                    mongodb_instance.insert_order(document)
                    .then(function(result_3) {
                        res.write('');
                        res.send();
                    })
                    .catch(function(error) {
                        console.log(error);
                        res.write(error);
                        res.send();
                    });
                })
                .catch(function(error) {
                    console.log(error);
                    res.write(error);
                    res.send();
                });
			})
			.catch(function(error) {
                console.log(error);
				res.write(error);
                res.send();
            });
        });

        app.post('/user_orders_list', async function(req : any, res : any) {
            let query = {
                user_id : parseInt(req.body.user_id)
            };
            console.log(query);
			mongodb_instance.select_orders_from_user(query)
			.then(function(result_1) {
				res.write(JSON.stringify(result_1));
                res.send();
			})
			.catch(function(error) {
                console.log(error);
				res.write(error);
                res.send();
            });
        });

        app.post('/trip_comments_list', async function(req : any, res : any) {
            let request = 'SELECT Comments.comment_content, Comments.comment_date, Users.user_name FROM Comments, Users WHERE Comments.comment_trip_id = ' + req.body.trip_id + ' AND Comments.comment_user_id = Users.user_id;';
            console.log(request);
			mariadb_instance.execquery(request)
			.then(function(result_1) {
				res.write(JSON.stringify(result_1));
                res.send();
			})
			.catch(function(error) {
                console.log(error);
				res.write(error);
                res.send();
            });
        });

        app.post('/trips_list', async function(req : any, res : any) {
            let request = 'SELECT * FROM Trips;';
            console.log(request);
			mariadb_instance.execquery(request)
			.then(function(result_1) {
				res.write(JSON.stringify(result_1));
                res.send();
			})
			.catch(function(error) {
                console.log(error);
				res.write(error);
                res.send();
            });
        });

        app.post('/select_trip', async function(req : any, res : any) {
            let request = 'SELECT * FROM Trips WHERE Trips.trip_id = ' + req.body.trip_id + ';';
            console.log(request);
			mariadb_instance.execquery(request)
			.then(function(result_1) {
				res.write(JSON.stringify(result_1[0]));
                res.send();
			})
			.catch(function(error) {
                console.log(error);
				res.write(error);
                res.send();
            });
        });

        app.post('/trip_photos_list', async function(req : any, res : any) {
            let request = 'SELECT Photos.photo_relative_name FROM Photos_Trips, Photos WHERE Photos_Trips.photo_trip_trip_id = ' + req.body.trip_id + ' AND Photos.photo_id = Photos_Trips.photo_trip_photo_id;';
            console.log(request);
			mariadb_instance.execquery(request)
			.then(function(result_1) {
				res.write(JSON.stringify(result_1));
                res.send();
			})
			.catch(function(error) {
                console.log(error);
				res.write(error);
                res.send();
            });
        });

        app.listen(this.port, function(this : any) {
            console.log('Serveur démarré (4000)');
        })

    }

}
