<template>
  <div :class="cropperWrap">
    <div class="clearfix">
      <!-- 剪裁区域 -->
      <div class="cropper-area">
        <h5>图片上传</h5>
        <div class="cropper-block" :style="cropperBlockStyle">
            <input type="file" ref="file" hidden accept="image/jpeg,image/jpg,image/png" @change="readImage">
            <div class="canvas-box" v-if="originalImg">
              <canvas 
                  :width="cropperCanvasSize.width" :height="cropperCanvasSize.height"
                  ref="cropper"
                  :class="{'movement':movement}"
              ></canvas>
            </div>
            <div v-else>
              <Button @click="selectPic" type="primary">点击上传</Button>
              <p class="tips">{{defaultTips}}</p>
            </div>
        </div>
        <Button @click="selectPic" class="re-upload" v-if="originalImg">重新上传</Button>
      </div>
      <!-- 预览区域 -->
      <div class="preview-area">
        <h5>预览</h5>
         <div class="preview-block" :style="previewBlockStyle">
              <canvas 
              :width="previewSize" :height="previewSize"
              ref="preview"></canvas>                                   
          </div>
          <p class="tips">{{`${previewSize}*${previewSize}px`}}</p>
      </div>
    </div>
    <div class="action-area">
        <Button type="primary" @click="comfirm">确认</Button>
        <Button @click="clear">取消</Button>      
    </div>

  </div>
</template>

<script>
import { prefixCls } from "@/utils/config";
import { oneOf } from "@/utils/assist";
import ajax from "@/components/upload/ajax";

