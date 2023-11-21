<template>
  <div id="app">
    <div class="main-grid">
  <div class="kolel">
    <div class="topbut" >
       
      <router-link to="/שלוםהמפקדת" class="upper-button"  > <img class="iparon-img" src="../assets/yareach.png" alt=""></router-link>
    </div>
    
    <div class="searchbar">

      <input type="text" v-model="searchQuery" placeholder="חיפוש" class="search-bar"  />
      <!-- <button @click="performSearch">Search</button> -->
 
    
<!-- 
    <select name="" ref="mySelect" @click="mapToMahlaka($event)" class="sinun">
       <option value="">
          מקום
       </option>
       <option value="מחלקה" @mouseover="show = true">
          מחלקה 
       </option>
       <div v-if="show"  >
            <option :value="opt" v-for="(opt,index) in filteredMahlKa" :key="index" >{{ opt }} </option>
      </div>
    
    </select> -->
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
     <tbody >
        <div v-if="stopShowing">
          <tr v-for="(item,index) in filterFun" :key="index" class="body-rows">
              <td>{{ item.name }}</td>
              <td>{{ item.userMah }}</td> 
              <td>{{ item.place }}</td>
          </tr>
      </div>
    </tbody>
    </table>
 </div>
 
</div>

    <div class="noam" >
      <router-link to="/general" class="center-button" >שבצ״ק כללי</router-link>

       <div class="linoi">
          <h1 class="center-text" >{{ filterFun.length }} חיילים ישנים היום בבסיס 
            <img class="soldier-img" src="../assets/soldier.png" alt=""></h1>
      </div>

      <router-link to="/rooms" class="center-button" >מיטות וחדרים</router-link>
\
    </div>
  </div>
</div>
 </template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchQuery: '',
      shavzaks: [],
      stopShowing:true,
      show:false,
      filteredMahlKa:[]
    };
  },
  
  
  methods: {
    async getShavzak() {
      try {
        const res = await axios.get("http://localhost:3000/shavzak");
        this.shavzaks = res.data.value;
        console.log(this.shavzaks)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    filterByKey(){
      const d = [...this.shavzaks]
      this.filteredMahlKa = new Set(d.map(item=>item.userMah))
         Array.from(this.filteredMahlKa)
        console.log(this.filteredMahlKa)
    },
    mapToMahlaka(event){
      console.log(this.$refs.mySelect)
         const target = event.target;
         console.log(target.tagName)
        if(target.tagName === 'OPTGROUP'){
          console.log('Optgroup clicked:', target.label)
        }
  
    }

   },
   async beforeMount() {
     await this.getShavzak();
      this.filterByKey()
   },

   computed: {
    filterFun() {
      return this.shavzaks.filter(item =>
          item.name.includes(this.searchQuery) ||
          item.userMah.toLowerCase().includes(this.searchQuery) ||
          item.userMah.includes(this.searchQuery) ||
          item.place.includes(this.searchQuery)
      )
    },
  },
 
}
</script>
z
<style scoped>
.back-btn{
  border-radius: 100px;
  height: 40px;
  background-color: rgba(230, 226, 200, 0.6);
}
.sinun{
  background-color: rgba(230, 226, 200, 0.6);
}
.center-text {
  text-align: center;
  font-size: 12px;
  display: flex;
  color: #fff;
  margin-bottom: 10px;
  direction: rtl;
  background-color: rgba(255, 255, 255, 0.17);
  width: 130px;
  height: 50px;
  padding: 0% !important;
  border-radius: 10px;
  /* display: flex; */
  /* justify-content:center; */
  align-items: center;
  text-align: center;
  /* margin-left: 50%;
  margin-right: 50%; */

}
.back-btn:hover{
  background-color: rgba(164, 219, 157, 0.665); 
  transition: 0.5s;
 
}
.kolel{
overflow:hidden;
min-width: 608px;

}
#app {
  min-width: 608px !important;
}
.shav-table{
  border-radius: 12px;
  overflow-y: auto;
}

tbody::-webkit-scrollbar {
  width: 12px; 
  height: 50% !;
  border-radius: 7px;
  background-color: rgba(255, 255, 255, 0.17);
}

tbody::-webkit-scrollbar-thumb {
  background-color: #ebebeb;
  border-radius: 10px;
}

tbody::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

tbody::-webkit-scrollbar-track {
  background-color: #f1f1f100;
 }
 body {
  min-width: 608px;
}





