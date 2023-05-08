<template>
  <div v-if="show" class="modal-container two" @click="hideModal">
    <div class="modal-background">
      <div @click.stop class="modal">
        <i class="fa-solid fa-xmark" @click="hideModal"></i>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : "ModalWindow",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideModal() {
      document.body.removeAttribute('style');
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped lang="scss">
.fa-xmark {
  position: absolute;
  right: 21px;
  top: 21px;
  cursor: pointer;
}
.modal-container {
  position: fixed;
  display: table;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  transform: scale(0);
  z-index: 10;
  &.two {
    transform:scale(1);
    .modal-background {
      background:rgba(0,0,0,.0);
      animation: fadeIn .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
      .modal {
        opacity:0;
        animation: scaleUp .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
      }
    }
    + .content {
      animation: scaleBack .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
    }
    &.out {
      animation: quickScaleDown 0s .5s linear forwards;
      .modal {
        animation: scaleDown .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
      }
      .modal-background {
        animation: fadeOut .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
      }
      + .content {
        animation: scaleForward .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
      }
    }
  }
  &.modal-active {
    overflow: hidden;
  }

}
.modal-background {
  display:table-cell;
  background:rgba(0,0,0,.8);
  text-align:center;
  vertical-align:middle;
  .modal {
    background: #faf9f8;
    padding:50px;
    display:inline-block;
    border-radius:3px;
    font-weight:300;
    position:relative;
    h2 {
      font-size:25px;
      line-height:25px;
      margin-bottom:15px;
    }
    p {
      font-size:18px;
      line-height:22px;
    }
    .modal-svg {
      position:absolute;
      top:0;
      left:0;
      height:100%;
      width:100%;
      border-radius:3px;
      rect {
        stroke: #fff;
        stroke-width: 2px;
        stroke-dasharray: 778;
        stroke-dashoffset: 778;
      }
    }
  }
}
@keyframes fadeIn {
  0% {
    background:rgba(0,0,0,.0);
  }
  100% {
    background:rgba(0,0,0,.7);
  }
}
@keyframes scaleUp {
  0% {
    transform:scale(.8) translateY(1000px);
    opacity:0;
  }
  100% {
    transform:scale(1) translateY(0px);
    opacity:1;
  }
}
@keyframes scaleBack {
  0% {
    transform:scale(1);
  }
  100% {
    transform:scale(.85);
  }
}
@keyframes quickScaleDown {
  0% {
    transform:scale(1);
  }
  99.9% {
    transform:scale(1);
  }
  100% {
    transform:scale(0);
  }
}
@keyframes fadeOut {
  0% {
    background:rgba(0,0,0,.7);
  }
  100% {
    background:rgba(0,0,0,.0);
  }
}
@keyframes scaleDown {
  0% {
    transform:scale(1) translateY(0px);
    opacity:1;
  }
  100% {
    transform:scale(.8) translateY(1000px);
    opacity:0;
  }
}
@keyframes scaleForward {
  0% {
    transform:scale(.85);
  }
  100% {
    transform:scale(1);
  }
}
</style>