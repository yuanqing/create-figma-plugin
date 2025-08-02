declare let process: {
  env: {
    NODE_ENV: string
  }
}

export default function () {
  if (process.env.NODE_ENV === 'production') {
    figma.closePlugin()
  }
}
