export const filterByLanguages = (langArr : any, countries : any) => {
    if(langArr.length > 0) {
    return countries.filter((c:any) => c.languages.some((lang: any) => langArr.includes(lang.name)));
    }else{
        return countries;
    }
};