<template>
  <v-container fluid>
    <v-card class="pa-3">
      <v-row>
        <v-col>
          <v-card class="pa-3" outlined>Col</v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>Col</v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>Col</v-card>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col>
          <v-card class="pa-3" outlined>Col</v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>Col</v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>Col</v-card>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <v-card class="pa-3" outlined>Col</v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>Col</v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>Col</v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="mt-5 pa-3">
      <v-row class="red h-200" align="end">
        <v-col cols="auto">
          <v-card class="pa-3" outlined>Col</v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>Col</v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>Col</v-card>
        </v-col>
      </v-row>
      <v-row class="yellow h-200" align="start">
        <v-col align-self="end">
          <v-card class="pa-3" outlined>Col</v-card>
        </v-col>
        <v-col align-self="start">
          <v-card class="pa-3" outlined>Col</v-card>
        </v-col>
        <v-col align-self="center">
          <v-card class="pa-3" outlined>Col</v-card>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col cols="auto">
          <v-card class="pa-3" outlined>Col</v-card>
        </v-col>
        <v-col cols="auto">
          <v-card class="pa-3" outlined>Col</v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.h-200 {
  height: 200px;
}
</style>
