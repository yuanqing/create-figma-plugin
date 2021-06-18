export type DocumentUseCountPluginData = {
  useCount: number
}

export type LicenseKeyValidationResult =
  | {
      result: 'EMPTY' | 'ENDPOINT_DOWN' | 'INVALID'
    }
  | {
      result: 'VALID'
      email: string
      licenseKey: string
      purchaseTimestamp: string
    }
