
const cookiesLifeCycle = (checked: boolean, days: number) => {
    return (checked) 
           ? { expires: days }
           : { expires: undefined }
}

export default cookiesLifeCycle;