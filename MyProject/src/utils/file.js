import fs from 'fs'

fs.readFile('./text.txt', (err, data) => {
    if (err) throw err;
    console.log(data)
})