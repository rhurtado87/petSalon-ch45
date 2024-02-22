function saveItem(item){
    let itemsArray = readItems();//gettinig LS data
    itemsArray.push(item);//add the new item to the array
    let val = JSON.stringify(itemsArray);// this is an string
    localStorage.setItem("services",val);
}

function readItems(){
    //getting items from LS
    let data=localStorage.getItem("services");
        if(!data){ //not data?
            return[];// create an arrry
        }else{
            let list = JSON.parse(data);// parse the data back
            return list;
        }
}
