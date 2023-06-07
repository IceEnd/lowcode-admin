

declare module '*.vue' {
  import { defineComponent } from 'vue';
  const Componet: ReturnType<typeof defineComponent>;
  export default Componet;
}
