export const updateObjectInArray = (items: any[], itemId: string | number, obgPropName: string, newObjProps: Object) => {
   return  items.map(m => m[obgPropName] === itemId ? {...m, ...newObjProps} : m)
}


