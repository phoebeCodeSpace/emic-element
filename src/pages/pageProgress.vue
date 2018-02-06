<template>
  <div>
    <table>
      <thead>
        <td>参数</td>
        <td>说明</td>
        <td>默认值</td>
      </thead>
      <tbody>
        <tr>
          <td>type</td>
          <td>[String]进度条类型："line"/"circle"</td>
          <td>"line"</td>
        </tr>
        <tr>
          <td>percent</td>
          <td>[Number]百分比</td>
          <td>0</td>
        </tr>
        <tr>
          <td>status</td>
          <td>[String]进度条状态</td>
          <td>"normal"</td>
        </tr>
        <tr>
          <td>strokeWidth</td>
          <td>[Number]进度条宽度</td>
          <td>6（px）</td>
        </tr>
        <tr>
          <td>show-info</td>
          <td>[Boolean]是否展示其他信息</td>
          <td>true</td>
        </tr>
        <tr>
          <td>info-inside</td>
          <td>[Boolean]信息是否展示在内部</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
    <div style="width: 350px">
      <h3>type: "line"</h3>
      <Progress :percent="50"/>
      <Progress :percent="20" status="error"/>       
      <Progress :percent="80" status="success"/>       
      <Progress :percent="50" status="success"><Icon type="success"/>成功</Progress>
      <Progress :percent="50" :strokeWidth="15" :info-inside="true"/>
       </div>
      <br>
      <br>
      <h3>type: "circle"</h3>
      <div style="width: 100px">
        <Progress :percent="50" type="circle"/>
        <Progress :percent="data" type="circle" status="success" />
        <Button @click="add">+</Button>
        <Button @click="minus">-</Button>
        <Progress :percent="10" type="circle" status="error">
          <Icon type="close"/>
        </Progress>
      </div>
  </div>
</template>

<script>
import Progress from "@/components/progress";
import Icon from "@/components/icon";
import Button from "@/components/button";

export default {
  name: "page-progress",
  components: {
    Progress,
    Icon,
    Button
  },
  data() {
    return {
      data: 60
    }
  },
  methods: {
    add() {
      if(this.data+10>100){
        return 100
      }
      this.data +=10
    },
    minus(){
      if(this.data-10<0){
        return 0
      }
      this.data = this.data-10
    }
  },
};
</script>