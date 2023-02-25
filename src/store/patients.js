// Utilities
import { defineStore } from "pinia";
import dummyData from "@/api/patients.js";

export const usePatientsStore = defineStore("patients", {
  state: () => ({
    patients: dummyData,
  }),
  getters: {
    patientsGetter: (state) => state.patients,
  },
  actions: {
    addPatient(patient) {
      this.patients.push(patient);
    },
  },
});
