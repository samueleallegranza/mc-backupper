const express = require('express');
const apiRouter = express.Router();

const authRouter = require('./authRouter');
const accountsRouter = require('./accountsRouter');
const backupsRouter = require('./backupsRouter');

apiRouter.use('/auth', authRouter);
apiRouter.use('/accounts', accountsRouter);
apiRouter.use('/backups', backupsRouter);

module.exports = apiRouter;