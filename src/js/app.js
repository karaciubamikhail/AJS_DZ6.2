export default function getCharecter(obg, ...data) {
    const datas = obg.special.find((dat)=>{
      return dat.id === data[0];
    })
    if(datas.description == undefined){
      datas['description'] = "Описание засекречино";
    }
    return datas;
  }
