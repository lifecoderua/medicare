import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Patients from '@/components/Patients'
import Patient from '@/components/Patient'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/patients',
      name: 'Patients',
      component: Patients
    },
    {
      path: '/patient/:id',
      name: 'Patient',
      component: Patient
    }
  ]
})
