<template>
  <div :class="inputWrapClass">
    <template v-if="type!=='textarea'">
      <span class="input-prefix" v-if="prefixIcon">
        <Icon :type="prefixIcon"></Icon>        
      </span>
      <input :class="inputInnerClass"
        :value="currentValue"
        v-bind="$props"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
      >
      <span class="input-suffix">
        <Icon type="error" v-if="clearable && currentValue" @click="clear"></Icon>
        <Icon :type="suffixIcon" v-else-if="suffixIcon"></Icon>
      </span>
    </template>

    <template v-else>
       <textarea 
          :class="inputInnerClass" 
          :value="currentValue" 
          v-bind="$props"
          @input="handleInput"
          @change="handleChange"
          @focus="handleFocus"          
          >
       </textarea>
    </template>
  </div>
</template>

<script>
import { prefixCls } from "@/utils/config";
import { oneOf } from "@/utils/assist";
import Icon from "@/components/icon";
export default {
  name: "Input",
  components: {
    Icon
  },
  props: {
    value: [String, Number],
    // $props
    minlength: Number,
    maxlength: Number,
    placeholder: String,
    readonly: Boolean,
    disabled: Boolean,
    rows: {   /* 针对 type = textarea */
      type: Number,
      default: 2
    },
    type: {
      validator(value) {
        return oneOf(value, ["text", "search", "number",  "textarea"]);
      },
      default: "text"
    },
    clearable: Boolean,
    prefixIcon: String,
    suffixIcon: String
    // foucsed: false
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  computed: {
    inputWrapClass() {
      return [`${prefixCls}-wrap-input`];
    },
    inputInnerClass() {
      return [
        // {[`${prefixCls}-input-foucsed`]:this.foucsed},
        {[`${prefixCls}-input-suffix`]:this.clearable || this.suffixIcon},
        {[`${prefixCls}-input-prefix`]:this.prefixIcon},        
        this.type === "textarea" ? `${prefixCls}-inner-textarea`: `${prefixCls}-inner-input`
      ]
    }
  },
  methods: {
    handleInput(e) {
      const vaule = e.target.value;
      this.$emit("input", vaule);
      this.setCurrentValue(e.target.value);
    },
    handleChange(e) {
      this.$emit("change", e.target.value);
    },
    setCurrentValue(val) {
      this.currentValue = val;
    },
    handleFocus(e){
      // this.foucsed = true
      this.$emit("focus", e);      
    },
    clear(e){
      this.setCurrentValue("");
      this.$emit("clear",e);  
    }
  },
  watch: {
    value(val) {
      this.setCurrentValue(val);
    }
  },
  created() {},
  mounted() {
    // console.log(this.$props);
  }
};
</script>

<style scoped>

</style>