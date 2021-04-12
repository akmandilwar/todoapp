<template>
<div class="homeStyle">
<div> <h4 class="title">Assign ToDo Tasks</h4></div>
    <div>
        <div v-if="selectedName.totalTask" class="row mb-2" style="font-size:14px;margin-top:15px"> 
            
            <label class="header1" >Total Task:  {{selectedName.totalTask}}</label>
        <label class="header2" >Pending Task:  {{selectedName.pendingTask}}</label>
        <label class="header3" >Completed Task:  {{selectedName.completedTask}}</label>
        </div>
        <input 
        v-if="show" 
        class='form-control' 
        placeholder="Enter Task to do" 
        v-model="task" type="text" 
        v-on:keyup.enter="handleclick"/></div>
        <div class="incompleted-task" >
            <div class="list-group" v-for="task in selectedName.task" :key="task">
                <div v-if="task.giventask!==editedTask && task.completed===false" class="task">
                    <input 
                        type="checkbox" 
                        v-on:change="completedTask(task.giventask)"/>
                    <label class="task1">{{task.giventask}} </label>
                    <button class="btn" v-on:click="handleDelete(task.giventask)"><i class="fas fa-trash"></i></button>
                    <button class="btn1" v-on:click="handleEdit(task.giventask)"><i class="fas fa-edit"></i></button>   
                </div>
                <div v-if="task.giventask===editedTask && task.completed===false">
                <input 
                        class="task1" 
                        v-model="postedTask"
                        type="text"
                        v-on:keyup.enter="handleFinal"/>
                    <button class="btn" v-on:click="handleDelete(task.giventask)"><i class="fas fa-trash"></i></button>
                    <button class="btn1" v-on:click="handleEdit(task.giventask)"><i class="fas fa-edit"></i></button>   
                </div>  
            </div>
        </div>
        <div v-if="selectedName.completedTask>0" class="completeStatus"> <label class="completed">Completed</label>  </div>
        <div class="row" >
            <div class="list-group1" v-for="task in selectedName.task" :key="task">
                <div v-if="task.completed" class="checkbox">
                    <input 
                        type="checkbox" 
                        v-on:change="completedTask(task.giventask)"
                        checked="task.completed"/>              
                         <label class="task2">{{task.giventask}}</label>
                    <button class="btn" v-on:click="handleDeleteCompletedTask(task.giventask)"><i class="far fa-times-circle"></i></button>
                </div>
            </div>
        </div>
