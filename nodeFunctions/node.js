
const cp = require('child_process')
const os = require('os')
const path = require('path')
const fs = require('fs')

/*




const thisFileExtention = path.extname('C:\Users\khaj3\OneDrive\Documents\javascript\node.js')
const thisFileName = path.basename('C:\\Users\\khaj3\\OneDrive\\Documents\\javascript\\node.js')
const currentworkingfile = __filename
const currentworkingDirectory = __dirname
// const currentworkingDirectory = path.dirname(__filename)
// const currentworkingDirectory = process.cwd()



function openCalculaterInWindows() {
    cp.execSync("calc.exe")
}

// console.log(cp.execSync('node f1.js'))


function goToHomePageInChrome() {
    cp.execSync("start chrome https://shamblog.vercel.app/")
}


console.log(`platform : ${os.platform()}, OperatingSystem :  ${os.arch()} , Total Memory : ${os.totalmem()} , Free Memory : ${os.freemem()} , Home Directory : ${os.homedir()} , Temp Directory : ${os.tmpdir()} , Uptime : ${os.uptime()}`)
console.log(os.cpus())
console.log(os.networkInterfaces())
console.log(thisFileExtention)
console.log(thisFileName)
console.log(currentworkingfile)
console.log(currentworkingDirectory)

*/


/*
// manipulating files Creating Reading writing editing and deleting of files in nodeJs


// Reading a file


const fileContent = fs.readFileSync("f4.txt")
console.log( fileContent.toString())


// Writing in file 
fs.writeFileSync("f5.txt","this is content yupp ")
const updatedFileContent = fs.readFileSync("f5.txt")
console.log(updatedFileContent.toString())


// Updating a file 

fs.appendFileSync("f5.txt","this is appended content")
console.log(fs.readFileSync("f5.txt").toString())

// Deleting a file

// fs.unlinkSync("f5.txt")
// console.log("the f5 file has been deleted")

*/

/*

// manipulating Directories Creating Reading writing editing and deleting of files in nodeJs


// creating a directory 

// fs.mkdirSync("newDirectory")



const DirectoryPath = "C:\\Users\\khaj3\\OneDrive\\Documents\\javascript\\newDirectory"


// ReadingDirectory

const foldercontent = fs.readdirSync(DirectoryPath)
console.log("foldercontent => " , foldercontent)


// checking Directorty Exist Or Not

const Directorty = fs.existsSync("newDirectory")
console.log(Directorty)


// Deleting a Directory
// if there is an files in derectry the directory will not be deleted and the function will thrown the error

fs.mkdirSync("anything")
fs.rmdirSync("anything")
console.log("the directory are created and then delected")

*/
