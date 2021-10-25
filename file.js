const path = require('path');
const fs = require('fs');

const FileHandling =
{
    InsertMessage: (directoryname, foldername, filename, msg) => {
        return new Promise((resolve, reject) => {
            fs.writeFile(path.join(directoryname,foldername, filename || "one.txt"), msg || "text missing", (err) => {
                if (err) {
                    reject("request failed");
                }
                else {
                    resolve('request approved');
                }
            })
        })
    },

    AppendMessage: (directoryname, foldername, filename, msg) => {
        return new Promise((resolve, reject) => {
            fs.appendFile(path.join(directoryname, foldername, filename || "one.txt"), msg, function (err) {
                if (err) {
                    reject('request failed');
                }
                else {
                    resolve('request approved');
                }
            })
        })
    },
    ReadMessage: (directoryname, foldername, filename) => {
        return new Promise((resolve, reject) => {
            fs.readFile(path.join(directoryname, foldername, filename), (err, data) => {
                if (err) {
                    reject('request rejected');
                }
                else {
                    resolve(data);
                }
            })
        })
    }
}

module.exports = FileHandling;





