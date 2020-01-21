export default {
    authenticated: false,
    userEmail: 'test@test.com',
    imekorisnika: "",
    nameRules: [
        v => !!v || "Potrebno je unijeti ime",
        v => (v && v.length <= 10) || "Ime mora imati manje od 10 znakova"
    ],
    email: "",
    emailRules: [
        v => !!v || "Potrebno je unijeti e-mail",
    ],
    password: "",
    passwordConfirmation: "",
    passwordRules: [
        v => !!v || "Potrebno je unijeti lozinku",
    ],

}