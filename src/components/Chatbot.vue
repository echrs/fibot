<template>
  <v-container
    class="container scroll-y"
    fill-height
    justify-center
    style="background:#EFFAFE"
    align-end
  >
    <v-row style="background:#EFFAFE; overflow-y: auto;">
      <v-col id="msgs">
        <template>
          <Talquei transition="slide-y-transition">
            <TalqueiMessage :imeKorisnika="imeKorisnika" :text="initialMessage" />
            <TalqueiMessage v-model="value" :input="{ tag: 'select', options: teme }" is-user />
            <TalqueiMessage
              v-show="this.value === teme.imam_pitanje"
              text="Pitaj, slobodno. Tvoje pitanje proslijedit ću odgovornima."
            />
            <TalqueiMessage
              v-if="this.value === teme.imam_pitanje"
              v-model="pitanje"
              :input="{ tag: 'text', placeholder: '' }"
              is-user
            />
            <TalqueiMessage v-show="this.posaljiodg" text="Poslano. Hvala!" />
            <TalqueiMessage
              v-show="this.value === teme.upisi"
              text="Trenutno nema upisa u tijeku! Upisi za Fakultet informatike u Puli odvijaju se krajem srpnja i rujna. "
            />
            <TalqueiMessage
              v-show="this.value === teme.stud_programi"
              text="Fakultet informatike u Puli nudi preddiplomski i diplomske studije. Koji te zanimaju?"
            />
            <TalqueiMessage
              v-if="this.value === teme.stud_programi"
              v-model="grana1"
              :input="{ tag: 'select', options: studiji }"
              is-user
            />
            <TalqueiMessage
              v-show="this.grana1 === studiji.preddiplomski"
              text="Studij Informatike omogućava stjecanje širokog skupa znanja i vještina iz informatike, jednako kao i sposobnost njihove primjene na probleme u praksi. Za potrebe studija definirani su obvezni kolegiji u okviru kojih se studenti upoznaju s osnovnim temama iz različitih područja informacijskih znanosti i izborni koji pružaju priliku proširivanja znanja iz područja koja su zanimljiva studentu. Polaganjem obveznih kolegija stvara se temeljna baza znanja koja se potom može nadograditi izbornim kolegijima koji mogu pomoći studentu da pronađe područje specijalizacije za buduću karijeru nakon diplome. Povrh toga, studentu je na raspolaganju i obavljanje stručne prakse tj. mogućnost direktnog povezivanja s budućim poslodavcem. Završetkom preddiplomskog studija student ima izbor nastaviti diplomski studij Informatike ili mogućnost izlaska na tržište rada gdje će mu stečene kompetencije omogućiti da se uklopi i postane punopravni član suvremenih organizacija."
            />
            <TalqueiMessage
              v-show="this.grana1 === studiji.diplomski"
              text="Cilj sveučilišnog diplomskog studija informatike je da obrazuje vrsne stručnjake iz raznih informatičkih disciplina, produbljujući i proširujući teoretska i praktična znanja s preddiplomskog studija uz dobro razumijevanje poslovnog svijeta koji primjenjuje IKT rješenja radi povećanja djelotvornosti suvremene organizacije."
            />
            <TalqueiMessage
              v-show="this.grana1 === studiji.diplomski_n"
              text="Cilj sveučilišnog diplomskog studija informatike je da obrazuje vrsne stručnjake za prijenos informatičkih znanja, produbljujući i proširujući teoretska i praktična znanja s preddiplomskog studija uz dobro razumijevanje poslovnog svijeta koji primjenjuje IKT rješenja radi povećanja djelotvornosti suvremene organizacije."
            />
            <TalqueiMessage
              v-show="this.value === teme.stud_pitanja"
              text="Ah! Pitanja... Svi ih imamo. Reci mi!"
            />
            <TalqueiMessage
              v-if="this.value === teme.stud_pitanja"
              v-model="grana2"
              :input="{ tag: 'select', options: studpitanja }"
              is-user
            />
            <TalqueiMessage
              v-show="this.grana2 === studpitanja.menza"
              text="Prehrana za studente organizirana je u novom restoranu i pizzeriji u neposrednoj blizini Studentskog doma, Preradovićeva 28B. 
              Menza je otvorena radnim danom od 7:30 do 9:00 za doručak, od 11:30 do 15:30 za ručak i od 18:00 do 20:00 za večeru. Subotom je doručak od 8:00 do 9:00, 
              ručak od 12:00 do 15:00, a večera kao i inače. Nedjeljom nema doručka ni večere, već samo ručak od 12:00 do 14:00. Pizzeria radi od ponedjeljka do 
              subote od 11:00 do 20:00."
            />
            <TalqueiMessage
              v-show="this.grana2 === studpitanja.referada"
              text="Referada nalazi se u Preradićevoj 1, kabinet broj 7. Radno vrijeme je ponedjeljak, utorak i četvrtak od 12:00 do 14:00, srijeda od 12:00 do 14:00
              i od 15:00 do 16:30, te petak od 11:00 do 12:30."
            />
            <TalqueiMessage
              v-show="this.grana2 === studpitanja.smjestaj"
              text="Pravo na smještaj u Studentski dom Pula imaju redoviti studenti, a to pravo ostvaruju na temelju Natječaja koji se objavljuje svake godine u 
              srpnju putem internetske stranice Studentskog centra Pula. Prijavom na ovaj Natječaj, studenti također imaju mogućnost ostvarenja prava na 
              subvencioniranje smještaja kod privatnih stanodavaca u Puli."
            />
            <TalqueiMessage v-show="this.value === teme.zanimljivosti" :text="this.recenicaString" />
          </Talquei>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import store from "@/store.js";
import { Talquei, TalqueiMessage } from "talquei";

export default {
  name: "Chatbot",
  components: { Talquei, TalqueiMessage },
  data() {
    return store;
  },
  watch: {
    value: function() {
      //slanje prvotne opcije na bazu - hot topics?
      console.log("Slanje " + this.value + " na firebase.");
      db.collection("teme").add({
        imeKorisnika: this.imeKorisnika,
        message: this.value
      });
    },
    pitanje: function() {
      //slanje pitanja na bazu kako bi se onda mogla proslijeđivati odgovornima
      console.log("Slanje " + this.value + " na firebase.");
      db.collection("pitanjakorisnika").add({
        imeKorisnika: this.imeKorisnika,
        email: this.userEmail,
        pitanje: this.pitanje
      });
      //bot salje odgovor kada je vrijednost posaljiodg true
      this.posaljiodg = true;
    }
  },
  mounted() {
    //randomizer za opciju zanimljivosti
    this.recenicaIndex = Math.floor(Math.random() * this.arrayrec.length);
    this.recenicaString = this.arrayrec[this.recenicaIndex];
    let self = this;
    setTimeout(function() {
      if (self.imeKorisnika != "") {
        self.initialMessage =
          "Zdravo " + self.imeKorisnika + "! O čemu želiš razgovarati?";
      } else {
        self.initialMessage = "Zdravo! O čemu želiš razgovarati?";
      }
    }, 1000);
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "../styles/style.css";
</style>

