const Student= require('../model/student.model')

exports.test=(req,res)=>{
    res.send('<h1>Testing Controller</h1>')
}

exports.student_create=(req,res)=>{
let student=new Student({
    Name:req.body.Name,
    Gender:req.body.Gender,
    City:req.body.City
})

student.save((err)=>{
if(err){
    return next (err)
}
res.send('Student Added')
})
}

exports.student_details=(req,res)=>{
    Student.findById(req.params.id,(err,student)=>{
        res.send(student)
    })
}

exports.student_update=(req,res)=>{
    Student.findByIdAndUpdate(req.params.id, {$set: req.body}, (err,student)=>{
        if(err) {
        return next(err)
    }
        res.send('Student Record Updated')
    })

}

exports.student_delete=(req,res)=>{
Student.findByIdAndRemove(req.params.id, (err)=>{
      if (err) { 
      return next(err) }
      res.send('Record Deleted Successfully')

})

}