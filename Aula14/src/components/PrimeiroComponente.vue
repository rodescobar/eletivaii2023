<template>
  <div>
    <h1>Primeiro Componente</h1>
    
    <input type="checkbox" v-model="check" @change="Mostrar" />
    <div v-show="mostrar">
      <h2>Ola mundo</h2>
      
      <ul>
        <li v-for="(item, chave) in json" :key="chave">
          {{ item }}
        </li> 
      </ul>
    </div>
  </div>
</template>

<script>
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