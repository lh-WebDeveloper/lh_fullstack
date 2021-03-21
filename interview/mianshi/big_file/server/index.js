const path=require('path');//路径
const fse=require('fs-extra');//fs 拓展包
const { WriteStream, ReadStream } = require('fs');
const { resolve } = require('path');
//合并文件块
const UPLOAD_DIR =path.resolve(__dirname,".","target");
//console.log( UPLOAD_DIR);
const filename='index';
const filePath=path.resolve(UPLOAD_DIR,"..",`${filename}.jpg`);
//console.log(filePath);
const pipeStream=(path,WriteStream)=>
    new Promise(resolve=>{
        const readStream=fse.createReadStream(path);
        readStream.on("end",()=>{
            fse.unlinkSync(path);
            resolve();
        })
        readStream.pipe(WriteStream);
    })
const mergeFileChunk=async(filePath,filename,size)=>{
    //console.log(filePath,filename,size);
    //大文件上传时,设计的后端思想是 每个要上传的文件,先以文件名
    //为target 目录名，把分文件blob，放入这个目录
    //文件blob上传前要加上index
    //node 文件合并肯定是可以的,stream
    const chunkDir=path.resolve(UPLOAD_DIR,filename);
    //console.log(chunkDir);
    const chunkPaths=await fse.readdir(chunkDir);
    //console.log(chunkPaths);
    chunkPaths.sort((a,b)=>a.split("-")[1]-b.split("-")[1]);
    //console.log(chunkPaths,'++');
    //每块内容写入最后的文件,promise
    await Promise.all(
        chunkPaths.map((chunkPaths,index)=>
            pipeStream(
                path.resolve(chunkDir,chunkPaths),
                fse.createWriteStream(filePath,{
                    start:index*size,
                    end:(index+1)*size
                })
            )
        )
    )
    //console.log('文件合并成功');
    fse.rmdirSync(chunkDir);
}
mergeFileChunk(filePath,filename,1.2*1024*1024);