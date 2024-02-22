const express = require('express')
const app = express()

let customers =[
    {id: 1 , name: "ali" , age: 10 , gender: "male"},
    {id: 2 , name: "cumar" , age: 11 , gender: "male"},
    {id: 3 , name: "hamdi" , age: 12 , gender: "female"},
    {id: 4 , name: "sara" , age: 13, gender: "female"},
]

app.get('/', function(req,res){
    res.send(customers[0].name)
})

app.get('/:id',function(req,res){
  let {id} = req.params
  //cust wareg walba wxay hayn donta 1 obj then wxa krabna obj.id means cust.id wxay
  // wada id yada dhan then wxa dhahyna idiiga awadid malamidyhy idiiga qofka so basay
  //req.params wxusodhiboya string id wa string
  // id gaas lamaroyo obj kiiga isoceli
  let customer = customers.find((cust)=>cust.id == id)
  res.send(customer) // kan wuxu soceliyay empty array []
})


app.post('/',function(req,res){
  let mainArr = customers.push(req.body)
  res.send({
    status: 'success',
    message: 'created'
  })
})

// wax ina update garyno kii hore boskiisa kan kubadan 
//marka hore wxa soheyna kii hore index ku kujiro marka indwx ka s helno qiimaha badalikarnaa
//objectigaas lajogo idiiga lga sohely index kiisa kusoceline
// customers[0] wxa dhihi jirney index 0 or 1 hda yanohayo index 
// hada index wxa nohayo findindex index 
//index kiskas objectiga kujiro wxa kubadasha objgtiga req.boy ka imanayo
//objectigii oo iswato values lgalasobaxo valueski hlkn lgaushubo
app.put('/:id',function(req,res){
  let {id} = req.params
  let findindex= customers.findindex((cust)=> cust.id == id)
  let updatedCust= {id,...req.body}
  customers[findindex]= req.body
  res.send({
    status: "sucess",
    message:"updated"
  })

})

app.listen(4000,()=>{
  console.log("server started")
})