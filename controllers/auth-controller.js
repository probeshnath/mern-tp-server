
const home = async ( req,res) =>{
    try {
        res.status(200).send("Welcome to thhe best serice of mern i love ")
    } catch (error) {
        console.log(error)
    }
}

const register = async (req,res) =>{
    try {
        res.status(200).send("Register page...using controllers ")
    } catch (error) {
        res.status(400).send({message: "page not found"})
    }
}

module.exports = {home,register}