 <template>
 <!-- <img alt="Vue logo" src="./assets/logo.png"> !-->
 <div class="mainDiv">
 <Navbar/>
 <div class="row">  
     <div class="col-2">
       <LeftPanel  />
        </div>
     <div class="col-7"> 
       <RightPanel
     @completedTask="completedTask($event)"
     @deleteCompletedTask="deleteCompletedTask1($event)"
     
     /></div>
     
 </div>
   </div> 
   </template>
<style type="text/css"  scoped>
  .mainDiv{
        background: beige;
  }
.row {
     display: flex;
    flex-flow: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
.col-2{
  width: 20%;
}
.col-7 {
    width: 77%;
    background-image: url('https://media.istockphoto.com/photos/timeline-planning-checklist-or-business-plan-with-calendar-date-on-picture-id1211255735?k=6&m=1211255735&s=612x612&w=0&h=P0HukhuiegaRd5UHLwcnRgAlSUP5tQTUcCLKyNm5uNk=');
    min-height: 573px;
    border-radius: 10px
}

</style>
<script>
import Navbar from './components/Navbar.vue';
import LeftPanel from './components/LeftPanel.vue';
import RightPanel from './components/RightPanel.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    LeftPanel,
    RightPanel
}, data(){
    return{
            SelectedElement:{},
            selectedIndex:null,
            showtextfield:false,
            editedTask:"",
    }
}
}
</script>


