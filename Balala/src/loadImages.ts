const loadImages = () => {
    const deckImages: Record<string, string> = import.meta.glob("../public/assets/decks/*.png", {eager: true});
    const stakeImages: Record<string, string> = import.meta.glob("../public/assets/stakes/*.png", {eager: true});

    return {deckImages, stakeImages}




}

export {loadImages}