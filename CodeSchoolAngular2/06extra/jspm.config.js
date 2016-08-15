SystemJS.config({
  devConfig: {
    'map': {
      'babel-plugin-transform-class-properties': 'npm:babel-plugin-transform-class-properties@6.11.5',
      'babel-plugin-transform-es2015-typeof-symbol': 'npm:babel-plugin-transform-es2015-typeof-symbol@6.8.0',
      'babel-plugin-transform-flow-strip-types': 'npm:babel-plugin-transform-flow-strip-types@6.8.0',
      'babel-plugin-angular2-annotations': 'npm:babel-plugin-angular2-annotations@5.1.0',
      'babel-plugin-transform-decorators-legacy': 'npm:babel-plugin-transform-decorators-legacy@1.3.4'
    },
    'packages': {
      'npm:babel-plugin-transform-decorators-legacy@1.3.4': {
        'map': {
          'babel-plugin-syntax-decorators': 'npm:babel-plugin-syntax-decorators@6.13.0',
          'babel-template': 'npm:babel-template@6.9.0',
          'babel-runtime': 'npm:babel-runtime@6.11.6'
        }
      },
      'npm:babel-plugin-transform-class-properties@6.11.5': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-helper-function-name': 'npm:babel-helper-function-name@6.8.0',
          'babel-plugin-syntax-class-properties': 'npm:babel-plugin-syntax-class-properties@6.13.0'
        }
      },
      'npm:babel-plugin-transform-es2015-typeof-symbol@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6'
        }
      },
      'npm:babel-plugin-transform-flow-strip-types@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-plugin-syntax-flow': 'npm:babel-plugin-syntax-flow@6.13.0'
        }
      },
      'npm:babel-template@6.9.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-types': 'npm:babel-types@6.13.0',
          'babylon': 'npm:babylon@6.8.4',
          'lodash': 'npm:lodash@4.14.2',
          'babel-traverse': 'npm:babel-traverse@6.13.0'
        }
      },
      'npm:babel-plugin-angular2-annotations@5.1.0': {
        'map': {
          'babel-generator': 'npm:babel-generator@6.11.4'
        }
      },
      'npm:babel-helper-function-name@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-template': 'npm:babel-template@6.9.0',
          'babel-types': 'npm:babel-types@6.13.0',
          'babel-traverse': 'npm:babel-traverse@6.13.0',
          'babel-helper-get-function-arity': 'npm:babel-helper-get-function-arity@6.8.0'
        }
      },
      'npm:babel-generator@6.11.4': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-types': 'npm:babel-types@6.13.0',
          'lodash': 'npm:lodash@4.14.2',
          'source-map': 'npm:source-map@0.5.6',
          'babel-messages': 'npm:babel-messages@6.8.0',
          'detect-indent': 'npm:detect-indent@3.0.1'
        }
      },
      'npm:babel-runtime@6.11.6': {
        'map': {
          'regenerator-runtime': 'npm:regenerator-runtime@0.9.5',
          'core-js': 'npm:core-js@2.4.1'
        }
      },
      'npm:babel-types@6.13.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'lodash': 'npm:lodash@4.14.2',
          'babel-traverse': 'npm:babel-traverse@6.13.0',
          'esutils': 'npm:esutils@2.0.2',
          'to-fast-properties': 'npm:to-fast-properties@1.0.2'
        }
      },
      'npm:babylon@6.8.4': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6'
        }
      },
      'npm:babel-traverse@6.13.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-types': 'npm:babel-types@6.13.0',
          'babylon': 'npm:babylon@6.8.4',
          'lodash': 'npm:lodash@4.14.2',
          'invariant': 'npm:invariant@2.2.1',
          'globals': 'npm:globals@8.18.0',
          'debug': 'npm:debug@2.2.0',
          'babel-code-frame': 'npm:babel-code-frame@6.11.0',
          'babel-messages': 'npm:babel-messages@6.8.0'
        }
      },
      'npm:babel-code-frame@6.11.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'esutils': 'npm:esutils@2.0.2',
          'js-tokens': 'npm:js-tokens@2.0.0',
          'chalk': 'npm:chalk@1.1.3'
        }
      },
      'npm:babel-helper-get-function-arity@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-types': 'npm:babel-types@6.13.0'
        }
      },
      'npm:invariant@2.2.1': {
        'map': {
          'loose-envify': 'npm:loose-envify@1.2.0'
        }
      },
      'npm:babel-messages@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6'
        }
      },
      'npm:loose-envify@1.2.0': {
        'map': {
          'js-tokens': 'npm:js-tokens@1.0.3'
        }
      },
      'npm:debug@2.2.0': {
        'map': {
          'ms': 'npm:ms@0.7.1'
        }
      },
      'npm:chalk@1.1.3': {
        'map': {
          'ansi-styles': 'npm:ansi-styles@2.2.1',
          'escape-string-regexp': 'npm:escape-string-regexp@1.0.5',
          'has-ansi': 'npm:has-ansi@2.0.0',
          'strip-ansi': 'npm:strip-ansi@3.0.1',
          'supports-color': 'npm:supports-color@2.0.0'
        }
      },
      'npm:detect-indent@3.0.1': {
        'map': {
          'repeating': 'npm:repeating@1.1.3',
          'get-stdin': 'npm:get-stdin@4.0.1',
          'minimist': 'npm:minimist@1.2.0'
        }
      },
      'npm:has-ansi@2.0.0': {
        'map': {
          'ansi-regex': 'npm:ansi-regex@2.0.0'
        }
      },
      'npm:strip-ansi@3.0.1': {
        'map': {
          'ansi-regex': 'npm:ansi-regex@2.0.0'
        }
      },
      'npm:repeating@1.1.3': {
        'map': {
          'is-finite': 'npm:is-finite@1.0.1'
        }
      },
      'npm:is-finite@1.0.1': {
        'map': {
          'number-is-nan': 'npm:number-is-nan@1.0.0'
        }
      }
    }
  },
  packages: {
    'src': {
      'defaultExtension': 'ts'
    },
    'typings': {
      'defaultExtension': 'ts'
    }
  },
  transpiler: 'ts',
  typescriptOptions: {
    'sourceMap': true,
    'emitDecoratorMetadata': true,
    'experimentalDecorators': true,
    'removeComments': false,
    'noImplicitAny': false
  }
});