import Button from "@/components/button";
export default {
  name: "cropper",
  components: {
    Button
  },
  props: {
    cropperSize: {
      type: Number,
      default: 300
    },
    previewSize: {
      type: Number,
      default: 150
    },
    mask: {
      default: "light",
      validator(value) {
        return oneOf(value, ["light", "dark"]);
      }
    },
    shape:{
      default: "round",
      validator(value) {
        return oneOf(value, ["square", "round"]);
      }
    },
    defaultTips: {
      type: String,
      default: "请选择格式为JPG、PNG的图片"
    },
    uploadProps: {
      type: Object,
      validator(value) {
        const keys = Object.keys(value);
        if (!Object.keys(value).includes("action")) {
          throw "action url is required";
        }
        return true;
      }
    }
  },
  data() {
    return {
      originalImg: null,
      originalImgData: {
        src: "",
        width: 0,
        height: 0
      },
      cropperCanvasSize: {
        width: this.cropperSize,
        height: this.cropperSize
      },
      cropperLocation: {
        X: 0,
        Y: 0
      },
      slectRadius: this.previewSize / 2,
      movement: false
    };
  },
  computed: {
    cropperWrap() {
      return [`${prefixCls}-cropper-wrap`];
    },
    cropperBlockStyle() {
      return {
        width: `${this.cropperSize}px`,
        height: `${this.cropperSize}px`
      };
    },
    previewBlockStyle() {
      return {
        width: `${this.previewSize}px`,
        height: `${this.previewSize}px`,
        borderRadius: this.shape === "round" ? "50%" : 0
      };
    },
    circleCenter: {
      get() {
        return {
          X: this.cropperLocation.X + this.slectRadius,
          Y: this.cropperLocation.Y + this.slectRadius
        };
      },
      set(newVal) {
        let X = newVal.X - this.slectRadius;
        let Y = newVal.Y - this.slectRadius;
        // 设置临界点
        if (this.cropperCanvasSize.width > 2 * this.slectRadius) {
          X < 0 && (X = 0);
          X + 2 * this.slectRadius > this.cropperCanvasSize.width &&
            (X = this.cropperCanvasSize.width - 2 * this.slectRadius);
        }
        if (this.cropperCanvasSize.height > 2 * this.slectRadius) {
          Y < 0 && (Y = 0);
          Y + 2 * this.slectRadius > this.cropperCanvasSize.height &&
            (Y = this.cropperCanvasSize.height - 2 * this.slectRadius);
        }
        this.cropperLocation = { X, Y };
      }
    }
  },
  methods: {
    selectPic() {
      this.$refs.file.click();
    },
    readImage(event) {
      const self = this;
      const rawfile = event.target.files[0];
      const image = new Image();
      let file = {};
      image.src = URL.createObjectURL(rawfile);
      image.onload = () => {
        self.originalImgData = {
          src: image.src,
          width: image.width,
          height: image.height
        };
        file = { ...self.originalImgData, raw: rawfile };

        let cropperFlag = true;
        this.$parent.beforeReadImg && (cropperFlag = this.$parent.beforeReadImg(file));

        if (cropperFlag) {
          self.originalImg = image;
          self.calcCanvasSize();
          setTimeout(() => {
            self.renderCropperImg();
            self.drag();
          }, 50);
        }
      };
    },
    calcCanvasSize() {
      if (this.originalImgData.width > this.originalImgData.height) {
        this.cropperCanvasSize.width = this.cropperSize;
        this.cropperCanvasSize.height =
          this.cropperSize *
          this.originalImgData.height /
          this.originalImgData.width;
      } else {
        this.cropperCanvasSize.height = this.cropperSize;
        this.cropperCanvasSize.width =
          this.cropperSize *
          this.originalImgData.width /
          this.originalImgData.height;
      }
      this.cropperLocation = {
        X: this.cropperCanvasSize.width / 2 - this.slectRadius,
        Y: this.cropperCanvasSize.height / 2 - this.slectRadius
      };
    },
    renderCropperImg() {
      const canvas = this.$refs.cropper;
      const ctx = canvas.getContext("2d");
      const tone = this.mask === "light" ? 255 : 0;

      // 清空画布
      ctx.clearRect(
        0,
        0,
        this.cropperCanvasSize.width,
        this.cropperCanvasSize.height
      );
      ctx.save();

      // 填充图片
      ctx.drawImage(
        this.originalImg,
        0,
        0,
        this.cropperCanvasSize.width,
        this.cropperCanvasSize.height
      );

      // 绘制蒙版
      ctx.beginPath();
      ctx.fillStyle = `rgba(${tone},${tone},${tone},.5)`;
      ctx.fillRect(
        0,
        0,
        this.cropperCanvasSize.width,
        this.cropperCanvasSize.height
      );

      // 绘制裁剪区域
      ctx.save();
      ctx.beginPath();
      ctx.rect(
        this.circleCenter.X - this.slectRadius,
        this.circleCenter.Y - this.slectRadius,
        2 * this.slectRadius,
        2 * this.slectRadius
      );
      ctx.clip();
      ctx.closePath();
      ctx.drawImage(
        this.originalImg,
        0,
        0,
        this.cropperCanvasSize.width,
        this.cropperCanvasSize.height
      );
      this.renderPreviewImg(canvas);
      ctx.fillStyle = `rgba(${tone},${tone},${tone},.5)`;
      ctx.fillRect(
        0,
        0,
        this.cropperCanvasSize.width,
        this.cropperCanvasSize.height
      );

      // 绘制选中区域
      ctx.beginPath();
      if(this.shape === "round"){
      ctx.arc(
        this.circleCenter.X,
        this.circleCenter.Y,
        this.slectRadius,
        0,
        Math.PI * 2,
        true
      );
      }else{
        ctx.rect(this.cropperLocation.X,
        this.cropperLocation.Y,this.slectRadius*2,this.slectRadius*2)
      }
      
      ctx.clip();
      ctx.closePath();
      ctx.drawImage(
        this.originalImg,
        0,
        0,
        this.cropperCanvasSize.width,
        this.cropperCanvasSize.height
      );
      ctx.restore();
    },
    renderPreviewImg(image) {
      const canvas = this.$refs.preview;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, this.slectRadius * 2, this.slectRadius * 2);
      ctx.drawImage(
        image,
        // 剪裁图片
        this.cropperLocation.X,
        this.cropperLocation.Y,
        this.slectRadius * 2,
        this.slectRadius * 2,
        0,
        0,
        this.slectRadius * 2,
        this.slectRadius * 2
      );
    },
    drag() {
      const self = this;
      const canvas = this.$refs.cropper;
      canvas.onmousedown = e => {
        let [lastX, lastY] = [e.offsetX, e.offsetY];
        self.movement = true;
        canvas.onmousemove = e => {
          self.circleCenter = {
            X:
              self.cropperCanvasSize.width > 2 * self.slectRadius
                ? self.circleCenter.X + (e.offsetX - lastX)
                : self.cropperCanvasSize.width / 2,
            Y:
              self.cropperCanvasSize.height > 2 * self.slectRadius
                ? self.circleCenter.Y + (e.offsetY - lastY)
                : self.cropperCanvasSize.height / 2
          };
          self.renderCropperImg();
          [lastX, lastY] = [e.offsetX, e.offsetY];
        };
        canvas.onmouseup = e => {
          self.movement = false;
          canvas.onmousemove = null;
          canvas.onmouseup = null;
        };
      };
    },
    upload() {
      const self = this;
      const canvas = this.$refs.preview;

      if (!HTMLCanvasElement.prototype.toBlob) {
        Object.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
          value(callback, type, quality) {
            const canvas = this;
            setTimeout(() => {
              let binStr = atob(canvas.toDataURL(type, quality).split(",")[1]);
              let len = binStr.length;
              let arr = new Uint8Array(len);
              for (let i = 0; i < len; i++) {
                arr[i] = binStr.charCodeAt(i);
              }
              callback(new Blob([arr], { type: type || "image/png" }));
            });
          }
        });
      }

      canvas.toBlob(blob => {
        const url = URL.createObjectURL(blob);
        !this.uploadProps.name && (this.uploadProps.name = "file");
        ajax({
          ...this.uploadProps,
          file: blob,
          onProgress: e => {
            this.$emit("onProgress", e);
          },
          onSuccess: res => {
            this.$emit("onSuccess", res, url);
            this.clear();
          },
          onError: (err, response) => {
            this.$emit("onError", err, response);
            this.clear();
          }
        });
      });
    },
    comfirm() {
      if (this.$parent.comfirm) {
        this.$parent.comfirm() && this.upload();
        return;
      }
      this.upload();
    },
    clear() {
      this.originalImg = null;
      (this.originalImgData = {
        src: "",
        width: 0,
        height: 0
      }),
        this.$refs.cropper
          .getContext("2d")
          .clearRect(
            0,
            0,
            this.cropperCanvasSize.width,
            this.cropperCanvasSize.height
          );
      this.$refs.preview
        .getContext("2d")
        .clearRect(0, 0, this.previewSize, this.previewSize);
      this.$emit("clear");
    }
  },
  mounted() {}
};
</script>