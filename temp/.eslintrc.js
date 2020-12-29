module.exports = {
  parser: "@typescript-eslint/parser", 
  extends: [
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures:  {
      jsx:  true,  
    },
  },
  rules: {
    "react/button-has-type": "off"
  },
  settings:  {
    react:  {
      version:  'detect', 
    },
  },
  "react/button-has-type": "off"
};