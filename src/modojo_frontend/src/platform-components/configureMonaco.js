import theme from "../themes/custom-theme.json";
import * as monaco from 'monaco-editor';

// Motoko diline özgü anahtar kelimeler
export const MOTOKO_KEYWORDS = [
  "actor", "and", "async", "assert", "await", "break", "case", "catch",
  "class", "continue", "debug", "else", "false", "for", "func", "if",
  "in", "import", "module", "not", "null", "object", "or", "label", "let",
  "loop", "private", "public", "return", "shared", "try", "throw",
  "debug_show", "query", "switch", "true", "type", "var", "while", "stable",
  "flexible", "system"
];

export const configureMonaco = () => {
  // Özel temayı tanımla ve uygula
  monaco.editor.defineTheme("custom-theme", theme);
  monaco.editor.setTheme("custom-theme");

  // Motoko dilini kaydet
  monaco.languages.register({ id: "motoko" });

  // Dil ayarlarını yapılandır
  monaco.languages.setLanguageConfiguration("motoko", {
    comments: {
      lineComment: "//",
      blockComment: ["/*", "*/"],
    },
    brackets: [
      ["{", "}"],
      ["[", "]"],
      ["(", ")"],
    ],
    autoClosingPairs: [
      { open: "{", close: "}" },
      { open: "[", close: "]" },
      { open: "(", close: ")" },
      { open: '"', close: '"' },
      { open: "<", close: ">" },
    ],
  });

  // Motoko dili için sözdizimi renklendirmesini tanımla
  monaco.languages.setMonarchTokensProvider("motoko", {
    defaultToken: "",
    tokenPostfix: ".mo",
    keywords: MOTOKO_KEYWORDS,
    accessmodifiers: ["public", "private", "shared"],
    typeKeywords: [
      'Any', 'None', 'Null', 'Bool', 'Int', 'Int8', 'Int16', 'Int32', 'Int64', 'Nat',
      'Nat8', 'Nat16', 'Nat32', 'Nat64', 'Word8', 'Word16', 'Word32', 'Word64', 'Float',
      'Char', 'Text', 'Blob', 'Error', 'Principal',
    ],
    operators: [
      '=', '<', '>', ':', '<:', '?', '+', '-', '*', '/', '%', '**', '&', '|', '^', '<<', '>>',
      '#', '==', '!=', '>=', '<=', ':=', '+=', '-=', '*=', '/=', '%=', '**=', '&=', '|=',
      '^=', '<<=', '>>=', '#=', '->',
    ],
    symbols: /[=(){}[\].,:;@#_&\-<>`?!+*\\/]/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    tokenizer: {
      root: [
        // Anahtar kelimeler ve tanımlayıcılar
        [
          /[a-zA-Z_$][\w$]*/,
          {
            cases: {
              "@typeKeywords": "keyword.type",
              "@keywords": "keyword",
              "@default": "identifier",
            },
          },
        ],
        { include: "@whitespace" },
        [/[{}()[\]]/, "@brackets"],
        [/[<>](?!@symbols)/, "@brackets"],
        [/@symbols/, { cases: { "@operators": "operator", "@default": "" } }],
        [/\d*\.\d+([eE][-+]?\d+)?/, "number.float"],
        [/0[xX][0-9a-fA-F_]+/, "number.hex"],
        [/[0-9_]+/, "number"],
        [/[;,.]/, "delimiter"],
        [/"([^"\\]|\\.)*$/, "string.invalid"],
        [/"/, { token: "string.quote", bracket: "@open", next: "@string" }],
        [/'[^\\']'/, "string"],
        [/(')(@escapes)(')/, ["string", "string.escape", "string"]],
        [/'/, "string.invalid"],
      ],
      comment: [
        [/[^/*]+/, "comment"],
        [/\/\*/, "comment", "@push"],
        ["\\*/", "comment", "@pop"],
        [/[/*]/, "comment"],
      ],
      string: [
        [/[^\\"]+/, "string"],
        [/@escapes/, "string.escape"],
        [/\\./, "string.escape.invalid"],
        [/"/, { token: "string.quote", bracket: "@close", next: "@pop" }],
      ],
      whitespace: [
        [/[ \t\r\n]+/, "white"],
        [/\/\*/, "comment", "@comment"],
        [/\/\/.*$/, "comment"],
      ],
    },
  });
};
