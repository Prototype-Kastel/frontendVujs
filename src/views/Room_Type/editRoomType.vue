<template>
  <div class="header bg-primary pb-6">
    <!-- for navbar -->
    <navbar />
    <div class="container-fluid">
      <div class="header-body">
        <div class="row align-items-center py-4">
          <div class="col-lg-6 col-7">
            <h6 class="h2 text-white d-inline-block mb-0">Default</h6>
            <nav
              aria-label="breadcrumb"
              class="d-none d-md-inline-block ml-md-4"
            >
              <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                <li class="breadcrumb-item">
                  <a href="dashboard.html#"><i class="fas fa-home"></i></a>
                </li>
                <li class="breadcrumb-item">
                  <a href="dashboard.html#">Dashboards</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Default
                </li>
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
        <h3 class="mb-0">Update Data Room Type</h3>
      </div>

      <!-- Card body -->
      <div class="card-body">
        <!-- Form groups used in grid -->
        <form @submit.prevent="update()">
          <div class="form-group">
            <label for="">Name </label>
            <input type="text" class="form-control" v-model="itemRoomType.name" />
            <div v-if="validation.name" class="text-danger">
              {{ validation.name[0] }}
            </div>
          </div>
          <div class="form-group">
            <label for="">Bed Type </label>
            <input type="text" class="form-control" v-model="itemRoomType.bed_type" />
            <div v-if="validation.bed_type" class="text-danger">
              {{ validation.bed_type[0] }}
            </div>
          </div>
          <div class="form-group">
            <label for="">Size </label>
            <input type="text" class="form-control" v-model="itemRoomType.size" />
            <div v-if="validation.price" class="text-danger">
              {{ validation.price[0] }}
            </div>
          </div>
          <div class="form-group">
            <label for="">Capacity </label>
            <input type="number" class="form-control" v-model="itemRoomType.capacity" />
            <div v-if="validation.stock" class="text-danger">
              {{ validation.stock[0] }}
            </div>
          </div>
          <div class="form-group">
            <label for="">Gender </label>
            <select class="form-control" v-model="itemRoomType.gender">
              <option value="male" selected>Male</option>
              <option value="female">Female</option>
              <option value="all">All</option>
            </select>
            <div v-if="validation.gender" class="text-danger">
              {{ validation.gender[0] }}
            </div>
          </div>
          <div class="form-group">
            <label for="">Notes </label>
            <input type="number" class="form-control" v-model="itemRoomType.notes" />
            <div v-if="validation.notes" class="text-danger">
              {{ validation.notes[0] }}
            </div>
          </div>
          <div class="form-group">
            <button class="btn btn-primary" type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
    <v_footer />
  </div>
</template>

<script>
import v_footer from "@/components/v_footer.vue";
import navbar from "@/components/Navbar.vue";
import { reactive, ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
export default {
  name: "editRoomType",
  components: {
    v_footer,
    navbar,
  },
  setup() {
    //   data binding
    let itemRoomType = reactive({
      name: "",
      bed_type: '',
      capacity: '',
      gender: '',
      size: '',
      room_type_facility :[],
      galleries: null,
      notes: '', 
      service:[],
    });

    const validation = ref([]);
    //   redirect setelah store
    const router = useRouter();
    const route = useRoute();

    onMounted(() => {
      axios
        .get(`api/roomtype/${route.params.id}/show`)
        .then((result) => {
          itemRoomType.name = result.data.data.name;
          itemRoomType.bed_type = result.data.data.bed_type;
          itemRoomType.size = result.data.data.size;
          itemRoomType.capacity = result.data.data.capacity;
          itemRoomType.gender = result.data.data.gender;
          itemRoomType.notes = result.data.data.notes;
          itemRoomType.galleries = result.data.data.galleries;
        })
        .catch((err) => {
          console.log(err.response.data);
        });

        
    });
    function update() {
      axios
        .put(
          `api/roomtype/${route.params.id}/update`,
          itemRoomType
        )
        .then(() => {
          router.push({
            name: 'roomtype'
          })
        })
        .catch((err) => {
          validation.value = err.response.data;
        })
    }
    return {
      itemRoomType,
      validation,
      router,
      update,
    };
  },
};
</script>

