import { i18nBuilder } from "keycloakify/login";
import type { ThemeName } from "../kc.gen";

/** @see: https://docs.keycloakify.dev/i18n */
const { useI18n, ofTypeI18n } = i18nBuilder
    .withThemeName<ThemeName>()
    .withExtraLanguages({
        fo: {
            // cspell: disable-next-line
            label: "Føroyskt",
            getMessages: () => import("./i18n.fo")
        }
    })
    .build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
