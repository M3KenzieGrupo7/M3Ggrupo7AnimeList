import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      primary: string;
      primary: string;
      fontSize18: string;
      fontSize16: string;
      fontSize14: string;
      fontSize13: string;
      fontSize12: string;
      fontSize10: string;
      radius4: string;
      radius3: string;
    };
    colors: {
      colorPrimary: string;
      colorSecundary: string;
      colorPrimaryFocus: string;
      red1: string;
      red2: string;
      white: string;
      grey4: string;
      grey2: string;
      grey1: string;
      grey: string;
      green1: string;
      purple4: string;
      colorSucess: string;
      colorNegative: string;
    };
  }
}
