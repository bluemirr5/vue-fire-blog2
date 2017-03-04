var fs = require('fs');

function DummyClass() {
    this.imgs = [];
    this.sortNum = 0;
    this.regDate = 0;
    this.tags = [];
    this.title = "";
    this.url = "";
};
let dummyRes = {items:[]};

for(let i = 0; i < 20; i++) {
    const obj = new DummyClass();
    if(i%3 == 0) {
        obj.imgs.push("https://i.ytimg.com/vi/YC_ANN1B9W4/maxresdefault.jpg");
    } else if(i%3 == 1) {
        obj.imgs.push("http://cfile212.uf.daum.net/image/27165F41537C34CA1365D2");
    } else if(i%3 == 2) {
        obj.imgs.push("http://mblogthumb4.phinf.naver.net/20150915_59/britaincorea_1442300059139Qr1s7_JPEG/%C4%C1%C5%D7%C0%CC%B3%CA%C1%A6%C0%DB.jpg?type=w2");
    }

    obj.tags.push("tag"+i);
    obj.title = "hello"+ i;
    obj.regDate = (new Date()).getTime();
    obj.url = "url"+i;
    obj.sortNum = i*(-1);
    dummyRes.items.push(obj);
}

fs.unlinkSync("./dummy.json");
fs.writeFileSync("./dummy.json", JSON.stringify(dummyRes));
console.log(JSON.stringify(dummyRes));
