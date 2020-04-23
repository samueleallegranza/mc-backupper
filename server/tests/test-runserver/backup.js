const { exec } = require('child_process');

const execCommand = command => {
    exec(`screen -S test -X stuff '${command}^M'`, (err, stdout, stderr) => {
        if (err) {
            console.log("Error");
            return;
        }
        // the *entire* stdout and stderr (buffered)
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });

}

const startServer = () => {
    execCommand('cd /root/samu/mcCastle/');
    execCommand("java -Xms1G -Xmx1G -jar server.jar nogui");
}

const stopServer = () => {
    execCommand('stop');
}

stopServer();