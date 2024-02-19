type ThemeType = {
  bgColor: string, 
  fgColor: string, 
  viewportColor: string, 
  pannelColor: string,

  nodeBgColor: string,
  nodeBorderColor: string,
  nodeFgColor: string,

  pathStroke: string,
  toolHoverColor: string,
  toolActiveColor: string
}

const Theme: ThemeType = {
  bgColor: '#191932',
  fgColor: '#6A6A9F',
  viewportColor: '#05050F',
  pannelColor: '#0E0E1C',

  nodeBgColor: '#ffffff',
  nodeBorderColor: 'rgba(0, 0, 0, .3)',
  nodeFgColor: 'rgba(0, 0, 0, .8)',

  pathStroke: 'rgba(0, 0, 0, .4)',
  toolHoverColor: '#BBBBF9',
  toolActiveColor: '#F8F8F8'
}

export default Theme;