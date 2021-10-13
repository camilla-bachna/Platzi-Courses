//OS operative system
const os = require("os");

console.group("Architecture");
console.log(os.arch()); //x64 (64-bit)
console.groupEnd("Architecture");

console.group("Platform");
console.log(os.platform()); //linux
console.groupEnd("Platform");

console.group("CPUs"); //central processing unit, how many cores it has, speed etc.
console.table(os.cpus());
console.log(os.cpus().length); //8 I can build up 8 processes
console.log(os.cpus()[0].model);
console.log(os.cpus()[1].speed);
console.log(os.cpus()[2].times.user);
console.groupEnd("CPUs");

console.group("Errors and system signals");
console.log(os.constants);
console.groupEnd("Errors and system signals");

console.group("Free memory in bytes");
const size = 1024;
const kilobytes = (bytes) => bytes / size;
const megabytes = (bytes) => kilobytes(bytes) / size;
const gigabytes = (bytes) => megabytes(bytes) / size;

console.log(os.freemem());
console.log(kilobytes(os.freemem()));
console.log(megabytes(os.freemem()));
console.log(gigabytes(os.freemem()));
console.log(gigabytes(os.totalmem())); //how much memory do you have in total

console.groupEnd("Free memory in bytes");

console.group("User's directory");
console.log(os.homedir());
console.groupEnd("User's directory");

console.group("Directory for temporary files");
console.log(os.tmpdir());
console.groupEnd("Directory for temporary files");

console.group("Hostname or machine name");
console.log(os.hostname());
console.groupEnd("Hostname or machine name");

console.group("Network interface");
console.log(os.networkInterfaces());
console.groupEnd("Network interface");
