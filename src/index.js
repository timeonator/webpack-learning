import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'

const App = () => {
    const [data,setData]= useState("");

    useEffect(()=> {
    
        fetch("https://api.covidtracking.com/v1/us/current.json")
        .then(r => {r.json()})
        .then(d => setData(d))      
    })
    
    return(<h1> React Webpack, Yeah Hah!! </h1>)
}

ReactDom.render (<App />, document.getElementById('root'))