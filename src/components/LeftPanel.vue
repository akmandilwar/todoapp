<template>
<div>
    <div class="user1">List</div>
    <div class="" v-for="user in list" :key="user.id">
        <div v-if="user.id!== index" class="user" v-on:click="click(user.id)">{{user.name}}<br/></div>
        <div v-if="user.id=== index" class="user2" v-on:click="click(user.id)">{{user.name}}<br/></div>
    </div>
    <div v-if="show">
        <div class="list-group2">
             <input class='form-control'  type="text"  v-on:keyup.enter="handlename"  v-model="name" />
             <button class="btn1" v-on:click="handlename">Submit</button>
        </div>
    </div>
    <div v-else>
        <div class="list-group1">
            <button class="btnList" v-on:click="handleclick">Add List</button>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:"LeftPanel",
    computed:{
        list(){
            return this.$store.state.users;
        },
        index(){
               return this.$store.state.selectedIndex;
        },
        show(){
               return this.$store.state.show;
        },
      
    },data(){
          return{       
            name:""
    }
    }
    ,
    methods:{
       click(temp){ 
            let index=this.list.findIndex(n=>n.id===temp);
             if(index!==true){
       this.$store.state.SelectedElement=this.$store.state.users[index];
        this.$store.state.showtextfield=true;
       this.$store.state.selectedIndex=index;       
       console.log(this.$store.state.showtextfield);
        }
        },
        handleclick(){
            if(!this.$store.state.show) {
              this.$store.state.show=!this.$store.state.show;
            }
        },
        handlename(){           
            if(this.name!==""){
                  let x={id:this.list.length,name:this.name,task:[],totalTask:0,pendingTask:0,completedTask:0};
          this.$store.state.users.push(x);
                 this.name="";
                 this.$store.state.show=false;
            } 
            if(this.$store.state.name==="") this.$store.state.show=false;
        }
    }, 
}
</script>

<style  scoped>

.btnList {
        border-radius: px;
    width: 100%;
    background-color: rgb(97, 77, 226);
    margin-top: 10px;
    color: white;
    cursor: pointer;
}
 .list-group1{
     width:150px;
     display:block;
     text-align: center;
 }
 .list-group2{
     width:150px;
     display:block;
 }
 .form-control{
     width:75px;
     border-radius: 4px;
 }
 .user{
     border:1px solid white;
     margin-top: 1px;
     width:150px;
     background-color: antiquewhite;
    cursor: pointer;
    text-align: center;
 }
 .user2{
     border:1px solid white;
     margin-top: 1px;
     width:150px;
     background-color: aquamarine;
    cursor: pointer;
    text-align: center;
 }
 .user1{
     border:1px solid white;
     margin-top: 1px;
     width:150px;
     background-color:lightgreen;
    text-align: center;
 }
 .user:hover{
     background-color: #62d7db;
 }
 .btn{
     border-radius: 5px;
     width:75px;
     background-color: royalblue;
     color:white;
     cursor: pointer;
 }
 .btn:hover{
     background-color: skyblue;
 }
 .btn1{
     border-radius:3px ;
     margin-left: 2px;
     background-color: rgb(245, 82, 82);
     color:white;
     cursor: pointer;
 }
 
 .btn1:hover{
     background-color: rgb(245, 151, 151);
 }
</style>