<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class="dialog">
        <p class="dialog_header">
            <span class="fright"><button class="btn" v-on:click="clickXBtn">X</button></span>
            <span v-text="title"></span> - <span v-text="dateStr"></span>
        </p>
        <p class="dialog_imgs">
            <img v-bind:src="imgs[0]" />
        </p>
        <p class="dialog_body">
            <span v-text="text"></span>
            <hr />
            <span class="chip" v-for="tag in tags" v-text="tag"></span>
        </p>
    </div>
</template>
<script>
    export default {
        name: 'commonDialog',
        data() {
            return {
            }
        },
        props: [
            'title',
            'imgs',
            'text',
            'tags',
            'regDate',
            'link'
        ],
        methods: {
            clickXBtn() {
                this.$emit('xClick');
            }
        },
        computed: {
            dateStr() {
                const regDate =new Date(this.regDate);
                return regDate.getFullYear() + "." + (regDate.getMonth()+1) + "." + regDate.getDate();
            }
        }
    }
</script>
<style scope>
    .dialog {
        position: fixed;
        width: 500px;
        left: 50%;
        top: 50%;
        margin-left: -250px;
        margin-top: -250px;
        background: rgba(238, 110, 105, 1);
    }
    .dialog_header {
        color: #FFF;
        border-bottom: #FFF 1px solid;

    }
    .dialog_imgs img{
        position:relative;
        width: 500px;
    }
    .dialog_body {
        clear: both;

    }
    .fright {
        float: right;
    }
</style>