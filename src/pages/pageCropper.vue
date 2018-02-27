<template>
  <div>
    <h3>图片裁剪 cropper</h3>
    <table cellspacing="0" cellpadding="0" >
      <thead>
        <td>属性</td>
        <td>说明</td>
        <td>默认值</td>
      </thead>
      <tbody>
        <tr>
          <td>cropper-size</td>
          <td>裁剪区域大小</td>
          <td>300</td>
        </tr>
        <tr>
          <td>preview-size</td>
          <td>预览区域大小</td>
          <td>150</td>
        </tr>
        <tr>
          <td>mask</td>
          <td>裁剪区域遮罩层样式 "light"/"dark"</td>
          <td>"light"</td>
        </tr>
        <tr>
          <td>shape</td>
          <td>裁剪形状 "square"/"round"</td>
          <td>"round"</td>
        </tr>
        <tr>
          <td>default-tips</td>
          <td>裁剪区域提示语</td>
          <td>"请选择格式为JPG、PNG的图片"</td>
        </tr>
        <tr>
          <td>defaultImg</td>
          <td>预览区域示例图</td>
          <td>-</td>
        </tr>
        <tr>
          <td>upload-props</td>
          <td>裁剪后图片上传的相关属性 :<br/>
              action:必填，图片上传的地址<br/>
              headers : 设置上传的请求头部 <br/>
              data :	上传时附带的额外参数<br/>
              name: 	上传的文件字段名
            </td>    
          <td>-</td>
        </tr>
      </tbody>
    </table>

    <table cellspacing="0" cellpadding="0" >
      <thead>
        <td>方法名</td>
        <td>说明</td>
        <td>参数</td>
      </thead>
      <tbody>
        <tr>
          <td>beforeReadImg</td>
          <td>筛选裁剪图片要求的钩子，参数为上传的文件，若返回 false 则终止操作</td>
          <td>-</td>
        </tr>
        <tr>
          <td>confirm</td>
          <td>点击确定按钮事件，返回 true 上传裁剪图片，返回 false 则终止操作，默认返回true</td>
          <td>-</td>
        </tr>
        <tr>
        <tr>
          <td>onProgress</td>
          <td>图片上传时事件</td>
          <td>event</td>
        </tr>
        <tr>
          <td>onSuccess</td>
          <td>图片上传成功时事件</td>
          <td>response,url</td>
        </tr>
        <tr>
          <td>onError</td>
          <td>图片上传失败时事件</td>
          <td>err, response</td>
        </tr>
        <tr>
          <td>clear</td>
          <td>点击取消按钮事件</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
    
    <div>
      <Cropper :upload-props="uploadProps"
      default-img = "/static/demo-110.png"
      @comfirm = "comfirm" 
      @handleProgress="handleProgress"
      @onSuccess="onSuccess"
      @clear="clear"/>
    </div>

    <br/>
    <hr/>
    <br/>

    <div>
      <Cropper :upload-props="uploadProps"
      mask="dark" shape="square"
      @comfirm = "comfirm" 
      @handleProgress="handleProgress"
      @onSuccess="onSuccess"
      @clear="clear"/>
    </div>
    
  </div>
</template>

<script>
import Cropper from "@/components/cropper";
export default {
  name: "page-cropper",
  components: {
    Cropper
  },
  data () {
    return {
      uploadProps:{
        action:"admin/api/upload",
        data:{
          "bizKey": "news"
        }
      }
    }
  },
  methods: {
    beforeReadImg(file) {
      console.log(file)
      if(file.raw.size>1024*10){
        return true
      }else{
        console.log('上传图片必须大于1024*10kb')
        return false;
      }
    },
    handleProgress(e,file){
      console.log(e)
      console.log(file)
    },
    comfirm(){
      return confirm("确定要上传图片？");
    },
    onSuccess(res,url){
      console.log(res)
      console.log(url)
    },
    clear(){
      console.log('清空图片')
    }
  },
};
</script>