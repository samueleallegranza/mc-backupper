const express = require('express');
const apiRouter = express.Router();

const accountsRouter = require('./accountsRouter');
const backupsRouter = require('./backupsRouter');

apiRouter.use('/accounts', accountsRouter)
apiRouter.use('/backups', backupsRouter)

module.exports = apiRouter;