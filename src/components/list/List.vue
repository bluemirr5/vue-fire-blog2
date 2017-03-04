<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
      <top-nav />
      <mugen-scroll :handler="more" :should-handle="!loading">
          <div class="row" >
              <div v-for="item in items">
                  <a v-on:click="onClickItem(item, $event)">
                      <card
                            :key="item.sortNum"
                            :title="item.title"
                            :imgs="item.imgs"
                            :tags="item.tags"
                            :link="item.url"
                            :text="item.title"
                      ></card>
                  </a>
              </div>
          </div>
      </mugen-scroll>
      <common-dialog
          v-show="showDialog"
          v-on:xClick="disableDial"
          :title="curItem.title"
          :imgs="curItem.imgs"
          :tags="curItem.tags"
          :link="curItem.url"
          :text="curItem.title"
          :regDate="curItem.regDate"
      ></common-dialog>
  </div>
</template>

<script>
    import MugenScroll from 'vue-mugen-scroll'
    import Card from './Card'
    import CommonDialog from './CommonDialog'
    import TopNav from '../common/TopNav'

    const firebase = window.firebase;
    const DB = firebase.database();
    const PageSize = 10;

    export default {
        name: 'list',
        data () {
            return {
                items:[],
                loading: false,
                showDialog: false,
                curItem: {}
            }
        },
        components: {
            TopNav,
            MugenScroll,
            Card,
            CommonDialog
        },
        methods: {
            disableDial () {
                this.showDialog = false;
            },
            onClickItem (item, event){
                this.curItem = item;
                this.showDialog = true;
                console.log("click");
            },
            more() {
                this.loading = true;
                let minValue = Number.MAX_SAFE_INTEGER*(-1);
                this.items.forEach((item) => {
                    if(minValue <= item.sortNum) minValue = item.sortNum;
                });
                DB.ref('items/')
                    .orderByChild("sortNum")
                    .startAt(minValue, "sortNum")
                    .limitToFirst(PageSize)
                    .once('value')
                    .then((snapshot) => {
                        snapshot.forEach((data) => {
                            console.log("The " + data.key + " score is " + data.val());
                            this.items.push(data.val())
                        });
                        console.log(this.items);
                        this.loading = false;
                    });
            },
            convertToDate(num) {
                return new Date(num);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
