<script setup lang="ts">
import type { RouterLink } from "@/router/list-routes";
import { computed, toRef } from "vue";

interface Props  {
  title?: string;
  links: RouterLink[];
  navSecondary?: boolean;
};

// defineProps<Props>()
const props = withDefaults(
  defineProps<Props>(), {
    title: "Valor padrão",
    navSecondary: false
  }

);
// posso uso toRef para não perder a 'reatividade' do props
// const links = toRef(props, "links");
// posso usar o computed() também
// filtrar links que estejam visible = 'true'
const links = computed(() => props.links.filter(link => link.visible));

</script>

<template>
  <nav>
    <template v-if="!$props.navSecondary">
      <div class="logo">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />
        <span 
          v-if="$props.title"
        >
          {{ $props.title }}
        </span>
      </div>
    </template>
    <div class="links">
      <RouterLink
        v-for="link of links"
        :key="link.path"
        :to="link.path"
      >
        {{ link.name }}
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
