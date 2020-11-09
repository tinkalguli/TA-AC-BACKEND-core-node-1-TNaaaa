writeCode

### Final Project
Convert a multipage website created during html/css sessions onto a node server.

#### folder structure

Application
- index.html
- about.html
- ...other html templates
- assets(directory)
  - stylesheets(directory)
    - style.css
    - ...other css files
  - images(directory)
    - img1.jpg
    - ...other images
  - js(directory)
    - app.js
    - ...other js files

#### Instructions
1. create seperate routes for seperate html templates to render
for example:- 
  - "/" -> render `index.html`
  - "/about" -> render `about.html`

2. handle requests for all css files in a single seperate router
for example:- 

```js
// check for css requests using url
if(req.url.split('.').pop() === 'css') {
  // set header for css file
  res.setHeader('Content-Type', 'text/css');
  // read css file and send it in response
  fs.readFile('./assets/stylesheets/' + req.url, (err, content) => {
    if(err) return console.log(err);
    res.end(content)
  })
}
```

3. handle request for all images in a seperate single router.
 - follow the steps for handling css 

4. handle request for javascripts(if any) in simialar fashion as above.
