<template>
  <section class="league-table">
    <div class="container">
      <header class="league-table__header">
        <h3 class="league-table__title">
          Tebela wyników
        </h3>
      </header>
      <div class="league-table__content">
        <div class="table">
          <header class="table__header">
            <div class="table__header-column">
              Pos.
            </div>
            <div class="table__header-column">
              Klub
            </div>
            <div class="table__header-column">
              Mecze
            </div>
            <div class="table__header-column">
              Wygrane / Przegrane
            </div>
            <div class="table__header-column">
              Pkt
            </div>
          </header>
          <ul class="table__content">
            <li 
              class="table-team" 
              v-for="(team, index) in teams" 
              :key="team.id"
            >
              <div class="table-team__column table-team__column--center">
                {{ team.position }}
                <span class="table-team__mobile-label">Poz.</span>
              </div>
              <div class="table-team__column table-team__column--info">
                <img 
                  :src="team.logoURL" 
                  :alt="team.name" 
                  class="table-team__logo"
                />
                {{ team.name }}
              </div>
              <div class="table-team__column table-team__column--center">
                {{ calculateMatches(team) }}
                <span class="table-team__mobile-label">Mecze</span>
              </div>
              <div class="table-team__column table-team__column--stats">
                <div 
                  class="table-team__stat"
                  :style="'width: ' + (team.stats.wins / calculateMatches(team)) * 100 + '%'" 
                >
                  <p class="table-team__stat-wins">
                    {{ team.stats.wins }}W
                  </p>
                  <span class="table-team__line table-team__line--wins" />
                </div>
                <div 
                  class="table-team__stat"
                  :style="'width: ' + (team.stats.losses / calculateMatches(team)) * 100 + '%'" 
                >
                  <p class="table-team__stat-losses">
                    {{ team.stats.losses }}P
                  </p>
                  <span class="table-team__line table-team__line--losses" />
                </div>
              </div>
              <div class="table-team__column">
                {{ team.points }}
                <span class="table-team__mobile-label">Pkt</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'league-table',
  props: {
    teams: {
      type: Array,
      required: true,
    },
  },
  methods: {
    calculateMatches(team) {
      return team.stats.wins + team.stats.losses;
    },
  },
};
</script>

<style lang="scss" scoped src="./LeagueTable.scss" />
