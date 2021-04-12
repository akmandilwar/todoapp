 const state={
     users:[
        {id:0,name:"Akash",task:[],totalTask:0,pendingTask:0,completedTask:0},
        {id:1,name:"Abhishek",task:[],totalTask:0,pendingTask:0,completedTask:0},
        {id:2,name:"Amit",task:[],totalTask:0,pendingTask:0,completedTask:0},
        {id:3,name:"Shiv",task:[],totalTask:0,pendingTask:0,completedTask:0},
        {id:4,name:"Sunny",task:[],totalTask:0,pendingTask:0,completedTask:0},
     ],
     SelectedElement:{},
     selectedIndex:null,
     showtextfield:false,
     editedTask:"",      
     show:false,
     name:""          
 };
 const getters={
     users:(state)=>state.users;
 };

 const action={};

 const mutations={};