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
    width: 400px;
    height: 400px;
    padding: 10px;
    background-color: #c1fffe96;
    border-radius: 20px;
    position: relative;
    top: 10px;
    left: 35%;
  }
  
  .title {
    margin-left: 20px;
  }
  .container {
    position: absolute;
    left: 16%;
    padding-top: 10px;
  }
  .copy-message {
    position: absolute;
    bottom: 20px;
    left: 25%;
    width: 200px;
    height: 35px;
    border-radius: 20px;
    background-color: #bab6b6;
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
    height: 35px;
    margin-right: 20px;
    border: 2px solid rgb(9, 190, 121);
    border-radius: 4px;
  }
  .bt {
    color: rgb(251, 251, 251);
    font-size: larger;
    background-color: rgb(23, 179, 213);
    border: 3px solid rgb(9, 190, 121);
    border-radius: 4px;
    width: 60px;
    height: 40px;

  }
  </style>