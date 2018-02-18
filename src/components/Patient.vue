<template>
  <v-container fluid grid-list-lg>
    <v-slide-y-transition mode="out-in">
      <v-layout row>
        <v-flex>
          <h1>Mike Apike</h1>

          <v-container fluid>
            <v-layout row>
              <v-flex xs-12>
                <v-card>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">BIO</h3>
                      <p>8 лет — 1993 г.р.</p>
                      <p>14кг — обновлено 3 месяца назад</p>
                      <p>Аллергия: Нет</p>
                      <hr>
                      <p>Не спит</p>
                      <p>Теряет волю при звуках флейты</p>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                    <v-btn flat color="orange">Explore</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>

          <h2>Карта</h2>

          <v-container fluid>
            <v-layout row>
              <v-flex xs-12>
                <v-card>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">ОТКРЫТО<span class="subheading"> — 5 дней назад</span></h3>
                      <h4>TODO: поделить пополам для рецепта/списка прописанных медикаментов?</h4>
                      <p>Температура 40.1</p>
                      <p>Насморк</p>
                      <p>Кашель</p>
                      <hr>
                      <h3 class="subheading">2 дня спустя</h3>
                      <p>Кашель жесткий</p>
                      <p>Хрипы слева</p>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat color="orange">Подробнее</v-btn>
                    <v-btn flat color="orange">Редактировать</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>

          <v-container fluid>
            <v-layout row>
              <v-flex xs-12>
                <v-card>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">Воспаление хитрости 3ей степени<span class="subheading"> — 3 месяца назад</span></h3>
                      <p>Температура 36.6</p>
                      <p>Насморк</p>
                      <p>Кашель</p>
                      <hr>
                      <h3 class="subheading">3 дня спустя</h3>
                      <p>Насморк прошел</p>
                      <p>Кашель прошел</p>
                      <h3>Диагноз: воспаление хитрости 3ей степени</h3>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat color="orange">Подробнее</v-btn>
                    <v-btn flat color="orange">Редактировать</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>

          <v-container fluid>
            <v-layout row>
              <v-flex xs-12>
                <v-card>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">? кашель<span class="subheading"> — 5 месяцев назад</span></h3>
                      <p>Температура 38.1</p>
                      <p>Кашель</p>
                      <p>Боль в горле</p>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat color="orange">Подробнее</v-btn>
                    <v-btn flat color="orange">Редактировать</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
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
      items: [
        { title: 'Mike Apike', subtitle: '8 years' },
        { title: 'Roy Muroy', subtitle: '4 years' },
        { title: 'Klei Wei', subtitle: '5 years' }
      ]
    }
  }
}
</script>