</div>
</template>
<script>
export default {
    name:"RightPanel",
    computed:{
         users(){
             return this.$store.state.users;
         },
        selectedIndex(){
             return this.$store.state.selectedIndex;
         },
        
         show(){
             return this.$store.state.showtextfield;
         },
         selectedName(){
             return this.$store.state.SelectedElement;
         }

    },
    data(){
        return{
            task:"",
            editedTask:"",
            postedTask:""
        }
    },
    methods:{
        handleclick(){
            if(this.task!==""){
      let x={giventask:this.task,completed:false}; 
         this.$store.state.users[this.$store.state.selectedIndex].totalTask=this.$store.state.users[this.$store.state.selectedIndex].totalTask+1;
         this.$store.state.users[this.$store.state.selectedIndex].pendingTask=this.$store.state.users[this.$store.state.selectedIndex].pendingTask+1;
     this.$store.state.users[this.$store.state.selectedIndex].task.push(x);      
              this.task="";     
        }
        },
       handleFinal()
       {
          let index=this.selectedName.task.findIndex(n=>n.giventask===this.editedTask);
          this.$store.state.editedTask=this.postedTask;
          this.$store.state.SelectedElement.task[index].giventask=this.postedTask;
          this.$store.state.users[this.$store.state.selectedIndex]=this.$store.state.SelectedElement;
          console.log(this.$store.state.users[this.$store.state.selectedIndex]);
       },
       handleDelete(temp)
       {
         this.$store.state.users[this.$store.state.selectedIndex].task=this.users[this.selectedIndex].task.filter(n=>n.giventask!==temp);
         this.$store.state.users[this.$store.state.selectedIndex].totalTask=this.$store.state.users[this.$store.state.selectedIndex].totalTask-1;
         this.$store.state.users[this.$store.state.selectedIndex].pendingTask=this.$store.state.users[this.$store.state.selectedIndex].pendingTask-1;
        },
        handleEdit(temp)
        {
            this.editedTask=temp;
            this.postedTask=temp;    
        },     
        completedTask(temp){    
               let x=this.users[this.selectedIndex].task.findIndex(n=>n.giventask===temp);
             if(!this.users[this.selectedIndex].task[x].completed)
             {
                  this.$store.state.users[this.$store.state.selectedIndex].completedTask=this.users[this.selectedIndex].completedTask+1;
                  this.$store.state.users[this.$store.state.selectedIndex].pendingTask=this.users[this.selectedIndex].pendingTask-1;
                   console.log(this.users);
             }
             if(this.users[this.selectedIndex].task[x].completed){
               this.$store.state.users[this.$store.state.selectedIndex].completedTask=this.users[this.selectedIndex].completedTask-1;
                  this.$store.state.users[this.$store.state.selectedIndex].pendingTask=this.users[this.selectedIndex].pendingTask+1;
                   console.log(this.users);  
             }
              this.$store.state.users[this.$store.state.selectedIndex].task[x].completed=!this.$store.state.users[this.$store.state.selectedIndex].task[x].completed;
        },
        handleDeleteCompletedTask(temp){
           this.$store.state.users[this.$store.state.selectedIndex].task=this.users[this.selectedIndex].task.filter(n=>n.giventask!==temp);
       
       this.$store.state.users[this.$store.state.selectedIndex].totalTask=this.users[this.selectedIndex].totalTask-1;
       this.$store.state.users[this.$store.state.selectedIndex].completedTask=this.users[this.selectedIndex].completedTask-1; 
           
        }
    }
}
</script>
<style scoped>
.completed{
    font-weight: bold;
    padding: 10px;
}
.completeStatus{
    margin-top: 15px;
}
.task {
    margin-top: 20px;
}
.status{
    margin-top:10px;
}
.task2{
        border: 1px solid;
   background: greenyellow;
    color: #741515;
    padding: 5px;
    padding-right: 200px;
    margin-top: 10px;
    border-radius: 10px;
    border-radius: 10px;
    margin-left: 10px;
}
.checkbox{
    margin-left: 10px;
    
}
.task1{
        border: 1px solid;
   background: burlywood;
    color: #741515;
    padding: 5px;
    padding-right: 200px;
    margin-top: 10px;
    border-radius: 10px;
    border-radius: 10px;
    margin-left: 10px;
}
.incompleted-task{
    margin-left: 8px;
}
    .form-control{
        padding: 5px;
        border-radius: 10px;
        padding-right: 100px;
        border: 1px red;
        margin-top: 10px;
        margin-left: 10px;
    }
    .list-group{
        border:1px slategray
    }
    .list-group1{
        margin-top: 15px;
    }
    .btn{
        border:0px;
        cursor: pointer;
    }
  .btn1{
        border:0px;
        cursor: pointer;
    }
    .title {
     margin: auto;
    font-size: 20px;
    text-transform: uppercase;
    text-align: center ;
    margin-top: 10px;
    }
    .header1{
        padding: 7px;
    background: gold;
    font-size: 15px;
    color: indigo;
    color: darkblue;
    border-radius: 5px;
    }
    .header3{
        float: right;
        border-radius: 5px;
    padding: 7px;
    height: auto;
    background: mediumspringgreen;
    font-size: 13px;
        color: brown;
    }
    .header2{
        margin-left: 264px;
    padding: 7px;
    height: auto;
    background:orangered;
    font-size: 15px;
    border-radius: 5px;
    }
</style>
