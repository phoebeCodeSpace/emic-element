<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "checkbox-group",
  props: {
    value: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  methods: {
    change() {
      this.updateModel();
      this.$emit("input", this.currentValue);
    },
    updateModel() {
      const children = this.$children;
      const model = []
      children.forEach(item => {
        if (item.$options._componentTag === "Checkbox") {
          item.checked && model.push(item.label)
        }
      });
      this.currentValue = model
    }
  },
  mounted() {
    this.updateModel();
  }
};
</script>