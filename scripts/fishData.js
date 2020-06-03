const fishCollection = [
    {
        species: "parrot fish",
        length: 8,
        name: "angus",
        location: "Sea of Google",
        food: "Popcorn",
        picture: "https://i.ytimg.com/vi/y6tdGVTgmm4/maxresdefault.jpg"
    },

    {
        species: "Handfish",
        length: 4,
        name: "Louie",
        location: "Deep in the Oceans of Australia",
        Food: "Shrimp",
        picture: "https://www.imas.utas.edu.au/__data/assets/image/0010/1268920/Red-handfish.-Thymichthys-politus.-Credit-Rick-Stuart-Smith-11-sm.jpg"
    },

    {
        species: "Blob Fish",
        length: 11,
        name: "Becky",
        location: "Deep in the Oceans of Australia",
        food: "Crabs? (No one has ever seen a blobfish eat.)",
        picture: "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555293705/shape/mentalfloss/blobfish_0.jpg"
    },

    {
        species: "Barreleye Fish",
        length: 6,
        name: "Garrett",
        location: "Atlantic, Pacific, and Indian oceans",
        food: "Cnidarian Animals and Jellyfish",
        picture: "https://pulptastic.com/wp-content/uploads/2014/11/6c94f37e5f37559e167edaf1a6434b07_970x.jpg"
    },

    {
        species: "Mantis Shrimp",   
        length: 15,
        name: "Stacey",
        location: "Sub-Antarctic waters",
        food: "Fish, crabs, worms, shrimp and other mantis shrimp",
        picture: "https://i.pinimg.com/originals/b2/cb/8b/b2cb8b9b0e908bea7f661c603ce3c54c.jpg"
    },

    {
        species: "Gulf Signal Blenny",
        length: 2,
        name: "Lenny",
        location: "Gulf of California, in the eastern central Pacific ocean",
        food: "Zooplankton",
        picture: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/gulf-signal-blennies-in-threatening-posture-reinhard-dirscherlscience-photo-library.jpg"
    },

    {
        species: "Unicorn Fish",
        length: 24,
        name: "Jocelyn",
        location: "Indian to Pacific Ocean",
        food: "Algae",
        picture: "https://www.twofishdivers.com/wp-content/uploads/2020/01/bluespine-unicornfish-ras-mohammed-np-egypt-red-sea-linda-pitkin-natureplcom.jpg"
    },

    {
        species: "Gulper Eel",
        length: 78,
        name: "Margo",
        location: "North Atlantic Ocean",
        food: "Shrimp, squid and fish.",
        picture: "https://natgeo.imgix.net/factsheets/thumbnails/NW_DLY_ds1802001_447_gulper_eel_scientists_p180921.jpg?auto=compress,format&w=1600&h=900&fit=crop"
    },

    {
        species: "Clown Fish",
        length: 4,
        name: "Nemo",
        location: "MIA",
        food: "Algae and Zooplankton",
        picture: "https://www.celebrationspress.com/wp-content/uploads/2017/11/112717Nemo.png"
    }

]

// 3, 6, 9, 12, etc... fish

const mostHolyFish = () => {
    const holyFish = []

    for (const hfish of fishCollection) {
        if (hfish.length % 3 === 0) {
            holyFish.push(hfish)
        }
    }
    return holyFish
}

// 5, 10, 15, 20, 25, etc... fish

const bestSoldierFish = () => {
    const soldierFish = []

    for (const sfish of fishCollection) {
        if (sfish.length % 5 === 0) {
            soldierFish.push(sfish)
        }
    }
    return soldierFish
}

// // Any fish not a multiple of 3 or 5
const nonHolyFish = () => {
    const regularFish = []

    for (const xfish of fishCollection) {
        if (xfish.length % 3 !== 0 && xfish.length % 5 !== 0)
            regularFish.push(xfish)
    }
    return regularFish
}
// }