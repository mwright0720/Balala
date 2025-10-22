const transformImageObject = (imageObject: Record<string, string>) => {
    console.log("Inside the transform function")
    
    const keys = Object.keys(imageObject);
    const newObjectKeys = [];
    const newObjectValues: string[] = [];
    const newObject: Record<string, string> = {};

    // There's probably a better way to do this
    // But this way works for now

    
    for (const key of keys) {
        const newObjectKey = key.split('/').at(-1)?.replace('.png', '');
        newObjectValues.push(key);
        newObjectKeys.push(newObjectKey);
        
    }

   newObjectKeys.forEach((fieldName, i) => {
    const newVals = newObjectValues[i]
    newObject[fieldName!] = newVals;
    

   });

   return newObject;

}

export {transformImageObject}