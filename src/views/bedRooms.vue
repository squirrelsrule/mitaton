<template>
  <searchBar myArray="roomdArray" />
  <div class="kolel">
    <div class="topbut" >
      
      <div class="tooltip-wrapper">
        <router-link to="/שלוםהמפקדת" class="center-button">
          <img class="iparon-img" src="../assets/pencil1.png" alt="">
        </router-link>
         edit
        <div class="tooltip-text">שלום המפקדת</div>
      </div>

      <input type="text" v-model="searchQuery" placeholder="חיפוש" class="search-bar" />

      <router-link to="/" class="center-button">
        <img class="backimg" src="../assets/homebut.png" alt="">
      </router-link>
    </div>
  <div class="binats">
    <router-link to="/שלוםהמפקדת" class="binats-button"  > 
        <img class="binats-img" src="../assets/kiriya.png" alt="">
      </router-link>
  </div>
  <div class="marganit">
    <router-link to="/שלוםהמפקדת" class="marganit-button"  > 
        <img class="marganit-img" src="../assets/marganit.png" alt="">
      </router-link>
  </div>
  <div class="migurim">
    <router-link to="/שלוםהמפקדת" class="migurim-button"  > 
        <img class="migurim-img" src="../assets/migurim.png" alt="">
      </router-link>
  </div>
  <div class="bottom-but">
    <router-link to="/general" class="bottom-button"  > 
      שבצ״ק כללי
      </router-link>
  </div>
  </div>

</template>

<script>
export default {

}
</script>

<style scoped>
 /* .bgrnd{
   background-image: url("../assets/mita.png");    
    height: 100%;
    width: 100%;
    z-index: -1;
    top: 0%;
    position: fixed;
    background-attachment: fixed;
    background-size: cover;
     background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
 } */
 
 .kolel{
overflow:hidden;
display: grid;
grid-template-columns: repeat(7, 1fr);
grid-template-rows: repeat(6, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
height: 100%;
width: 100%;
}

.topbut { 
  grid-area: 1 / 3 / 2 / 6;
  height: 100px!;
}
.binats { 
  grid-area: 1 / 1 / 7 / 3; 
  position: relative;
 justify-content: center;
 display: flex;
}
.binats-button{
margin-top: 80px;
margin-left: 100px;
transition: .3s;
}
.binats-button:hover{
transform: translatey(-4px);
}
.binats-img{
  height: 510px;
  width: 395px;
}

.migurim { 
  grid-area: 3 / 3 / 6 / 6; 
  position: relative;
 justify-content: center;
 display: flex;
 /* transition: .3s; */

}
.migurim-button{
  height:400px;
  margin-left: 140px;
  transition: .3s;

}
.migurim-button:hover{
transform: translatey(-4px); 
}
.migurim-img{
  height: 260px;
  width: 505px;
}
.marganit {
  grid-area: 1 / 6 / 7 / 8; 
  position: relative;
 justify-content: center;
 display: flex;
}
.marganit-button{
  margin-top: 70px;
  height:700px;
  width: 300px  ;
  transition: .3s;

}
.marganit-button:hover{
transform: translatey(-4px);
}
.marganit-img{
  height: 580px;
  width: 145px;
}
.bottom-but { 
  grid-area: 6 / 3 / 7 / 6; 
  position: relative;
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
.bottom-button{
  display: flex;
  width: 200px;
  height: 40px;
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
  height: 28px;
  padding-bottom: 0%;
  margin-bottom: 0%;
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
</style>ß