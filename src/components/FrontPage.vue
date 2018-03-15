<template>
  <v-container fluid>
      <v-container>
        <v-layout row>
          <v-flex xs-6 mr-5>
            <h2>Ближайшее</h2>
            <v-list>
              <template v-for="(item, index) in items">
                <v-list-tile :key="item.time" @click="$router.push({name: 'Patient', params: {id: index}})">
                  <v-list-tile-content>
                    <v-list-tile-title> <span class="subheading">{{item.time}} — </span>{{item.name}}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-divider :key="'x'+item.time"></v-divider>
              </template>
            </v-list>
          </v-flex>
          <v-flex xs-6>
            <h2>Проконтролировать</h2>
            <v-list two-line>
              <template v-for="(item, index) in items">
                <v-list-tile :key="item.time" @click="$router.push({name: 'Patient', params: {id: index}})">
                  <v-list-tile-content>
                    <v-list-tile-title v-html="item.name"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="item.reason"></v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-divider :key="'x'+item.time"></v-divider>
              </template>
            </v-list>
          </v-flex>
        </v-layout>
      </v-container>

      <hr>
      <v-container>
        <v-layout column align-center>
          <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
          <h2>TODO</h2>
          <ul>
            <li><h3>Basic</h3></li>
            <li>Build script with docker and fancies. Or just a build-push script, you know.</li>
            <li>Patient cases management</li>
            <li>Patients list with Grid, include search. Or use standalone search/filter;</li>
            <li>Common models usage, replace local data stubs;</li>
            <li>Backend - basic</li>
            <li>Backend - offline work, readonly</li>
            <li>Backend - two-way sync (simple, override)</li>
            <li><hr></li>
            <li><h3>Extras</h3></li>
            <li>Protected access</li>
            <li>Multiuser platform, enchanced protection, dedicated DBs/data storages</li>
            <li>Sync - intelligent. Versioning? Merge request? Intelligent merging when possible?</li>
            <li>Drugs list, quick select by category, sort by used alredy for the patient first</li>
            <li>Dosage calculator and quick reference, especially for antibiotics</li>
            <li>Drug's manual quick access</li>
            <li><hr></li>
            <li><h3>App Modes</h3></li>
            <li>Patient view - access to personal data and story, prescriptions, etc</li>
            <li>Clinic - multiple specialists integration, shared patients, roles, workflows</li>
            <li>? Personal - App mode for single user (is it different enough from regular mode? May be suitable for a family)</li>
          </ul>
        </v-layout>
      </v-container>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  padding: 0;
}
a {
  color: #42b983;
}
.subheading {
  color: rgba(0,0,0,0.54);
}
</style>


<script>
export default {
  data () {
    return {
      items: [
        { name: 'Mike Apike', time: '11:30', reason: 'Последнее обновление - 2 недели назад' },
        { name: 'Roy Muroy', time: '12:00', reason: 'Последнее обновление - неделю назад' },
        { name: 'Klei Wei', time: '12:30', reason: 'Высокая температура' }
      ]
    }
  }
}
</script>
