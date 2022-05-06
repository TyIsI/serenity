export interface WeatherConsentModalProps {
  showConsentModal: boolean;
  showConsentModalHandler: (show:boolean) => void;
  consentHandler: (consent: boolean) => void;
}