SystemJS.config({
  packageConfigPaths: [
    'npm:@*/*.json',
    'npm:*.json',
    'github:*/*.json'
  ],
  map: {
    '@angular/common': 'npm:@angular/common@2.0.0-rc.4',
    '@angular/compiler': 'npm:@angular/compiler@2.0.0-rc.4',
    '@angular/core': 'npm:@angular/core@2.0.0-rc.4',
    '@angular/http': 'npm:@angular/http@2.0.0-rc.4',
    '@angular/platform-browser': 'npm:@angular/platform-browser@2.0.0-rc.4',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@2.0.0-rc.4',
    '@angular/router': 'npm:@angular/router@3.0.0-beta.2',
    'angular2-bootstrap': 'npm:angular2-bootstrap@0.2.1',
    'assert': 'github:jspm/nodelibs-assert@0.2.0-alpha',
    'bootstrap': 'github:twbs/bootstrap@3.3.7',
    'bootstrap-sass': 'github:twbs/bootstrap-sass@3.3.7',
    'buffer': 'github:jspm/nodelibs-buffer@0.2.0-alpha',
    'child_process': 'github:jspm/nodelibs-child_process@0.2.0-alpha',
    'constants': 'github:jspm/nodelibs-constants@0.2.0-alpha',
    'crypto': 'github:jspm/nodelibs-crypto@0.2.0-alpha',
    'es6-promise': 'npm:es6-promise@3.2.1',
    'es6-shim': 'npm:es6-shim@0.35.1',
    'events': 'github:jspm/nodelibs-events@0.2.0-alpha',
    'font-awesome': 'npm:font-awesome@4.6.3',
    'fs': 'github:jspm/nodelibs-fs@0.2.0-alpha',
    'http': 'github:jspm/nodelibs-http@0.2.0-alpha',
    'jquery': 'npm:jquery@3.1.0',
    'module': 'github:jspm/nodelibs-module@0.2.0-alpha',
    'os': 'github:jspm/nodelibs-os@0.2.0-alpha',
    'path': 'github:jspm/nodelibs-path@0.2.0-alpha',
    'process': 'github:jspm/nodelibs-process@0.2.0-alpha',
    'reflect-metadata': 'npm:reflect-metadata@0.1.3',
    'rxjs': 'npm:rxjs@5.0.0-beta.6',
    'stream': 'github:jspm/nodelibs-stream@0.2.0-alpha',
    'string_decoder': 'github:jspm/nodelibs-string_decoder@0.2.0-alpha',
    'ts': 'github:frankwallis/plugin-typescript@4.0.16',
    'url': 'github:jspm/nodelibs-url@0.2.0-alpha',
    'util': 'github:jspm/nodelibs-util@0.2.0-alpha',
    'vm': 'github:jspm/nodelibs-vm@0.2.0-alpha',
    'zone.js': 'npm:zone.js@0.6.12'
  },
  packages: {
    'github:frankwallis/plugin-typescript@4.0.16': {
      'map': {
        'typescript': 'npm:typescript@1.8.10'
      }
    },
    'github:jspm/nodelibs-os@0.2.0-alpha': {
      'map': {
        'os-browserify': 'npm:os-browserify@0.2.1'
      }
    },
    'npm:font-awesome@4.6.3': {
      'map': {
        'css': 'github:systemjs/plugin-css@0.1.26'
      }
    },
    'github:twbs/bootstrap@3.3.7': {
      'map': {
        'jquery': 'npm:jquery@2.2.4'
      }
    },
    'github:jspm/nodelibs-stream@0.2.0-alpha': {
      'map': {
        'stream-browserify': 'npm:stream-browserify@2.0.1'
      }
    },
    'github:jspm/nodelibs-buffer@0.2.0-alpha': {
      'map': {
        'buffer-browserify': 'npm:buffer@4.9.0'
      }
    },
    'npm:stream-browserify@2.0.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'readable-stream': 'npm:readable-stream@2.1.4'
      }
    },
    'npm:buffer@4.9.0': {
      'map': {
        'ieee754': 'npm:ieee754@1.1.6',
        'isarray': 'npm:isarray@1.0.0',
        'base64-js': 'npm:base64-js@1.1.2'
      }
    },
    'npm:readable-stream@2.1.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'isarray': 'npm:isarray@1.0.0',
        'buffer-shims': 'npm:buffer-shims@1.0.0',
        'core-util-is': 'npm:core-util-is@1.0.2',
        'process-nextick-args': 'npm:process-nextick-args@1.0.7',
        'string_decoder': 'npm:string_decoder@0.10.31',
        'util-deprecate': 'npm:util-deprecate@1.0.2'
      }
    },
    'github:jspm/nodelibs-crypto@0.2.0-alpha': {
      'map': {
        'crypto-browserify': 'npm:crypto-browserify@3.11.0'
      }
    },
    'npm:crypto-browserify@3.11.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'public-encrypt': 'npm:public-encrypt@4.0.0',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'create-hash': 'npm:create-hash@1.1.2',
        'browserify-cipher': 'npm:browserify-cipher@1.0.0',
        'randombytes': 'npm:randombytes@2.0.3',
        'pbkdf2': 'npm:pbkdf2@3.0.4',
        'browserify-sign': 'npm:browserify-sign@4.0.0',
        'diffie-hellman': 'npm:diffie-hellman@5.0.2',
        'create-ecdh': 'npm:create-ecdh@4.0.0'
      }
    },
    'npm:create-hash@1.1.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'cipher-base': 'npm:cipher-base@1.0.2',
        'ripemd160': 'npm:ripemd160@1.0.1',
        'sha.js': 'npm:sha.js@2.4.5'
      }
    },
    'npm:create-hmac@1.1.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:public-encrypt@4.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'randombytes': 'npm:randombytes@2.0.3',
        'parse-asn1': 'npm:parse-asn1@5.0.0',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:pbkdf2@3.0.4': {
      'map': {
        'create-hmac': 'npm:create-hmac@1.1.4'
      }
    },
    'npm:browserify-sign@4.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'inherits': 'npm:inherits@2.0.1',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'parse-asn1': 'npm:parse-asn1@5.0.0',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'bn.js': 'npm:bn.js@4.11.6',
        'elliptic': 'npm:elliptic@6.3.1'
      }
    },
    'npm:diffie-hellman@5.0.2': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.3',
        'miller-rabin': 'npm:miller-rabin@4.0.0',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:browserify-cipher@1.0.0': {
      'map': {
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'browserify-des': 'npm:browserify-des@1.0.0',
        'browserify-aes': 'npm:browserify-aes@1.0.6'
      }
    },
    'npm:cipher-base@1.0.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'npm:parse-asn1@5.0.0': {
      'map': {
        'browserify-aes': 'npm:browserify-aes@1.0.6',
        'create-hash': 'npm:create-hash@1.1.2',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'pbkdf2': 'npm:pbkdf2@3.0.4',
        'asn1.js': 'npm:asn1.js@4.8.0'
      }
    },
    'npm:browserify-des@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'cipher-base': 'npm:cipher-base@1.0.2',
        'des.js': 'npm:des.js@1.0.0'
      }
    },
    'npm:browserify-aes@1.0.6': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'cipher-base': 'npm:cipher-base@1.0.2',
        'create-hash': 'npm:create-hash@1.1.2',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'buffer-xor': 'npm:buffer-xor@1.0.3'
      }
    },
    'npm:evp_bytestokey@1.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:browserify-rsa@4.0.1': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:sha.js@2.4.5': {
      'map': {
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'npm:create-ecdh@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'elliptic': 'npm:elliptic@6.3.1'
      }
    },
    'npm:miller-rabin@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'brorand': 'npm:brorand@1.0.5'
      }
    },
    'npm:elliptic@6.3.1': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'inherits': 'npm:inherits@2.0.1',
        'hash.js': 'npm:hash.js@1.0.3',
        'brorand': 'npm:brorand@1.0.5'
      }
    },
    'npm:asn1.js@4.8.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'inherits': 'npm:inherits@2.0.1',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:des.js@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:hash.js@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'github:jspm/nodelibs-string_decoder@0.2.0-alpha': {
      'map': {
        'string_decoder-browserify': 'npm:string_decoder@0.10.31'
      }
    },
    'npm:angular2-bootstrap@0.2.1': {
      'map': {
        'angular2': 'npm:angular2@2.0.0-alpha.27'
      }
    },
    'npm:angular2@2.0.0-alpha.27': {
      'map': {
        'reflect-metadata': 'npm:reflect-metadata@0.1.0',
        'traceur': 'npm:traceur@0.0.87',
        'rtts_assert': 'npm:rtts_assert@2.0.0-alpha.27',
        'rx': 'npm:rx@2.5.1',
        'zone.js': 'npm:zone.js@0.5.1'
      }
    },
    'npm:traceur@0.0.87': {
      'map': {
        'source-map-support': 'npm:source-map-support@0.2.10',
        'commander': 'npm:commander@2.6.0',
        'rsvp': 'npm:rsvp@3.2.1',
        'semver': 'npm:semver@2.3.2',
        'glob': 'npm:glob@4.3.5'
      }
    },
    'npm:source-map-support@0.2.10': {
      'map': {
        'source-map': 'npm:source-map@0.1.32'
      }
    },
    'npm:glob@4.3.5': {
      'map': {
        'once': 'npm:once@1.3.3',
        'inflight': 'npm:inflight@1.0.5',
        'inherits': 'npm:inherits@2.0.1',
        'minimatch': 'npm:minimatch@2.0.10'
      }
    },
    'npm:inflight@1.0.5': {
      'map': {
        'once': 'npm:once@1.3.3',
        'wrappy': 'npm:wrappy@1.0.2'
      }
    },
    'npm:source-map@0.1.32': {
      'map': {
        'amdefine': 'npm:amdefine@1.0.0'
      }
    },
    'npm:once@1.3.3': {
      'map': {
        'wrappy': 'npm:wrappy@1.0.2'
      }
    },
    'npm:minimatch@2.0.10': {
      'map': {
        'brace-expansion': 'npm:brace-expansion@1.1.6'
      }
    },
    'npm:brace-expansion@1.1.6': {
      'map': {
        'concat-map': 'npm:concat-map@0.0.1',
        'balanced-match': 'npm:balanced-match@0.4.2'
      }
    },
    'github:jspm/nodelibs-http@0.2.0-alpha': {
      'map': {
        'http-browserify': 'npm:stream-http@2.3.1'
      }
    },
    'npm:stream-http@2.3.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'builtin-status-codes': 'npm:builtin-status-codes@2.0.0',
        'readable-stream': 'npm:readable-stream@2.1.4',
        'xtend': 'npm:xtend@4.0.1',
        'to-arraybuffer': 'npm:to-arraybuffer@1.0.1'
      }
    },
    'github:jspm/nodelibs-url@0.2.0-alpha': {
      'map': {
        'url-browserify': 'npm:url@0.11.0'
      }
    },
    'npm:url@0.11.0': {
      'map': {
        'querystring': 'npm:querystring@0.2.0',
        'punycode': 'npm:punycode@1.3.2'
      }
    }
  }
});
