const mongoose = require('mongodb');

mongoose.connect('mongodb://mongodb/database');

import mongodb from 'mongodb'
const connect = mongodb.MongoClient.connect;
export default connect;
