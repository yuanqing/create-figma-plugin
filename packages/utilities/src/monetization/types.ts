export type LicenseKeyValidationResult =
  | {
      result: 'ENDPOINT_DOWN' | 'INVALID' | 'INVALID_EMPTY'
      email: null
      licenseKey: null
      purchaseTimestamp: null
      validationTimestamp: null
      variant: null
    }
  | {
      result: 'VALID'
      email: string
      licenseKey: string
      purchaseTimestamp: string
      validationTimestamp: string
      variant: null | string
    }
