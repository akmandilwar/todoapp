<template>
<div>
    <h1>For Loop in vue jS</h1>
    <table>
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
        </tr>
        <tr v-for="user in users" :key="user.id">
            <td>{{user.id}}</td>
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
        </tr>
    </table>
</div>
</template>
<script>
export default {
    name:'Home',
    props:{
        data:String,
        msg:String
        },data(){
            return {
                users:[
                    
                        {id:1,name:'Akash',email:'akash@gmail.com'},
                        {id:2,name:'Vikash',email:'vikash@gmail.com'},
                        {id:3,name:'Abinash',email:'abinash@gmail.com'},
                        {id:4,name:'Prakash',email:'prakash@gmail.com'},
                        {id:5,name:'Ravi',email:'ravi@gmail.com'},
                    
                ]
            };
        },
        methods:{
            hello(){
                this.show=!this.show;
            }
            } 

};
</script>