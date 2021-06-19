async function main() {
  const emptyLicense = {
    email: null,
    licenseKey: null,
    purchaseTimestamp: null,
    validationTimestamp: null
  }
  async function validateLicenseKeyAsync() {
    try {
      const response = await window.fetch(
        'https://api.gumroad.com/v2/licenses/verify',
        {
          body:
            'increment_uses_count=__incrementUsesCount__&license_key=' +
            encodeURIComponent('__trimmedLicenseKey__') +
            '&product_permalink=' +
            encodeURIComponent('__productPermalink__'),
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
        licenseKey: '__trimmedLicenseKey__',
        purchaseTimestamp: purchase.sale_timestamp,
        result: 'VALID',
        validationTimestamp: '__validationTimestamp__'
      }
    } catch {
      return { ...emptyLicense, result: 'ENDPOINT_DOWN' }
    }
  }
  window.parent.postMessage(
    { pluginMessage: await validateLicenseKeyAsync() },
    '*'
  )
}
main()
