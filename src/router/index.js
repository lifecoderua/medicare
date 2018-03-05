import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Patients from '@/components/patient/Patient-list'
import Patient from '@/components/patient/Patient'
import PatientForm from '@/components/patient/Patient-form'

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
    },
    {
      path: '/patients/add',
      name: 'PatientAdd',
      component: PatientForm
    },
    {
      path: '/patient/:id/edit',
      name: 'PatientEdit',
      component: PatientForm
    }
  ]
})
