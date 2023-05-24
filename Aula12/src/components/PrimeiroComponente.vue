<template>
  <div>
<<<<<<< HEAD
    <h1>Primeiro Componente</h1>
    
    <input type="checkbox" v-model="check" @change="Mostrar" />
    <div v-show="mostrar">
      <h2>Ola mundo</h2>
      
      <ul>
        <li v-for="(item, chave) in json" :key="chave">
          {{ item }}
        </li> 
=======
    <h1>Rodrigo Escobar</h1>
    <br />
    <p>Olá mundo</p>
    <input type="checkbox" v-model="ativo" @change="alterar" />
    <br />
    <input type="text" v-model="nome" @keyup.enter="buscarNome" />

    <div v-if="mostrar">
      <h2>Apareceu</h2>
      <ul>
        <li v-for="(item, key) in json" :key="key">
          {{ item }}
        </li>
      </ul>
    </div>

    <div v-for="(item, i) in resultado" :key="i">
      <ul>
        <li>
          <img :src="item.imageUrl" />
          {{ item.name }}
        </li>
>>>>>>> 571c88c09ac1b2aaa2a380679b3b50fbe2c74da5
      </ul>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
export default {
    name: "PrimeiroComponente",

    data() {
      return {
        check: true,
        mostrar: true,
        json: [
          "Janete",
          "Ivonete",
          "Clarete",
          "Margarete",
          "Gildete",
          "Marinete",
          "Ivete",
          "Joana"
        ]
      }
    },

    methods: {
      Mostrar() {
        this.mostrar = this.check
      }
    }
}
</script>
=======
import { onMounted, ref } from "vue";
import api from "../services/api";

export default {
  name: "PrimeiroComponente",
  components: {
    api,
  },

  data() {
    return {
      ativo: false,
      mostrar: false,
      json: ["Rodrigo", "Escobar"],
      resultado: "",
    };
  },

  mounted() {
    this.buscar();
  },
  
  methods: {
    alterar() {
      this.mostrar = !this.mostrar;
    },
    buscar() {
      api
        .get("character")
        .then((response) => {
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    buscarNome() {
      api
        .get("character?name=" + this.nome)
        .then((response) => {
          this.resultado = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
>>>>>>> 571c88c09ac1b2aaa2a380679b3b50fbe2c74da5
