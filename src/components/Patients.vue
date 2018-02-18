<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout row>
        <v-flex>
          <v-list two-line>
            <template v-for="(item, index) in items">
              <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
              <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
              <v-list-tile avatar v-else :key="item.title" @click="$router.push({name: 'Patient', params: {id: index}})">
                <v-list-tile-action>
                  <v-icon>face</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title v-html="item.title"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
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
      items: [
        { header: 'Today' },
        { title: 'Mike Apike', subtitle: '8 years' },
        { divider: true, inset: true },
        { title: 'Roy Muroy', subtitle: '4 years' },
        { divider: true, inset: true },
        { title: 'Klei Wei', subtitle: '5 years' }
      ]
    }
  }
}
</script>
