const fastify = require('fastify')({
    logger:true
});

fastify.get('/',(request,reply)=>{
    reply.send({hello:'World'})
});

const productsRoutes=require("./routes/products.routes");
require('./utils/mongoose');

productsRoutes.forEach(route=>{
    fastify.route(route)
})

const start = async () =>{
    await fastify.listen(3000);
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
};

start()