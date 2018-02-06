<template>
  <div>
    <table>
      <thead>
        <tr>
          <td>参数</td>
          <td>说明</td>
          <td>可选值</td>          
          <td>默认值</td>                              
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>type</td>
          <td>类型</td>
          <td>[String] text/textrea</td>
          <td>text</td>          
        </tr>
         <tr>
          <td>rows（type = "textrea" 可用）</td>
          <td>textrea行数</td>
          <td>[Number]</td>
          <td>2</td>          
        </tr>
         <tr>
          <td>disabled</td>
          <td>是否禁用</td>
          <td>[Boolean]</td>
          <td>false</td>          
        </tr>
         <tr>
          <td>clearable</td>
          <td>是否可清空</td>
          <td>[Boolean]</td>
          <td>false</td>          
        </tr>
         <tr>
          <td>clearable</td>
          <td>是否可清空</td>
          <td>[Boolean]</td>
          <td>false</td>          
        </tr>
         <tr>
          <td>prefix-icon</td>
          <td>前置icon</td>
          <td>[String]</td>
          <td>/</td>          
        </tr>
         <tr>
          <td>suffix-icon</td>
          <td>后置icon</td>
          <td>[String]</td>
          <td>/</td>          
        </tr>
      </tbody>
    </table>

    <table>
      <thead>
        <tr>
          <td>事件</td>
          <td>说明</td>                            
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>foucs</td>
          <td>失去焦点时触发</td>         
        </tr>
        <tr>
          <td>input</td>
          <td>输入时触发</td>        
        </tr>
        <tr>
          <td>clear</td>
          <td>清空input框时触发（clearable=true时有效）</td>        
        </tr>
      </tbody>
    </table>
    
    <p>type: "text"  / input1:{{input1}}</p>
    <Input placeholder="请输入内容" v-model="input1" :maxlength="10"/>
    <p>type: "text"  / input2:{{input2}}</p>
    <Input placeholder="请输入内容" v-model="input2" type="textarea" :rows="4"/>
    <p>disabled: true</p>
    <Input placeholder="请输入内容" disabled/>
    <p>clearable: true</p>
    <Input placeholder="请输入内容" clearable/>
    <p>prefix-icon</p>    
    <Input placeholder="请输入内容" prefix-icon="search"/>
    <p>suffix-icon</p>    
    <Input placeholder="请输入内容" suffix-icon="date"/>
    <Input placeholder="请输入内容" suffix-icon="time"/>
  </div>
</template>

<script>
import Input from "@/components/input";
export default {
  name: "page-input",
  components: {
    Input
  },
  data() {
    return {
      input1: "",
      input2: ""
    };
  },
  methods: {
    test() {}
  },
  mounted() {}
};
</script>