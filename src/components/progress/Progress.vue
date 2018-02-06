<template>
  <div :class="progressWrapClass">
    <template v-if="type==='line'">
      <div class="progress-bar">
        <div class="progress-bar-outer" :style="progressOuterStyle">
          <div class="progress-bar-inner" :style="progressInnerStyle">
            <span class="progress-info" v-if="infoInside">{{percent}} %</span>          
          </div>
        </div>
      </div>
      <slot v-if="!infoInside">
          <span class="progress-info">{{percent}} %</span>
      </slot>      
    </template>
    <template v-else>
      <svg viewBox="0 0 100 100">
        <path class="progress-circle-track"
        :stroke-width="strokeWidth" 
        :d="pathString"
        ></path>
        <path class="progress-circle-path"
        :stroke-width="strokeWidth" 
         :d="pathString"
         :style="pathStyle"
        >
        </path>
     </svg>
     
       <div class="progress-circle-inner">
         <slot>
         {{percent}} %
         </slot>
       </div>
     
    </template>
  </div>
</template>

<script>
import { prefixCls } from "@/utils/config";
import { oneOf } from "@/utils/assist";
export default {
  name: "progress-bar",
  props: {
    type: {
      type: String,
      default: "line",
      validator(value) {
        return oneOf(value, ["line", "circle"]);
      }
    },
    percent: {
      type: Number,
      default: 0,
      validator(value) {
        return value >= 0 && value <= 100;
      }
    },
    status: {
      type: String,
      default: "normal",
      validator(value) {
        return oneOf(value, ["normal", "success", "error"]);
      }
    },
    strokeWidth: {
      type: Number,
      default: 6
    },
    showInfo: {
      type: Boolean,
      default: true
    },
    infoInside: Boolean
  },
  computed: {
    progressWrapClass() {
      return [
        `${prefixCls}-progress`,
        `${prefixCls}-progress-${this.status}`,
        { "progress-show-info": this.showInfo }
      ];
    },
    progressOuterStyle() {
      return {
        height: `${this.strokeWidth}px`
      };
    },
    progressInnerStyle() {
      return {
        width: `${this.percent}%`,
        lineHeight: `${this.strokeWidth - 2}px`
      };
    },
    radius() {
      return 50 - this.strokeWidth / 2;
    },
    pathString() {
      return `M 50,50 m 0,-${this.radius}
                a ${this.radius},${this.radius} 0 1 1 0,${2 * this.radius}
                a ${this.radius},${this.radius} 0 1 1 0,-${2 * this.radius}`;
    },
    len() {
      return Math.PI * 2 * this.radius;
    },
    pathStyle() {
      return {
        "stroke-dasharray": `${this.len}px ${this.len}px`,
        "stroke-dashoffset": `${(100 - this.percent) / 100 * this.len}px`,
        transition: "stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease"
      };
    }
  },
  mounted() {}
};
</script>