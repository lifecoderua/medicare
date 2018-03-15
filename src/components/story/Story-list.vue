<template>
  <div>
    <h2>Карта
      <v-btn color="info" fab small dark
        @click="$router.push({name: 'StoryAdd', params: {id: $route.params.id}})"
      ><v-icon>add</v-icon></v-btn>
    </h2>
    <story v-for="story in stories" :key=story.id></story>
  </div>
</template>

<script>
// TODO: make list appearance more short. Shrink older cases
import Story from '@/components/story/Story'

export default {
  components: {
    story: Story,
  },
  data () {
    return {
      stories: [
        {id: 0},
        {id: 1},
        {id: 2},
      ]
    }
  }
}
</script>
