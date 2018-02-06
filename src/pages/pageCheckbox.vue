<template>
  <div>
    <h3>单个Checkbox : {{data1}}</h3>
    <Checkbox v-model="data1"> checkbox </Checkbox>
    <Checkbox v-model="data1" disabled> checkbox </Checkbox>
    <br/>

    <h3>CheckboxGroup : {{data2}}</h3>
    <CheckboxGroup v-model="data2">
        <Checkbox label="1"> 香蕉 </Checkbox>
        <Checkbox label="2" disabled> 苹果 </Checkbox>
        <Checkbox label="3"> 例子 </Checkbox>
    </CheckboxGroup>
  </div>
</template>

<script>
import {Checkbox,CheckboxGroup} from "@/components/checkbox"
  export default {
    name: "page-checkbox",
    components: {
      Checkbox,
      CheckboxGroup
    },
    data() {
      return {
        data1: false,
        data2: ["2"]
      }
    },
  }
</script>