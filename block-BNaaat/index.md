writeCode

Create a http server and use readFile and createReadStream to read a file and send the data into response. 
- add a listener on port 5555
- create a file node.html
- handle GET request on '/file' route to read node.html using fs.readFile
- handle GET request on '/stream' route to read node.html using fs.createReadStream