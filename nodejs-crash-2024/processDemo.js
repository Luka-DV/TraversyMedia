
//argv property
//can be used for CLI-s
console.log(process.argv);
console.log(process.argv[2]);

//process.env
console.log(process.env);

//pid - id of the nodejs process
console.log(process.pid)

//cwd() - current working directory
console.log(process.cwd())

// title (of the nodejs process)
console.log("Title:", process.title);

//memoryUsage()
console.log(process.memoryUsage());

//process uptime()
console.log(process.uptime());

//exit() - exits the process, 0 is success, 1 is a general error.
process.on("exit", code => {
    console.log(`About to exit with code: ${code}`)
})

process.exit(0);

console.log("Hello from after exit.");

