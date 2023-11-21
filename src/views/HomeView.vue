
<template>
<!--<h1 class="big-h1"><img class="moon-img" src="../assets/moontet.png" alt="">מיתון</h1>-->
<!-- <h1 class="big-h1">מטתון</h1>  -->
<div class="big-h1">מי<img class="moon-img" src="../assets/moontet.png" alt="">תון</div>

     <div class="btn-flex">
      <div class="noam" >
          <router-link to="/general" class="center-button" >שבצ״ק כללי</router-link>
          <router-link to="/rooms" class="center-button" >מיטות וחדרים</router-link>
      </div>
    </div>

    <div class="footer-content">
      פותח על ידי לרה ג׳
    </div>
 </template>



<script>
// import moon from '../assets/moon.png'
export default {
  name: 'YourComponentName',
  data(){
    return{

    }
  },
  mounted(){
   }
};
</script>

<style scoped>

.btn-flex{
 /* padding: 10px 20em;
border: none;
border-radius: 5em;
color: rgb(23, 16, 4);
background-color: bisque;    */
display: flex;
justify-content: center;
border: none;
margin-top: 20px
}
/* h1{
  color:rgb(255, 255, 255);
  text-align: center;
   font-size: 25vh; 
  height: 20vh; 
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  margin-top: 13vh;
  margin-bottom: 8vh;
} */
                
                
                
/*                 
p{
  text-align: center;
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  margin: 20%;
  /* background-color: rgba(0,0,0,0.5); */
  /* padding: 0%; */ 
  /* color: #fff;
} */
h5{
  margin: 0;
}
.big-h1{
  font-size: 200px;
  margin-top: 60px;
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  color: rgb(255, 255, 255);
  text-align: center;
  margin-right: 0.2em;
  margin-left: 0.2em;
  font-weight: 700;
  margin-bottom: 120px;
}
.center-button{

  width:200px;
  border-radius: 20px;
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
  padding: .5em;

}
  .center-button:hover {
  /* background-color: rgb(245, 191, 220); */
  background-color: rgba(232, 236, 180, 0.517);
  /* cursor: url('../assets/moon.png'), auto !important; */


  color: #000000;
  box-shadow: none;
  transform: translateY(6px);

}

.moon-img{
  width: 151px;
  /* margin-top: 40px; */
  /* why does it affect the whole word and not only the */
  height: 164px;
  margin-bottom: 24px;
  padding: 0%;
  vertical-align: bottom;

}
.center-button:active{
  box-shadow: none;
  transform: translateY(6px);
}
.noam{
  display: flex;
  width: 500px;
  justify-content: space-around;
}
.footer-content{
  width: 100%;
  position: absolute;
   text-align: center;
   bottom: 70px;
   /* transform: translateY(100%); */
  color: #fff;
  font-weight:bold;
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
}

 
</style>

