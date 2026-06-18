import { fixupConfigRules } from "@eslint/compat";
import coreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";

const config = [...fixupConfigRules(coreWebVitals), ...fixupConfigRules(nextTypescript), prettier];

export default config;
