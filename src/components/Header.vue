<template>
  <header class="flex">
      <div class="logo">
          <!-- <img src="./../assets/logo.png" alt=""> -->
      </div>
      <div class="flex-1"></div>
      <ul class="flex" :style="menuStyle">
          <li><a>home</a></li>
          <li><a>vue</a></li>
      </ul>
      <button class="toggle-btn" @click="toggleBtn($event)">
        <span style="margin-top: 0;"></span>
        <span></span>
        <span></span>
      </button>
  </header>
</template>

<script>
export default {
    data() {
        return {
            menuStyle: {display: 'none'}
        }
    },
    methods: {
        toggleBtn(e) {
            (window.event || e).stopPropagation();
            if (this.menuStyle.position) {
                this.menuStyle = {
                    display: 'none'
                };
            } else {
                this.menuStyle = {
                    position: 'absolute',
                    top: '52px',
                    right: 0,
                    backgroundColor: '#ccc',
                    display: 'block'
                }; 
            }
        }
    },
    mounted() {
        document.onclick = () => {
            this.menuStyle = {
                display: 'none'
            };
        }
    },
}
</script>

<style lang="scss">
    header{
        box-shadow: 0px 0px 15px 0px rgba(132,132,132,0.2);
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        height: 52px;
        line-height: 52px;
        background-color: #fff;
        .logo{
            height: 36px;
            img{
                height: 100%;
            }
        }
        ul{
            li{
                padding: 0 6px;
            }
        }
        .toggle-btn{
            padding: 5px 8px;
            background-color: #fff;
            border: 1px solid #666;
            border-radius: 4px;
            margin: 10px;
            display: none;
            span{
                display: block;
                width: 14px;
                height: 1px;
                background-color: #666;
                margin-top: 5px;
            }
        }
    }
    
  @media screen and (max-width: 767px) {
    header{
        ul{
            // display:none !important;
            
            li{
                line-height: 30px;
            }
        }
        .toggle-btn{
            display: block;
        }
    }
  }
</style>