var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/l3';
mongoose.connect(dbURI, { useMongoClient: true });

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
    console.log('Platform: ', process.platform);
});

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

var gracefulShutdown = (msg, callback) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};

// For nodemon restarts
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restarted', () => {
        process.kill(process.id, 'SIGUSR2');
    })
})

// For app termination
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    })
})

// For Heroku app termination
process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => {
        process.exit(0);
    })
})
