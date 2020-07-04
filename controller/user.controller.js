const { PrismaClient } = require( '@prisma/client')
const prisma = new PrismaClient()

async function findAll(req,res){

    try {
        let users= await prisma.user.findMany();
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(404).send({message:"error desconocido"});
    }
    
}

async function Create(req,res){
    try {
        let user= await prisma.user.create({data:req.body});
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports={findAll,Create}