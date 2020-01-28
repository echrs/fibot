export default {
    imeKorisnika: '',
    authenticated: false,
    userEmail: 'test@test.com',
    newMessage: "",
    initialMessage: "",
    messages: [],
    disableInput: false,
    razgovor: {
        Pocetak: {
            show: false,
            bot_kaze: ['Pozdrav, o čemu zelis pricati.', '...'],
            user_odgovori: [
            {
                izbor: "Upisi",
                value: "upisi",
            },
            {
                izbor: "Studijski programi",
                value: "studijski_programi",
            },
            {
                izbor: "Studentska pitanja",
                value: "studentska_pitanja",
            },
            {
                izbor: "Općenito o faksu",
                value: "fakultet",
            },
        ]
        },
        Kraj: {
            show: false,
            bot_kaze: ['Ovo je kraj.', 'hahaha'],
            user_odgovori: [{
                izbor: "Opet!",
                value: "Pocetak",
            }]
        },
        Upisi: {
            show: false,
            bot_kaze: ['Sto tocno zelis o upisima?', 'jos jedna recenica.'],
            user_odgovori: [{
                izbor: "Vrijeme",
                value: "vrijeme",
            },
            {
                izbor: "Mjesto",
                value: "mjesto",
            },
            {
                izbor: "Dokumentacija",
                value: "dokumentacija",
            },
            {
                izbor: "Kraj je tu.",
                value: "Kraj",
            },
        ]
        },
    }
}
