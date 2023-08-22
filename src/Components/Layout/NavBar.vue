<template>
    <nav
      class="navbar is-info"
      aria-label="main navigation"
      role="navigation"
    >
    <div class="container is-max-desktop px-2">
          <div class="navbar-brand">
          <div class="navbar-item is-size-3 is-family-monospace">
            Noteballs
        </div>
      
          <a 
          @click.prevent="showMobileNave=!showMobileNave"
            class="navbar-burger"
            :class="{'is-active':showMobileNave}"
            aria-expanded="false"
            aria-label="menu"
            data-target="navbarBasicExample"
            role="button"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div
          class="navbar-menu"
          :class="{'is-active':showMobileNave}"
          id="navbarBasicExample"
        >

      
          <div class="navbar-end">
             <RouterLink
               class="navbar-item"
               active-class="is-active"
               to="/"
               >
               Notes</RouterLink>
             <RouterLink
               class="navbar-item"
               active-class="is-active"
               to="/stats"
               >
               Stats
            </RouterLink>
          </div>
        </div>
    </div>
      </nav>
</template>

<script setup> 
import {ref} from "vue";
//mobile nav
const showMobileNave=ref(false)
</script>

<style>
@media (max-width:1023px){
    .navbar-menu{
        position: absolute;
        left: 0;
        width: 100%;
    }
}
</style>