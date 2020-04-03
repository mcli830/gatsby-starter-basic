export default {
  color: {
    white: {
      main: "#ffffff",
      get light() { return this.main },
      dark: "#f2f2f2",
    },
    black: {
      main: "#16161D",
      light: "#232328",
      dark: "#000000",
    },
    gray: {
      main: "#bdc3c7",
      light: "#ecf0f1",
      dark: "#95a5a6",
    },
  },
  gap: {
    value: 1,
    unit: "rem",
    scale: function(x = 1) {
      return this.value * x + this.unit
    },
    get base() {
      return this.scale(1)
    },
  },
  shadow: {
    1: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);",
    3: "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12);",
    5: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12);",
    get sm() {
      return this[1]
    },
    get md() {
      return this[3]
    },
    get lg() {
      return this[5]
    },
  },
}