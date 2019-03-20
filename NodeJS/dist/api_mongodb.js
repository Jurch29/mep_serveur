"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongo = require('mongodb').MongoClient;
var base = 'MEP_bergnean_rocharju_';
var host = 'obiwan2.univ-brest.fr';
var Mongodb = /** @class */ (function () {
    function Mongodb() {
    }
    Mongodb.prototype.insert_order = function (my_document) {
        return new Promise(function (resolve, reject) {
            mongo.connect('mongodb://' + host + ':27017', { "useNewUrlParser": true }, function (err, db) {
                if (err)
                    throw err;
                var database = db.db(base);
                database.collection('Orders').insertOne(my_document, function (err, result) {
                    if (err)
                        throw err;
                    if (result.result.n == 0) {
                        reject(false);
                    }
                    else {
                        resolve(true);
                    }
                });
                db.close();
            });
        });
    };
    Mongodb.prototype.select_orders_from_user = function (my_query) {
        return new Promise(function (resolve, reject) {
            mongo.connect('mongodb://' + host + ':27017', { "useNewUrlParser": true }, function (err, db) {
                if (err)
                    throw err;
                var database = db.db(base);
                database.collection('Orders').find(my_query, { projection: {} }).toArray(function (err, result) {
                    if (err) {
                        reject(err);
                        throw err;
                    }
                    resolve(result);
                    db.close();
                });
                db.close();
            });
        });
    };
    return Mongodb;
}());
exports.default = Mongodb;
