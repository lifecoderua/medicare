<template>
  <v-container fluid grid-list-lg>
    <v-slide-y-transition mode="out-in">
      <v-layout row>
        <v-flex>
          <h1>Добавить пациента</h1>

          <v-container fluid>
            <v-layout row>
              <v-flex xs6>
                <v-text-field
                  label="Имя"
                  v-model="firstName"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs6>
                <v-text-field
                  label="Фамилия"
                  v-model="lastName"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12>
                <v-menu
                  ref="menu"
                  lazy
                  :close-on-content-click="false"
                  v-model="menu"
                  transition="scale-transition"
                  offset-y
                  full-width
                  :nudge-right="40"
                  min-width="290px"
                  :return-value.sync="birthday"
                >
                  <v-text-field
                    slot="activator"
                    label="Родился"
                    v-model="birthday"
                    prepend-icon="event"
                    required
                    readonly
                  ></v-text-field>
                  <v-date-picker v-model="birthday" ref="picker" no-title scrollable
                    :first-day-of-week="1"
                    locale="ru"
                    min="1910-01-01"
                    :max="new Date().toISOString().substr(0, 10)">
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="menu = false">Отмена</v-btn>
                    <v-btn flat color="primary" @click="$refs.menu.save(birthday)">OK</v-btn>
                  </v-date-picker>
                </v-menu>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  label="Вес"
                  v-model="weight"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs4>
                <v-text-field
                  label="Телефон"
                  v-model="phone"
                  prepend-icon="phone"
                ></v-text-field>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  label="Контактное лицо"
                  v-model="contactPerson"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  label="Дополнительная информация"
                  v-model="info"
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
export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      birthday: '',
      weight: 0,
      phone: '',
      contactPerson: '',
      info: '',

      menu: false,
    }
  },
  watch: {
    menu (val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  },
}
</script>
