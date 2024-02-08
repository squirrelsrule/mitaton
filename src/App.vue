<template>
  <div class="kolel">
  <div class="background" ref="bg"></div>
    <router-view/>
  </div>
</template>

<script>
import bedBackground from '@/assets/bed.jpg'
import mitaBackground from '@/assets/HaKirya.jpg'
// import bedroomBackground from '@/assets/mitamita.png'
 




export default {
data(){
  return{
     whichRoute: null
  }
},
watch:{
  '$route'(){
    console.log(this.$route)
    this.whichRoute = this.$route.fullPath
    console.log(this.whichRoute)
    let bImg = this.$refs.bg
    console.log(bImg)
    if(this.whichRoute == '/'){ 
        bImg.style.backgroundImage = `url(${bedBackground})`
     }
    else if(this.whichRoute == '/general'){
      bImg.style.backgroundImage = `url(${bedBackground})`
      console.log("yes")   

      
    }
    else if(this.whichRoute == '/rooms'){
      bImg.style.backgroundImage = `url(${mitaBackground})`
      console.log("yes")   

      
    }
    else if(this.whichRoute == '/שלוםהמפקדת'){
      bImg.style.backgroundImage = `url(${mitaBackground})`
      console.log("yes")   

      
    }
  }
}
}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #273747;
  width: 100%;
  height: 100%;
}


@font-face {
  font-family: 'hbrfont' ;
  src: url('./assets/hbrfont.ttf');
}
body{
    margin: 0;
    /* cursor:url('@/assets/herev.png'), auto ; */

    padding: 0;
    position: relative;
    /* overflow: hidden; */
    font-family:'hbrfont' !important;
    width: 100%;
    height: 100vh;
}
.kolel{
  width: 100%;
  height: 100%;
}
.background{
  /* background-image: url(`../assets/${imgsForRoutes}`); */
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

}

.background::after{
  content: '';
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgba(0,0,0,.5) ;
  width: 100%;
  height: 100%;
  z-index: 0;
 }
 @media (max-width: 735px){
 .big-h1{
  font-size: 130px !important;
  margin-top: 60px;
  padding-top:30px;
 }
 .moon-img{
    width: 90px !important;
  height: 101px !important;
  margin-bottom: 18px !important;
  padding: 0% !important;
  vertical-align: bottom !important;
 }

}

</style>
