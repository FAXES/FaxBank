const readline = require("readline");
console.log(`\x1b[96mWelcome to FaxBank. Please confirm your details.`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question(`\x1b[96mUsername:\n\x1b[0m`, function(q1) {
    rl.question(`\x1b[96mPassword:\n\x1b[0m`, function(q2) {
        rl.close();
        console.log(`Logging in...`);
        setTimeout(() => {
            let theval = Math.random() < 0.5;
            if(theval) {
                console.log(`\x1b[92mLogged in under \x1b[0m${q1} \x1b[92mwith password \x1b[0m${q2.replace(/./g, "*")}.`);
            } else {
                console.log(`\x1b[91mLog in failed. Please retry later. Closing...\x1b[0m`);
                setTimeout(() => {
                    process.exit();
                }, 2000);
            }
        }, 1000);
    });
})