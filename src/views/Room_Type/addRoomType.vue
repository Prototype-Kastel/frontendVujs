<template>
  <div class="header bg-primary pb-6">
    <!-- for navbar -->
    <navbar/>
    <div class="container-fluid">
      <div class="header-body">
        <div class="row align-items-center py-4">
          <div class="col-lg-6 col-7">
            <h6 class="h2 text-white d-inline-block mb-0">Default</h6>
            <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
              <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                <li class="breadcrumb-item"><a href="dashboard.html#"><i class="fas fa-home"></i></a></li>
                <li class="breadcrumb-item"><a href="dashboard.html#">Dashboards</a></li>
                <li class="breadcrumb-item active" aria-current="page">Default</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid mt--6">
    <div class="card mb-4">
      <!-- Card header -->
      <div class="card-header">
        <h3 class="mb-0">Tambah Data Room Type</h3>
      </div>
        
      <!-- Card body -->
      <div class="card-body">
        <!-- Form groups used in grid -->
        <form @submit.prevent="store()" >
          <div class="row">
            <div class="col-md-6">
            <div class="form-group">
              <label for="">Name </label>
              <input type="text" class="form-control" v-model="name" />
              <!-- <div v-if="validation.name" class="text-danger">
                {{ validation.name[0] }}
              </div> -->
          </div>
          <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                  <label for="">Bed Type </label>
                  <input type="text" class="form-control" v-model="bed_type" />
                  <!-- <div v-if="validation.bed_type" class="text-danger">
                    {{ validation.bed_type[0] }}
                  </div> -->
              </div>
            </div>
            <div class="col-md-6">
                 <div class="form-group">
                    <label for="">Size </label>
                    <input type="text" class="form-control" v-model="size" />
                    <!-- <div v-if="validation.size" class="text-danger">
                      {{ validation.size[0] }}
                    </div> -->
                </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="">Capacity </label>
                <input type="number" class="form-control" v-model="capacity" />
                <!-- <div v-if="validation.capacity" class="text-danger">
                  {{ validation.capacity[0] }}
                </div> -->
             </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                  <label for="">Gender </label>
                  <select class="form-control" v-model="gender">
                    <option value="male" selected>Male</option>
                    <option value="female">Female</option>
                    <option value="all">All</option>
                  </select>
                  <!-- <div v-if="validation.gender" class="text-danger">
                    {{ validation.gender[0] }}
                  </div> -->
              </div>
            </div>
          </div>
            <div class="form-group">
                  <label for="">Esktra Service </label>
                    <div>
                        <Multiselect    
                        mode="tags"
                        :loading="true"
                        placeholder="Select your facility"
                        :value="this.id"
                        :options="this.tampung"
                        :searchable="true"
                        :multiplaceLabel="this.tampung"
                        />
                    </div>

                  <!-- <div v-if="validation.gender" class="text-danger">
                    {{ validation.gender[0] }}
                  </div> -->
              </div>  
          <div class="form-group">
            <label for="">Notes</label>
            <textarea type="text" class="form-control" v-model="notes" />
            <!-- <div v-if="validation.category" class="text-danger">
              {{ validation.category[0] }}
            </div> -->
          </div>
            </div>
            <div class="col-md-6">
             <div class="form-group">
               <label for="">Gallery</label>
               <input type="file" v-on:change="previewFiles"  class="form-control">
             </div>
            </div>

          </div>
          <div class="form-group">
            <button class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
      <v_footer/>
    </div>
  </div>
</template>

<script>

import Multiselect from '@vueform/multiselect';
import v_footer from "@/components/v_footer.vue";
import navbar from "@/components/Navbar.vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  name: "addRoomType",
  components: {
    v_footer,
    navbar,
    Multiselect
  },
 data() {
   return{
          name: '',
          bed_type: '',
          capacity: '',
          gender: '',
          size: '',
          room_type_facility :[],
          galleries: null,
          notes: '', 
          option:['zudha','kediri'],
          router : useRouter(),
          value: null,
          tampung:[],
          id:[],
          
   }
},
   mounted() {
     this.getServices();
   },
   methods: {
     async getServices(){
       let response = await axios.get('api/services/facility');
       if (response.status == 200) {
         this.service = response.data.data
       }

      for (let index = 0; index < this.service.length; index++) {
         this.tampung[index] = this.service[index].name;
         this.id[index] = this.service[index].id;
      }
     },

     previewFiles(event){
        let dataPhoto = event.target.files[0];
        this.galleries = dataPhoto;
        console.log(this.galleries);
     },
     async store(){
        
        // let fd = new FormData();
        // fd.append('name',this.name);
        // fd.append('bed_type',this.bed_type);
        // fd.append('capacity',this.capacity);
        // fd.append('gender',this.gender);
        // fd.append('size',this.size);
        // fd.append('room_type_facility[]',this.room_type_facility);
        // fd.append('galleries', this.galleries);
        // fd.append('notes',this.notes);

        console.log(this.id);
      //  let response = await axios.post('api/roomtype/store',fd)
      //  if (response.code == 200) {
      //    console.log(response.data);
      //  }
     },
     
   }
 }

</script>
<style src="@vueform/multiselect/themes/default.css"></style>

