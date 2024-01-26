<script setup lang="ts">
import type { RouterLink } from "@/router/list-routes";

interface Props  {
  title?: string;
  links: RouterLink[];
  navSecondary?: boolean;
};

// defineProps<Props>()
withDefaults(
  defineProps<Props>(), {
    title: "Valor padrão",
    navSecondary: false
  }

);
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
        v-for="link of $props.links"
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
