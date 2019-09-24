<template>
  <section class="upcoming-matches">
    <div class="container">
      <carousel
        class="upcoming-matches__list"
        :per-page="1"
        :autoplay="true"
        :autoplayHoverPause="true"
        :paginationEnabled="true"
        :navigationEnabled="true"
        :navigationNextLabel="this.next"
        :navigationPrevLabel="this.prev"
      >
        <slide 
          class="match" 
          v-for="match in matches" 
          :key="match.id"
        >
          <div class="match__col match__col--team">
            <img 
              class="match__team-logo" 
              :alt="match.defenderTeam.name" 
              :src="match.defenderTeam.logoURL"
            >
            <h3 class="match__team-name">
              {{ match.defenderTeam.name }}
            </h3>
          </div>
          <div class="match__col match__col--info">
            <div class="match__info-matchweek">
              Kolejka {{ match.matchweek}}
            </div>
            <h2 class="match__info-date">
              {{ match.date }}
            </h2>
            <p class="match__info-time">
              Godzina {{ match.time }}
            </p>
            <div class="match__info-versus">
              <span class="match__info-versus-inner">
                vs
              </span>
            </div>
          </div>
          <div class="match__col match__col--team">
            <img 
              class="match__team-logo" 
              :alt="match.attackerTeam.name" 
              :src="match.attackerTeam.logoURL"
            >
            <h3 class="match__team-name">
              {{ match.attackerTeam.name }}
            </h3>
          </div>
        </slide>
      </carousel>
    </div>
  </section>
</template>

<script>

export default {
  name: 'upcoming-matches',
  data: () => ({
    prev: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"/><path fill="none" d="M0 0h24v24H0z"/></svg>`,
    next: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path opacity=".87" fill="none" d="M24 24H0V0h24v24z"/><path d="M6.49 20.13l1.77 1.77 9.9-9.9-9.9-9.9-1.77 1.77L14.62 12l-8.13 8.13z"/></svg>`
  }),
  props: {
    matches: {
      type: Array,
      required: true,
    },
  },
};

</script>

<style lang="scss" src="./UpcomingMatches.scss" />