.noam{
  bottom: 10px;
 position: relative;
 top: 50px;
 display: flex;
 justify-content: center;
 align-items: center;
 height: 50px;




 /* width:70 px; */
  /* left: 50%; transform: translateX(-50%); */
}
.searchbar{
  margin: 0%;
}
.soldier-img{
  width:40px;
  height: 40px;
  /* align-items: center; */
  /* justify-content: center; */
  padding-bottom:3px ;
  padding-left: 3px;
  padding-right: 0%;
}
.upper-button{
  /* width:200px; */
  display: flex;
  transition: 0.5s ease-in-out;
  height: 30px;
  border-radius: 70px;
  font-size: 1.2rem;
  /* background-color: rgba(152, 229, 145, 0.574); */
  background-color: rgba(152, 229, 145, 0.);

  border: none;
  outline: none;
  cursor: pointer !important;
  transition: 0.5s ease-in-out;
  justify-content: center ;
  align-items: center;
  text-align: center;
  /* box-shadow: 0 6px 0 rgba(28, 136, 14, 0.9);  */
  color: rgb(236, 242, 244);
  /* transition: .5s; */
  text-decoration: none;
  font-weight:bold;
  /* padding: .5em; */
  padding-right: .5em;
  padding-left: .5em;
  margin-right:30px;
  margin-left:30px;

}
.upper-button:hover {
  /* background-color: rgb(245, 191, 220); */
  background-color: rgba(136, 230, 125, 0.517);
  box-shadow:rgba(212, 224, 40, 0.517) !important;
}
.upper-button:active{
  box-shadow: none;
  transform: translateY(6px);

}
.center-button{
  /* width:200px; */
  /* display: flex; */
  border-radius: 10px;
  bottom: 30px !important;
  right: 30px !important;
  font-size: 1.8rem;
  background-color: rgba(233, 238, 158, 0.844);
  border: none;
  outline: none;
  cursor: pointer !important;
  transition: 0.5s ease-in-out;
  /* justify-content: center ;
  align-items: center; */
  text-align: center;
  box-shadow: 0 6px 0 rgba(252, 219, 5, 0.9);
  color: rgb(12, 44, 55);
  transition: .5s;
  text-decoration: none;
  font-weight:bold;
  /* padding: .5em; */
  padding-right: .5em;
  padding-left: .5em;
  margin-right:5px;
  width: 190px;
  /* width:10 px !important; */
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
  width: 63px;
  height: 63px;
  padding-bottom: 0%;
  margin-bottom: 0%;
  padding-right: 5px;
  /* justify-content: baseline; */
}
.table-flex{
  display: flex;
  justify-content: center;
  margin-top: 50px;
  height: 50% !important;
 
  /* border-radius:40px !important ; */
}
 .tablisa{
   border-radius:37px !important;
  overflow-y: auto ;
 
}

tbody{
   display: block;
   height: 300px;
   overflow-y: auto;
   overflow-x: hidden;
   max-height: 400px;
   width: 100%;
   margin-bottom: 0%;
   background-color: transparent;
   /* height: 50% !important; */

 }
 thead{
  font-size: 20px;
  display: inline-block;
  background-color: rgba(227, 247, 6, 0.5);
  /* border: 4px solid rgba(227, 247, 6, 1); */
  backdrop-filter: blur(10px);
  font-size: 30px;
  border-radius: 14px;
  width: 100%;
  /* filter: blur(5px); */

  /* transition: backdrop-filter 0.5s ease-in-out; */
  }

thead::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: inherit;
  border: 1px solid rgba(227, 247, 6, 1);
  filter: blur(25px);
}

table{
  /* position: fixed; */
  background-color: rgba(255, 255, 255, 0.5);   
  color: white;
  font-size: 20px;
  font-weight: 800;
  direction: rtl;
  width: 74%;
  border-collapse: collapse;
  
}
td{
  width: calc(85vw/3);
  font-size: 20px;
  padding: .5em;
  text-align: center;
  
}
input[type="text"]::placeholder{
  color: #393939;
  padding: 7px;
 font-weight: 800;
}
.body-rows:hover{
  background-color: rgba(56, 56, 56, 0.399);
transition: 0.3s;
width: 100%;
}
th{
  padding-left: 1vw;
  width: calc(78vw/3);
  text-align: center;

}
tr{
  transition: 0.5s;

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
  width: 250px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.5);
  margin-left: 10px;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid ;
  align-items: center;
} 
.linoi{
  width: 130px;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
}

/* @media screen and (min-width: 800px) {
  .noam {
    flex-direction: column; 
    align-items: flex-end; 
    bottom: 300px;
    top: 0%;
    
  }
  
.table-flex{
  width:80vw;
}
  .center-text {
    width: auto; 
  }

  .center-button {
    margin-left: 0; 
  }
  tbody{
    height: 750px;
  }
} */
</style>