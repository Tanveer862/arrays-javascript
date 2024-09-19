let items=[250,645,300,900,50]
console.log(items)
let offer;
for( let i=0;i<items.length;i++){
    offer=items[i]/10;
    items[i]=items[i]-offer
    console.log("prices after offering")
    console.log(items[i])
}
console.log(items)
