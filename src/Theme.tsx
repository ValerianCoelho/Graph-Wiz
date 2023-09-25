type ThemeType = {
  bgColor: string, 
  fgColor: string, 
  viewportColor: string, 
  pannelColor: string,

  nodeBgColor: string,
  nodeBorderColor: string,
  nodeFgColor: string,

  pathStroke: string
  toolHoverColor: string
}

const Theme: ThemeType = {
  bgColor: '#191932',
  fgColor: '#6A6A9F',
  viewportColor: '#05050F',
  pannelColor: '#0E0E1C',

  nodeBgColor: '#282847',
  nodeBorderColor: '#6A6A9F',
  nodeFgColor: '#FFFFFF',

  pathStroke: '#FFFFFF',
  toolHoverColor: '#F8F8F8'
}

export default Theme;