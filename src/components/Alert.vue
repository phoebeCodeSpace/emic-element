<template>
  <transition name="fade-up">
    <div :class="wrapClasses" v-show="!closed">
      <div :class="`${prefixCls}-alert-msg`">
        <Icon :type="type" v-if="showIcon"/>
        <slot></slot>
      </div>
      <span :class="`${prefixCls}-alert-close`" v-if="closeable" @click="close">
        <slot name="close">
          <Icon type="close"/>
        </slot>
      </span>
    </div>
  </transition>
</template>

<script>
import { prefixCls } from "@/utils/config";
import { oneOf } from "@/utils/assist";
import Icon from "@/components/icon";
export default {
  name: "Alert",
  components: { Icon },
  data() {
    return {
      prefixCls,
      closed : false
    };
  },
  computed: {
    wrapClasses() {
      return [
        `${prefixCls}-alert`, `${prefixCls}-alert-${this.type}`,
        {[`${prefixCls}-alert-center`]:this.center}
      ];
    }
  },
  props: {
    type: {
      validator(value) {
        return oneOf(value, ["info", "success", "warning", "error"]);
      },
      default: "info"
    },
    closeable: Boolean,
    showIcon: {
      type: Boolean,
      default: true
    },
    center: Boolean
  },
  methods: {
    close(e) {
      this.closed = true;
      this.$emit('close',e)
    }
  },
};
</script>