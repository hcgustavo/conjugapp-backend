const questions = [
    {
        // Je vais au cinéma.
        id: 1,
        verb: "aller",
        tense: "indicatif/présent",
        parts: ["Je", "au cinéma."],
        response: "je vais au cinéma",
    },

    {
        // Il faut que tu ailles au supermarché.
        id: 2,
        verb: "aller",
        tense: "subjonctif/présent",
        parts: ["Il faut que", "tu", "au supermarché."],
        response: "il faut que tu ailles au supermarché"
    },

    {
        // Nous avons travaillé pendant toute la nuit.
        id: 3,
        verb: "travailler",
        tense: "indicatif/passé composé",
        parts: ["Nous", "pendant toute la nuit."],
        response: "nous avons travaillé pendant toute la nuit"
    },

    {
        // Elles sont allées à la plage hier.
        id: 4,
        verb: "aller",
        tense: "indicatif/passé composé",
        parts: ["Elles", "à la plage hier."],
        response: "elles sont allées à la plage hier"
    },

    {
        // Vous vous sentez bien?
        id: 5,
        verb: "se sentir",
        tense: "indicatif/présent",
        parts: ["Vous", "bien?"],
        response: "vous vous sentez bien"
    },

    {
        // Nous avons continué bien que nous nous sommes trompés de chemin.
        id: 6,
        verb: "se tromper",
        tense: "subjonctif/passé",
        parts: ["Nous avons", "continué bien que nous", "de chemin."],
        response: "nous avons continué bien que nous nous sommes trompés de chemin"
    }
];

module.exports = questions;