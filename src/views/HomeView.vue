
<template>
  <div class="kolel">
    <div class="info">
      <button @click="showAlert" class="info-button" @mouseover="showInfoTip=true" @mouseleave="showInfoTip=false"  ><img class="info-img" src="../assets/info.png" alt=""> </button>

  </div>
<!--<h1 class="big-h1"><img class="moon-img" src="../assets/moontet.png" alt="">מיתון</h1>-->
<!-- <h1 class="big-h1">מטתון</h1>  -->
<div class="big-h1">מי<img class="moon-img" src="../assets/moontet.png" alt="">תון</div>

     <div class="btn-flex">
      <div class="noam" >
          <router-link to="/general" class="center-button" @mouseover="showGeneralTip=true" @mouseleave="showGeneralTip=false"  > שבצ״ק כללי</router-link>
          <router-link to="/rooms" class="center-button"  @mouseover="showRoomTip=true" @mouseleave="showRoomTip=false">מיטות וחדרים</router-link>

      </div>
    </div>
    <div class="tltp1"  v-if="showGeneralTip">
      <span class="tooltiptext"> טבלת השבצ״ק הכללי </span>
    </div>
    <div class="tltp3"  v-if="showInfoTip">
      <span class="tooltiptext"> מידע נוסף </span>
    </div>
    <div class="tltp2"  v-if="showRoomTip">
      <span class="tooltiptext"> טבלת השבצ״קים לפי מקומות לינה </span>
    </div>

    <div class="footer-content" >
      פותח על ידי לרה ג׳

    </div>
  </div>
 </template>



<script>

import Swal from 'sweetalert2';

 
export default {
  name: 'YourComponentName',
 
  data(){
    return{
      showGeneralTip:false,
      showRoomTip:false,
      showInfoTip:false

    }
  },
  
  methods: {
    showAlert() {
      Swal.fire({
   
        title: "אתר המיטתון",
        width: 600,
        padding: "3em",
        color: "rgb(255,255)",
        html: `
        האתר הזה פותח ע״י צוות אפליקציות בגדוד 383,
    ניתן לקרוא עלינו
    <a href="#">כאן</a>
    
  `,
  // showCancelButton: true,
  // cancelButtonText: `
  //   <i class="fa fa-thumbs-up"></i>  `,

        background: "#fff url(../assets/stars.gif)",
        backdrop: `
        rgba(252, 219, 5, 0.2)
          url("../assets/stars.gif")
          left top
          no-repeat
        `
      });
    }
  },
  mounted(){
   }
};
</script>

<style scoped>
.kolel{
  height: 100%;
}
.info-img{
  width: 30px;
  height: 30px;
}
.info-button{
  margin-top: 20px;
  background: none;
  border: none;
  margin-left: 30px !important; 
}
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

.big-h1{
  font-size: 200px;
  /* margin-top: 50px; */
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  color: rgb(255, 255, 255);
  text-align: center;
  margin-right: 0.2em;
  margin-left: 0.2em;
  font-weight: 700;
  margin-bottom: 150px;
  
}
.info{
width: 100%;
display: flex;
align-items: end;
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
  position: relative;

}
  .center-button:hover {
  background-color: rgba(232, 236, 180, 0.517);


  color: #000000;
  box-shadow: none;
  transform: translateY(6px);

}

.tooltiptext{
  background-color: #807f7f7c;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  transition: 2s ease-in-out ;
  
}
.tltp1{
  margin-top: 20px;
  margin-right: 460px;

}
.tltp2{
  margin-top: 20px;
  margin-left: 460px;

}
.tltp3{
  margin-top: -450px;
  display: flex;
  margin-left: 10px;

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
/* .center-button:active{
  box-shadow: none;
  transform: translateY(6px);

} */
.noam{
  display: flex;
  width: 500px;
  justify-content: space-around;
}
.footer-content{
  width: 100%;
  position: fixed;
   text-align: center;
   bottom: 30px;
   /* transform: translateY(100%); */
  color: #fff;
  font-weight:bold;
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
}

 
</style>

