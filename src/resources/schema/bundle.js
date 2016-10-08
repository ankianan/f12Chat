(function (crypto) {
	'use strict';

	crypto = 'default' in crypto ? crypto['default'] : crypto;

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var __moduleExports = createCommonjsModule(function (module, exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EntitySchema = function () {
	  function EntitySchema(key) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    _classCallCheck(this, EntitySchema);

	    if (!key || typeof key !== 'string') {
	      throw new Error('A string non-empty key is required');
	    }

	    this._key = key;
	    this._assignEntity = options.assignEntity;

	    var idAttribute = options.idAttribute || 'id';
	    this._getId = typeof idAttribute === 'function' ? idAttribute : function (x) {
	      return x[idAttribute];
	    };
	    this._idAttribute = idAttribute;
	    this._meta = options.meta;
	    this._defaults = options.defaults;
	  }

	  _createClass(EntitySchema, [{
	    key: 'getAssignEntity',
	    value: function getAssignEntity() {
	      return this._assignEntity;
	    }
	  }, {
	    key: 'getKey',
	    value: function getKey() {
	      return this._key;
	    }
	  }, {
	    key: 'getId',
	    value: function getId(entity) {
	      return this._getId(entity);
	    }
	  }, {
	    key: 'getIdAttribute',
	    value: function getIdAttribute() {
	      return this._idAttribute;
	    }
	  }, {
	    key: 'getMeta',
	    value: function getMeta(prop) {
	      if (!prop || typeof prop !== 'string') {
	        throw new Error('A string non-empty property name is required');
	      }
	      return this._meta && this._meta[prop];
	    }
	  }, {
	    key: 'getDefaults',
	    value: function getDefaults() {
	      return this._defaults;
	    }
	  }, {
	    key: 'define',
	    value: function define(nestedSchema) {
	      for (var key in nestedSchema) {
	        if (nestedSchema.hasOwnProperty(key)) {
	          this[key] = nestedSchema[key];
	        }
	      }
	    }
	  }]);

	  return EntitySchema;
	}();

	exports.default = EntitySchema;
	});

	unwrapExports(__moduleExports);

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	var __moduleExports$2 = isObject;

	var __moduleExports$3 = createCommonjsModule(function (module, exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _isObject = __moduleExports$2;

	var _isObject2 = _interopRequireDefault(_isObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UnionSchema = function () {
	  function UnionSchema(itemSchema, options) {
	    _classCallCheck(this, UnionSchema);

	    if (!(0, _isObject2.default)(itemSchema)) {
	      throw new Error('UnionSchema requires item schema to be an object.');
	    }

	    if (!options || !options.schemaAttribute) {
	      throw new Error('UnionSchema requires schemaAttribute option.');
	    }

	    this._itemSchema = itemSchema;

	    var schemaAttribute = options.schemaAttribute;
	    this._getSchema = typeof schemaAttribute === 'function' ? schemaAttribute : function (x) {
	      return x[schemaAttribute];
	    };
	  }

	  _createClass(UnionSchema, [{
	    key: 'getItemSchema',
	    value: function getItemSchema() {
	      return this._itemSchema;
	    }
	  }, {
	    key: 'getSchemaKey',
	    value: function getSchemaKey(item) {
	      return this._getSchema(item);
	    }
	  }]);

	  return UnionSchema;
	}();

	exports.default = UnionSchema;
	});

	unwrapExports(__moduleExports$3);

	var __moduleExports$1 = createCommonjsModule(function (module, exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _isObject = __moduleExports$2;

	var _isObject2 = _interopRequireDefault(_isObject);

	var _UnionSchema = __moduleExports$3;

	var _UnionSchema2 = _interopRequireDefault(_UnionSchema);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ArraySchema = function () {
	  function ArraySchema(itemSchema) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    _classCallCheck(this, ArraySchema);

	    if (!(0, _isObject2.default)(itemSchema)) {
	      throw new Error('ArraySchema requires item schema to be an object.');
	    }

	    if (options.schemaAttribute) {
	      var schemaAttribute = options.schemaAttribute;
	      this._itemSchema = new _UnionSchema2.default(itemSchema, { schemaAttribute: schemaAttribute });
	    } else {
	      this._itemSchema = itemSchema;
	    }
	  }

	  _createClass(ArraySchema, [{
	    key: 'getItemSchema',
	    value: function getItemSchema() {
	      return this._itemSchema;
	    }
	  }]);

	  return ArraySchema;
	}();

	exports.default = ArraySchema;
	});

	unwrapExports(__moduleExports$1);

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear$1() {
	  this.__data__ = [];
	  this.size = 0;
	}

	var __moduleExports$9 = listCacheClear$1;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq$1(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	var __moduleExports$12 = eq$1;

	var eq = __moduleExports$12;

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf$1(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	var __moduleExports$11 = assocIndexOf$1;

	var assocIndexOf = __moduleExports$11;

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete$1(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	var __moduleExports$10 = listCacheDelete$1;

	var assocIndexOf$2 = __moduleExports$11;

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet$1(key) {
	  var data = this.__data__,
	      index = assocIndexOf$2(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	var __moduleExports$13 = listCacheGet$1;

	var assocIndexOf$3 = __moduleExports$11;

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas$1(key) {
	  return assocIndexOf$3(this.__data__, key) > -1;
	}

	var __moduleExports$14 = listCacheHas$1;

	var assocIndexOf$4 = __moduleExports$11;

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet$1(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf$4(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	var __moduleExports$15 = listCacheSet$1;

	var listCacheClear = __moduleExports$9;
	var listCacheDelete = __moduleExports$10;
	var listCacheGet = __moduleExports$13;
	var listCacheHas = __moduleExports$14;
	var listCacheSet = __moduleExports$15;
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache$1(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache$1.prototype.clear = listCacheClear;
	ListCache$1.prototype['delete'] = listCacheDelete;
	ListCache$1.prototype.get = listCacheGet;
	ListCache$1.prototype.has = listCacheHas;
	ListCache$1.prototype.set = listCacheSet;

	var __moduleExports$8 = ListCache$1;

	var ListCache$2 = __moduleExports$8;

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear$1() {
	  this.__data__ = new ListCache$2;
	  this.size = 0;
	}

	var __moduleExports$16 = stackClear$1;

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete$1(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	var __moduleExports$17 = stackDelete$1;

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet$1(key) {
	  return this.__data__.get(key);
	}

	var __moduleExports$18 = stackGet$1;

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas$1(key) {
	  return this.__data__.has(key);
	}

	var __moduleExports$19 = stackHas$1;

	var isObject$3 = __moduleExports$2;

	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	var genTag = '[object GeneratorFunction]';
	var proxyTag = '[object Proxy]';
	/** Used for built-in method references. */
	var objectProto$2 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto$2.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction$1(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject$3(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag || tag == proxyTag;
	}

	var __moduleExports$24 = isFunction$1;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	var __moduleExports$28 = freeGlobal$1;

	var freeGlobal = __moduleExports$28;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root$2 = freeGlobal || freeSelf || Function('return this')();

	var __moduleExports$27 = root$2;

	var root$1 = __moduleExports$27;

	/** Used to detect overreaching core-js shims. */
	var coreJsData$1 = root$1['__core-js_shared__'];

	var __moduleExports$26 = coreJsData$1;

	var coreJsData = __moduleExports$26;

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked$1(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	var __moduleExports$25 = isMasked$1;

	/** Used for built-in method references. */
	var funcProto$1 = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$1 = funcProto$1.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource$1(func) {
	  if (func != null) {
	    try {
	      return funcToString$1.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	var __moduleExports$29 = toSource$1;

	var isFunction = __moduleExports$24;
	var isMasked = __moduleExports$25;
var 	isObject$2 = __moduleExports$2;
	var toSource = __moduleExports$29;
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype;
var 	objectProto$1 = Object.prototype;
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative$1(value) {
	  if (!isObject$2(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	var __moduleExports$23 = baseIsNative$1;

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue$1(object, key) {
	  return object == null ? undefined : object[key];
	}

	var __moduleExports$30 = getValue$1;

	var baseIsNative = __moduleExports$23;
	var getValue = __moduleExports$30;
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative$1(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	var __moduleExports$22 = getNative$1;

	var getNative = __moduleExports$22;
	var root = __moduleExports$27;
	/* Built-in method references that are verified to be native. */
	var Map$1 = getNative(root, 'Map');

	var __moduleExports$21 = Map$1;

	var getNative$2 = __moduleExports$22;

	/* Built-in method references that are verified to be native. */
	var nativeCreate$1 = getNative$2(Object, 'create');

	var __moduleExports$35 = nativeCreate$1;

	var nativeCreate = __moduleExports$35;

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear$1() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	var __moduleExports$34 = hashClear$1;

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete$1(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var __moduleExports$36 = hashDelete$1;

	var nativeCreate$2 = __moduleExports$35;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto$3 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet$1(key) {
	  var data = this.__data__;
	  if (nativeCreate$2) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
	}

	var __moduleExports$37 = hashGet$1;

	var nativeCreate$3 = __moduleExports$35;

	/** Used for built-in method references. */
	var objectProto$4 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas$1(key) {
	  var data = this.__data__;
	  return nativeCreate$3 ? data[key] !== undefined : hasOwnProperty$3.call(data, key);
	}

	var __moduleExports$38 = hashHas$1;

	var nativeCreate$4 = __moduleExports$35;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet$1(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate$4 && value === undefined) ? HASH_UNDEFINED$1 : value;
	  return this;
	}

	var __moduleExports$39 = hashSet$1;

	var hashClear = __moduleExports$34;
	var hashDelete = __moduleExports$36;
	var hashGet = __moduleExports$37;
	var hashHas = __moduleExports$38;
	var hashSet = __moduleExports$39;
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash$1(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash$1.prototype.clear = hashClear;
	Hash$1.prototype['delete'] = hashDelete;
	Hash$1.prototype.get = hashGet;
	Hash$1.prototype.has = hashHas;
	Hash$1.prototype.set = hashSet;

	var __moduleExports$33 = Hash$1;

	var Hash = __moduleExports$33;
var 	ListCache$4 = __moduleExports$8;
var 	Map$2 = __moduleExports$21;
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear$1() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map$2 || ListCache$4),
	    'string': new Hash
	  };
	}

	var __moduleExports$32 = mapCacheClear$1;

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable$1(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	var __moduleExports$42 = isKeyable$1;

	var isKeyable = __moduleExports$42;

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData$1(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	var __moduleExports$41 = getMapData$1;

	var getMapData = __moduleExports$41;

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete$1(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var __moduleExports$40 = mapCacheDelete$1;

	var getMapData$2 = __moduleExports$41;

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet$1(key) {
	  return getMapData$2(this, key).get(key);
	}

	var __moduleExports$43 = mapCacheGet$1;

	var getMapData$3 = __moduleExports$41;

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas$1(key) {
	  return getMapData$3(this, key).has(key);
	}

	var __moduleExports$44 = mapCacheHas$1;

	var getMapData$4 = __moduleExports$41;

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet$1(key, value) {
	  var data = getMapData$4(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	var __moduleExports$45 = mapCacheSet$1;

	var mapCacheClear = __moduleExports$32;
	var mapCacheDelete = __moduleExports$40;
	var mapCacheGet = __moduleExports$43;
	var mapCacheHas = __moduleExports$44;
	var mapCacheSet = __moduleExports$45;
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache$1(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache$1.prototype.clear = mapCacheClear;
	MapCache$1.prototype['delete'] = mapCacheDelete;
	MapCache$1.prototype.get = mapCacheGet;
	MapCache$1.prototype.has = mapCacheHas;
	MapCache$1.prototype.set = mapCacheSet;

	var __moduleExports$31 = MapCache$1;

var 	ListCache$3 = __moduleExports$8;
	var Map = __moduleExports$21;
	var MapCache = __moduleExports$31;
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet$1(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache$3) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	var __moduleExports$20 = stackSet$1;

	var ListCache = __moduleExports$8;
	var stackClear = __moduleExports$16;
	var stackDelete = __moduleExports$17;
	var stackGet = __moduleExports$18;
	var stackHas = __moduleExports$19;
	var stackSet = __moduleExports$20;
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack$1(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack$1.prototype.clear = stackClear;
	Stack$1.prototype['delete'] = stackDelete;
	Stack$1.prototype.get = stackGet;
	Stack$1.prototype.has = stackHas;
	Stack$1.prototype.set = stackSet;

	var __moduleExports$7 = Stack$1;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd$1(value) {
	  this.__data__.set(value, HASH_UNDEFINED$2);
	  return this;
	}

	var __moduleExports$48 = setCacheAdd$1;

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas$1(value) {
	  return this.__data__.has(value);
	}

	var __moduleExports$49 = setCacheHas$1;

var 	MapCache$2 = __moduleExports$31;
	var setCacheAdd = __moduleExports$48;
	var setCacheHas = __moduleExports$49;
	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache$1(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.__data__ = new MapCache$2;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
	SetCache$1.prototype.has = setCacheHas;

	var __moduleExports$47 = SetCache$1;

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome$1(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	var __moduleExports$50 = arraySome$1;

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas$1(cache, key) {
	  return cache.has(key);
	}

	var __moduleExports$51 = cacheHas$1;

	var SetCache = __moduleExports$47;
	var arraySome = __moduleExports$50;
	var cacheHas = __moduleExports$51;
	var UNORDERED_COMPARE_FLAG = 1;
var 	PARTIAL_COMPARE_FLAG$1 = 2;
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays$1(array, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG$1,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, customizer, bitmask, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	var __moduleExports$46 = equalArrays$1;

	var root$3 = __moduleExports$27;

	/** Built-in value references. */
	var Symbol$1 = root$3.Symbol;

	var __moduleExports$53 = Symbol$1;

	var root$4 = __moduleExports$27;

	/** Built-in value references. */
	var Uint8Array$2 = root$4.Uint8Array;

	var __moduleExports$54 = Uint8Array$2;

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray$1(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	var __moduleExports$55 = mapToArray$1;

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray$1(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	var __moduleExports$56 = setToArray$1;

	var Symbol = __moduleExports$53;
var 	Uint8Array$1 = __moduleExports$54;
var 	eq$2 = __moduleExports$12;
var 	equalArrays$2 = __moduleExports$46;
	var mapToArray = __moduleExports$55;
	var setToArray = __moduleExports$56;
var 	UNORDERED_COMPARE_FLAG$1 = 1;
var 	PARTIAL_COMPARE_FLAG$2 = 2;
	var boolTag = '[object Boolean]';
	var dateTag = '[object Date]';
	var errorTag = '[object Error]';
	var mapTag = '[object Map]';
	var numberTag = '[object Number]';
	var regexpTag = '[object RegExp]';
	var setTag = '[object Set]';
	var stringTag = '[object String]';
	var symbolTag = '[object Symbol]';
	var arrayBufferTag = '[object ArrayBuffer]';
	var dataViewTag = '[object DataView]';
	var symbolProto = Symbol ? Symbol.prototype : undefined;
	var symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag$1(object, other, tag, equalFunc, customizer, bitmask, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq$2(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG$2;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= UNORDERED_COMPARE_FLAG$1;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays$2(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	var __moduleExports$52 = equalByTag$1;

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes$1(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	var __moduleExports$60 = baseTimes$1;

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength$1(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	var __moduleExports$64 = isLength$1;

var 	isFunction$2 = __moduleExports$24;
	var isLength = __moduleExports$64;
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike$2(value) {
	  return value != null && isLength(value.length) && !isFunction$2(value);
	}

	var __moduleExports$63 = isArrayLike$2;

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike$2(value) {
	  return value != null && typeof value == 'object';
	}

	var __moduleExports$65 = isObjectLike$2;

var 	isArrayLike$1 = __moduleExports$63;
var 	isObjectLike$1 = __moduleExports$65;
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject$1(value) {
	  return isObjectLike$1(value) && isArrayLike$1(value);
	}

	var __moduleExports$62 = isArrayLikeObject$1;

	var isArrayLikeObject = __moduleExports$62;

	/** `Object#toString` result references. */
	var argsTag$1 = '[object Arguments]';

	/** Used for built-in method references. */
	var objectProto$7 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString$1 = objectProto$7.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto$7.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments$1(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty$6.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString$1.call(value) == argsTag$1);
	}

	var __moduleExports$61 = isArguments$1;

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray$2 = Array.isArray;

	var __moduleExports$66 = isArray$2;

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER$1 = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex$1(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER$1 : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	var __moduleExports$67 = isIndex$1;

	var baseTimes = __moduleExports$60;
	var isArguments = __moduleExports$61;
var 	isArray$1 = __moduleExports$66;
	var isIndex = __moduleExports$67;
	/** Used for built-in method references. */
	var objectProto$6 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys$1(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray$1(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];

	  var length = result.length,
	      skipIndexes = !!length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty$5.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var __moduleExports$59 = arrayLikeKeys$1;

	/** Used for built-in method references. */
	var objectProto$9 = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype$1(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$9;

	  return value === proto;
	}

	var __moduleExports$69 = isPrototype$1;

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg$1(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	var __moduleExports$71 = overArg$1;

	var overArg = __moduleExports$71;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys$1 = overArg(Object.keys, Object);

	var __moduleExports$70 = nativeKeys$1;

	var isPrototype = __moduleExports$69;
	var nativeKeys = __moduleExports$70;
	/** Used for built-in method references. */
	var objectProto$8 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$7 = objectProto$8.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys$1(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty$7.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var __moduleExports$68 = baseKeys$1;

	var arrayLikeKeys = __moduleExports$59;
	var baseKeys = __moduleExports$68;
	var isArrayLike = __moduleExports$63;
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys$1(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	var __moduleExports$58 = keys$1;

	var keys = __moduleExports$58;

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG$3 = 2;

	/** Used for built-in method references. */
	var objectProto$5 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects$1(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG$3,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty$4.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	var __moduleExports$57 = equalObjects$1;

var 	getNative$3 = __moduleExports$22;
var 	root$5 = __moduleExports$27;
	/* Built-in method references that are verified to be native. */
	var DataView$1 = getNative$3(root$5, 'DataView');

	var __moduleExports$73 = DataView$1;

var 	getNative$4 = __moduleExports$22;
var 	root$6 = __moduleExports$27;
	/* Built-in method references that are verified to be native. */
	var Promise$1 = getNative$4(root$6, 'Promise');

	var __moduleExports$74 = Promise$1;

var 	getNative$5 = __moduleExports$22;
var 	root$7 = __moduleExports$27;
	/* Built-in method references that are verified to be native. */
	var Set$1 = getNative$5(root$7, 'Set');

	var __moduleExports$75 = Set$1;

var 	getNative$6 = __moduleExports$22;
var 	root$8 = __moduleExports$27;
	/* Built-in method references that are verified to be native. */
	var WeakMap$1 = getNative$6(root$8, 'WeakMap');

	var __moduleExports$76 = WeakMap$1;

	/** Used for built-in method references. */
	var objectProto$11 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString$3 = objectProto$11.toString;

	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag$1(value) {
	  return objectToString$3.call(value);
	}

	var __moduleExports$77 = baseGetTag$1;

	var DataView = __moduleExports$73;
var 	Map$3 = __moduleExports$21;
	var Promise = __moduleExports$74;
	var Set = __moduleExports$75;
	var WeakMap = __moduleExports$76;
	var baseGetTag = __moduleExports$77;
var 	toSource$2 = __moduleExports$29;
var 	mapTag$1 = '[object Map]';
var 	objectTag$1 = '[object Object]';
	var promiseTag = '[object Promise]';
var 	setTag$1 = '[object Set]';
	var weakMapTag = '[object WeakMap]';
	var dataViewTag$1 = '[object DataView]';

	/** Used for built-in method references. */
	var objectProto$10 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString$2 = objectProto$10.toString;

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource$2(DataView);
	var mapCtorString = toSource$2(Map$3);
	var promiseCtorString = toSource$2(Promise);
	var setCtorString = toSource$2(Set);
	var weakMapCtorString = toSource$2(WeakMap);
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag$1 = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag$1(new DataView(new ArrayBuffer(1))) != dataViewTag$1) ||
	    (Map$3 && getTag$1(new Map$3) != mapTag$1) ||
	    (Promise && getTag$1(Promise.resolve()) != promiseTag) ||
	    (Set && getTag$1(new Set) != setTag$1) ||
	    (WeakMap && getTag$1(new WeakMap) != weakMapTag)) {
	  getTag$1 = function(value) {
	    var result = objectToString$2.call(value),
	        Ctor = result == objectTag$1 ? value.constructor : undefined,
	        ctorString = Ctor ? toSource$2(Ctor) : undefined;

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag$1;
	        case mapCtorString: return mapTag$1;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag$1;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	var __moduleExports$72 = getTag$1;

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	var __moduleExports$79 = stubFalse;

	var __moduleExports$78 = createCommonjsModule(function (module, exports) {
	var root = __moduleExports$27,
	    stubFalse = __moduleExports$79;

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;
	});

var 	isLength$2 = __moduleExports$64;
var 	isObjectLike$3 = __moduleExports$65;
var 	argsTag$2 = '[object Arguments]';
var 	arrayTag$1 = '[object Array]';
var 	boolTag$1 = '[object Boolean]';
var 	dateTag$1 = '[object Date]';
var 	errorTag$1 = '[object Error]';
var 	funcTag$1 = '[object Function]';
var 	mapTag$2 = '[object Map]';
var 	numberTag$1 = '[object Number]';
var 	objectTag$2 = '[object Object]';
var 	regexpTag$1 = '[object RegExp]';
var 	setTag$2 = '[object Set]';
var 	stringTag$1 = '[object String]';
var 	weakMapTag$1 = '[object WeakMap]';
var 	arrayBufferTag$1 = '[object ArrayBuffer]';
var 	dataViewTag$2 = '[object DataView]';
	var float32Tag = '[object Float32Array]';
	var float64Tag = '[object Float64Array]';
	var int8Tag = '[object Int8Array]';
	var int16Tag = '[object Int16Array]';
	var int32Tag = '[object Int32Array]';
	var uint8Tag = '[object Uint8Array]';
	var uint8ClampedTag = '[object Uint8ClampedArray]';
	var uint16Tag = '[object Uint16Array]';
	var uint32Tag = '[object Uint32Array]';
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$1] =
	typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] =
	typedArrayTags[dataViewTag$2] = typedArrayTags[dateTag$1] =
	typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] =
	typedArrayTags[mapTag$2] = typedArrayTags[numberTag$1] =
	typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$1] =
	typedArrayTags[setTag$2] = typedArrayTags[stringTag$1] =
	typedArrayTags[weakMapTag$1] = false;

	/** Used for built-in method references. */
	var objectProto$12 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString$4 = objectProto$12.toString;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray$1(value) {
	  return isObjectLike$3(value) &&
	    isLength$2(value.length) && !!typedArrayTags[objectToString$4.call(value)];
	}

	var __moduleExports$81 = baseIsTypedArray$1;

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary$1(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	var __moduleExports$82 = baseUnary$1;

	var __moduleExports$83 = createCommonjsModule(function (module, exports) {
	var freeGlobal = __moduleExports$28;

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;
	});

	var baseIsTypedArray = __moduleExports$81;
	var baseUnary = __moduleExports$82;
	var nodeUtil = __moduleExports$83;
	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray$1 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	var __moduleExports$80 = isTypedArray$1;

	var Stack = __moduleExports$7;
	var equalArrays = __moduleExports$46;
	var equalByTag = __moduleExports$52;
	var equalObjects = __moduleExports$57;
	var getTag = __moduleExports$72;
	var isArray = __moduleExports$66;
	var isBuffer = __moduleExports$78;
	var isTypedArray = __moduleExports$80;
	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	var arrayTag = '[object Array]';
	var objectTag = '[object Object]';
	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep$1(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
	      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}

	var __moduleExports$6 = baseIsEqualDeep$1;

	var baseIsEqualDeep = __moduleExports$6;
var 	isObject$1 = __moduleExports$2;
	var isObjectLike = __moduleExports$65;
	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual$1(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject$1(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual$1, customizer, bitmask, stack);
	}

	var __moduleExports$5 = baseIsEqual$1;

	var baseIsEqual = __moduleExports$5;

	/**
	 * Performs a deep comparison between two values to determine if they are
	 * equivalent.
	 *
	 * **Note:** This method supports comparing arrays, array buffers, booleans,
	 * date objects, error objects, maps, numbers, `Object` objects, regexes,
	 * sets, strings, symbols, and typed arrays. `Object` objects are compared
	 * by their own, not inherited, enumerable properties. Functions and DOM
	 * nodes are **not** supported.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.isEqual(object, other);
	 * // => true
	 *
	 * object === other;
	 * // => false
	 */
	function isEqual(value, other) {
	  return baseIsEqual(value, other);
	}

	var __moduleExports$4 = isEqual;

	var index = createCommonjsModule(function (module, exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Schema = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.arrayOf = arrayOf;
	exports.valuesOf = valuesOf;
	exports.unionOf = unionOf;
	exports.normalize = normalize;

	var _EntitySchema = __moduleExports;

	var _EntitySchema2 = _interopRequireDefault(_EntitySchema);

	var _IterableSchema = __moduleExports$1;

	var _IterableSchema2 = _interopRequireDefault(_IterableSchema);

	var _UnionSchema = __moduleExports$3;

	var _UnionSchema2 = _interopRequireDefault(_UnionSchema);

	var _isEqual = __moduleExports$4;

	var _isEqual2 = _interopRequireDefault(_isEqual);

	var _isObject = __moduleExports$2;

	var _isObject2 = _interopRequireDefault(_isObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function defaultAssignEntity(normalized, key, entity) {
	  normalized[key] = entity;
	}

	function visitObject(obj, schema, bag, options) {
	  var _options$assignEntity = options.assignEntity;
	  var assignEntity = _options$assignEntity === undefined ? defaultAssignEntity : _options$assignEntity;


	  var defaults = schema && schema.getDefaults && schema.getDefaults();
	  var schemaAssignEntity = schema && schema.getAssignEntity && schema.getAssignEntity();
	  var normalized = (0, _isObject2.default)(defaults) ? _extends({}, defaults) : {};
	  for (var key in obj) {
	    if (obj.hasOwnProperty(key)) {
	      var entity = visit(obj[key], schema[key], bag, options);
	      assignEntity.call(null, normalized, key, entity, obj, schema);
	      if (schemaAssignEntity) {
	        schemaAssignEntity.call(null, normalized, key, entity, obj, schema);
	      }
	    }
	  }
	  return normalized;
	}

	function defaultMapper(iterableSchema, itemSchema, bag, options) {
	  return function (obj) {
	    return visit(obj, itemSchema, bag, options);
	  };
	}

	function polymorphicMapper(iterableSchema, itemSchema, bag, options) {
	  return function (obj) {
	    var schemaKey = iterableSchema.getSchemaKey(obj);
	    var result = visit(obj, itemSchema[schemaKey], bag, options);
	    return { id: result, schema: schemaKey };
	  };
	}

	function visitIterable(obj, iterableSchema, bag, options) {
	  var itemSchema = iterableSchema.getItemSchema();
	  var curriedItemMapper = defaultMapper(iterableSchema, itemSchema, bag, options);

	  if (Array.isArray(obj)) {
	    return obj.map(curriedItemMapper);
	  } else {
	    return Object.keys(obj).reduce(function (objMap, key) {
	      objMap[key] = curriedItemMapper(obj[key]);
	      return objMap;
	    }, {});
	  }
	}

	function visitUnion(obj, unionSchema, bag, options) {
	  var itemSchema = unionSchema.getItemSchema();
	  return polymorphicMapper(unionSchema, itemSchema, bag, options)(obj);
	}

	function defaultMergeIntoEntity(entityA, entityB, entityKey) {
	  for (var key in entityB) {
	    if (!entityB.hasOwnProperty(key)) {
	      continue;
	    }

	    if (!entityA.hasOwnProperty(key) || (0, _isEqual2.default)(entityA[key], entityB[key])) {
	      entityA[key] = entityB[key];
	      continue;
	    }

	    console.warn('When merging two ' + entityKey + ', found unequal data in their "' + key + '" values. Using the earlier value.', entityA[key], entityB[key]);
	  }
	}

	function visitEntity(entity, entitySchema, bag, options) {
	  var _options$mergeIntoEnt = options.mergeIntoEntity;
	  var mergeIntoEntity = _options$mergeIntoEnt === undefined ? defaultMergeIntoEntity : _options$mergeIntoEnt;


	  var entityKey = entitySchema.getKey();
	  var id = entitySchema.getId(entity);

	  if (!bag.hasOwnProperty(entityKey)) {
	    bag[entityKey] = {};
	  }

	  if (!bag[entityKey].hasOwnProperty(id)) {
	    bag[entityKey][id] = {};
	  }

	  var stored = bag[entityKey][id];
	  var normalized = visitObject(entity, entitySchema, bag, options);
	  mergeIntoEntity(stored, normalized, entityKey);

	  return id;
	}

	function visit(obj, schema, bag, options) {
	  if (!(0, _isObject2.default)(obj) || !(0, _isObject2.default)(schema)) {
	    return obj;
	  }

	  if (schema instanceof _EntitySchema2.default) {
	    return visitEntity(obj, schema, bag, options);
	  } else if (schema instanceof _IterableSchema2.default) {
	    return visitIterable(obj, schema, bag, options);
	  } else if (schema instanceof _UnionSchema2.default) {
	    return visitUnion(obj, schema, bag, options);
	  } else {
	    return visitObject(obj, schema, bag, options);
	  }
	}

	function arrayOf(schema, options) {
	  return new _IterableSchema2.default(schema, options);
	}

	function valuesOf(schema, options) {
	  return new _IterableSchema2.default(schema, options);
	}

	function unionOf(schema, options) {
	  return new _UnionSchema2.default(schema, options);
	}

	exports.Schema = _EntitySchema2.default;
	function normalize(obj, schema) {
	  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	  if (!(0, _isObject2.default)(obj)) {
	    throw new Error('Normalize accepts an object or an array as its input.');
	  }

	  if (!(0, _isObject2.default)(schema) || Array.isArray(schema)) {
	    throw new Error('Normalize accepts an object for schema.');
	  }

	  var bag = {};
	  var result = visit(obj, schema, bag, options);

	  return {
	    entities: bag,
	    result: result
	  };
	}
	});

	unwrapExports(index);
	var Schema = index.Schema;
	var normalize = index.normalize;
	var arrayOf = index.arrayOf;

	var response = {
	    "id": 1,
	    "detail": {
	        "id": "8527619715",
	        "name": "Ankit Anand",
	        "connId": null
	    },
	    "contacts": [{
	        "detail": {
	            "id": "9911344354",
	            "name": "Papa"
	        },
	        "logs": [{
	            "message": "hi",
	            "type": "recieve"
	        }, {
	            "message": "hello",
	            "type": "send"
	        }]
	    }, {
	        "detail": {
	            "id": "9810959233",
	            "name": "Mumi"
	        },
	        "logs": [{
	            "message": "hi",
	            "type": "recieve"
	        }, {
	            "message": "hello",
	            "type": "send"
	        }]
	    }]
	};

	var index$2 = createCommonjsModule(function (module, exports) {
	'use strict';

	var crypto$$ = crypto;

	/**
	 * Exported function
	 *
	 * Options:
	 *
	 *  - `algorithm` hash algo to be used by this instance: *'sha1', 'md5' 
	 *  - `excludeValues` {true|*false} hash object keys, values ignored 
	 *  - `encoding` hash encoding, supports 'buffer', '*hex', 'binary', 'base64' 
	 *  - `ignoreUnknown` {true|*false} ignore unknown object types
	 *  - `replacer` optional function that replaces values before hashing
	 *  - `respectFunctionProperties` {*true|false} consider function properties when hashing
	 *  - `respectFunctionNames` {*true|false} consider 'name' property of functions for hashing
	 *  - `respectType` {*true|false} Respect special properties (prototype, constructor)
	 *    when hashing to distinguish between types
	 *  - `unorderedArrays` {true|*false} Sort all arrays before hashing
	 *  - `unorderedSets` {*true|false} Sort `Set` and `Map` instances before hashing
	 *  * = default
	 *
	 * @param {object} object value to hash
	 * @param {object} options hashing options
	 * @return {string} hash value
	 * @api public
	 */
	exports = module.exports = objectHash;

	function objectHash(object, options){
	  options = applyDefaults(object, options);

	  return hash(object, options);
	}

	/**
	 * Exported sugar methods
	 *
	 * @param {object} object value to hash
	 * @return {string} hash value
	 * @api public
	 */
	exports.sha1 = function(object){
	  return objectHash(object);
	};
	exports.keys = function(object){
	  return objectHash(object, {excludeValues: true, algorithm: 'sha1', encoding: 'hex'});
	};
	exports.MD5 = function(object){
	  return objectHash(object, {algorithm: 'md5', encoding: 'hex'});
	};
	exports.keysMD5 = function(object){
	  return objectHash(object, {algorithm: 'md5', encoding: 'hex', excludeValues: true});
	};

	// Internals
	function applyDefaults(object, options){
	  var hashes = crypto$$.getHashes ? crypto$$.getHashes() : ['sha1', 'md5'];
	  var encodings = ['buffer', 'hex', 'binary', 'base64'];
	  
	  options = options || {};
	  options.algorithm = options.algorithm || 'sha1';
	  options.encoding = options.encoding || 'hex';
	  options.excludeValues = options.excludeValues ? true : false;
	  options.algorithm = options.algorithm.toLowerCase();
	  options.encoding = options.encoding.toLowerCase();
	  options.ignoreUnknown = options.ignoreUnknown !== true ? false : true; // default to false
	  options.respectType = options.respectType === false ? false : true; // default to true
	  options.respectFunctionNames = options.respectFunctionNames === false ? false : true;
	  options.respectFunctionProperties = options.respectFunctionProperties === false ? false : true;
	  options.unorderedArrays = options.unorderedArrays !== true ? false : true; // default to false
	  options.unorderedSets = options.unorderedSets === false ? false : true; // default to false
	  options.replacer = options.replacer || undefined;

	  if(typeof object === 'undefined') {
	    throw new Error('Object argument required.');
	  }

	  hashes.push('passthrough');
	  // if there is a case-insensitive match in the hashes list, accept it
	  // (i.e. SHA256 for sha256)
	  for (var i = 0; i < hashes.length; ++i) {
	    if (hashes[i].toLowerCase() === options.algorithm.toLowerCase()) {
	      options.algorithm = hashes[i];
	    }
	  }
	  
	  if(hashes.indexOf(options.algorithm) === -1){
	    throw new Error('Algorithm "' + options.algorithm + '"  not supported. ' +
	      'supported values: ' + hashes.join(', '));
	  }

	  if(encodings.indexOf(options.encoding) === -1 &&
	     options.algorithm !== 'passthrough'){
	    throw new Error('Encoding "' + options.encoding + '"  not supported. ' +
	      'supported values: ' + encodings.join(', '));
	  }
	  
	  return options;
	}

	/** Check if the given function is a native function */
	function isNativeFunction(f) {
	  if ((typeof f) !== 'function') {
	    return false;
	  }
	  var exp = /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i;
	  return exp.exec(Function.prototype.toString.call(f)) != null;
	}

	function hash(object, options) {
	  var hashingStream;
	  
	  if (options.algorithm !== 'passthrough') {
	    hashingStream = crypto$$.createHash(options.algorithm);
	  } else {
	    hashingStream = new PassThrough();
	  }
	  
	  if (typeof hashingStream.write === 'undefined') {
	    hashingStream.write = hashingStream.update;
	    hashingStream.end   = hashingStream.update;
	  }
	  
	  var hasher = typeHasher(options, hashingStream);
	  hasher.dispatch(object);
	  if (!hashingStream.update)
	    hashingStream.end('')
	  
	  if (hashingStream.digest) {
	    return hashingStream.digest(options.encoding === 'buffer' ? undefined : options.encoding);
	  }

	  var buf = hashingStream.read();
	  if (options.encoding === 'buffer') {
	    return buf;
	  }
	  
	  return buf.toString(options.encoding);
	}

	/**
	 * Expose streaming API
	 *
	 * @param {object} object  Value to serialize
	 * @param {object} options  Options, as for hash()
	 * @param {object} stream  A stream to write the serializiation to
	 * @api public
	 */
	exports.writeToStream = function(object, options, stream) {
	  if (typeof stream === 'undefined') {
	    stream = options;
	    options = {};
	  }
	  
	  options = applyDefaults(object, options);
	  
	  return typeHasher(options, stream).dispatch(object);
	};

	function typeHasher(options, writeTo, context){
	  context = context || [];
	  var write = function(str) {
	    if (writeTo.update)
	      return writeTo.update(str, 'utf8');
	    else
	      return writeTo.write(str, 'utf8');
	  }

	  return {
	    dispatch: function(value){
	      if (options.replacer) {
	        value = options.replacer(value);
	      }
	      
	      var type = typeof value;
	      if (value === null) {
	        type = 'null';
	      }

	      //console.log("[DEBUG] Dispatch: ", value, "->", type, " -> ", "_" + type);
	      
	      return this['_' + type](value);
	    },
	    _object: function(object) {
	      var pattern = (/\[object (.*)\]/i);
	      var objString = Object.prototype.toString.call(object);
	      var objType = pattern.exec(objString);
	      if (!objType) { // object type did not match [object ...]
	        objType = 'unknown:[' + objString + ']';
	      } else {
	        objType = objType[1]; // take only the class name
	      }
	      
	      objType = objType.toLowerCase();
	            
	      var objectNumber = null;

	      if ((objectNumber = context.indexOf(object)) >= 0) {
	        return this.dispatch('[CIRCULAR:' + objectNumber + ']');
	      } else {
	        context.push(object);
	      }
	      
	      if (typeof Buffer !== 'undefined' && Buffer.isBuffer && Buffer.isBuffer(object)) {
	        write('buffer:');
	        return write(object);
	      }

	      if(objType !== 'object' && objType !== 'function') {
	        if(this['_' + objType]) {
	          this['_' + objType](object);
	        } else if (options.ignoreUnknown) {
	          return write('[' + objType + ']');
	        } else {
	          throw new Error('Unknown object type "' + objType + '"');
	        }
	      }else{
	        var keys = Object.keys(object).sort();
	        // Make sure to incorporate special properties, so
	        // Types with different prototypes will produce
	        // a different hash and objects derived from
	        // different functions (`new Foo`, `new Bar`) will
	        // produce different hashes.
	        // We never do this for native functions since some
	        // seem to break because of that.
	        if (options.respectType !== false && !isNativeFunction(object)) {
	          keys.splice(0, 0, 'prototype', '__proto__', 'constructor');
	        }
	        
	        write('object:' + keys.length + ':');
	        var self = this;
	        return keys.forEach(function(key){
	          self.dispatch(key);
	          write(':');
	          if(!options.excludeValues) {
	            self.dispatch(object[key]);
	          }
	          write(',');
	        });
	      }
	    },
	    _array: function(arr, unordered){
	      unordered = typeof unordered !== 'undefined' ? unordered :
	        options.unorderedArrays !== false; // default to options.unorderedArrays
	      
	      var self = this;
	      write('array:' + arr.length + ':');
	      if (!unordered || arr.length <= 1) {
	        return arr.forEach(function(entry) {
	          return self.dispatch(entry);
	        });
	      }
	      
	      // the unordered case is a little more complicated:
	      // since there is no canonical ordering on objects,
	      // i.e. {a:1} < {a:2} and {a:1} > {a:2} are both false,
	      // we first serialize each entry using a PassThrough stream
	      // before sorting.
	      // also: we can’t use the same context array for all entries
	      // since the order of hashing should *not* matter. instead,
	      // we keep track of the additions to a copy of the context array
	      // and add all of them to the global context array when we’re done
	      var contextAdditions = [];
	      var entries = arr.map(function(entry) {
	        var strm = new PassThrough();
	        var localContext = context.slice(); // make copy
	        var hasher = typeHasher(options, strm, localContext);
	        hasher.dispatch(entry);
	        // take only what was added to localContext and append it to contextAdditions
	        contextAdditions = contextAdditions.concat(localContext.slice(context.length));
	        return strm.read().toString();
	      });
	      context = context.concat(contextAdditions);
	      entries.sort();
	      return this._array(entries, false);
	    },
	    _date: function(date){
	      return write('date:' + date.toJSON());
	    },
	    _symbol: function(sym){
	      return write('symbol:' + sym.toString());
	    },
	    _error: function(err){
	      return write('error:' + err.toString());
	    },
	    _boolean: function(bool){
	      return write('bool:' + bool.toString());
	    },
	    _string: function(string){
	      write('string:' + string.length + ':');
	      write(string);
	    },
	    _function: function(fn){
	      write('fn:');
	      if (isNativeFunction(fn)) {
	        this.dispatch('[native]');
	      } else {
	        this.dispatch(fn.toString());
	      }

	      if (options.respectFunctionNames !== false) {
	        // Make sure we can still distinguish native functions
	        // by their name, otherwise String and Function will
	        // have the same hash
	        this.dispatch("function-name:" + String(fn.name));
	      }
	      
	      if (options.respectFunctionProperties) {
	        this._object(fn);
	      }
	    },
	    _number: function(number){
	      return write('number:' + number.toString());
	    },
	    _xml: function(xml){
	      return write('xml:' + xml.toString());
	    },
	    _null: function() {
	      return write('Null');
	    },
	    _undefined: function() {
	      return write('Undefined');
	    },
	    _regexp: function(regex){
	      return write('regex:' + regex.toString());
	    },
	    _uint8array: function(arr){
	      write('uint8array:');
	      return this.dispatch(Array.prototype.slice.call(arr));
	    },
	    _uint8clampedarray: function(arr){
	      write('uint8clampedarray:');
	      return this.dispatch(Array.prototype.slice.call(arr));
	    },
	    _int8array: function(arr){
	      write('uint8array:');
	      return this.dispatch(Array.prototype.slice.call(arr));
	    },
	    _uint16array: function(arr){
	      write('uint16array:');
	      return this.dispatch(Array.prototype.slice.call(arr));
	    },
	    _int16array: function(arr){
	      write('uint16array:');
	      return this.dispatch(Array.prototype.slice.call(arr));
	    },
	    _uint32array: function(arr){
	      write('uint32array:');
	      return this.dispatch(Array.prototype.slice.call(arr));
	    },
	    _int32array: function(arr){
	      write('uint32array:');
	      return this.dispatch(Array.prototype.slice.call(arr));
	    },
	    _float32array: function(arr){
	      write('float32array:');
	      return this.dispatch(Array.prototype.slice.call(arr));
	    },
	    _float64array: function(arr){
	      write('float64array:');
	      return this.dispatch(Array.prototype.slice.call(arr));
	    },
	    _arraybuffer: function(arr){
	      write('arraybuffer:');
	      return this.dispatch(new Uint8Array(arr));
	    },
	    _url: function(url) {
	      return write('url:' + url.toString(), 'utf8');
	    },
	    _map: function(map) {
	      write('map:');
	      var arr = Array.from(map);
	      return this._array(arr, options.unorderedSets !== false);
	    },
	    _set: function(set) {
	      write('set:');
	      var arr = Array.from(set);
	      return this._array(arr, options.unorderedSets !== false);
	    },
	    _blob: function() {
	      if (options.ignoreUnknown) {
	        return write('[blob]');
	      }
	      
	      throw Error('Hashing Blob objects is currently not supported\n' +
	        '(see https://github.com/puleos/object-hash/issues/26)\n' +
	        'Use "options.replacer" or "options.ignoreUnknown"\n');
	    },
	    _domwindow: function() { return write('domwindow'); },
	    /* Node.js standard native objects */
	    _process: function() { return write('process'); },
	    _timer: function() { return write('timer'); },
	    _pipe: function() { return write('pipe'); },
	    _tcp: function() { return write('tcp'); },
	    _udp: function() { return write('udp'); },
	    _tty: function() { return write('tty'); },
	    _statwatcher: function() { return write('statwatcher'); },
	    _securecontext: function() { return write('securecontext'); },
	    _connection: function() { return write('connection'); },
	    _zlib: function() { return write('zlib'); },
	    _context: function() { return write('context'); },
	    _nodescript: function() { return write('nodescript'); },
	    _httpparser: function() { return write('httpparser'); },
	    _dataview: function() { return write('dataview'); },
	    _signal: function() { return write('signal'); },
	    _fsevent: function() { return write('fsevent'); },
	    _tlswrap: function() { return write('tlswrap'); }
	  };
	}

	// Mini-implementation of stream.PassThrough
	// We are far from having need for the full implementation, and we can
	// make assumtions like "many writes, then only one final read"
	// and we can ignore encoding specifics
	function PassThrough() {
	  return {
	    buf: '',

	    write: function(b) {
	      this.buf += b;
	    },

	    end: function(b) {
	      this.buf += b;
	    },

	    read: function() {
	      return this.buf;
	    }
	  };
	}
	});

	var log = new Schema("log", {
	    idAttribute: function (entity) {
	        return index$2.sha1(entity);
	    }
	});
	var contact = new Schema("contact", {
	    defaults: { messageField: "" },
	    idAttribute: function (entity) {
	        return entity.detail.id;
	    }
	});
	var user = new Schema("user");
	var account = new Schema("account", { connected: null });

	contact.define({
	    detail: user
	});

	//pendingLogs: arrayOf(log),
	//logs: arrayOf(log)
	account.define({
	    detail: user,
	    contacts: arrayOf(contact)
	});

	var normalizedObj = normalize(response, account);
	console.log(normalizedObj);

}(crypto));