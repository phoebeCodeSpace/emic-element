import Vue from 'Vue'
import Modal from '@/components/common/Modal'
/* eslint-disable */
// import merge from "element-ui/src/utils/merge"
// type :
// MessageTip:info/success/error
// MessageBox:warning/success

const merge =
  (...sources) => Object.assign({}, ...sources);

const transitions = {
  'transition': 'transitionend',
  'OTransition': 'oTransitionEnd',
  'MozTransition': 'transitionend',
  'WebkitTransition': 'webkitTransitionEnd'
}

/**
 * Message
 */
class Message {
  constructor() {}
  show(opts) {
    const self = this;
    const msg = this.render(opts)
    const msgElement = msg.$mount().$el;
    let timer = null;

    document.body.appendChild(msgElement)

    if (opts.duration) {
      timer = setTimeout(() => {
        self.close(msgElement, opts.callback);
        clearTimeout(timer);
      }, opts.duration + opts.animationDuration)
    }
  }
  close(element, callback) {
    let flag = true;
    element.classList.add('fade-up');
    const transitionEvent = (() => {
      for (let t in transitions) {
        return (element.style[t] !== undefined) && transitions[t]
      }
    })()
    element.addEventListener(transitionEvent, (event) => {
      if (callback) {
        flag && document.body.removeChild(element) && callback()
      } else {
        flag && document.body.removeChild(element)
      }
      flag = false;
    }, false);
  }
  render(opts) {
    const self = this;
    if (opts.name === 'message-tip') {
      return new Vue({
        name: opts.name,
        render(h) {
          return h('div', {
            class: ['message-tip', `message-${opts.icon}`],
            style: {
              top: `${opts.top}px`,
              animation: `${opts.animationName} ${opts.animationDuration / 1000}s`
            }
          }, [
            h('i', {
              class: ['icon-message', `icon-message-${opts.icon}`]
            }), opts.content
          ])
        }
      })
    }
    if (opts.name === 'message-box') {
      const {
        value,
        title,
        showCancel,
        comfirmText,
        cancelText,
        maskClosable,
        btnChange,
        showClose
      } = opts;
      const attrs = {
        value,
        title,
        showCancel,
        comfirmText,
        cancelText,
        maskClosable,
        btnChange,
        showClose
      }
      return new Vue({
        name: "message-box",
        render(h) {
          const messageBoxVnod = this;
          return h('Modal', {
            class: ['message-box', 'fade-in', `message-box-${opts.icon}`, opts.extraClass],
            attrs,
            on: {
              cancel() {
                opts.cancelCallback && opts.cancelCallback();
                messageBoxVnod.$refs.message.visible = false
              },
              comfirm() {
                opts.successCallback && opts.successCallback()
                messageBoxVnod.$refs.message.visible = false
              },
              leave() {
                document.body.removeChild(messageBoxVnod.$refs.message.$mount().$el);
              }
            },
            ref: 'message'
          }, [
            h('i', {
              class: ['icon-message', `icon-message-${opts.icon}`]
            }),
            h('div', {
              class: ['message-content']
            }, opts.content)
          ])
        },
        components: {
          Modal
        }
      })
    }
  }
}

/**
 * MessageTip
 */
class MessageTip extends Message {
  constructor(...arg) {
    super(...arg)
    this.defaults = {
      name: "message-tip",
      duration: 1500,
      animationName: 'message',
      animationDuration: 500,
      callback: () => {}
    }
  }
  $info(opts) {
    const defaults = {
      icon: "info",
      content: "消息提示信息"
    }
    this.show(merge(this.defaults, defaults, opts))
  }
  $success(opts) {
    const defaults = {
      icon: "success",
      content: "成功提示信息"
    }
    this.show(merge(this.defaults, defaults, opts))
  }
  $error(opts) {
    const defaults = {
      icon: "error",
      content: "错误提示信息"
    }
    this.show(merge(this.defaults, defaults, opts))
  }
}

/**
 * MessageBox
 */
class MessageBox extends Message {
  constructor(...args) {
    super(...args)
    this.defaults = {
      name: "message-box",
      value: true,
      showCancel: true,
      comfirmText: "确定",
      maskClosable: false,
      extraClass: "",
      btnChange: false
    }
  }

  $warning = (opts) => {
    const defaults = {
      title: "确定",
      icon: "warning",
      maskClosable: true
    }
    this.show(merge(this.defaults, defaults, opts))
  }

  $success = (opts) => {
    const defaults = {
      title: "成功",
      icon: "success",
      showCancel: false,
      comfirmText: "我知道了",
      showClose: false
    }
    this.show(merge(this.defaults, defaults, opts))
  }
}

const messageTip = new MessageTip();
const messageBox = new MessageBox();

export {
  messageBox,
  messageTip
};
