<template>
  <div class="kolel">
    <div class="topbut" >
        <router-link to="/שלוםהמפקדת" class="center-button" >ערוך<img class="iparon-img" src="../assets/pencil-131965017493514588.png" alt=""></router-link>
      <input type="text" v-model="searchQuery" placeholder="חיפוש" class="search-bar" />

    </div>

<div class="table-flex">
    <table class="shav-table">
      <thead>
        <tr>
          <th>שם</th>
          <th>מחלקה</th>
          <!-- <th>מס׳ אישי</th> -->
          <th>מיקום</th>
        </tr>
      </thead>
      <div class="dfdfd">
    <tbody>
      <tr v-for="(item,index) in shavzaks" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.userMah }}</td> 
          <td>{{ item.place }}</td>
      </tr>
    </tbody>
  </div>
   </table>
 </div>
 
</div>

     <div class="noam" >
      <!-- <router-link to="/general" class="center-button" >שבצ״ק כללי</router-link> -->
      <router-link to="/rooms" class="center-button" >מיטות וחדרים</router-link>
    </div>
   
 </template>

<script>
// import VueGoodTable from 'vue-good-table';
// import 'vue-good-table/dist/vue-good-table.css';
import axios from 'axios'

export default {
  data(){
    return{
      searchQuery: '',
      shavzaks:[]
    }
  },
  methods:{
    async getShavzak(){
      const res = await axios.get("http://localhost:3000/shavzak")
      this.shavzaks = res.data.value
      console.log(this.shavzaks)
    },
   
  },
    beforeMount(){
      this.getShavzak()
    }

}
</script>

<style scoped>
.kolel{
overflow:hidden
}
.noam{
 position: relative;
 top: 50px;
  /* left: 50%; transform: translateX(-50%); */
}
.center-button{
  /* width:200px; */
  display: flex;
  border-radius: 10px;
  font-size: 1.8rem;
  background-color: rgba(233, 238, 158, 0.844);
  border: none;
  outline: none;
  cursor: pointer !important;
  transition: 0.5s;
  justify-content: center ;
  align-items: center;
  text-align: center;
  box-shadow: 0 6px 0 rgba(252, 219, 5, 0.9);
  color: rgb(12, 44, 55);
  transition: .5s;
  text-decoration: none;
  font-weight:bold;
  /* padding: .5em; */
  padding-right: .5em;
  padding-left: .5em;
  margin-right:30px;
  margin-left:30px;



}
.center-button:hover {
  /* background-color: rgb(245, 191, 220); */
  background-color: rgba(232, 236, 180, 0.517);}
.center-button:active{
  box-shadow: none;
  transform: translateY(6px);

}
 .footer-content{
  width: 100%;
  position: absolute;
   text-align: center;
   bottom: 60px;
   /* transform: translateY(100%); */
  color: #fff;
  font-weight:bold;
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
}

.iparon-img{
  width: 30px;
  height: 30px;
  padding-bottom: 0%;
  margin-bottom: 0%;
  /* justify-content: baseline; */
}
.table-flex{
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
 .tablisa{
  max-height: 400px;
  overflow-y: auto ;
}
tbody{
   display: block;
   overflow-y: auto;
   overflow-x: hidden;
   max-height: 400px;
   width: 100%;
   margin-bottom: 0%;
 }
 thead{
  font-size: 20px;
  display: inline-block;
  background-color: rgba(227, 247, 6, 0.5);
  font-size: 30px;
  }

table{
  /* position: fixed; */
  background-color: rgba(255, 255, 255, 0.5);
  color: white;
  font-size: 20px;
  font-weight: 800;
  direction: rtl;
  width: 85vw;  
}
td{
  width: calc(85vw/3);
  text-align: center;
}
th{
  padding-left: 1vw;
  width: calc(78vw/3);
  text-align: center;

}
 .topbut{
  margin-top: 30px;
  direction: rtl;
  font-size: 3%;
  display: flex;
  align-items: center;  
  margin-bottom: 5px;
  margin-right: 0%;
}
.search-bar{
  width: 150px;
  background-color: rgba(255, 255, 255, 0.5);
  margin-left: 10px;
  /* color: rgba(252, 219, 5, 0); */
  padding: 5px;
  border-radius: 5px;
  border: 1px solid ;
  align-items: center;
  
}


</style>