<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <!--<div>-->
        <!--<div class="col s12 m4">-->
            <!--<div class="card hoverable large">-->
                <!--<div class="card-image">-->
                    <!--<img v-bind:src="imgs[0]">-->
                    <!--<span class="card-title" v-text="title"></span>-->
                <!--</div>-->
                <!--&lt;!&ndash;<div class="card-content">&ndash;&gt;-->
                    <!--&lt;!&ndash;<p v-text="text"></p>&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--<div class="card-action">-->
                    <!--<p>-->
                        <!--<span class="chip" v-for="tag in tags">#{{tag}} </span>-->
                    <!--</p>-->
                    <!--<a v-bind:href="link" target="_blank">[원문보기]</a>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
    <!--</div>-->
    <div class="col s12 m4">
        <div class="mycard hoverable">
            <img v-bind:src="imgs[0]">
            <span v-text="title"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'card',
    data() {
        return {}
    },
    props: [
        'title',
        'imgs',
        'tags',
        'link',
        'text'
    ],
}
</script>

<style scope>
    .mycard {
        height: 300px;
        position: relative;
        align-content: center;
        margin: 10px 0 0 0;
        color: #FFFFFF;
        background: rgba(238, 110, 105, .4);
    }
    .mycard img {width: 100%;}
    .mycard span {
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: right;
        padding-right: 30px;
    }
</style>