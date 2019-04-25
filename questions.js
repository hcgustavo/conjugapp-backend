const questions = [
    {
        // Je vais au cinéma.
        verb: "aller",
        tense: "indicatif/présent",
        parts: ["Je", "au cinéma"],
        response: "je vais au cinéma",
    },

    {
        // Il faut que tu ailles au supermarché.
        verb: "aller",
        tense: "subjonctif/présent",
        parts: ["Il faut que", "tu", "au supermarché."],
        response: "il faut que tu ailles au supermarché"
    },

    {
        // Nous avons travaillé pendant toute la nuit.
        verb: "avoir",
        tense: "indicatif/passé composé",
        parts: ["Nous", "pendant toute la nuit."],
        response: "nous avons travaillé pendant toute la nuit"
    },

    {
        // Elles sont allées à la plage hier.
        verb: "aller",
        tense: "indicatif/passé composé",
        parts: ["Elles", "à la plage hier."],
        response: "elles sont allées à la plage hier"
    },

    {
        // Vous vous sentez bien?
        verb: "se sentir",
        tense: "indicatif/présent",
        parts: ["Vous", "bien?"],
        response: "vous vous sentez bien"
    },

    {
        // Nous avons continué bien que nous nous sommes trompés de chemin.
        verb: "se tromper",
        tense: "subjonctif/passé",
        parts: ["Nous avons", "continué bien que nous", "de chemin."],
        response: "nous avons continué bien que nous nous sommes trompés de chemin"
    }
];

module.exports = questions;