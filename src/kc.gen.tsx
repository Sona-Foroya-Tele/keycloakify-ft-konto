// This file is auto-generated by the `update-kc-gen` command. Do not edit it manually.
// Hash: 76768d8e7c3186e94dfbe387ad313fd52b591be4407b0c91035cd954eebdcf9e

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

import { lazy, Suspense, type ReactNode } from "react";

export type ThemeName = "keycloakify-ft-konta";

export const themeNames: ThemeName[] = ["keycloakify-ft-konta"];

export type KcEnvName = never;

export const kcEnvNames: KcEnvName[] = [];

export const kcEnvDefaults: Record<KcEnvName, string> = {};

type KcContext = import("./login/KcContext").KcContext;

declare global {
    interface Window {
        kcContext?: KcContext;
    }
}

export const KcLoginPage = lazy(() => import("./login/KcPage"));

export function KcPage(props: { kcContext: KcContext; fallback?: ReactNode }) {
    const { kcContext, fallback } = props;
    return (
        <Suspense fallback={fallback}>
            {(() => {
                switch (kcContext.themeType) {
                    case "login":
                        return <KcLoginPage kcContext={kcContext} />;
                }
            })()}
        </Suspense>
    );
}
