<template>
 <div id="home" class="container">
<form class="form" @submit.prevent="displayData">
  <div>
    <input class="form-control" v-model="firstName"  type="text" placeholder="Enter your first name" required>
  </div>
  <div>
    <input class="form-control my-3" v-model="lastName" type="text" placeholder="Enter your last name" required>
  </div>
  <div>

    <label class="form-control mb-3" id="output"> </label>
  </div>
  <div>
     <button class="btn btn-success" type="button" @click="displayData">Submit</button>
  </div>
</form>
 </div>
</template>

<script>
// @ is an alias to /src
 

export default {
  name: 'HomeView',
  components: {
   
  },
  data(){
    return{
      firstName:'',
      lastName: ''
    }
  },
  methods:{
    displayData(){
      document.querySelector('#output').textContent=`${this.firstName} ${this.lastName}`
    }
  }
}
</script>
