<template>
  <nav class="navigation">
    <div class="navigation__column">
      <figure class="navigation__logo">
        <nuxt-link to="/" aria-label="Strona główna" title="Strona główna">
          BLB logo
        </nuxt-link>
      </figure>
    </div>
    <div class="navigation__column">
      <ul class="navigation__menu">
        <li class="navigation__menu-item" v-for="(link, index) in menu" :key="index">
          <nuxt-link :to="link.path" class="navigation__menu-link" :aria-label="link.name" :title="link.name">
            {{link.name}}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Navigation',
  data: () => ({
    menu: [{
      name: 'Liga',
      path: '/liga'
    },
    {
      name: 'Aktualności',
      path: '/aktualności'
    },
    {
      name: 'Zespoły',
      path: '/zespoly'
    },
    {
      name: 'Statystyki',
      path: '/statystyki'
    },
    {
      name: 'Rozgrywki',
      path: '/rozgrywki'
    },
    {
      name: 'Kontakt',
      path: '/kontakt'
    }]
  })
};

</script>

<style lang="scss" scoped src="./Navigation.scss" />
