<template>
  <label :class="checkboxWrapClass">
        <Icon :type="checked?'checked':'unchecked'"></Icon>
        <input type="checkbox"
            :disabled="disabled"
            :value="label"
            v-model="checked"
            @change="change"
        >
        <slot>{{label}}</slot>
  </label>
</template>

<script>
import { prefixCls } from "@/utils/config";
import { typeOf } from "@/utils/assist";
import Icon from "@/components/icon";
export default {
  name: "checkbox",
  components: {
    Icon
  },
  props: {
    value: [String, Number, Boolean],
    disabled: Boolean,
    label: [String, Number, Boolean]
  },
  computed: {
    checkboxWrapClass() {
      return [`${prefixCls}-checkbox`,
      {[`${prefixCls}-checkbox-disabled`] : this.disabled}
      ];
    }
  },
  data() {
    return {
      checked: false,
      group: false
    };
  },
  methods: {
    change(e) {
      if (this.disabled) {
        return false;
      }
      this.checked = e.target.checked;
      if (this.group) {
        this.$parent.change();
      } else {
        this.$emit('input',this.checked)
      }
      
    }
  },
  mounted() {
    const parent = this.$parent;
    if (this.$parent.$options._componentTag === "CheckboxGroup") {
      this.group = true;
      this.$parent.value.forEach(item => {
        item === this.label && (this.checked = true);
      });
    }else{
       if (typeOf(this.value) === "boolean") {
        this.checked = this.value;
      } else {
        throw "value should be true or false";
      }
    }
  }
};
</script>