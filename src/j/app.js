(function () {
  'use strict';

  //Setting base of our application
  var base = "//" + document.location.host + "";

  //Storage configration
  var storage = {
      //driver: localforage.WEBSQL, // Force WebSQL; same as using setDriver()
      name: 'naukriDB',
      version: 9,
      //size: 4980736, // Size of database, in bytes. WebSQL-only for now.
      storeName: 'naukriStore', // Should be alphanumeric, with underscores.
      description: 'Naukri jobseeker SPA'
  };

  var config = {
      base: base,
      storage: storage
  };

  var _Promise = typeof Promise === 'undefined' ? require('es6-promise').Promise : Promise;

  var _window$interfaces$1 = window.interfaces;
  var localforage = _window$interfaces$1.localforage;
  var Redux = _window$interfaces$1.Redux;
  var bindActionCreator = Redux.bindActionCreator;

  function replicate(state) {
      /**
       * [Function replicate
       * Replicate state to DB
       * ]
       * @param  {[type]} state [Store state]
       * @return {[Promise]}       [Write DB]
       */
      if (state.route == "/notFound") {
          state.route == "/";
      }
      return localforage.setItem("appState", state);
  }

  /**
   * [Function hydrate
   * Get initial appState from DB
   * Remove appState if version is updated    
   * ]
   * @return {[Promise]} [Read DB]
   */
  function hydrate() {
      localforage.config(config.storage);
      var promise = undefined;
      promise = new _Promise(function (resolve, reject) {
          localforage.getItem("version").then(function (version) {
              if (!version || version < config.storage.version) {
                  localforage.removeItem("appState").then(function () {
                      localforage.setItem("version", config.storage.version);
                  });
                  resolve(null);
              } else {
                  localforage.getItem("appState").then(function (value) {
                      resolve(value);
                  });
              }
          });
      });
      return promise;
  }

  var CHANGE_ROUTE = "CHANGE_ROUTE";

  var reducer$1 = function () {
      var state = arguments.length <= 0 || arguments[0] === undefined ? "/" : arguments[0];
      var action = arguments[1];

      var currentRoute = undefined;
      switch (action.type) {
          case CHANGE_ROUTE:
              return action.route;
          default:
              return state;
      }
  };

  var PEER_REGISTER = "PEER_REGISTER";
  var PEER_CHANGE_NAME = "PEER_CHANGE_NAME";
  var PEER_CHANGE_CONN_NAME = "PEER_CHANGE_CONN_NAME";
  var PEER_CONNECTED = "PEER_CONNECTED";
  var PEER_CHANGE_MESSAGE = "PEER_CHANGE_MESSAGE";
  var PEER_SEND_MESSAGE = "PEER_SEND_MESSAGE";
  var PEER_RECIEVE_MESSAGE = "PEER_RECIEVE_MESSAGE";

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  /*{
      "9911344354": {
          "messageField": "",
          "detail": "9911344354",
          "logs": [{
              "message": "hi",
              "type": "recieve"
          }, {
              "message": "hello",
              "type": "send"
          }]
      },
      "9810959233": {
          "messageField": "",
          "detail": "9810959233",
          "logs": [{
              "message": "hi",
              "type": "recieve"
          }, {
              "message": "hello",
              "type": "send"
          }]
      }
  }*/

  var reducer$2 = function () {
      var _babelHelpers$extends2, _babelHelpers$extends3;

      var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      var action = arguments[1];

      switch (action.type) {
          case PEER_CONNECTED:
              if (!state[action.id]) {
                  var _babelHelpers$extends;

                  return _extends({}, state, (_babelHelpers$extends = {}, _babelHelpers$extends[action.id] = _extends({}, state[action.id], {
                      "messageField": "",
                      "detail": [action.id],
                      "logs": []
                  }), _babelHelpers$extends));
              }
              return state;
          case PEER_CHANGE_MESSAGE:
              return _extends({}, state, (_babelHelpers$extends2 = {}, _babelHelpers$extends2[action.id] = _extends({}, state[action.id], { "messageField": action.message }), _babelHelpers$extends2));
          case PEER_RECIEVE_MESSAGE:
          case PEER_SEND_MESSAGE:
              return _extends({}, state, (_babelHelpers$extends3 = {}, _babelHelpers$extends3[action.id] = _extends({}, state[action.id], {
                  "logs": state[action.id].logs.concat({
                      message: action.message,
                      method: action.method,
                      time: action.time
                  })
              }), _babelHelpers$extends3));

          default:
              return state;
      }
  };

  /*{
      "8527619715": {
          "id": "8527619715",
          "name": "Ankit Anand",
          "connId": null
      },
      "9911344354": {
          "id": "9911344354",
          "name": "Papa"
      },
      "9810959233": {
          "id": "9810959233",
          "name": "Mumi"
      }
  }
  */
  var reducer$3 = function () {
      var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      var action = arguments[1];

      switch (action.type) {
          case PEER_REGISTER:
          case PEER_CONNECTED:
              if (!state[action.id]) {
                  var _babelHelpers$extends;

                  return _extends({}, state, (_babelHelpers$extends = {}, _babelHelpers$extends[action.id] = {
                      id: action.id,
                      name: action.name
                  }, _babelHelpers$extends));
              } else {
                  return state;
              }
          default:
              return state;
      }
  };

  /*{  
   "1":{  
      "id":1,
      "detail":"8527619715",
      "contacts":[  
         "9911344354",
         "9810959233"
      ]
   }
  }*/

  var reducer$4 = function () {
      var state = arguments.length <= 0 || arguments[0] === undefined ? {
          "1": {
              "id": 1,
              "idField": "",
              "detail": "",
              "contacts": [],
              "contactSearchField": "",
              "connContactId": ""
          }
      } : arguments[0];
      var action = arguments[1];

      switch (action.type) {
          case PEER_REGISTER:
              return _extends({}, state, {
                  "1": _extends({}, state["1"], {
                      "detail": action.id
                  })
              });
          case PEER_CHANGE_NAME:
              return _extends({}, state, {
                  "1": _extends({}, state["1"], {
                      "idField": action.name
                  })
              });
          case PEER_CHANGE_CONN_NAME:
              return _extends({}, state, {
                  "1": _extends({}, state["1"], {
                      "contactSearchField": action.name
                  })
              });
          case PEER_CONNECTED:
              var contacts = state["1"].contacts.filter(function (contactId, index) {
                  return contactId != action.id;
              });
              contacts.unshift(action.id);
              return _extends({}, state, {
                  "1": _extends({}, state["1"], {
                      "connContactId": action.id,
                      contacts: contacts
                  })
              });
          default:
              return state;
      }
  };

  var Redux$2 = window.interfaces.Redux;

  var reducer = Redux$2.combineReducers({
      "route": reducer$1,
      "account": reducer$4,
      "user": reducer$3,
      "contacts": reducer$2
  });

  var ROUTE_REGISTER = "/chat/register";
  var ROUTE_CONTACTS = "/chat/contacts";
  var ROUTE_CONNECT = "/chat/connect";

  var actions = {
      "register": function () {
          return {
              type: "CHANGE_ROUTE",
              route: ROUTE_REGISTER
          };
      },
      "contacts": function (id) {
          return {
              type: "CHANGE_ROUTE",
              route: ROUTE_CONTACTS + "/" + id
          };
      },
      "connect": function (id, connId) {
          return {
              type: "CHANGE_ROUTE",
              route: ROUTE_CONNECT + "/" + id + "/" + connId
          };
      },
      "notFound": function () {
          return {
              type: "CHANGE_ROUTE",
              route: "/chat/notFound"
          };
      }
  };

  var page$1 = window.interfaces.page;

  var routesConfig = (function (boundedActions) {

      //Configuration
      page$1.start({
          popstate: true
      });

      page$1.base(config.base);

      page$1('/', function () {
          page$1.redirect(ROUTE_REGISTER);
      });

      page$1(ROUTE_REGISTER, function () {
          boundedActions.register();
      });

      page$1(ROUTE_CONTACTS + '/:id', function (ctx) {
          boundedActions.contacts(ctx.params.id);
      });
      page$1(ROUTE_CONNECT + '/:id/:connId', function (ctx) {
          boundedActions.connect(ctx.params.id, ctx.params.connId);
      });
      page$1('*', function () {
          boundedActions.notFound();
      });
  })

  var actions$1 = {
      "onRegister": function (id) {
          return {
              type: PEER_REGISTER,
              id: id
          };
      },
      "onChangeName": function (name) {
          return {
              type: PEER_CHANGE_NAME,
              name: name
          };
      },
      "onChangeConnName": function (name) {
          return {
              type: PEER_CHANGE_CONN_NAME,
              name: name
          };
      },
      "onConnection": function (id) {
          return {
              type: PEER_CONNECTED,
              id: id
          };
      },
      "onChangeMessage": function (id, message) {
          return {
              type: PEER_CHANGE_MESSAGE,
              id: id,
              message: message
          };
      },
      "onSendMessage": function (id, message) {
          return {
              type: PEER_SEND_MESSAGE,
              method: "send",
              id: id,
              message: message

          };
      },
      "onRecieveMessage": function (id, message) {
          return {
              type: PEER_RECIEVE_MESSAGE,
              method: "receive",
              id: id,
              message: message
          };
      }
  };

  var instance = null;

  var PeerConnection = function () {
      function PeerConnection() {
          classCallCheck(this, PeerConnection);

          if (!instance) {
              instance = this;
              this.peer = null;
              this.connName = null;
              this.conn = null;
              this.connList = [];
          }
          return instance;
      }

      PeerConnection.prototype.register = function register(id, onRecieveMessage) {
          var _this = this;

          this.peer = new window.Peer(id, {
              key: '45x1mf8qyx7833di'
          });
          this.peer.on('connection', function (conn) {
              conn.on('data', function (data) {
                  onRecieveMessage(_this.connName, data);
              });
          });
      };

      PeerConnection.prototype.connect = function connect(connId) {
          var _this2 = this;

          this.connName = connId;
          var filterdConnList = this.connList.filter(function (_ref) {
              var id = _ref.id;

              if (id == _this2.connName) {
                  return true;
              }
              return false;
          });
          if (filterdConnList.length) {
              this.conn = filterdConnList.pop().conn;
          } else {
              this.conn = this.peer.connect(this.connName);
              this.connList.push({ id: connId, conn: this.conn });
          }
      };

      PeerConnection.prototype.send = function send(message) {
          this.conn.send(message);
          return "....";
      };

      return PeerConnection;
  }();

  var _window$interfaces$3 = window.interfaces;
  var Virtual$2 = _window$interfaces$3.Virtual;
  var page$2 = _window$interfaces$3.page;

  var Register = function (_Virtual$Component) {
      inherits(Register, _Virtual$Component);

      function Register() {
          classCallCheck(this, Register);

          var _this = possibleConstructorReturn(this, _Virtual$Component.apply(this, arguments));

          _this.peer = new PeerConnection();
          _this.register = _this.register.bind(_this);
          return _this;
      }

      Register.prototype.shouldComponentUpdate = function shouldComponentUpdate(newProps) {
          return newProps.idField != this.props.idField;
      };

      Register.prototype.register = function register() {
          var _props = this.props;
          var idField = _props.idField;
          var onRegister = _props.onRegister;
          var onRecieveMessage = _props.onRecieveMessage;

          this.peer.register(idField, onRecieveMessage);
          onRegister(idField);
          page$2(ROUTE_CONTACTS + "/" + idField);
      };

      Register.prototype.render = function render() {
          var _props2 = this.props;
          var idField = _props2.idField;
          var onChangeName = _props2.onChangeName;


          return Virtual$2.createElement(
              "div",
              null,
              Virtual$2.createElement("input", { type: "tel", placeholder: "Mobile number", onChange: function (e) {
                      onChangeName(e.target.value);
                  }, value: idField }),
              Virtual$2.createElement(
                  "button",
                  { onClick: this.register },
                  "Register"
              )
          );
      };

      return Register;
  }(Virtual$2.Component);

  var _window$interfaces$4 = window.interfaces;
  var Virtual$3 = _window$interfaces$4.Virtual;
  var page$3 = _window$interfaces$4.page;


  var Contacts = function (_Virtual$Component) {
      inherits(Contacts, _Virtual$Component);

      function Contacts() {
          classCallCheck(this, Contacts);

          var _this = possibleConstructorReturn(this, _Virtual$Component.apply(this, arguments));

          _this.peer = new PeerConnection();
          return _this;
      }

      Contacts.prototype.connect = function connect(id, contactId) {
          this.peer.connect(contactId);
          this.props.onConnection(contactId);
          page$3(ROUTE_CONNECT + "/" + id + "/" + contactId);
      };

      Contacts.prototype.shouldComponentUpdate = function shouldComponentUpdate(newProps) {
          return newProps.searchField != this.props.searchField || newProps.contactIds != this.props.contactIds;
      };

      Contacts.prototype.render = function render() {
          var _this2 = this;

          var _props = this.props;
          var contactIds = _props.contactIds;
          var searchField = _props.searchField;
          var id = _props.id;
          var contacts = _props.contacts;
          var onChangeConnName = _props.onChangeConnName;

          //Contact List

          var filteredContactList = contactIds.filter(function (contactId) {
              return contactId.indexOf(searchField) != -1;
          }).map(function (contactId) {
              var contact = contacts[contactId];
              return Virtual$3.createElement(
                  "li",
                  { key: contactId },
                  Virtual$3.createElement(
                      "a",
                      { href: "javascript:void(0)", onClick: function () {
                              _this2.connect(id, contactId);
                          } },
                      contact.name
                  )
              );
          });

          return Virtual$3.createElement(
              "div",
              null,
              Virtual$3.createElement("input", { placeholder: "Search", onChange: function (e) {
                      onChangeConnName(e.target.value);
                  }, value: searchField }),
              Virtual$3.createElement(
                  "button",
                  { onClick: function () {
                          return _this2.connect(id, searchField);
                      } },
                  "Add"
              ),
              Virtual$3.createElement(
                  "ul",
                  null,
                  filteredContactList
              )
          );
      };

      return Contacts;
  }(Virtual$3.Component);

  var Virtual$5 = window.interfaces.Virtual;

  var LogList = function (_Virtual$Component) {
      inherits(LogList, _Virtual$Component);

      function LogList() {
          classCallCheck(this, LogList);
          return possibleConstructorReturn(this, _Virtual$Component.apply(this, arguments));
      }

      LogList.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
          return nextProps.logs != this.props.logs;
      };

      LogList.prototype.render = function render() {
          var _props = this.props;
          var logs = _props.logs;
          var connId = _props.connId;


          var logList = logs.map(function (_ref, index) {
              var method = _ref.method;
              var message = _ref.message;

              var style = undefined;
              var className = "message " + method;
              return Virtual$5.createElement(
                  "span",
                  { key: index, className: className },
                  message
              );
          });
          return Virtual$5.createElement(
              "div",
              { className: "messageList" },
              logList
          );
      };

      return LogList;
  }(Virtual$5.Component);

  var Virtual$4 = window.interfaces.Virtual;

  var Connect = function (_Virtual$Component) {
      inherits(Connect, _Virtual$Component);

      function Connect() {
          classCallCheck(this, Connect);

          var _this = possibleConstructorReturn(this, _Virtual$Component.apply(this, arguments));

          _this.peer = new PeerConnection();
          _this.send = _this.send.bind(_this);
          return _this;
      }

      Connect.prototype.send = function send() {
          var _props = this.props;
          var contactId = _props.contactId;
          var messageField = _props.messageField;
          var onSendMessage = _props.onSendMessage;

          this.peer.send(messageField);
          onSendMessage(contactId, messageField);
      };

      Connect.prototype.render = function render() {
          var _props2 = this.props;
          var contactId = _props2.contactId;
          var logs = _props2.logs;
          var messageField = _props2.messageField;
          var onChangeMessage = _props2.onChangeMessage;

          return Virtual$4.createElement(
              "div",
              null,
              Virtual$4.createElement(LogList, { logs: logs, connId: contactId }),
              Virtual$4.createElement("textarea", { placeholder: "Message", onChange: function (e) {
                      onChangeMessage(contactId, e.target.value);
                  }, value: messageField }),
              Virtual$4.createElement(
                  "button",
                  { onClick: this.send },
                  "Send"
              )
          );
      };

      return Connect;
  }(Virtual$4.Component);

  var _window$interfaces$2 = window.interfaces;
  var Virtual$1 = _window$interfaces$2.Virtual;
  var Redux$1 = _window$interfaces$2.Redux;
  var page = _window$interfaces$2.page;
  var bindActionCreators = Redux$1.bindActionCreators;


  var Root = function (_Virtual$Component) {
      inherits(Root, _Virtual$Component);

      function Root() {
          classCallCheck(this, Root);

          var _this = possibleConstructorReturn(this, _Virtual$Component.apply(this, arguments));

          routesConfig(bindActionCreators(actions, _this.store.dispatch));

          _this.peerActions = bindActionCreators(actions$1, _this.store.dispatch);

          _this.store.subscribe(function () {
              replicate(_this.store.getState());
          });
          page.redirect(document.location.pathname);
          return _this;
      }

      Root.prototype.render = function render() {
          var page = null;
          if (Object.keys(this.state).length) {
              var _state = this.state;
              var route = _state.route;
              var account = _state.account;
              var contacts = _state.contacts;
              var user = _state.user;

              var actions = this.peerActions;
              account = account["1"];

              if (route.indexOf(ROUTE_REGISTER) != -1) {
                  page = Virtual$1.createElement(Register, { idField: account.idField, onChangeName: actions.onChangeName, onRegister: actions.onRegister, onRecieveMessage: actions.onRecieveMessage });
              }
              if (route.indexOf(ROUTE_CONTACTS) != -1) {
                  page = Virtual$1.createElement(Contacts, { contactIds: account.contacts, searchField: account.contactSearchField, id: account.detail, contacts: contacts, onChangeConnName: actions.onChangeConnName, onConnection: actions.onConnection });
              }
              if (route.indexOf(ROUTE_CONNECT) != -1) {
                  var contact = contacts[account.connContactId];
                  page = Virtual$1.createElement(Connect, { contactId: account.connContactId, logs: contact.logs, messageField: contact.messageField, onChangeMessage: actions.onChangeMessage, onSendMessage: actions.onSendMessage });
              }
          }
          return page;
      };

      createClass(Root, [{
          key: "initialState",
          get: function () {
              return this.props.lastState || {};
          }
      }, {
          key: "reducer",
          get: function () {
              return reducer;
          }
      }]);
      return Root;
  }(Virtual$1.Component);

  var _window$interfaces = window.interfaces;
  var Virtual = _window$interfaces.Virtual;
  var VirtualDom = _window$interfaces.VirtualDom;


  hydrate().then(function (lastState) {
      VirtualDom.render(Virtual.createElement(Root, { lastState: lastState }), document.getElementById("root"));
  });

}());