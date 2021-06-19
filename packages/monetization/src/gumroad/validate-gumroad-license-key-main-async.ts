import { LicenseKeyValidationResult } from '../utilities/types.js'

const emptyLicense = {
  email: null,
  licenseKey: null,
  purchaseTimestamp: null,
  validationTimestamp: null
}

export async function validateGumroadLicenseKeyMainAsync(options: {
  incrementUsesCount: boolean
  licenseKey: string
  productPermalink: string
}): Promise<LicenseKeyValidationResult> {
  const { incrementUsesCount, licenseKey, productPermalink } = options
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
    const __html__ = `<script>async function main(){const n={email:null,licenseKey:null,purchaseTimestamp:null,validationTimestamp:null};async function t(){try{const s=await(await window.fetch("https://api.gumroad.com/v2/licenses/verify",{body:"increment_uses_count=${incrementUsesCount}&license_key="+encodeURIComponent("${trimmedLicenseKey}")+"&product_permalink="+encodeURIComponent("${productPermalink}"),headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},method:"POST"})).json(),{purchase:e,success:a}=s;return a===!1||e.chargebacked===!0||e.disputed===!0||e.refunded===!0?{...n,result:"INVALID"}:{email:e.email,licenseKey:"${trimmedLicenseKey}",purchaseTimestamp:e.sale_timestamp,result:"VALID",validationTimestamp:"${validationTimestamp}"}}catch{return{...n,result:"ENDPOINT_DOWN"}}}window.parent.postMessage({pluginMessage:await t()},"*")}main();</script>`
    figma.showUI(__html__, { visible: false })
  })
}
