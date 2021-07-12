import React from 'react'
import ReactDom from 'react-dom'

const App = () => {
    const fetchDataPackage = async () => {
        let response = await fetch("http://localhost:8000/datapackages",{
            method: 'GET',
            mode: 'cors',
            cache: 'default',
        });
        let data = await response.json()
        return(data)
    }
    const mydata = fetchDataPackage()
    return(<h1> React Webpack, Yeah Hah!! </h1>)
}

ReactDom.render (<App />, document.getElementById('root'))