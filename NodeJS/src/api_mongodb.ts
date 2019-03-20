const mongo = require('mongodb').MongoClient;
const base ='MEP_bergnean_rocharju_';
const host='obiwan2.univ-brest.fr';

export default class Mongodb {

    constructor() {

    }

    insert_order(my_document : any) {
        return new Promise(function(resolve, reject) {
            mongo.connect('mongodb://'+host+':27017', { "useNewUrlParser" : true }, function(err : any, db : any) {
                if(err) throw err;
                let database = db.db(base);
                database.collection('Orders').insertOne(my_document, function(err:any, result : any) {
                    if(err) throw err;
                    if(result.result.n == 0) {
                        reject(false);
                    } else {
                        resolve(true);
                    }
                });
                db.close();
            });
        });
    }

    select_orders_from_user(my_query : any) {
        return new Promise(function(resolve, reject) {
            mongo.connect('mongodb://'+host+':27017', { "useNewUrlParser" : true }, function(err : any, db : any) {
                if(err) throw err;
                let database = db.db(base);
                database.collection('Orders').find(my_query, { projection: {  } }).toArray(function(err : any, result : any) {
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
    }

}