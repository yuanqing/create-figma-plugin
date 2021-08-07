import { LicenseKeyValidationResult } from '../types.js'

const emptyLicense = {
  email: null,
  licenseKey: null,
  purchaseTimestamp: null,
  validationTimestamp: null
}

/**
 * Validates the given [Gumroad](https://help.gumroad.com/article/76-license-keys)
 * `licenseKey` for the product with the given `productPermalink` in the
 * [UI context](#ui-context). Set `options.incrementUseCount` to `true` to
 * increment the license key use count in Gumroad. `options.incrementUseCount`
 * defaults to `false`.
 *
 * @category Monetization
 */
export async function validateGumroadLicenseKeyUiAsync(options: {
  incrementUseCount?: boolean
  licenseKey: string
  productPermalink: string
}): Promise<LicenseKeyValidationResult> {
  const { licenseKey, productPermalink } = options
  const incrementUseCount =
    options.incrementUseCount === true ? 'true' : 'false'
  const trimmedLicenseKey = licenseKey.trim()
  if (trimmedLicenseKey === '') {
    return { ...emptyLicense, result: 'INVALID_EMPTY' }
  }
  if (trimmedLicenseKey.length !== 35) {
    return { ...emptyLicense, result: 'INVALID' }
  }
  try {
    const response = await window.fetch(
      'https://api.gumroad.com/v2/licenses/verify',
      {
        body:
          `increment_uses_count=${incrementUseCount}&license_key=` +
          encodeURIComponent(trimmedLicenseKey) +
          '&product_permalink=' +
          encodeURIComponent(productPermalink),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        method: 'POST'
      }
    )
    const json = await response.json()
    const { purchase, success } = json
    if (
      success === false ||
      purchase.chargebacked === true ||
      purchase.disputed === true ||
      purchase.refunded === true
    ) {
      return { ...emptyLicense, result: 'INVALID' }
    }
    return {
      email: purchase.email,
      licenseKey: trimmedLicenseKey,
      purchaseTimestamp: purchase.sale_timestamp,
      result: 'VALID',
      validationTimestamp: new Date().toISOString()
    }
  } catch {
    return { ...emptyLicense, result: 'ENDPOINT_DOWN' }
  }
}
