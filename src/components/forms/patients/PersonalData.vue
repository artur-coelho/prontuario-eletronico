<template>
  <div>
    <form>
      <v-row class="ma-0">
        <v-col cols="12" md="6">
          <v-text-field v-model="state.id" :error-messages="v$.id.$errors.map(e => e.$message)" :counter="10" label="Id"
            required @input="v$.id.$touch" @blur="v$.id.$touch"></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="state.cpf" :error-messages="v$.cpf.$errors.map(e => e.$message)" label="CPF" required
            @input="v$.cpf.$touch" @blur="v$.cpf.$touch"></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="state.cns" :error-messages="v$.cns.$errors.map(e => e.$message)" :counter="10"
            label="CNS" required @input="v$.cns.$touch" @blur="v$.cns.$touch"></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="state.place_of_birth" :error-messages="v$.place_of_birth.$errors.map(e => e.$message)"
            label="Naturalidade" required @input="v$.place_of_birth.$touch"
            @blur="v$.place_of_birth.$touch"></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field v-model="state.full_name" :error-messages="v$.full_name.$errors.map(e => e.$message)"
            :counter="10" label="Nome Completo" required @input="v$.full_name.$touch"
            @blur="v$.full_name.$touch"></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field v-model="state.social_name" :error-messages="v$.social_name.$errors.map(e => e.$message)"
            :counter="10" label="Nome Social" required @input="v$.social_name.$touch"
            @blur="v$.social_name.$touch"></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field v-model="state.mother_name" :error-messages="v$.mother_name.$errors.map(e => e.$message)"
            :counter="10" label="Nome da mãe" required @input="v$.mother_name.$touch"
            @blur="v$.mother_name.$touch"></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="state.occupation" :error-messages="v$.occupation.$errors.map(e => e.$message)"
            :counter="10" label="Profissão" required @input="v$.occupation.$touch"
            @blur="v$.occupation.$touch"></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-select v-model="state.gender" :items="genderItens" :error-messages="v$.gender.$errors.map(e => e.$message)"
            label="Sexo" required @change="v$.gender.$touch" @blur="v$.gender.$touch"></v-select>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="state.religion" :error-messages="v$.religion.$errors.map(e => e.$message)" :counter="10"
            label="Religião" required @input="v$.religion.$touch" @blur="v$.religion.$touch"></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="state.education" :error-messages="v$.education.$errors.map(e => e.$message)"
            :counter="10" label="Escolaridade" required @input="v$.education.$touch"
            @blur="v$.education.$touch"></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-select v-model="state.race" :items="raceItens" :error-messages="v$.race.$errors.map(e => e.$message)"
            label="Raça" required @change="v$.race.$touch" @blur="v$.race.$touch"></v-select>
        </v-col>
        <v-col cols="12">
          <v-text-field v-model="state.email" :error-messages="v$.email.$errors.map(e => e.$message)" label="E-mail"
            required @input="v$.email.$touch" @blur="v$.email.$touch"></v-text-field>
        </v-col>

        <v-col to="/patients" class="d-flex justify-space-between ">
          <v-btn>Cancelar</v-btn>
          <v-btn color="error" @click="clear">
            Limpar
          </v-btn>
          <v-btn color="primary" @click="cadaster">
            Prosseguir
          </v-btn>
        </v-col>
      </v-row>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'
import { useRouter } from 'vue-router'
import { usePatientsStore } from '@/store/patients.js'

const store = usePatientsStore();
const router = useRouter();

const initialState = {
  id: '',
  cpf: '',
  cns: '',
  place_of_birth: '',
  full_name: '',
  social_name: '',
  mother_name: '',
  occupation: '',
  religion: '',
  education: '',
  race: '',
  email: '',
  gender: null,
  checkbox: null,
}

const state = reactive({
  ...initialState,
})

const genderItens = ref([
  'Masculino',
  'Feminino',
  'Não Binário',
])

const raceItens = ref([
  'Branco(a)',
  'Negro(a)',
  'Pardo(a)',
])

const rules = {
  id: { required },
  cpf: { required },
  cns: { required },
  place_of_birth: { required },
  full_name: { required },
  social_name: { required: false },
  mother_name: { required: false },
  occupation: { required: false },
  religion: { required: false },
  education: { required: false },
  race: { required: false },
  email: { required, email },
  gender: { required },
  genderItens: { required },
  checkbox: { required },
}

const v$ = useVuelidate(rules, state)

function clear() {
  v$.value.$reset()

  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value
  }
}

function cadaster() {
  v$.$validate;
  store.addPatient(state)
  router.push('/patients')
}

</script>