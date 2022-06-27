export interface Continent{
    name: string;
    code: string;
}
  
export interface Language{
    code: String;
    name: String;
    native: String;
}
  
export interface Country{
        code: string
        name: string
        native: string
        phone: string
        continent: Continent
        capital: string
        currency: string
        languages: [Language]
}