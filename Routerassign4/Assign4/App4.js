
const http=require('http')


const express =require('express')
const app= express();

// const server=http.createServer((req,res)=>{
//  if(req.url=='/sidhvi')
//   res.write({name:'Sidhvi' ,Grade:'7th'})
// })
// server.listen(4400)
app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/form.html')
})
app.get('/datalink',(req,res)=>{
  res.sendFile(__dirname+'/datalink.html')
})
app.get('/r1',(req,res)=>{
  res.send( {
    name: 'Hemant',
    grade:'4'
  })
})
  app.get('/r2',(req,res)=>{
    res.send( {
      name: 'Padmanjali',
      tech:'Js'
    })
  }) 

app.listen(4300,()=>{
  console.log('Server running')
}
)