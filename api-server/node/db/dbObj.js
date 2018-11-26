const { MongoClient, ObjectID } = require('mongodb');
const { isArray, isObject } = require('util');

const connect = MongoClient.connect;
const url = 'mongodb://mongodb:27017';
const dbName = 'database';

const self = module.exports = {
    init: async () => {
        try
        {
            this.client = await connect(url, { useNewUrlParser: true });
            this.db = this.client.db(dbName);
            console.log("connect suc");
        }
        catch (e)
        {
            console.log("connect err ", e);
        }
    },

    /**
     * [select description]
     * @param  {[type]}   collection       collection
     * @param  {[type]}   query          { _id: 56a07a7c57c3b99e3d5969fe }
     * @param  {[type]}   condition      {
     *                                   	skipNumber : 0
     *                                   	limitNumber : 20
     *                                   	sort : {
     *                                   		_id : -1
     *                                   	}
     *                                   }
     */
    select: async (_collection, query, condition) => {

        let limitNumber;
        let skipNumber;
        let sort = condition.sort;

        // one record data
       if (undefined !== query && isObject(query) && Object.keys(query).length > 0)
       {
           if (query.hasOwnProperty('_id'))
           {
               query._id = new ObjectID(query._id);
           }

           limitNumber = 0;
           skipNumber = 0;
       }
       else
       {
           limitNumber = (undefined !== condition.limit && Number.isInteger(condition.limit)) ? condition.limit : 20;
           skipNumber = (undefined !== condition.skip && Number.isInteger(condition.skip)) ? condition.skip : 0;
       }

       // sort
       if (undefined === sort || !isObject(sort))
       {
           sort = {
               _id: -1
           };
       }
       else
       {
           for (let key in sort)
           {
               sort[key] = (!Number.isInteger(sort[key]) || sort[key] !== 1) && sort[key] !== -1 ? -1 : sort[key];
           }
       }

       const collection = this.db.collection(_collection);
       return await collection.find(query).skip(skipNumber).limit(limitNumber).sort(sort).toArray();
    },

    insert: (_collection, data) => {
        data = isArray(data) ? data : [data];
        return new Promise(async (resolve, reject) => {
            try
            {
                const collection = this.db.collection(_collection);
                const res = await collection.insertMany(data);

                resolve({
                    result: res.result,
                    insertedIds: res.insertedIds
                });
            }
            catch (e)
            {
                console.log(e);
                reject(false);
            }
        });
    },

    update : (collection, where, data) => {

        return new Promise(async (resolve, reject) => {
            // const collection = this.db.collection(collection);
            // const res = await collection.updateMany(where, { $set: data });

            // console.log(res);
            resolve();
        });
    },

    /**
    * [delete description]
    * @param  {[type]}   collection collection
    * @param  {[type]}   id         5bfba910ee66dba32f59c57f
    */
    delete: (_collection, _id) => {

        return new Promise(async (resolve, reject) => {
            try
            {
                let collection = this.db.collection(_collection);
                const res = await collection.deleteMany({ _id: new ObjectID(_id) });
                resolve(res);
            }
            catch (e)
            {
                reject(false);
            }
        });
    }
};
