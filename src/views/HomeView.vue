<template>
  <AppNav />
  <AppHeader />
  <AppIntro />
  <AppFramework />
  <AppClients />
  <Trapheader />
  <AppFooter />
</template>

<script>
// @ is an alias to /src

import AppNav from "@/components/NavBar";
import AppHeader from "@/components/HugoHead";
import AppIntro from "@/components/IntroDuction";
import AppFramework from "@/components/FrameWorks";
import AppClients from "@/components/ClientsRate";
import Trapheader from "@/components/TrapezoidHeader.vue";
import AppFooter from "@/components/FooTer";
export default {
  name: "HomeView",
  components: {
    AppNav,
    AppHeader,
    AppIntro,
    AppFramework,
    AppClients,
    Trapheader,
    AppFooter,
  },
};
</script>
