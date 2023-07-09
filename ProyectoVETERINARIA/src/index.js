import app from './server.js'
import connection from './database.js';
import {swaggerDocs}  from "./v1/swagger.js" 

connection();

app.listen(app.get('port'),()=>{
    console.log(`Server ok on http://localhost:${app.get('port')}`);
    
})

swaggerDocs(app, app.get("port"))
