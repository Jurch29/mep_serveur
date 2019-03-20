"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var body_parser = require('body-parser');
var cors = require('cors');
var path = require('path');
var fs = require('fs');
var api_mariadb_js_1 = __importDefault(require("./api_mariadb.js"));
var api_mongodb_js_1 = __importDefault(require("./api_mongodb.js"));
var Server = /** @class */ (function () {
    function Server(port) {
        this.port = port;
    }
    Server.prototype.start = function () {
        var app = express();
        var mariadb_instance = new api_mariadb_js_1.default();
        var mongodb_instance = new api_mongodb_js_1.default();
        app.use(body_parser.urlencoded({
            extended: true
        }));
        app.use(body_parser.json());
        app.use(express.static(path.join(__dirname, 'public'))); //pour le css
        var corsOptions = {
            origin: '*',
            optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
        };
        app.use(cors(corsOptions));
        app.post('/save_trip', function (req, res) {
            return __awaiter(this, void 0, void 0, function () {
                var request;
                return __generator(this, function (_a) {
                    request = 'INSERT INTO Trips VALUES (NULL, "' + req.body.name + '", "' + req.body.starting + '", "' + req.body.ending + '", ' + req.body.price + ', "' + req.body.caption + '");';
                    console.log(request);
                    mariadb_instance.execquery(request)
                        .then(function (result_1) {
                        if (req.body.photos != 0) {
                            var request_1 = 'INSERT INTO Photos VALUES ';
                            for (var i = 0; i < req.body.photos; i++) {
                                request_1 += '(NULL, "' + req.body['photo' + i] + '")';
                                if (i != (req.body.photos - 1)) {
                                    request_1 += ', ';
                                }
                            }
                            request_1 += ';';
                            console.log(request_1);
                            mariadb_instance.execquery(request_1)
                                .then(function (result_2) {
                                console.log(result_1.insertId);
                                var request = 'INSERT INTO Photos_Trips VALUES ';
                                for (var i = 0; i < req.body.photos; i++) {
                                    request += '(' + (result_2.insertId + i) + ', ' + result_1.insertId + ')';
                                    if (i != (req.body.photos - 1)) {
                                        request += ', ';
                                    }
                                }
                                request += ';';
                                console.log(request);
                                mariadb_instance.execquery(request)
                                    .then(function (result) {
                                    res.write('');
                                    res.send();
                                })
                                    .catch(function (error) {
                                    console.log(error);
                                    res.write(error);
                                    res.send();
                                });
                            })
                                .catch(function (error) {
                                console.log(error);
                                res.write(error);
                                res.send();
                            });
                        }
                        else {
                            res.write('');
                            res.send();
                        }
                    })
                        .catch(function (error) {
                        console.log(error);
                        res.write(error);
                        res.send();
                    });
                    return [2 /*return*/];
                });
            });
        });
        app.post('/save_comment', function (req, res) {
            return __awaiter(this, void 0, void 0, function () {
                var request;
                return __generator(this, function (_a) {
                    request = 'INSERT INTO Comments VALUES (NULL, ' + req.body.trip_id + ', ' + req.body.user_id + ', "' + req.body.content + '", NOW());';
                    console.log(request);
                    mariadb_instance.execquery(request)
                        .then(function (result_1) {
                        if (req.body.photos != 0) {
                            var request_2 = 'INSERT INTO Photos VALUES ';
                            for (var i = 0; i < req.body.photos; i++) {
                                request_2 += '(NULL, "' + req.body['photo' + i] + '")';
                                if (i != (req.body.photos - 1)) {
                                    request_2 += ', ';
                                }
                            }
                            request_2 += ';';
                            console.log(request_2);
                            mariadb_instance.execquery(request_2)
                                .then(function (result_2) {
                                console.log(result_1.insertId);
                                var request = 'INSERT INTO Photos_Comments VALUES ';
                                for (var i = 0; i < req.body.photos; i++) {
                                    request += '(' + (result_2.insertId + i) + ', ' + result_1.insertId + ')';
                                    if (i != (req.body.photos - 1)) {
                                        request += ', ';
                                    }
                                }
                                request += ';';
                                console.log(request);
                                mariadb_instance.execquery(request)
                                    .then(function (result) {
                                    res.write('');
                                    res.send();
                                })
                                    .catch(function (error) {
                                    console.log(error);
                                    res.write(error);
                                    res.send();
                                });
                            })
                                .catch(function (error) {
                                console.log(error);
                                res.write(error);
                                res.send();
                            });
                        }
                        else {
                            res.write('');
                            res.send();
                        }
                    })
                        .catch(function (error) {
                        console.log(error);
                        res.write(error);
                        res.send();
                    });
                    return [2 /*return*/];
                });
            });
        });
        app.post('/save_order', function (req, res) {
            return __awaiter(this, void 0, void 0, function () {
                var request;
                return __generator(this, function (_a) {
                    request = 'INSERT INTO Orders VALUES (NULL, ' + req.body.user_id + ', ' + req.body.trip_id + ', NOW());';
                    console.log(request);
                    mariadb_instance.execquery(request)
                        .then(function (result_1) {
                        var request = 'SELECT * FROM Trips WHERE Trips.trip_id = ' + req.body.trip_id;
                        mariadb_instance.execquery(request)
                            .then(function (result_2) {
                            console.log(result_2[0].trip_name);
                            var document = {
                                user_id: parseInt(req.body.user_id),
                                trip_id: parseInt(req.body.trip_id),
                                trip_name: result_2[0].trip_name,
                                trip_starting_date: result_2[0].trip_starting_date,
                                trip_ending_date: result_2[0].trip_ending_date,
                                trip_price: parseFloat(result_2[0].trip_price),
                                trip_caption: result_2[0].trip_caption,
                                order_date: new Date()
                            };
                            console.log(document);
                            mongodb_instance.insert_order(document)
                                .then(function (result_3) {
                                res.write('');
                                res.send();
                            })
                                .catch(function (error) {
                                console.log(error);
                                res.write(error);
                                res.send();
                            });
                        })
                            .catch(function (error) {
                            console.log(error);
                            res.write(error);
                            res.send();
                        });
                    })
                        .catch(function (error) {
                        console.log(error);
                        res.write(error);
                        res.send();
                    });
                    return [2 /*return*/];
                });
            });
        });
        app.post('/user_orders_list', function (req, res) {
            return __awaiter(this, void 0, void 0, function () {
                var query;
                return __generator(this, function (_a) {
                    query = {
                        user_id: parseInt(req.body.user_id)
                    };
                    console.log(query);
                    mongodb_instance.select_orders_from_user(query)
                        .then(function (result_1) {
                        res.write(JSON.stringify(result_1));
                        res.send();
                    })
                        .catch(function (error) {
                        console.log(error);
                        res.write(error);
                        res.send();
                    });
                    return [2 /*return*/];
                });
            });
        });
        app.post('/trip_comments_list', function (req, res) {
            return __awaiter(this, void 0, void 0, function () {
                var request;
                return __generator(this, function (_a) {
                    request = 'SELECT Comments.comment_content, Comments.comment_date, Users.user_name FROM Comments, Users WHERE Comments.comment_trip_id = ' + req.body.trip_id + ' AND Comments.comment_user_id = Users.user_id;';
                    console.log(request);
                    mariadb_instance.execquery(request)
                        .then(function (result_1) {
                        res.write(JSON.stringify(result_1));
                        res.send();
                    })
                        .catch(function (error) {
                        console.log(error);
                        res.write(error);
                        res.send();
                    });
                    return [2 /*return*/];
                });
            });
        });
        app.post('/trips_list', function (req, res) {
            return __awaiter(this, void 0, void 0, function () {
                var request;
                return __generator(this, function (_a) {
                    request = 'SELECT * FROM Trips;';
                    console.log(request);
                    mariadb_instance.execquery(request)
                        .then(function (result_1) {
                        res.write(JSON.stringify(result_1));
                        res.send();
                    })
                        .catch(function (error) {
                        console.log(error);
                        res.write(error);
                        res.send();
                    });
                    return [2 /*return*/];
                });
            });
        });
        app.post('/select_trip', function (req, res) {
            return __awaiter(this, void 0, void 0, function () {
                var request;
                return __generator(this, function (_a) {
                    request = 'SELECT * FROM Trips WHERE Trips.trip_id = ' + req.body.trip_id + ';';
                    console.log(request);
                    mariadb_instance.execquery(request)
                        .then(function (result_1) {
                        res.write(JSON.stringify(result_1[0]));
                        res.send();
                    })
                        .catch(function (error) {
                        console.log(error);
                        res.write(error);
                        res.send();
                    });
                    return [2 /*return*/];
                });
            });
        });
        app.post('/trip_photos_list', function (req, res) {
            return __awaiter(this, void 0, void 0, function () {
                var request;
                return __generator(this, function (_a) {
                    request = 'SELECT Photos.photo_relative_name FROM Photos_Trips, Photos WHERE Photos_Trips.photo_trip_trip_id = ' + req.body.trip_id + ' AND Photos.photo_id = Photos_Trips.photo_trip_photo_id;';
                    console.log(request);
                    mariadb_instance.execquery(request)
                        .then(function (result_1) {
                        res.write(JSON.stringify(result_1));
                        res.send();
                    })
                        .catch(function (error) {
                        console.log(error);
                        res.write(error);
                        res.send();
                    });
                    return [2 /*return*/];
                });
            });
        });
        app.listen(this.port, function () {
            console.log('Serveur démarré (4000)');
        });
    };
    return Server;
}());
exports.default = Server;
