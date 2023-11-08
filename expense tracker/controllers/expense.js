const Expense = require('../models/expense');

exports.postUserData = async (req,res)=>{
    try{
        const expenseAmount = req.body.expenseAmount;
        const expenseDescription = req.body.expenseDescription;
        const expenseCategory = req.body.expenseCategory;
      
        const data = await Expense.create({expenseAmount:expenseAmount,expenseDescription:expenseDescription,expenseCategory:expenseCategory});
        res.status(201).json({newData:data});
    }catch(e){
       
       res.status(500).json({error:e});
    }
  
}

exports.getUserData = async (req,res)=>{
    try{
       const data = await Expense.findAll();
       res.status(200).json({allData:data})
    }catch(e){
        res.status(500).json({error:e})
    }
}

exports.postDeleteData = async (req,res)=>{
    try{
        if(!req.params.id == "undefined"){
           return res.status(400).json({err:"id not found"})
        }
        const userId = req.params.id;
       await Expense.destroy({where:{id:userId}});
       res.sendStatus(200);
       }catch(e){
        res.status(500).json({error:e})
    }


}

// exports.updateData = async (req,res) => {
//     try{
//         if(!req.params.id == "undefined"){
//             return res.status(400).json({err:"id not found"})
//         }
//         const userId = req.params.id;
//         await Expense.
//     }
// }