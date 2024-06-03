const fs = require('fs')
const path = './data.txt'

// function sychronousRead(){
//     console.log('started reading file')
     const data = fs.readFileSync(path)
//     console.log('done reading file')
//     console.log(`data : ${data}`)

// }
// sychronousRead()
function asynchronousRead(){
        console.log('started reading file')

    fs.readFile(path,(error,data)=>{
        console.log(`${data}`)
    })
    console.log('done reading file')

}
asynchronousRead();