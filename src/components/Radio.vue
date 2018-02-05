<template>
    <label :class="radioWrapClass">
      <span :class="radioIconClass">
        <input type="radio" :value="currentLabel"
          :checked="currentValue===currentLabel" :disabled="disabled"
          @change="change"
        />
      </span>
      <span>
          <slot>{{currentLabel}}</slot>
      </span>
    </label>
</template>

<script>
import { prefixCls } from "@/utils/config";
import { typeOf } from "@/utils/assist";

export default {
  name: "radio",
  props: {
    value: [String, Number, Boolean],
    label: [String, Number],
    disabled: Boolean
  },
  data() {
    return {
      currentValue: this.value,
      currentLabel: this.label,
      group: false
    };
  },
  computed: {
    radioWrapClass() {
      return [
        `${prefixCls}-radio`,
        {
          [`${prefixCls}-radio-disabled`]: this.disabled
        }
      ];
    },
    radioIconClass() {
      return [
        `${prefixCls}-radio-icon`,
        {
          [`${prefixCls}-radio-icon-checked`]:
            this.currentValue === this.currentLabel
        }
      ];
    }
  },
  methods: {
    change(e) {
      if (this.group) {
        this.$parent.change(e.target.value);
      } else {
        this.currentValue = true;
        this.$emit("input", true);
      }
    }
  },
  watch: {
    currentValue(val) {
      this.currentValue = val;
    }
  },
  mounted() {
    const parent = this.$parent;
    if (this.$parent.$options._componentTag === "radio-group") {
      this.group = true;
      this.currentValue = this.value;
    } else {
      if (typeOf(this.value) === "boolean") {
        this.currentLabel = this.value ? this.currentValue : !this.currentValue;
      } else {
        throw "value should be true or false";
      }
    }
  }
};
</script>