import { LicenseKeyValidationResult } from '../utilities/types.js'

export async function validateGumroadLicenseKeyMainAsync(options: {
  incrementUsesCount: boolean
  licenseKey: string
  productPermalink: string
}): Promise<LicenseKeyValidationResult> {
  const { incrementUsesCount, licenseKey, productPermalink } = options
  const trimmedLicenseKey = licenseKey.trim()
  if (trimmedLicenseKey === '') {
    return { result: 'EMPTY' }
  }
  if (trimmedLicenseKey.length !== 35) {
    return { result: 'INVALID' }
  }
  const onmessage = figma.ui.onmessage // Keep a reference to the previous `figma.ui.onmessage`
  return new Promise(function (
    resolve: (result: LicenseKeyValidationResult) => void
  ): void {
    figma.ui.onmessage = function (result: LicenseKeyValidationResult): void {
      figma.ui.onmessage = onmessage
      resolve(result)
      figma.ui.close()
    }
    const html = `
      <script>
        async function validateLicenseKeyAsync () {
          try {
            const response = await window.fetch('https://api.gumroad.com/v2/licenses/verify', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
              },
              body: 'increment_uses_count=${
                incrementUsesCount === true ? 'true' : 'false'
              }&license_key=' + encodeURIComponent('${trimmedLicenseKey}') + '&product_permalink=' + encodeURIComponent('${productPermalink}')
            })
            const json = await response.json()
            const { purchase, success } = json
            if (success === false || purchase.chargebacked === true || purchase.disputed === true || purchase.refunded === true) {
              return { result: 'INVALID' }
            }
            return {
              result: 'VALID',
              email: purchase.email,
              licenseKey: '${trimmedLicenseKey}',
              purchaseTimestamp: purchase.sale_timestamp
            }
          } catch {
            return { result: 'ENDPOINT_DOWN' }
          }
        }
        async function main () {
          window.parent.postMessage({ pluginMessage: await validateLicenseKeyAsync() }, '*')
        }
        main()
      </script>
    `
    figma.showUI(html, { visible: false })
  })
}
