<template>
  <div class="signature">
    <!-- 电子签名 -->
    <div class="canvas">
      <canvas
        id="myCanvas"
        ref="canvas"
        :width="canvasWidth"
        :height="canvasHeight"
        @touchstart="touchStart"
        @touchmove="touchMove"
        @touchend="touchEnd"
        @mousedown="mouseDown"
        @mousemove="mouseMove"
        @mouseup="mouseUp"
      >
        您的浏览器不支持 HTML5 canvas 标签。
      </canvas>
    </div>
    <div class="save-btn" @click.stop.prevent="commit">提交签名</div>
    <div class="back-btn" @click.stop.prevent="routeGo">
      <i class="icon"></i>
      <span class="label">返回</span>
    </div>
    <div class="clear-btn" @click.stop.prevent="clear">
      <i class="icon"></i>
      <span class="label">清空</span>
    </div>
  </div>
</template>

<script>
// import { Toast } from "vant";
// import { HTTP_APIS } from "apis";
export default {
  data() {
    return {
      canvasWidth: window.innerWidth,
      canvasHeight: window.innerHeight,
      canvasImg: "", // 签名图片地址
      ctx: null, //画板
      stage_info: [], // 移动端按下点到屏幕的偏差
      isDown: false, //是否按下
      points: [], //按下点组合
      startX: 0, // 起始点x坐标
      startY: 0, // 起始点y坐标
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    // 初始化画板
    init() {
      let canvas = this.$refs.canvas;
      this.ctx = canvas.getContext("2d");
      this.ctx.strokeStyle = "#000";
      this.stage_info = canvas.getBoundingClientRect();
    },
    // pc
    //  mouseDown(ev) {
    //    let e = ev || event;
    //    e.preventDefault();
    //    this.isDown = true;
    //    let obj = {
    //      x: e.offsetX,
    //      y: e.offsetY,
    //    };
    //    this.startX = obj.x;
    //    this.startY = obj.y;
    //    this.ctx.beginPath();
    //    this.ctx.moveTo(this.startX, this.startY);
    //    this.ctx.lineTo(obj.x, obj.y);
    //    this.ctx.stroke();
    //    this.ctx.closePath();
    //    this.points.push(obj);
    //  },
    //  mouseMove(ev) {
    //    let e = ev || event;
    //    e.preventDefault();
    //    if (this.isDown) {
    //      let obj = {
    //        x: e.offsetX,
    //        y: e.offsetY,
    //      };
    //      this.ctx.beginPath();
    //      this.ctx.moveTo(this.startX, this.startY);
    //      this.ctx.lineTo(obj.x, obj.y);
    //      this.ctx.stroke();
    //      this.ctx.closePath();
    //      this.startY = obj.y;
    //      this.startX = obj.x;
    //      this.points.push(obj);
    //    }
    //  },
    //  mouseUp(ev) {
    //    let e = ev || event;
    //    e.preventDefault();
    //    let obj = {
    //      x: ev.offsetX,
    //      y: ev.offsetY,
    //    };
    //    this.ctx.beginPath();
    //    this.ctx.moveTo(this.startX, this.startY);
    //    this.ctx.lineTo(obj.x, obj.y);
    //    this.ctx.stroke();
    //    this.ctx.closePath();
    //    this.points.push(obj);
    //    this.points.push({ x: -1, y: -1 });
    //    this.isDown = false;
    //  },
    // mobile
    touchStart(ev) {
      let e = ev || event;
      e.preventDefault();
      if (e.touches.length == 1) {
        let obj = {
          x: e.targetTouches[0].clientX - this.stage_info.left,
          y: e.targetTouches[0].clientY - this.stage_info.top,
        };
        this.startX = obj.x;
        this.startY = obj.y;
        this.ctx.beginPath();
        this.ctx.moveTo(this.startX, this.startY);
        this.ctx.lineTo(obj.x, obj.y);
        this.ctx.stroke();
        this.ctx.closePath();
        this.points.push(obj);
      }
    },
    touchMove(ev) {
      let e = ev || event;
      e.preventDefault();
      if (e.touches.length == 1) {
        let obj = {
          x: e.targetTouches[0].clientX - this.stage_info.left,
          y: e.targetTouches[0].clientY - this.stage_info.top,
        };
        this.ctx.beginPath();
        this.ctx.moveTo(this.startX, this.startY);
        this.ctx.lineTo(obj.x, obj.y);
        this.ctx.stroke();
        this.ctx.closePath();
        this.startX = obj.x;
        this.startY = obj.y;
        this.points.push(obj);
      }
    },
    touchEnd(ev) {
      let e = ev || event;
      e.preventDefault();
      if (e.touches.length == 1) {
        let obj = {
          x: e.targetTouches[0].clientX - this.stage_info.left,
          y: e.targetTouches[0].clientY - this.stage_info.top,
        };
        this.startX = obj.x;
        this.startY = obj.y;
        this.ctx.beginPath();
        this.ctx.moveTo(this.startX, this.startY);
        this.ctx.lineTo(obj.x, obj.y);
        this.ctx.stroke();
        this.ctx.closePath();
        this.points.push(obj);
      }
    },
    // 返回
    routeGo() {
      this.$router.go(-1);
    },
    //清空
    clear() {
      this.ctx.clearRect(
        0,
        0,
        this.$refs.canvas.width,
        this.$refs.canvas.height
      );
      this.points = [];
    },
    //提交签名
    commit() {
      this.canvasImg = this.$refs.canvas.toDataURL(); //签名img
      console.log(this.canvasImg); //保存签名的base64字符串
    },
    //将base64转换为文件
    dataURLtoFile(canvasImg, filename) {
      var arr = canvasImg.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    },
  },
};
</script>

<style>
.signature {
  min-height: 100vh;
  background: #fff;
  position: relative;
}
.canvas {
  font-size: 0;
}
.save-btn {
  position: absolute;
  top: 50%;
  left: -48px;
  z-index: 9;
  margin-top: -20px;
  transform: rotate(90deg);
  transform-origin: center center;
  font-size: 18px;
  color: #fcfcfc;
  line-height: 25px;
  padding: 8px 43px;
  background: linear-gradient(
    90deg,
    rgba(57, 115, 230, 1) 0%,
    rgba(57, 115, 230, 1) 100%
  );
  border-radius: 2px;
}
.back-btn {
  position: absolute;
  top: 14px;
  right: -26px;
  z-index: 9;
  transform: rotate(90deg);
  transform-origin: left top;
  display: flex;
  flex-direction: column;
}
.icon {
  display: inline-block;
  width: 42px;
  height: 42px;
  /* background: url("../../assets/images/signature_back.png") no-repeat center */
  /* center; */
  background-size: contain;
}
.label {
  font-size: 16px;
  color: #d8d8d8;
  text-align: center;
}
.clear-btn {
  position: absolute;
  bottom: 0;
  right: -26px;
  z-index: 9;
  transform: rotate(90deg);
  transform-origin: left top;
  display: flex;
  flex-direction: column;
}
.icon {
  display: inline-block;
  width: 42px;
  height: 42px;
  /* background: url("../../assets/images/signature_clear.png") no-repeat center */
  /* center; */
  background-size: contain;
}
.label {
  font-size: 16px;
  color: #d8d8d8;
  text-align: center;
}
</style>

