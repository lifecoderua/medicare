import Vue from 'vue'
import Router from 'vue-router'
import FrontPage from '@/components/FrontPage'
import Patients from '@/components/patient/Patient-list'
import Patient from '@/components/patient/Patient'
import PatientForm from '@/components/patient/Patient-form'
import StoryForm from '@/components/story/Story-form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FrontPage',
      component: FrontPage
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
    },
    {
      path: '/patient/:id/stories/add',
      name: 'StoryAdd',
      component: StoryForm
    },
    {
      path: '/patient/:id/story/:sid/edit',
      name: 'StoryEdit',
      component: StoryForm
    }
  ]
})
