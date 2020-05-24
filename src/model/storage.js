 // 封装操作storage本地存储方法，模块化文件 
 const ls = localStorage;
 const storage = {
     set(key, value){
        ls.setItem(key, JSON.stringify(value));
     },
     get(key) {
        return JSON.parse(ls.getItem(key));
     },
     remove(key){
         ls.removeItem(key);
     }
 }
export default storage;