// 服务器端渲染
// React Virtual DOM -> html String 不能挂载
// const express =require('express');
// import React from 'react';
import express from 'express';
import {renderToString} from 'react-dom/server';
import Home from '../containers/Home';
import React from 'react';
var app =express()
const content=renderToString(<Home/>)
app.get('/',(req,res)=>{
    res.send(`
    <html>
        <head>
            <title>hello</title>
        </head>
        <body>
            <div id="root">${content}</div>
            <h1>hello</h1>
            <p>world</p>
        </body>
    </html>
    `)
})
app.listen(3001,()=>{
    console.log('listen:3001')
})