<template>
  <div>
    <SwitchBtn v-model="switch1"/>
    <br/>
    <SwitchBtn v-model="switch2"/>
    <br/>
    <SwitchBtn v-model="switch3" disabled/>
    <br/>
    <SwitchBtn v-model="switch4" disabled/>    
  </div>
</template>

<script>
import SwitchBtn from "@/components/switch"
  export default {
    name: 'page-switch',
    components: {
      SwitchBtn
    },
    data() {
      return {
        switch1: false,
        switch2: true,
        switch3: false,
        switch4: true
      }
    }
  }
</script>

<style scoped>

</style>