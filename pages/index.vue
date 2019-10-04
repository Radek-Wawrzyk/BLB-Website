<template>
  <main>
    <header class="header">
      <h1>Test</h1>
      <h2>Test</h2>
      <h3>Test</h3>
      <h4>Test</h4>
      <h5>Test</h5>
      <h6>Test</h6>
      <p>Test</p>
    </header>

    <upcoming-matches :matches="matches" />

    <section class="section" id="about">
      about league
    </section>

    <league-table :teams="teams" />

    <section class="section" id="news">
      latest news
    </section>
    <section class="section" id="sponsors">
      sponsors
    </section>
  </main>
</template>

<script>
import UpcomingMatches from '~/components/UpcomingMatches/UpcomingMatches.vue';
import LeagueTable from '~/components/LeagueTable/LeagueTable.vue';
import { upcomingGames } from '~/mockupData.js';
import { teamsStats } from '~/mockupData.js';

export default {
  name: 'homepage',
  data: () => ({
    matches: upcomingGames,
    teams: teamsStats,
  }),
  components: {
    UpcomingMatches,
    LeagueTable,
  },
};

</script>

<style lang="scss" scoped>
.header {
  margin: 70px 0 0 0;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.section {
  width: 100%;
  height: 500px;
  text-align: center;
  background: $bck-primary;
  display: flex;
  justify-content: center;
  align-items: center;
}
.section:nth-child(even) {
  background: $bck-secondary;
}
</style>
