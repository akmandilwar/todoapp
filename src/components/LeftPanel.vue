<template>
<div>
    <div class="user1">List</div>
    <div class="" v-for="user in list" :key="user.id">
        <div class="user" v-on:click="click(user.id)">{{user.name}}<br/></div>
    </div>
    <div v-if="show">
        <div class="list-group2">
             <input class='form-control'  type="text"  v-model="name"/>
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
<style  scoped>

.btnList {
        border-radius: px;
    width: 100%;
    background-color: black;
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
<script>
export default {
    name:"LeftPanel",
    props:['list'],
    data(){
        return{
            show:false,
            name:""
        }
    },
    methods:{
        click(temp){
            console.log(this.list);
            let index=this.list.findIndex(n=>n.id===temp);
            this.selectedindex=index;
            
       this.$emit('index',index);
        
            console.log(this.selectedindex,index);
        },
        handleclick(){
            if(!this.show) {
              this.show=!this.show;
              console.log(this.show);
            }
        },
        handlename(){           
            if(this.name!==""){
                 this.$emit('newname',this.name);      
                 this.name="";
                 this.show=false;
            } 
            if(this.name==="") this.show=false;
        }
    }, 
}
</script>