<template>

    <!-- <input type="file" @change="handleFileUpload" /> -->
    
      <div class="kolel">
        <div class="topbut" >
          
      
          <router-link to="/שלוםהמפקדת" class="center-button"  > 
            <img class="iparon-img" src="../assets/pencil1.png" alt="">
          </router-link>
    
          <input type="text" v-model="searchQuery" placeholder="חיפוש" class="search-bar" />
    
          <router-link to="/" class="center-button">
            <img class="backimg" src="../assets/homebut.png" alt="">
          </router-link>
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
          <router-link to="/rooms" class="bottom-button" >מיטות וחדרים</router-link>
        </div>
       
     </template>
    
    <script>
    // import VueGoodTable from 'vue-good-table';
    // import 'vue-good-table/dist/vue-good-table.css';
    import axios from 'axios'
    // import XLSX from 'xlsx'; 
    
    export default {
      data() {
        return {
          searchQuery: '',
          shavzaks: []
        };
      },
      methods: {
        async getShavzak() {
          try {
            const res = await axios.get("http://localhost:3000/shavzak");
            this.shavzaks = res.data.value.filter(item => {
              // Filter the data based on the searchQuery
              return (
                item.name.includes(this.searchQuery) || // Check if name includes searchQuery
                item.userMah.includes(this.searchQuery) || // Check if userMah includes searchQuery
                item.place.includes(this.searchQuery) // Check if place includes searchQuery
              );
            });
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        },
      },
      watch: {
      searchQuery: {
        handler() {
          // Call getShavzak whenever searchQuery changes
          this.getShavzak();
        },
        immediate: true // Call handler immediately after component is created
      }
    },
      beforeMount() {
        this.getShavzak();
      }
    };
    </script>
    
    
    <style scoped>
    .kolel{
    overflow:hidden
    }
    .noam{
     position: relative;
     top: 50px;
     justify-content: center;
    display: flex;
    }
    .go-back-button{
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
      margin-right:8px;
      margin-left:30px;
    
    }
    
    .go-back-button:hover {
      /* background-color: rgb(245, 191, 220); */
      background-color: rgba(232, 236, 180, 0.517);}
    .go-back-button:active{
      box-shadow: none;
      transform: translateY(6px);
    
    }
    .center-button{
      display: flex;
      border-radius: 100px;
      height: 40px;
      font-size: 1.8rem;
      background-color: rgba(253, 253, 253, 0.379);
      border: none;
      outline: none;
      cursor: pointer !important;
      transition: 0.5s;
      justify-content: center ;
      align-items: center;
      text-align: center;
      /* box-shadow: 0 6px 0 rgba(252, 219, 5, 0.9); */
      color: rgb(12, 44, 55);
      transition: .5s;
      text-decoration: none;
      font-weight:bold;
      padding-right: .5em;
      padding-left: .5em;
      margin-right:60px;
      margin-left:80px;
    }
    .center-button:hover{
    background-color: rgba(255, 255, 255, 0.595);
    transform: translateY(3px);
    }
    
    .bottom-button{
      display: flex;
      width: 200px;
      border-radius: 100px;
      font-size: 1.8rem;
      background-color: rgba(220, 220, 219, 0.43);
      border: none;
      outline: none;
      cursor: pointer !important;
      transition: 0.5s;
      align-items: center;
      text-align: center;
      justify-content: center;
      /* box-shadow: 0 6px 0 rgba(252, 219, 5, 0.9); */
      color: rgb(12, 44, 55);
      transition: .5s;
      text-decoration: none;
      font-weight:bold;
      padding-right: .5em;
      padding-left: .5em;
    }
    .bottom-button:hover{
      background-color: rgba(240, 248, 255, 0.58);
      transform: translatey(3px);
    }
    .iparon-img{
      width: 30px;
      height: 30px;
      padding-bottom: 0%;
      margin-bottom: 0%;
      /* justify-content: baseline; */
    }
    .backimg{
      width: 30px;
      height: 27px;
      padding-bottom: 0%;
      margin-bottom: 0%;
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
      border-radius: 100px;
    }
    
    
    table{
      /* position: fixed; */
      background-color: rgba(255, 255, 255, 0.5);
      color: white;
      font-size: 20px;
      font-weight: 800;
      direction: rtl;
      width: 55vw;  
      border-radius: 25px;
      overflow: visible;
    }
    td{
      width: calc(50vw/3);
      text-align: center;
      padding: 7px;
      font-size: 23px;
    }
    
    th{
      padding-left: 1vw;
      width: calc(78vw/3);
      text-align: center;
    }
    
     .topbut{
      justify-content: center;
      margin-top: 30px;
      direction: rtl;
      font-size: 3%;
      display: flex;
      align-items: center;  
      margin-bottom: 5px;
      margin-right: 0%;
    }
    
    .search-bar{
      width: 170px;
      height: 30px;
      background-color: rgba(255, 255, 255, 0.5);
      margin-left: 10px;
      padding: 5px;
      border-radius: 100px;
      /* border: 1px solid ; */
      border: none;
      align-items: center;
    }
    
    
    </style>