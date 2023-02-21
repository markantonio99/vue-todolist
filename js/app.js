const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
      nuovoImpegno: { text: "", done: false },
      impegni: [
        { text: "Comprare il latte", done: false },
        { text: "Prendere ingredienti per la lasagna", done: true },
      ],
      impegniSvolti: []
    };
  },
  methods: {
    aggiungiImpegno() {
      this.impegni.push({ text: this.nuovoImpegno.text, done: false });
      this.nuovoImpegno.text = "";
    },
    rimuoviImpegno(index) {
      const impegno = this.impegni.splice(index, 1)[0];
      if (impegno.done) {
        this.impegniSvolti.push(impegno);
      }
    },
    sbarraTesto(index) {
      if (this.impegni[index].done) {
        return { 'text-decoration': 'line-through' };
      } else {
        return {};
      }
    },
  },
}).mount("#app");


  