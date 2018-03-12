SystemJS.config({
  devConfig: {
    "map": {
      "plugin-typescript-runtime": "npm:babel-runtime@5.8.38",
      "plugin-typescript": "github:frankwallis/plugin-typescript@6.0.5",
      "core-js": "npm:core-js@1.2.7"
    }
  },
  transpiler: "ts",
  typescriptOptions: {
    "module": "system",
    "noImplicitAny": false,
    "typeCheck": "strict",
    "tsconfig": true,
    "typings": {
      "ably": "ably.d.ts",
      "npm:ably@1.0.13": "ably.d.ts"
    }
  },
  packages: {
    "app": {
      "main": "example",
      "defaultExtension": "ts"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "ably": "npm:ably@1.0.13",
    "assert": "npm:jspm-nodelibs-assert@0.2.0",
    "bcrypt-pbkdf": "npm:bcrypt-pbkdf@1.0.1",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.1",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
    "constants": "npm:jspm-nodelibs-constants@0.2.0",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
    "dgram": "npm:jspm-nodelibs-dgram@0.2.0",
    "dns": "npm:jspm-nodelibs-dns@0.2.0",
    "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
    "events": "npm:jspm-nodelibs-events@0.2.0",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.1",
    "jodid25519": "npm:jodid25519@1.0.2",
    "jsbn": "npm:jsbn@0.1.0",
    "module": "npm:jspm-nodelibs-module@0.2.0",
    "net": "npm:jspm-nodelibs-net@0.2.0",
    "os": "npm:jspm-nodelibs-os@0.2.0",
    "path": "npm:jspm-nodelibs-path@0.2.1",
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "querystring": "npm:jspm-nodelibs-querystring@0.2.0",
    "stream": "npm:jspm-nodelibs-stream@0.2.0",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
    "tls": "npm:jspm-nodelibs-tls@0.2.0",
    "ts": "github:frankwallis/plugin-typescript@6.0.5",
    "tty": "npm:jspm-nodelibs-tty@0.2.0",
    "tweetnacl": "npm:tweetnacl@0.14.5",
    "url": "npm:jspm-nodelibs-url@0.2.0",
    "util": "npm:jspm-nodelibs-util@0.2.1",
    "vm": "npm:jspm-nodelibs-vm@0.2.0",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.2"
  },
  packages: {
    "npm:ably@1.0.13": {
      "map": {
        "request": "npm:request@2.79.0",
        "ws": "npm:ws@1.1.1",
        "msgpack-js": "github:ably-forks/msgpack-js@0.3.0"
      }
    },
    "npm:request@2.79.0": {
      "map": {
        "combined-stream": "npm:combined-stream@1.0.5",
        "aws4": "npm:aws4@1.6.0",
        "extend": "npm:extend@3.0.0",
        "caseless": "npm:caseless@0.11.0",
        "hawk": "npm:hawk@3.1.3",
        "forever-agent": "npm:forever-agent@0.6.1",
        "aws-sign2": "npm:aws-sign2@0.6.0",
        "http-signature": "npm:http-signature@1.1.1",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "oauth-sign": "npm:oauth-sign@0.8.2",
        "stringstream": "npm:stringstream@0.0.5",
        "form-data": "npm:form-data@2.1.2",
        "mime-types": "npm:mime-types@2.1.14",
        "isstream": "npm:isstream@0.1.2",
        "har-validator": "npm:har-validator@2.0.6",
        "uuid": "npm:uuid@3.0.1",
        "is-typedarray": "npm:is-typedarray@1.0.0",
        "tough-cookie": "npm:tough-cookie@2.3.2",
        "qs": "npm:qs@6.3.0",
        "tunnel-agent": "npm:tunnel-agent@0.4.3"
      }
    },
    "npm:ws@1.1.1": {
      "map": {
        "utf-8-validate": "npm:utf-8-validate@1.2.2",
        "ultron": "npm:ultron@1.0.2",
        "options": "npm:options@0.0.6",
        "bufferutil": "npm:bufferutil@1.2.1"
      }
    },
    "npm:form-data@2.1.2": {
      "map": {
        "combined-stream": "npm:combined-stream@1.0.5",
        "mime-types": "npm:mime-types@2.1.14",
        "asynckit": "npm:asynckit@0.4.0"
      }
    },
    "npm:hawk@3.1.3": {
      "map": {
        "hoek": "npm:hoek@2.16.3",
        "boom": "npm:boom@2.10.1",
        "sntp": "npm:sntp@1.0.9",
        "cryptiles": "npm:cryptiles@2.0.5"
      }
    },
    "npm:http-signature@1.1.1": {
      "map": {
        "jsprim": "npm:jsprim@1.3.1",
        "sshpk": "npm:sshpk@1.10.2",
        "assert-plus": "npm:assert-plus@0.2.0"
      }
    },
    "npm:combined-stream@1.0.5": {
      "map": {
        "delayed-stream": "npm:delayed-stream@1.0.0"
      }
    },
    "npm:har-validator@2.0.6": {
      "map": {
        "commander": "npm:commander@2.9.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "is-my-json-valid": "npm:is-my-json-valid@2.15.0",
        "chalk": "npm:chalk@1.1.3"
      }
    },
    "npm:tough-cookie@2.3.2": {
      "map": {
        "punycode": "npm:punycode@1.4.1"
      }
    },
    "npm:mime-types@2.1.14": {
      "map": {
        "mime-db": "npm:mime-db@1.26.0"
      }
    },
    "npm:utf-8-validate@1.2.2": {
      "map": {
        "bindings": "npm:bindings@1.2.1",
        "nan": "npm:nan@2.4.0"
      }
    },
    "npm:bufferutil@1.2.1": {
      "map": {
        "bindings": "npm:bindings@1.2.1",
        "nan": "npm:nan@2.5.1"
      }
    },
    "npm:sntp@1.0.9": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:boom@2.10.1": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:sshpk@1.10.2": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0",
        "asn1": "npm:asn1@0.2.3",
        "dashdash": "npm:dashdash@1.14.1",
        "getpass": "npm:getpass@0.1.6"
      }
    },
    "npm:cryptiles@2.0.5": {
      "map": {
        "boom": "npm:boom@2.10.1"
      }
    },
    "npm:jsprim@1.3.1": {
      "map": {
        "verror": "npm:verror@1.3.6",
        "json-schema": "npm:json-schema@0.2.3",
        "extsprintf": "npm:extsprintf@1.0.2"
      }
    },
    "npm:commander@2.9.0": {
      "map": {
        "graceful-readlink": "npm:graceful-readlink@1.0.1"
      }
    },
    "npm:is-my-json-valid@2.15.0": {
      "map": {
        "generate-function": "npm:generate-function@2.0.0",
        "generate-object-property": "npm:generate-object-property@1.2.0",
        "xtend": "npm:xtend@4.0.1",
        "jsonpointer": "npm:jsonpointer@4.0.1"
      }
    },
    "npm:pinkie-promise@2.0.1": {
      "map": {
        "pinkie": "npm:pinkie@2.0.4"
      }
    },
    "npm:verror@1.3.6": {
      "map": {
        "extsprintf": "npm:extsprintf@1.0.2"
      }
    },
    "npm:jodid25519@1.0.2": {
      "map": {
        "jsbn": "npm:jsbn@0.1.0"
      }
    },
    "npm:dashdash@1.14.1": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:getpass@0.1.6": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:bcrypt-pbkdf@1.0.1": {
      "map": {
        "tweetnacl": "npm:tweetnacl@0.14.5"
      }
    },
    "npm:ecc-jsbn@0.1.1": {
      "map": {
        "jsbn": "npm:jsbn@0.1.0"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "has-ansi": "npm:has-ansi@2.0.0",
        "supports-color": "npm:supports-color@2.0.0",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "ansi-styles": "npm:ansi-styles@2.2.1"
      }
    },
    "npm:generate-object-property@1.2.0": {
      "map": {
        "is-property": "npm:is-property@1.0.2"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:jspm-nodelibs-url@0.2.0": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.6.3"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.0": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.2": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:stream-http@2.6.3": {
      "map": {
        "xtend": "npm:xtend@4.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.2"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.0": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "create-hmac": "npm:create-hmac@1.1.4",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "create-hash": "npm:create-hash@1.1.2",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.1": {
      "map": {
        "buffer": "npm:buffer@4.9.1"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.0": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.2"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "elliptic": "npm:elliptic@6.3.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:pbkdf2@3.0.9": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "miller-rabin": "npm:miller-rabin@4.0.0"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.8",
        "cipher-base": "npm:cipher-base@1.0.3"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "pako": "npm:pako@0.2.9",
        "readable-stream": "npm:readable-stream@2.2.2"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.3.3"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6"
      }
    },
    "npm:readable-stream@2.2.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "string_decoder": "npm:string_decoder@0.10.31",
        "isarray": "npm:isarray@1.0.0",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "core-util-is": "npm:core-util-is@1.0.2",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "asn1.js": "npm:asn1.js@4.9.1"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:elliptic@6.3.3": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "hash.js": "npm:hash.js@1.0.3",
        "brorand": "npm:brorand@1.0.7"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:sha.js@2.4.8": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.7"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "base64-js": "npm:base64-js@1.2.0",
        "ieee754": "npm:ieee754@1.1.8"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:asn1.js@4.9.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:jspm-nodelibs-os@0.2.0": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "github:frankwallis/plugin-typescript@6.0.5": {
      "map": {
        "typescript": "npm:typescript@2.2.0"
      }
    },
    "npm:typescript@2.2.0": {
      "map": {
        "source-map-support": "npm:source-map-support@0.4.11"
      }
    },
    "npm:source-map-support@0.4.11": {
      "map": {
        "source-map": "npm:source-map@0.5.6"
      }
    }
  }
});
