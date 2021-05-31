<template>
  <v-card class="overflow-hidden" style="overflow-y: scroll">
    <v-app-bar
      absolute
      color="#470606"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-content"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, #470606, #000"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title>Title</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/admin/">Overview</v-tab>
          <v-tab to="/admin/gallery">Gallery</v-tab>
          <v-tab to="/admin/settings">Settings</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    
    <v-sheet
      id="scrolling-content"
      class="overflow-y"
      max-height="100vh"
      style="padding-top: 220px; overflow-y: scroll !important;"
    >
      <v-container style="height: 100vh;">
        <router-view></router-view>
      </v-container>
    </v-sheet>
  </v-card>
</template>


