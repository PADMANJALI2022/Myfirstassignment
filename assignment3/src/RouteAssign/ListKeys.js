import React from 'react'

const ListKeys = () => {
const topics =[
    {TNo: 1,
     Name:"Configuring routes"
     },{
        TNo:2,
        Name:"Navigating on button click"
     },
     { TNo: 3,
        Name:"Nested Routes"}
]



  return (
    
    <div><center><h4>List of topics in ReactRouter:</h4>
    {topics.map(topic=><li key={topic.TNo}>{`Topic ${topic.TNo} is ${topic.Name}`}</li>)}</center></div>
  )
}

export default ListKeys