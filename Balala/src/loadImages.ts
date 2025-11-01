const loadImages = () => {
    const deckImages: Record<string, string> = import.meta.glob("../public/assets/decks/*.png", {eager: true});
    const stakeImages: Record<string, string> = import.meta.glob("../public/assets/stakes/*.png", {eager: true});

    console.log("deckImages:", deckImages);
console.log("stakeImages:", stakeImages);

    return {deckImages, stakeImages}




}

export {loadImages}