const testController = (req,res) =>{
    res.status(200).send({
        message:"Wellcome user",
        success:true,
    });
};

module.exports = {testController};