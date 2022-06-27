import { gql } from '@apollo/client';

export interface Country {
  name: string;
  code: string;
  capital: string;
  continent: {
    name: string;
  };
  languages: Language[];
}

type Language = {
    name: String;
    code: String;
    native: String;
}

export interface Continent{
    name: string;
    code: string;
}

export interface CountriesData {
  [x: string]: any;
  countries: Country[];
}

export interface ContinentsData {
    continents: Continent[];
}

export interface LanguagesData {
    languages: Language[];
}


export interface CountryVariable {
    code: string;
}

export const FILTERED_COUNTRIES_QUERY = gql`
query Countries($code: String) {
    countries(filter: { continent: { eq: $code } }) {
      name
      code
      capital
      continent {
        name
        code
      }
      languages{
        name
        native
        code
      }
    }
  }
`;

export const CONTINENTS_QUERY = gql`
query Continents {
    continents{
        name
        code
    }
}
`;

export const LANGUAGES_QUERY = gql`
query Languages {
    languages{
        name
        native
        code
      }
}
`;