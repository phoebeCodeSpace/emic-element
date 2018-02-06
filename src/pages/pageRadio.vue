<template>
  <div>
    <table>
      <thead>
        <td>属性</td>
        <td>说明</td>
      </thead>
      <tbody>
        <tr>
          <td>data</td>
          <td>
            双向绑定数据
            <br/>
            单独使用 <code>Radio</code> 时 类型只能为 [Boolean]
            <br/>
            使用  <code>RadioGroup</code>时，类型可以为 [String, Number, Boolean] </td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>[Boolean]是否置灰</td>
        </tr>
        <tr>
          <td>label</td>
          <td>[String, Number]当前选项的value值</td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>
        <td>事件名</td>
        <td>说明</td>
      </thead>
      <tbody>
        <tr>
          <td>change</td>
          <td>选项状态发生变化时</td>
        </tr>
      </tbody>
    </table>
    <p>- 单个单选框</p>
    <p>single - {{radio1}}</p>
    <Radio v-model="radio1">单个单选框</Radio>
    <p>single - {{radio2}}</p>
    <Radio v-model="radio2">单个单选框</Radio>

    <br/>
    <br/>
    <br/>

    <p>- 单选框组</p>
    <p>group1 - {{radio3}}</p>
    <radio-group v-model="radio3">
        <Radio label="A" disabled>单选框A</Radio>
        <Radio label="B">单选框B</Radio>
        <Radio label="C">单选框C</Radio>
    </radio-group>
    <p>group2 - {{radio4}}</p>
    <radio-group v-model="radio4">
        <Radio label="1">单选框1</Radio>
        <Radio label="2">单选框2</Radio>
        <Radio label="3">单选框3</Radio>
    </radio-group>
  </div>
</template>

<script>
import {Radio,RadioGroup} from "@/components/radio";

export default {
  name: "page-radio",
  components: {
    Radio,
    RadioGroup
  },
  data() {
    return {
      radio1: false,
      radio2: true,
      radio3: "B",
      radio4: "1"
    };
  }
};
</script>