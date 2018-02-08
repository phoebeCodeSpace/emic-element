<template>
    
    <div class="modal">
        <transition name="fade-in">
          <div class="modal-mask" @click="maskClose" v-show="visible"></div>
        </transition>        
        <transition name="modal-fade-up" @after-leave="leave">
          <div class="modal-content" v-drag="draggable" ref="modal-content" v-show="visible">
              <div class="modal-header" :class="{'drag': draggable}" v-if="showHeader">
                  <slot name="title">
                      {{title}}
                  </slot>
            </div>
              <span class="modal-close" @click="cancel" v-if="showClose">
                  <i class="el-icon-close"></i>
              </span>                
              
              <div class="modal-body">
                  <slot>{{content}}</slot>
              </div>
              <div class="modal-footer"  v-if="showFooter">
                  <slot name="footer" v-if="btnChange">
                      <el-button @click="comfirm">{{ comfirmText }}</el-button>
                      <el-button @click="cancel" type="primary">
                          {{ cancelText }}
                      </el-button>
                  </slot>
                  <slot name="footer" v-else>
                      <el-button @click="cancel" v-if="showCancel">{{ cancelText }}</el-button>
                      <el-button type="primary" @click="comfirm" :disabled="comfirmBtnDisabled || wait" :class="{'loading-btn':wait}">
                          <Loading v-show="wait"/>
                          {{ comfirmText }}
                      </el-button>
                  </slot>
              </div>
          </div>
        </transition>
    </div>
    

</template>

<script>
import Loading from "./Loading";
export default {
  name: "modal",
  // mixins: [emitter],
  components: {
    Loading
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: "提示"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    comfirmText: {
      type: String,
      default: "确定"
    },
    comfirmBtnDisabled: {
      type: Boolean,
      default: false
    },
    content: {
      type: String
    },
    draggable: {
      type: Boolean,
      default: false
    },
    maskClosable: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: true
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    // @cancel & @comfirm 事件互换
    btnChange: Boolean
  },
  data() {
    return {
      visible: this.value,
      wait: false
    };
  },
  directives: {
    drag: {
      bind(el, binding) {
        if (binding.value) {
          const $header = el.querySelector(".modal-header");
          $header.onmousedown = function(e) {
            const disX = e.clientX - el.offsetLeft;
            const disY = e.clientY - el.offsetTop;
            document.onmousemove = function(e) {
              const l = e.clientX - disX;
              const t = e.clientY - disY;
              el.style.left = l + "px";
              el.style.top = t + "px";
            };
            document.onmouseup = function(e) {
              document.onmousemove = null;
              document.onmouseup = null;
            };
          };
        }
      }
    }
  },
  methods: {
    maskClose() {
      if (this.maskClosable) {
        this.cancel();
      }
    },
    comfirm() {
      if (this.loading) {
        this.wait = true;
      }
      this.$emit("comfirm");
    },
    cancel() {
      this.$emit("cancel");
      this.$emit("update:value", false);
    },
    leave(el, done) {
      this.$emit("leave", el, done);
    }
  },
  watch: {
    value(val) {
      this.visible = val;
      if (!val) {
        this.wait = false;
        // document.body.classList.remove("overflow-hidden");
      } else {
        // document.body.classList.add("overflow-hidden");
      }
    }
  },
  destroyed() {
    if (this.appendToBody && this.$el) {
      this.$el.parentNode.removeChild(this.$el);
      this.wait = false;
    }
  }
};
</script>

<style lang="scss">
@import "../../styles/core";
$padding: 16px;
.modal-mask {
  @include fullscreen();
  background-color: rgba(180, 188, 205, 0.35);
  z-index: 999;
}
.modal-content {
  width: 543px;
  max-height: calc(100vh - 120px);
  @include center-translate();
  position: fixed;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 5px 10px rgba(10, 139, 197, 0.24);
  z-index: 1000;
}
.modal-header {
  font-size: 18px;
  line-height: 1;
  padding: $padding;
  margin-bottom: 8px;
  &.drag {
    cursor: move;
    user-select: none;
  }
}
.modal-close {
  position: absolute;
  right: $padding;
  top: $padding;
  line-height: 1;
  cursor: pointer;
  font-size: 18px;
  color: #c0c6d4;
}
.modal-body {
  color: #5a5a5a;
  padding: 8px $padding $padding;
  // max-height: calc(calc(100vh - 120px) - 130px);
  overflow-y: auto;
}
.modal-footer {
  text-align: right;
  padding: $padding;
  .el-button {
    vertical-align: middle;
  }
  .loading-btn {
    @include size(70px,40px);
    padding: 0;
    position: relative;
    font-size: 0;
    vertical-align: middle;
    .el-loading-spinner .path {
      stroke: #fff;
      stroke-width: 4;
    }
  }
}
// animation
$delay: 0.25s;
.fade-in-enter-active,
.fade-in-leave-active {
  transition: opacity 0.5s $delay;
}
.fade-in-enter,
.fade-in-leave-to {
  opacity: 0;
}
.modal-fade-up-enter-active,
.modal-fade-up-leave-active {
  transition: transform 0.3s $delay, opacity 0.2s $delay;
}
.modal-fade-up-enter,
.modal-fade-up-leave-to {
  transform: translate3d(-50%, -80%, 0);
  opacity: 0;
}

// 协议弹框
.service-modal {
  .modal-header {
    text-align: center;
  }
  .modal-content {
    width: 600px;
  }
  .modal-body {
    max-height: 608px;
  }
  .modal-footer {
    text-align: center;
    padding: 20px 16px;
  }
  .btn-service-modal-close {
    width: 102px;
  }
}
</style>
