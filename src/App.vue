 <template>
 <!-- <img alt="Vue logo" src="./assets/logo.png"> !-->
 <div class="mainDiv">
 <Navbar/>
 <div class="row">  
     <div class="col-2">
       <LeftPanel :list="users" v-on:index="updateIndex($event)" v-on:newname="updateName($event)"/>
        </div>
     <div class="col-7"> 
       <RightPanel v-bind:selectedName="SelectedElement" 
       :show="showtextfield"
       @task="assignTask($event)" 
     @seletedName="update($event)"
     @taskDeleted="taskDelete($event)"
     @editedTask="taskupdate($event)"
     @index="index($event)"
     /></div>
     
 </div>
   </div> 
   </template>
<style  scoped>
  .mainDiv{
        background: beige;
  }
.row {
     display: flex;
    flex-flow: wrap;
}
.col-2{
  width: 20%;
}
.col-7 {
    width: 75%;
    background-image: url('https://wallpaperaccess.com/full/1489353.jpg');
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
      users:[
                {id:1,name:"Akash",task:[]},
                {id:2,name:"Abhishek",task:[]},
                {id:3,name:"Amit",task:[]},
                {id:4,name:"Shiv",task:[]},
                {id:5,name:"Sunny",task:[]},
            ],
            SelectedElement:{},
            selectedIndex:null,
            showtextfield:false,
            editedTask:""
    }
},
methods:{
     updateIndex(temp){
       if(temp!==true){
       this.SelectedElement=this.users[temp];
       this.showtextfield=true;
       this.selectedIndex=temp;
       console.log(this.showtextfield);
     }
     },
     updateName(temp){
          let x={id:this.users.length-1,name:temp,task:[]};
          console.log(this);
          console.log(this.users)
          this.users.push(x);
     },
     assignTask(temp){
         console.log(this.selectedIndex);
      this.users[this.selectedIndex].task.push(temp);
     console.log(this.users);
     },
      taskDelete(temp){
       this.users[this.selectedIndex].task=this.users[this.selectedIndex].task.filter(n=>n!==temp);
     },
     taskupdate(temp){
       this.editedTask=temp;
       console.log(this.editedTask)
     },
    index(temp){
      this.SelectedElement.task[temp]=this.editedTask;
      this.user[this.selectedIndex]=this.SelectedElement;
    }
     

}  
}
</script>


