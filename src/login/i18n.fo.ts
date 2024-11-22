import type { MessageKey_defaultSet } from "keycloakify/login";

const messages: Record<MessageKey_defaultSet, string> = {
    // cspell: disable
    doLogIn: "Rita inn",
    doRegister: "Stovna",
    doRegisterSecurityKey: "Stovna",
    doCancel: "Avlýs",
    doSubmit: "Send inn",
    doBack: "Aftur",
    doYes: "Ja",
    doNo: "Nei",
    doContinue: "Halt fram",
    doIgnore: "Ignorera",
    doAccept: "Góðtaka",
    doDecline: "Avvisa",
    doForgotPassword: "Gloymt loyniorð?",
    doClickHere: "Trýst her",
    doImpersonate: "Gera seg inn",
    doTryAgain: "Roys aftur",
    doTryAnotherWay: "Roys ein annan hátt",
    doConfirmDelete: "Staðfest strikan",
    errorDeletingAccount: "Villa hendi meðan konta varð strikað",
    deletingAccountForbidden:
        "Tú hevur ikki rættindi at strika tína egna konto, vinarliga set teg í samband við ein umsitara.",
    kerberosNotConfigured: "Kerberos ikki stillað",
    kerberosNotConfiguredTitle: "Kerberos ikki stillað",
    bypassKerberosDetail:
        "Antin ert tú ikki innritaður við Kerberos ella er tín kaga ikki stillað til Kerberos-innritan. Trýst á halda fram fyri at innrita við øðrum hætti.",
    kerberosNotSetUp: "Kerberos er ikki sett upp. Tú kanst ikki innrita.",
    registerTitle: "Stovna",
    loginAccountTitle: "Rita inn á tína konto",
    loginTitle: "Rita inn á {0}",
    loginTitleHtml: "{0}",
    impersonateTitle: "{0} Gera seg inn sum brúkara",
    impersonateTitleHtml: "<strong>{0}</strong> Gera seg inn sum brúkara",
    realmChoice: "Val av veruleika",
    unknownUser: "Ókendur brúkari",
    loginTotpTitle: "Stilla upp farteljarautfylling",
    loginProfileTitle: "Dagfør kontuinformasjon",
    loginIdpReviewProfileTitle: "Dagfør kontuinformasjon",
    loginTimeout: "Innritanin varð tíðarúti. Vinarliga royn aftur.",
    reauthenticate: "Vinarliga rita inn aftur fyri at halda fram",
    authenticateStrong: "Sterkari autentisering krevst fyri at halda fram",
    oauthGrantTitle: "Gevi atgongd til {0}",
    oauthGrantTitleHtml: "{0}",
    oauthGrantInformation:
        "Góðtak bert {0} eftir at kanna, hvussu {0} viðger tínar upplýsingar.",
    oauthGrantReview: "Tú kanst kanna ",
    oauthGrantTos: "treytir og reglur.",
    oauthGrantPolicy: "privatreglur.",
    errorTitle: "Vit harmast...",
    errorTitleHtml: "Vit <strong>harmast</strong>...",
    emailVerifyTitle: "T-post váttan",
    emailForgotTitle: "Gloymt loyniorð?",
    updateEmailTitle: "Dagfør t-post",
    emailUpdateConfirmationSentTitle: "Váttanarpostur sendur",
    emailUpdateConfirmationSent:
        "Ein váttanarpostur er sendur til {0}. Tú mást fylgja leiðbeiningunum fyri at fullføra uppdateringina.",
    emailUpdatedTitle: "T-postur dagførdur",
    emailUpdated: "Konta t-posturin er dagførdur til {0}.",
    updatePasswordTitle: "Dagfør loyniorð",
    codeSuccessTitle: "Eydnaðist",
    codeErrorTitle: "Villa: {0}",
    displayUnsupported: "Viðkomandi vísi-stílur ikki stuðlaður",
    browserRequired: "Kaga krevst fyri innritan",
    browserContinue: "Kaga krevst fyri at fullføra innritan",
    browserContinuePrompt: "Opna kaga og halda fram við innritan? [y/n]:",
    browserContinueAnswer: "y",
    usb: "USB",
    nfc: "NFC",
    bluetooth: "Bluetooth",
    internal: "Innbygt",
    unknown: "Ókent",
    termsTitle: "Treytir og reglur",
    termsText: "",
    termsPlainText: "Treytir og reglur skulu ásetast.",
    termsAcceptanceRequired: "Tú mást góðtaka okkara treytir og reglur.",
    acceptTerms: "Eg góðtaki treytir og reglur",
    deleteCredentialTitle: "Strika {0}",
    deleteCredentialMessage: "Vilt tú strika {0}?",
    recaptchaFailed: "Ógyldig Recaptcha",
    recaptchaNotConfigured: "Recaptcha krevst, men er ikki stillað",
    consentDenied: "Samtykki avvíst.",
    noAccount: "Onga konto?",
    username: "Brúkaranavn",
    usernameOrEmail: "Brúkaranavn ella t-postur",
    firstName: "Fornavn",
    givenName: "Fornavn",
    fullName: "Fulla navn",
    lastName: "Eftirnavn",
    familyName: "Familjunavn",
    email: "T-postur",
    password: "Loyniorð",
    passwordConfirm: "Staðfest loyniorð",
    passwordNew: "Nýtt loyniorð",
    passwordNewConfirm: "Staðfest nýtt loyniorð",
    hidePassword: "Fjala loyniorð",
    showPassword: "Vís loyniorð",
    rememberMe: "Minst til mín",
    authenticatorCode: "Eingangs kodu",
    address: "Adressa",
    street: "Gøta",
    locality: "Býur ella stað",
    region: "Landslutur",
    postal_code: "Postnummar",
    country: "Land",
    emailVerified: "T-postur váttaður",
    website: "Heimasíða",
    phoneNumber: "Telefonnummar",
    phoneNumberVerified: "Telefonnummar váttað",
    gender: "Kyn",
    birthday: "Føðingardagur",
    zoneinfo: "Tíðsone",
    gssDelegationCredential: "GSS-delegatiónsprovu",
    logoutOtherSessions: "Skrá út av øðrum eindum",
    profileScopeConsentText: "Brúkara profil",
    emailScopeConsentText: "T-post adressa",
    addressScopeConsentText: "Adressa",
    phoneScopeConsentText: "Telefonnummar",
    offlineAccessScopeConsentText: "Offline-atgongd",
    samlRoleListScopeConsentText: "Mín leiklutur",
    rolesScopeConsentText: "Brúkari leiklutir",
    organizationScopeConsentText: "Organisatión",
    restartLoginTooltip: "Endurstilla innritan",
    loginTotpIntro:
        "Tú mást stilla upp eina eitt-ferðs kodu generator fyri atgongd til hesa konto.",
    loginTotpStep1: "Installera eina av hesum appunum á tína farteldu:",
    loginTotpStep2: "Opna appina og skanna strikukotuna:",
    loginTotpStep3:
        "Skriva eitt-ferðs koduna frá appini og trýst Send fyri at fullføra uppsetingina.",
    loginTotpStep3DeviceName:
        "Gev eindini eitt navn fyri betri at umsita tínar OTP-eindir.",
    loginTotpManualStep2: "Opna appina og skriva inn lykilin:",
    loginTotpManualStep3: "Nýt hesar stillingar um møguligt:",
    loginTotpUnableToScan: "Gongst ikki at skanna?",
    loginTotpScanBarcode: "Skanna strikukotu?",
    loginCredential: "Loyniprovu",
    loginOtpOneTime: "Eingangs kodu",
    loginTotpType: "Slag",
    loginTotpAlgorithm: "Algoritma",
    loginTotpDigits: "Tøl",
    loginTotpInterval: "Interval",
    loginTotpCounter: "Teljari",
    loginTotpDeviceName: "Eind navn",
    "loginTotp.totp": "Tíðargrundað",
    "loginTotp.hotp": "Teljargrundað",
    totpAppFreeOTPName: "FreeOTP",
    totpAppGoogleName: "Google Authenticator",
    totpAppMicrosoftAuthenticatorName: "Microsoft Authenticator",
    loginChooseAuthenticator: "Vel innritanarhátt",
    oauthGrantRequest: "Vilt tú góðtaka hesa atgongd?",
    inResource: "í",
    oauth2DeviceVerificationTitle: "Eind innritan",
    verifyOAuth2DeviceUserCode: "Skriva inn kotuna frá tínari eind og trýst Send",
    oauth2DeviceInvalidUserCodeMessage: "Ógyldig koda, vinarliga royn aftur.",
    oauth2DeviceExpiredUserCodeMessage: "Kotutíðin er farin. Royn aftur frá tíni eind.",
    oauth2DeviceVerificationCompleteHeader: "Eind innritan eydnaðist",
    oauth2DeviceVerificationCompleteMessage:
        "Tú kanst lata kaga aftur og fara aftur til tína eind.",
    oauth2DeviceVerificationFailedHeader: "Eind innritan miseydnaðist",
    oauth2DeviceVerificationFailedMessage:
        "Tú kanst lata kaga aftur og royna aftur frá tíni eind.",
    oauth2DeviceConsentDeniedMessage: "Samtykki til eind varð avvíst.",
    oauth2DeviceAuthorizationGrantDisabledMessage:
        "Klientur hevur ikki loyvi til OAuth 2.0 Eind Authorization Grant. Tað er óvirkið fyri klientin.",
    emailVerifyInstruction1: "Ein t-postur við leiðbeiningum er sendur til {0}.",
    emailVerifyInstruction2: "Eingin váttan komin?",
    emailVerifyInstruction3: "fyrst t-postin aftur.",
    emailLinkIdpTitle: "Set saman við {0}",
    emailLinkIdp1: "Ein t-postur við leiðbeiningum at set saman við {0} er sendur.",
    emailLinkIdp2: "Hava ikki fingið váttanarpost?",
    emailLinkIdp3: "fyrst váttanina aftur.",
    emailLinkIdp4: "Hevur tú váttað í øðrum kaga?",
    emailLinkIdp5: "fara til at halda fram.",
    backToLogin: "&laquo; Aftur til innritan",
    emailInstruction: "Skriva brúkaranavn ella t-post og vit senda leiðbeiningar.",
    emailInstructionUsername: "Skriva brúkaranavn og vit senda leiðbeiningar.",
    copyCodeInstruction: "Vinarliga kopiera og lím koduna í appina:",
    pageExpiredTitle: "Síða er úti",
    pageExpiredMsg1: "Byrja innritan av nýggjum",
    pageExpiredMsg2: "Halda fram við innritan",
    personalInfo: "Persónsupplýsingar:",
    role_admin: "Admin",
    "role_realm-admin": "Realm Admin",
    "role_create-realm": "Skapa realm",
    "role_create-client": "Skapa klient",
    "role_view-realm": "Skoða realm",
    "role_view-users": "Skoða brúkarar",
    "role_view-applications": "Skoða apps",
    "role_view-clients": "Skoða klientar",
    "role_view-events": "Skoða tiltøk",
    "role_view-identity-providers": "Skoða identity providers",
    "role_manage-realm": "Stýra realm",
    "role_manage-users": "Stýra brúkarum",
    "role_manage-applications": "Stýra apps",
    "role_manage-identity-providers": "Stýra identity providers",
    "role_manage-clients": "Stýra klientum",
    "role_manage-events": "Stýra tiltøkum",
    "role_view-profile": "Skoða profil",
    "role_manage-account": "Stýra konto",
    "role_manage-account-links": "Stýra kontolinkum",
    "role_read-token": "Lesa token",
    "role_offline-access": "Offline-atgongd",
    client_account: "Konto",
    "client_account-console": "Kontokonsole",
    "client_security-admin-console": "Sikkerhets Admin Konsole",
    "client_admin-cli": "Admin CLI",
    "client_realm-management": "Realm Stýring",
    client_broker: "Broker",
    requiredFields: "Kravdir teigar",
    invalidUserMessage: "Ógyldig brúkaranavn ella loyniorð.",
    invalidUsernameMessage: "Ógyldig brúkaranavn.",
    invalidUsernameOrEmailMessage: "Ógyldig brúkaranavn ella t-post.",
    invalidPasswordMessage: "Ógyldig loyniorð.",
    invalidEmailMessage: "Ógyldig t-post adressa.",
    accountDisabledMessage: "Konto er óvirkin, vinarliga set teg í samband við umsitara.",
    accountTemporarilyDisabledMessage:
        "Konto er tímilig úti, set teg í samband ella royn aftur seinni.",
    expiredCodeMessage: "Innritan úti. Rint aftur.",
    expiredActionMessage: "Handling úti. Vinarliga hald fram við innritan.",
    expiredActionTokenNoSessionMessage: "Handling úti.",
    expiredActionTokenSessionExistsMessage: "Handling úti. Byrja av nýggjum.",
    sessionLimitExceeded: "Ov nógvar sesjónir",
    identityProviderLogoutFailure: "SAML IdP Útritamiseydnast",
    missingFirstNameMessage: "Skriva fornavn.",
    missingLastNameMessage: "Skriva eftirnavn.",
    missingEmailMessage: "Skriva t-post.",
    missingUsernameMessage: "Skriva brúkaranavn.",
    missingPasswordMessage: "Skriva loyniorð.",
    missingTotpMessage: "Skriva aut. kodu.",
    missingTotpDeviceNameMessage: "Skriva einheit navn.",
    notMatchPasswordMessage: "Loyniorð samsvara ikki.",
    "error-invalid-value": "Ógyldig virði.",
    "error-invalid-blank": "Skriva virði.",
    "error-empty": "Skriva virði.",
    "error-invalid-length": "Longd má vera millum {1} og {2}.",
    "error-invalid-length-too-short": "Minsta longd er {1}.",
    "error-invalid-length-too-long": "Mesta longd er {2}.",
    "error-invalid-email": "Ógyldig t-post adressa.",
    "error-invalid-number": "Ógyldig tali.",
    "error-number-out-of-range": "Talið má vera millum {1} og {2}.",
    "error-number-out-of-range-too-small": "Talið skal minst vera {1}.",
    "error-number-out-of-range-too-big": "Talið skal í mesta lagi vera {2}.",
    "error-pattern-no-match": "Ógyldig virði.",
    "error-invalid-uri": "Ógyldig URL.",
    "error-invalid-uri-scheme": "Ógyldig URL-ordning.",
    "error-invalid-uri-fragment": "Ógyldig URL-fragment.",
    "error-user-attribute-required": "Felti skal útfyllast.",
    "error-invalid-date": "Ógyldig dato.",
    "error-user-attribute-read-only": "Hetta felt er bert lesibart.",
    "error-username-invalid-character": "Virði inniheldur ógyldig tekin.",
    "error-person-name-invalid-character": "Navn hevur ógyldig tekin.",
    "error-reset-otp-missing-id": "Vel OTP-konfigurering.",
    invalidPasswordExistingMessage: "Ógyldig loyniorð.",
    invalidPasswordBlacklistedMessage: "Ógyldig loyniorð: svart listað.",
    invalidPasswordConfirmMessage: "Loyniorð samsvara ikki.",
    invalidTotpMessage: "Ógyldig aut. koda.",
    usernameExistsMessage: "Brúkaranavn longu til.",
    emailExistsMessage: "T-postur longu til.",
    federatedIdentityExistsMessage: "Brúkari við {0} {1} longu til. Innrita fyri link.",
    federatedIdentityUnavailableMessage:
        "Brúkari {0} við {1} ikki funnin. Samband umsitara.",
    federatedIdentityUnmatchedEssentialClaimMessage:
        "ID-token fylgir ikki treytum. Samband umsitara.",
    confirmLinkIdpTitle: "Konta longu til",
    confirmOverrideIdpTitle: "Broker link longu til",
    federatedIdentityConfirmLinkMessage:
        "Brúkari við {0} {1} longu til. Hvussu vilt tú halda fram?",
    federatedIdentityConfirmOverrideMessage:
        "Tú roynir at linka konta {0} við nýggja konta {2}.",
    federatedIdentityConfirmReauthenticateMessage: "Innritan krevst fyri linking.",
    nestedFirstBrokerFlowMessage: "{0} brúkaranavn er ikki linka.",
    confirmLinkIdpReviewProfile: "Kanna profil",
    confirmLinkIdpContinue: "Legg afturat",
    confirmOverrideIdpContinue: "Ja, yvirskriva link",
    configureTotpMessage: "Set upp OTP fyri kontu.",
    configureBackupCodesMessage: "Set upp Backup Codes fyri kontu.",
    updateProfileMessage: "Dagfør profil fyri at virkja konta.",
    updatePasswordMessage: "Dagfør loyniorð fyri konta.",
    updateEmailMessage: "Dagfør t-post fyri konta.",
    resetPasswordMessage: "Endurstilla loyniorð.",
    verifyEmailMessage: "Váttan av t-post fyri konta.",
    linkIdpMessage: "Váttan av t-post fyri linking.",
    emailSentMessage: "Váttanarpostur er sendur við leiðbeiningum.",
    emailSendErrorMessage: "Feilur við sending, royn aftur seinni.",
    accountUpdatedMessage: "Konta dagførd.",
    accountPasswordUpdatedMessage: "Loyniorð dagført.",
    delegationCompleteHeader: "Innritan eydnaðist",
    delegationCompleteMessage: "Lat kaga aftur.",
    delegationFailedHeader: "Innritan miseydnaðist",
    delegationFailedMessage: "Lat kaga aftur, royn aftur.",
    noAccessMessage: "Eingin atgongd",
    invalidPasswordMinLengthMessage: "Min loyniorð longd {0}.",
    invalidPasswordMaxLengthMessage: "Max loyniorð longd {0}.",
    invalidPasswordMinDigitsMessage: "Loyniorð krevur {0} tøl.",
    invalidPasswordMinLowerCaseCharsMessage: "Loyniorð krevur {0} lítlar bókstavir.",
    invalidPasswordMinUpperCaseCharsMessage: "Loyniorð krevur {0} stórar bókstavir.",
    invalidPasswordMinSpecialCharsMessage: "Loyniorð krevur {0} sertekin.",
    invalidPasswordNotUsernameMessage: "Loyniorð má ikki vera brúkaranavn.",
    invalidPasswordNotContainsUsernameMessage: "Loyniorð má ikki innihalda brúkaranavn.",
    invalidPasswordNotEmailMessage: "Loyniorð má ikki vera t-post.",
    invalidPasswordRegexPatternMessage: "Loyniorð fylgir ikki mønstrum.",
    invalidPasswordHistoryMessage: "Loyniorð má ikki vera millum seinastu {0} loyniorð.",
    invalidPasswordGenericMessage: "Nýtt loyniorð fylgir ikki politikki.",
    failedToProcessResponseMessage: "Miseydnaðist at viðgera svarið",
    httpsRequiredMessage: "HTTPS krevst",
    realmNotEnabledMessage: "Realm ikki virkið",
    invalidRequestMessage: "Ógyldig umbøn",
    successLogout: "Tú vart skrásettur út",
    failedLogout: "Útskriving miseydnaðist",
    unknownLoginRequesterMessage: "Ókendur innritan umbønari",
    loginRequesterNotEnabledMessage: "Innritan umbønari ikki virkin",
    bearerOnlyMessage: "Bearer-only apps mugu ikki byrja kaga innritan",
    standardFlowDisabledMessage: "Klient loyvir ikki kaga innritan við response_type.",
    implicitFlowDisabledMessage: "Implicit flow óvirkið fyri klient.",
    invalidRedirectUriMessage: "Ógyldig redirect uri",
    unsupportedNameIdFormatMessage: "Óstuðlað NameIDFormat",
    invalidRequesterMessage: "Ógyldig umbønari",
    registrationNotAllowedMessage: "Nýskráseting ikki loyvd",
    resetCredentialNotAllowedMessage: "Endurstilling ikki loyvd",
    permissionNotApprovedMessage: "Loyvi ikki góðtikið.",
    noRelayStateInResponseMessage: "Eingin relay state í responsi.",
    insufficientPermissionMessage: "Ikki nóg mikið rættindi.",
    couldNotProceedWithAuthenticationRequestMessage:
        "Miseydnaðist við autentiserings umbøn.",
    couldNotObtainTokenMessage: "Miseydnaðist at fáa token.",
    unexpectedErrorRetrievingTokenMessage: "Óvæntaður feilur við at fáa token.",
    unexpectedErrorHandlingResponseMessage: "Óvæntaður feilur við respons.",
    identityProviderAuthenticationFailedMessage: "Autentisering miseydnaðist.",
    couldNotSendAuthenticationRequestMessage: "Miseydnaðist við sending.",
    unexpectedErrorHandlingRequestMessage: "Óvæntaður feilur við umbøn.",
    invalidAccessCodeMessage: "Ógyldig atgongdskota.",
    sessionNotActiveMessage: "Sesjón ikki virkin.",
    invalidCodeMessage: "Feilur, rita inn aftur.",
    cookieNotFoundMessage: "Cookie ikki funnið. Stuðlar kaga cookies?",
    insufficientLevelOfAuthentication: "Krevjað autentisering ikki nøgd.",
    identityProviderUnexpectedErrorMessage: "Óvæntað feilur.",
    identityProviderMissingStateMessage: "State parameter manglar.",
    identityProviderMissingCodeOrErrorMessage: "Code ella feilur parameter manglar.",
    identityProviderInvalidResponseMessage: "Ógyldig respons.",
    identityProviderInvalidSignatureMessage: "Ógyldig undirskrift.",
    identityProviderNotFoundMessage: "Ikki funnið.",
    identityProviderLinkSuccess: "Váttað. Rita inn frá upprunaforritinum.",
    staleCodeMessage: "Hendan síðan er úti.",
    realmSupportsNoCredentialsMessage: "Ikki studerað credentials.",
    credentialSetupRequired: "Krever credential setup.",
    identityProviderNotUniqueMessage: "Ikki einvegis identity providers.",
    emailVerifiedMessage: "T-postur váttaður.",
    emailVerifiedAlreadyMessage: "Longu váttað.",
    staleEmailVerificationLink: "Stuttleinkjan óbrúkilig.",
    identityProviderAlreadyLinkedMessage: "Federated identity við {0} longu bundið.",
    confirmAccountLinking: "Góðtak linking við {0}.",
    confirmEmailAddressVerification: "Vátta t-post {0}.",
    confirmExecutionOfActions: "Framleið eftirfylgjandi:",
    backToApplication: "&laquo; Aftur til app",
    missingParameterMessage: "Manglandi parametur: {0}",
    clientNotFoundMessage: "Klient ikki funnin.",
    clientDisabledMessage: "Klient óvirkin.",
    invalidParameterMessage: "Ógyldig parametur: {0}",
    alreadyLoggedIn: "Longu innritaður.",
    differentUserAuthenticated: "Annar brúkari {0} longu innritaður.",
    brokerLinkingSessionExpired: "Broker tilknýti úti.",
    proceedWithAction: "&raquo; Klik her fyri framhald",
    acrNotFulfilled: "Ikki fylt autentisering krøv.",
    "requiredAction.CONFIGURE_TOTP": "Stilla OTP",
    "requiredAction.TERMS_AND_CONDITIONS": "Treytir og reglur",
    "requiredAction.UPDATE_PASSWORD": "Dagfør loyniorð",
    "requiredAction.UPDATE_PROFILE": "Dagfør profil",
    "requiredAction.VERIFY_EMAIL": "Vátta t-post",
    "requiredAction.CONFIGURE_RECOVERY_AUTHN_CODES": "Set Recovery Codes",
    "requiredAction.webauthn-register-passwordless": "Webauthn skráset passwordless",
    invalidTokenRequiredActions: "Ógyldig token handlingar.",
    doX509Login: "Rita inn sum:",
    clientCertificate: "X509 klient certifikat:",
    noCertificate: "[Eingin certifikat]",
    pageNotFound: "Síða ikki funnin",
    internalServerError: "Innanhýsis feilur",
    "console-username": "Brúkaranavn:",
    "console-password": "Loyniorð:",
    "console-otp": "OTP:",
    "console-new-password": "Nýtt loyniorð:",
    "console-confirm-password": "Staðfest loyniorð:",
    "console-update-password": "Loyniorð dagføring krevst.",
    "console-verify-email": "Tú mást vátta t-post: {0}.",
    "console-email-code": "T-post koda:",
    "console-accept-terms": "Góðtaka treytir? [y/n]:",
    "console-accept": "y",
    "openshift.scope.user_info": "Brúkara upplýsingar",
    "openshift.scope.user_check-access": "Brúkara atgongd upplýsingar",
    "openshift.scope.user_full": "Full atgongd",
    "openshift.scope.list-projects": "Listi av verkætlanum",
    "saml.post-form.title": "Autentisering Flyt",
    "saml.post-form.message": "Flýta, bíða eitt sindur.",
    "saml.post-form.js-disabled": "JavaScript sløkt. Virkið tað.",
    "saml.artifactResolutionServiceInvalidResponse": "Gongur ikki at loysa artefakt.",
    "otp-display-name": "Authenticator app",
    "otp-help-text": "Skriva koda.",
    "otp-reset-description": "Hvat OTP skal strikast?",
    "password-display-name": "Loyniorð",
    "password-help-text": "Rita inn við loyniorði.",
    "auth-username-form-display-name": "Brúkaranavn",
    "auth-username-form-help-text": "Byrja innritan við brúkaranavni.",
    "auth-username-password-form-display-name": "Brúkaranavn og loyniorð",
    "auth-username-password-form-help-text": "Rita inn við brúkaranavni og loyniorði.",
    "auth-x509-client-username-form-display-name": "X509 certifikat",
    "auth-x509-client-username-form-help-text": "Rita inn við X509.",
    "auth-recovery-authn-code-form-display-name": "Recovery Koda",
    "auth-recovery-authn-code-form-help-text": "Skriva koda frá listanum.",
    "auth-recovery-code-info-message": "Skriva recovery koda.",
    "auth-recovery-code-prompt": "Recovery koda #{0}",
    "auth-recovery-code-header": "Login við recovery auth koda",
    "recovery-codes-error-invalid": "Ógyldig recovery koda",
    "recovery-code-config-header": "Recovery Kodur",
    "recovery-code-config-warning-title": "Hesar recovery kodur eru bert her einaferð",
    "recovery-code-config-warning-message":
        "Gev gætur, kopiera, ella goym á tryggan hátt.",
    "recovery-codes-print": "Prenta",
    "recovery-codes-download": "Niðurtak",
    "recovery-codes-copy": "Kopiera",
    "recovery-codes-copied": "Kopierað",
    "recovery-codes-confirmation-message": "Eg havi goymt hesar kodur tryggar",
    "recovery-codes-action-complete": "Fullfør set-up",
    "recovery-codes-action-cancel": "Strika set-up",
    "recovery-codes-download-file-header": "Goym recovery kodur á tryggum stað.",
    "recovery-codes-download-file-description":
        "Recovery kodur loyva nýtslu uttan autent.",
    "recovery-codes-download-file-date": "Dagført",
    "recovery-codes-label-default": "Recovery kodur",
    "webauthn-display-name": "Passkey",
    "webauthn-help-text": "Nýt Passkey at rita inn.",
    "webauthn-passwordless-display-name": "Passkey",
    "webauthn-passwordless-help-text": "Nýt Passkey til login uttan loyniorð.",
    "webauthn-login-title": "Passkey login",
    "webauthn-registration-title": "Passkey Skráset",
    "webauthn-available-authenticators": "Til reiðar Passkeys",
    "webauthn-unsupported-browser-text": "WebAuthn ikki stuðlað.",
    "webauthn-doAuthenticate": "Login við Passkey",
    "webauthn-createdAt-label": "Skapað",
    "webauthn-registration-init-label": "Passkey (Default)",
    "webauthn-registration-init-label-prompt": "Skriva navn",
    "webauthn-error-title": "Passkey Feilur",
    "webauthn-error-registration": "Miseydnaðist.",
    "webauthn-error-api-get": "Miseydnaðist at login.",
    "webauthn-error-different-user": "Brúkari samsvarar ikki.",
    "webauthn-error-auth-verification": "Ógyldig verifikation.",
    "webauthn-error-register-verification": "Ógyldig verifikation.",
    "webauthn-error-user-not-found": "Brúkari ókend.",
    "passkey-login-title": "Passkey login",
    "passkey-available-authenticators": "Til reiðar Passkeys",
    "passkey-unsupported-browser-text": "Passkey ikki stuðlað.",
    "passkey-doAuthenticate": "Login við Passkey",
    "passkey-createdAt-label": "Skapað",
    "passkey-autofill-select": "Vel Passkey",
    "identity-provider-redirector": "Teng við annan Identity Provider",
    "identity-provider-login-label": "Ella rita inn við",
    "idp-email-verification-display-name": "Email váttan",
    "idp-email-verification-help-text": "Teng við konto við at vátta email.",
    "idp-username-password-form-display-name": "Brúkaranavn og loyniorð",
    "idp-username-password-form-help-text": "Teng við konto við at rita inn.",
    finalDeletionConfirmation: "Tú kanst ikki endurstilla eftir strikan.",
    irreversibleAction: "Hetta er óvending hending.",
    deleteAccountConfirm: "Strika konto váttan",
    deletingImplies: "Strikan hevur fylgjandi:",
    errasingData: "Strikan av øllum tilfari",
    loggingOutImmediately: "Útskriving beinanvegin",
    accountUnusable: "Framtíðar nýtsla ómøgulig",
    userDeletedSuccessfully: "Brúkari eydnaðist at strika",
    "access-denied": "Atgongd avvíst",
    "access-denied-when-idp-auth": "Atgongd avvíst við {0}",
    "frontchannel-logout.title": "Útskriving",
    "frontchannel-logout.message": "Útskriving frá fylgjandi apps",
    logoutConfirmTitle: "Útskriving",
    logoutConfirmHeader: "Vilt tú skrá út?",
    doLogout: "Skrá út",
    readOnlyUsernameMessage: "Brúkaranavn kann ikki dagførast.",
    "error-invalid-multivalued-size": "Attribute {0} krevur {1}-{2} virðir.",
    "organization.confirm-membership.title": "Tú skalt ganga í organisatión {0}.",
    "organization.confirm-membership":
        "Við at trýsta her verður tú limur í {0} organisatión.",
    "organization.member.register.title": "Skráset konto fyri at ganga í {0}.",
    shouldBeEqual: "{0} skal samsvara við {1}",
    shouldBeDifferent: "{0} skal vera øðrvísi enn {1}",
    shouldMatchPattern: "Mynstur skal samsvara: `/{0}/`",
    mustBeAnInteger: "Skal vera heiltal",
    notAValidOption: "Ógyldig valmøguleiki",
    selectAnOption: "Vel ein valmøguleika",
    remove: "Strika",
    addValue: "Legg virði afturat",
    languages: "Mál"

    // cspell: enable
};

export default messages;