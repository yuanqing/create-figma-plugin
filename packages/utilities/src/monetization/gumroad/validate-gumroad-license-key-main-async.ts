import { LicenseKeyValidationResult } from '../types.js'

const emptyLicense = {
  email: null,
  licenseKey: null,
  purchaseTimestamp: null,
  validationTimestamp: null
}

/**
 * Validates the given [Gumroad license key](https://help.gumroad.com/article/76-license-keys)
 * for the product with the given `productPermalink` in the
 * [main context](#main-context).
 *
 * @param options.productPermalink  The Gumroad “product permalink”. If the
 * Gumroad product URL is `https://gumroad.com/l/QGMY`, then the product
 * permalink is `'QGMY'`.
 * @param options.licenseKey  The Gumroad license key to validate.
 * @param options.incrementUseCount  Set to `true` to increment the license
 * key use count tracked by Gumroad. Defaults to `false`.
 * @return Returns a
 * [`LicenseKeyValidationResult`](https://github.com/yuanqing/create-figma-plugin/blob/main/packages/utilities/src/monetization/types.ts) object.
 * @category Monetization
 */
export async function validateGumroadLicenseKeyMainAsync(options: {
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
  const onmessage = figma.ui.onmessage // Keep a reference to the previous `figma.ui.onmessage`
  return new Promise(function (
    resolve: (result: LicenseKeyValidationResult) => void
  ): void {
    figma.ui.onmessage = function (result: LicenseKeyValidationResult): void {
      figma.ui.onmessage = onmessage
      resolve(result)
      figma.ui.close()
    }
    const validationTimestamp = new Date().toISOString()
    // The script below is inserted via `scripts/interpolate-gumroad-script.ts`
    const __html__ = `<script>async function main(){const n={email:null,licenseKey:null,purchaseTimestamp:null,validationTimestamp:null};async function t(){try{const s=await(await window.fetch("https://api.gumroad.com/v2/licenses/verify",{body:"increment_uses_count=${incrementUseCount}&license_key="+encodeURIComponent("${trimmedLicenseKey}")+"&product_permalink="+encodeURIComponent("${productPermalink}"),headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},method:"POST"})).json(),{purchase:e,success:a}=s;return a===!1||e.chargebacked===!0||e.disputed===!0||e.refunded===!0?{...n,result:"INVALID"}:{email:e.email,licenseKey:"${trimmedLicenseKey}",purchaseTimestamp:e.sale_timestamp,result:"VALID",validationTimestamp:"${validationTimestamp}"}}catch{return{...n,result:"ENDPOINT_DOWN"}}}window.parent.postMessage({pluginMessage:await t()},"*")}main();</script>`
    figma.showUI(__html__, { visible: false })
  })
}
