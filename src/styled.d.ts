// styled.d.ts
import "styled-components";
import { ThemeType } from "./utils/designtoken";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}