<template>
    <div class="cover">  
        <div >
            <h1 class="title">Xin Chào bạn !</h1>
        </div>
        <div class="container">
            <input class="input" v-model="text" type="text" placeholder="Nhập văn bản">
            <button class="bt" @click="copyText">COPY</button>
        </div>
        <div v-if="showCopyMessage" class="copy-message"><b class="b1">Copied</b> <b class="b2">ok</b></div>
    </div>
  </template>
  
  <script  lang="ts">
    export default {
        data() {
            return {
                text: '',
                showCopyMessage: false
            };
        },
        methods: {
        copyText() {
            const textarea = document.createElement('textarea');
            textarea.value = this.text;
            document.body.appendChild(textarea);
            textarea.select();
            // document.execCommand('copy');
            navigator.clipboard.writeText(this.text)
            console.log(this.text);
            document.body.removeChild(textarea);
            this.showCopyMessage = true;
  
            // Ẩn thông báo sau 2 giây
            setTimeout(() => {
                this.showCopyMessage = false;
            }, 1200);
        }
        }
    };
  </script>
  
  <style>
  .cover    {
    border: 2px solid rgb(0, 0, 0);
    width: 350px;
    height: 550px;
    padding: 10px;
    background-color: #c1fffe96;
    border-radius: 20px;
    position: relative;
    top: 10px;
    left: 37%;
  }
  
  .title {
    margin-top: 30px;
    margin-left: 20px;
    font-weight: 1000;
    font-size: 40px;
  }
  .container {
    position: absolute;
    left: 16%;
    padding-top: 10px;
  }
  .copy-message {
    position: absolute;
    bottom: 50px;
    left: 22%;
    width: 200px;
    height: 35px;
    border-radius: 20px;
    background-color: #b8b5b5;
  }
  .copy-message b {
    position: absolute;
    font-size:larger;
    top: 50%;
    transform: translateY(-50%);
  }
  .b1 {
    /* top: 25%; */
    left: 20px;
  }
  .b2 {
    /* top: 25%; */
    right: 20px;
  }
  
  .input {
    height: 38px;
    margin-right: 20px;
    border: 2px solid rgb(9, 190, 121);
    border-radius: 7px;
  }
  .bt {
    color: rgb(20, 19, 19);
    font-size: 24px;
    background-color: #D9D9D9;
    border-radius: 10px;
    width: 70px;
    height: 50px;
    font-weight: 1000;
  }
  </style>