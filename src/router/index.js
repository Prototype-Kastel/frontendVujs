import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Room from '../views/Room/Room.vue';
import addRoom from '../views/Room/addRoom.vue';
import editRoom from '../views/Room/editRoom.vue';
import RoomType from '../views/Room_Type/roomType.vue';
import RoomPrice from '../views/Room_Price/roomPrice.vue';
import Service from '../views/Service/service.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/room',
    name: 'Room',
    component: Room
  },
  {
    path: '/room/addroom',
    name: 'addRoom',
    component: addRoom
  },
  {
    path: '/room/editroom',
    name: 'editRoom',
    component: editRoom
  },
  {
    path: '/roomType',
    name: 'RoomType',
    component: RoomType
  },
  {
    path: '/roomType/addRoomType',
    name: 'itemRoomType.create',
    component: () => import("@/views/Room_Type/addRoomType.vue")
  },
  {
    path: '/roomType/edit/:id',
    name: 'itemRoomType.edit',
    component: () => import("@/views/Room_Type/editRoomType.vue")
  },
  {
    path: '/roomPrice',
    name: 'RoomPrice',
    component: RoomPrice
  },
  {
    path: '/service',
    name: 'service',
    component: Service
  },
  {
    path: '/service/create',
    name: 'service.create',
    component: () => import("@/views/Service/addService.vue")
  },
  {
    path: '/service/edit/:id',
    name: 'service.edit',
    component: () => import("@/views/Service/editService.vue")
  },
  // {
  //   path: '/booking',
  //   name: 'Booking',
  //   component: Booking
  // },
  // {
  //   path: '/checkin',
  //   name: 'ChenkIn',
  //   component: ChenkIn
  // },
  // {
  //   path: '/checkout',
  //   name: 'Checkout',
  //   component: Checkout
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

