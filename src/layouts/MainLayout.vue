<template>
  <v-card class="mx-auto overflow-hidden MainLayout" dark>
    <v-app-bar dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-group
          v-for="route in this.$router.options.routes"
          :key="route.title"
          v-model="route.active"
          :prepend-icon="route.icon"
          no-action
          dark
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="route.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="child in route.children" :key="child.name" :to="child.path" dark>
            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <router-view />
  </v-card>
</template>

<style scoped>
.MainLayout {
  border-radius: 0;
  height: 100vh;
  width: 100vw;
}
.NavButton {
  width: 100%;
}
</style>
<script>
export default {
  name: "MainLayout",
  data: () => ({
    drawer: true,
    offset: true
  })
};
</script>