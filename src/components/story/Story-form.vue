<template>
  <v-container fluid grid-list-lg>
    <v-slide-y-transition mode="out-in">
      <v-layout row>
        <v-flex>
          <h1>Добавить запись</h1>

          <v-container fluid>
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  label="Температура"
                  v-model="temperature"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  label="Симптомы"
                  v-model="symptoms"
                  textarea
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  label="Назначения"
                  v-model="prescriptions"
                  textarea
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-btn>
              <!-- @click="submit"
              :disabled="!valid"
            > -->
              Добавить
            </v-btn>
          </v-container>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


<script>
// TODO: extra drugs/medication array with precise info { drug, dosage, usage, applyUntil }
// TODO: parent Story
// TODO: start/end dates on parent Story
export default {
  data () {
    return {
      temperature: '',
      symptoms: '',
      prescriptions: '',
    }
  },
}
</script>
