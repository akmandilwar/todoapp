<template>
<div class="homeStyle">
<div> <h4 class="title">Assign ToDo Tasks</h4></div>
    <div><input 
        v-if="show" 
        class='form-control' 
        placeholder="Enter Task to do" 
        v-model="task" type="text" 
        v-on:keyup.enter="handleclick"/></div>
         <div class="list-group" v-for="task in selectedName.task" :key="task">
           <div v-if="task!==editedTask" class="task">
               <label class="task1">{{task}} </label>
                 <button class="btn" v-on:click="handleDelete(task)">Delete</button>
                 <button class="btn1" v-on:click="handleEdit(task)">Edit</button>   
                      </div>
           <div v-if="task===editedTask">
               <input 
                     class="task1" 
                     v-model="postedTask"
                     type="text"
                     v-on:keyup.enter="handleFinal"/>

                 <button class="btn" v-on:click="handleDelete(task)">Delete</button>
                 <button class="btn1" v-on:click="handleEdit(task)">Edit</button>   
                      </div>
            
    </div>

</div>
</template>
<style scoped>
.task {
    margin-top: 20px;
}
.task1{
        border: 1px solid;
    background: black;
    color: #fff;
    padding: 5px;
    padding-right: 200px;
    margin-top: 10px;
    border-radius: 10px;
    border-radius: 10px;
    margin-left: 10px;
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
    .btn{
        background-color: red;
        color:white;
        border-radius: 3px;
        border:0px;
        cursor: pointer;
        margin-left: 15px;
      padding: 5px 20px 5px 20px;
    }
    .btn:hover{
        background-color: orangered;
    }
    .btn1{
        background-color:yellow;
        color:black;
        border-radius: 3px;
        border:0px;
        cursor: pointer;
        margin-left: 5px;
          padding: 5px 20px 5px 20px;
    }
    
    .btn1:hover{
        background-color: yellowgreen;
    }
    .title {
     margin: auto;
    font-size: 20px;
    text-transform: uppercase;
    color: #fff;
    }
</style>
<script>
export default {
    name:"RightPanel",
    props:['selectedName','show'],
    data(){
        return{
            task:"",
            editedTask:"",
            postedTask:""
        }
    },
    methods:{
        handleclick(){
            console.log(this.selectedName);
              this.$emit('task',this.task);
              this.task="";     
        },
       handleFinal(){
         let index=this.selectedName.task.findIndex(n=>n===this.editedTask);
         this.selectedName.task[index]=this.postedTask;
         this.$emit('editedTask',this.postedTask)
         this.$emit('index',index);
         console.log(this.selectedName);
        },
        handleDelete(temp){
           this.$emit('taskDeleted',temp);
        },
        handleEdit(temp){
            this.editedTask=temp;
            this.postedTask=temp;
            console.log(this.editedTask);
        },
     
    }
}
</script>