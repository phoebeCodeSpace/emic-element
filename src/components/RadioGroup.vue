<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "radio-group",
  props: {
    value: [String, Number]
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  methods: {
    change(value) {
      this.currentValue = value;
      this.$emit("change", value);
      this.$emit("input", value);
      this.updateValue();
    },
    updateValue() {
      this.$children.forEach(child => {
        child.currentValue = this.currentValue;
      });
    }
  },
  watch: {
    value(value) {
      this.currentValue = value;
      this.updateValue();
    }
  },
  mounted() {
    this.updateValue();
  }
};
</script>