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
        const imagePath = key.replace('../public', '/Balala');


        newObjectValues.push(imagePath);
        newObjectKeys.push(newObjectKey);
        
    }

   newObjectKeys.forEach((fieldName, i) => {
    const newVals = newObjectValues[i]
    newObject[fieldName!] = newVals;
    

   });

   console.log('The input is ', imageObject);
   console.log('The image object is: ');

   for (const keys of Object.keys(newObject)) {
    console.log('Key is', keys);
    console.log('Value is', newObject[keys]);

   }
   return newObject;

}

export {transformImageObject}