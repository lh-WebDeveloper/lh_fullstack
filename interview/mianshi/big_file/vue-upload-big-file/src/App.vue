<template>
  <div id="app">
    <div>
      <input type="file" @change="handleFileChange"/>
      <el-button @click="handleUpload">上传</el-button>
    </div>
  </div>
</template>

<script>
const Status={//良好的代码风格 enum 有利于代码的可读性
  wait:"wait",
  pause:"pause",
  uploading:"uploading"
}
export default{
  name:'app',
  data:()=>({
    container:{//将我们的任务放到一起
      file:null,
      hash:"",
    },
    status:Status.wait
  }),
  methods:{
    async handleUpload(e){
      //大量的任务
      if(!this.container.file) return ;
      this.status=Status.uploading;
      const fileChunkList=this.createFileChunk(this.container.file);
    },
    handleFileChange(e){
      //分割文件
      const [file]=e.target.files;//拿到第一个文件
      //console.log(e.target.files);
      this.container.file=file;
    }
  },
  components:{

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
