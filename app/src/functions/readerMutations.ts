import { TResponseMutations } from "../typesOrInterface/types";

export const readerMutations = (mutations : any): TResponseMutations | undefined => {
    let mutatKey =  Object.keys(mutations)[0];

    if(mutatKey) {
      const { status, data } = mutations[mutatKey];

      if(status === "fulfilled"){
        return data;
      }
    }
    return 
};

