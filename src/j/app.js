(function () {
  'use strict';

  //Setting base of our application
  var base = "//" + document.location.host + "";

  //Storage configration
  var storage = {
      //driver: localforage.WEBSQL, // Force WebSQL; same as using setDriver()
      name: 'naukriDB',
      version: 6,
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
      var state = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
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

  var reducer$2 = function () {
      var state = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
      var action = arguments[1];

      var currentRoute = undefined;
      switch (action.type) {
          case PEER_REGISTER:
              return _extends({}, state, { registered: true });
          case PEER_CHANGE_NAME:
              return _extends({}, state, { name: action.name });
          case PEER_CHANGE_CONN_NAME:
              return _extends({}, state, { connName: action.name });
          case PEER_CHANGE_MESSAGE:
              return _extends({}, state, { connMessage: action.message });
          case PEER_SEND_MESSAGE:
              return _extends({}, state, { connMessage: "" });
          default:
              return state;
      }
  };

  /*{
      logs: {
          id: action.id,
          unsentMessage: "",
          log: [{
              message: state.message,
              type: "send"
          }]
      }
  }*/

  /*let reducer = (state = "", action) => {
      let currentRoute;
      switch (action.type) {
          case constants.PEER_CONNECTED:
              let search = state.filter(({ id }) => (id == action.id));
              if (!search.length) {
                  return state.concat({
                      id: action.id,
                      unsentMessage: "",
                      log: []
                  });
              }
              return state;
          case constants.PEER_SEND_MESSAGE:
              return state.map((item) => {
                  if (item.id == action.id) {
                      return {...item,
                          log: item.log.concat({
                              message: action.message,
                              type: "send"
                          })
                      }
                  }
                  return item;
              });

          case constants.PEER_RECIEVE_MESSAGE:
              return state.map((item) => {
                  if (item.id == action.id) {
                      return {...item,
                          log: item.log.concat({
                              message: action.message,
                              type: "recieve"
                          })
                      }
                  }
                  return item;
              });

          default:
              return state;
      }
  }*/

  var reducer$3 = function () {
      var state = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
      var action = arguments[1];

      var currentRoute = undefined;
      switch (action.type) {
          case PEER_CONNECTED:
              var search = state.filter(function (_ref) {
                  var id = _ref.id;
                  return id == action.id;
              });
              if (!search.length) {
                  return state.concat({
                      id: action.id,
                      unsentMessage: "",
                      log: []
                  });
              }
              return state;
          case PEER_SEND_MESSAGE:
              return state.map(function (item) {
                  if (item.id == action.id) {
                      return _extends({}, item, {
                          log: item.log.concat({
                              message: action.message,
                              type: "send"
                          })
                      });
                  }
                  return item;
              });

          case PEER_RECIEVE_MESSAGE:
              return state.map(function (item) {
                  if (item.id == action.id) {
                      return _extends({}, item, {
                          log: item.log.concat({
                              message: action.message,
                              type: "recieve"
                          })
                      });
                  }
                  return item;
              });

          default:
              return state;
      }
  };

  var Redux$2 = window.interfaces.Redux;

  var reducer = Redux$2.combineReducers({
      route: reducer$1,
      peer: reducer$2,
      logs: reducer$3
  });

  var actions = {
      "searchForm": function () {
          return {
              type: "CHANGE_ROUTE",
              route: "/searchForm"
          };
      },
      "searchResult": function () {
          return {
              type: "CHANGE_ROUTE",
              route: "/searchResult"
          };
      },
      "notFound": function () {
          return {
              type: "CHANGE_ROUTE",
              route: "/notFound"
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
          page$1.redirect('/searchForm');
      });

      page$1('/searchForm', function () {
          boundedActions.searchForm();
      });
      page$1('/searchResult', function () {
          boundedActions.searchResult();
      });
      page$1('*', function () {
          boundedActions.notFound();
      });
  })

  var actions$1 = {
      "onRegister": function () {
          return {
              type: PEER_REGISTER
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
      "onChangeMessage": function (message) {
          return {
              type: PEER_CHANGE_MESSAGE,
              message: message
          };
      },
      "onSendMessage": function (id, message) {
          return {
              type: PEER_SEND_MESSAGE,
              id: id,
              message: message
          };
      },
      "onRecieveMessage": function (id, message) {
          return {
              type: PEER_RECIEVE_MESSAGE,
              id: id,
              message: message
          };
      }
  };

  var Virtual$3 = window.interfaces.Virtual;

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


          if (logs.length) {
              var filterdLog = logs.filter(function (_ref) {
                  var id = _ref.id;

                  if (id == connId) {
                      return true;
                  }
                  return false;
              });
              var currentLog = filterdLog.pop();

              var logList = currentLog.log.map(function (_ref2, index) {
                  var type = _ref2.type;
                  var message = _ref2.message;

                  var style = undefined;
                  var className = "message " + type;
                  return Virtual$3.createElement(
                      "span",
                      { key: index, className: className },
                      message
                  );
              });
              return Virtual$3.createElement(
                  "div",
                  { className: "messageList" },
                  logList
              );
          }

          return null;
      };

      return LogList;
  }(Virtual$3.Component);

  var Virtual$2 = window.interfaces.Virtual;

  var Peer = function (_Virtual$Component) {
      inherits(Peer, _Virtual$Component);

      function Peer() {
          classCallCheck(this, Peer);

          var _this = possibleConstructorReturn(this, _Virtual$Component.apply(this, arguments));

          _this.connList = [
              /*{
                          id : String,
                          conn : Object
                      }*/
          ];

          _this.register = _this.register.bind(_this);
          _this.connect = _this.connect.bind(_this);
          _this.send = _this.send.bind(_this);
          return _this;
      }

      Peer.prototype.register = function register() {
          var _this2 = this;

          var _props = this.props;
          var user = _props.user;
          var actions = _props.actions;

          var myId = user.name;

          this.peer = new window.Peer(myId, {
              key: '45x1mf8qyx7833di'
          });
          this.peer.on('connection', function (conn) {
              conn.on('data', function (data) {
                  var user = _this2.props.user;

                  actions.onRecieveMessage(user.connName, data);
              });
          });

          actions.onRegister();
      };

      Peer.prototype.connect = function connect() {
          var _props2 = this.props;
          var user = _props2.user;
          var actions = _props2.actions;

          var filterdConnList = this.connList.filter(function (_ref) {
              var id = _ref.id;

              if (id == user.connName) {
                  return true;
              }
              return false;
          });
          if (filterdConnList.length) {
              this.conn = filterdConnList.pop().conn;
          } else {
              this.conn = this.peer.connect(user.connName);
              this.connList.push({ id: user.connName, conn: this.conn });
          }
          actions.onConnection(user.connName);
      };

      Peer.prototype.send = function send() {
          var _props3 = this.props;
          var user = _props3.user;
          var actions = _props3.actions;

          var message = user.connMessage;
          this.conn.send(message);
          actions.onSendMessage(user.connName, message);
          return "....";
      };

      Peer.prototype.render = function render() {
          var _props4 = this.props;
          var user = _props4.user;
          var actions = _props4.actions;
          var logs = _props4.logs;


          var page = undefined;

          if (!user.registered) {
              //Registeration
              page = Virtual$2.createElement(
                  'div',
                  null,
                  Virtual$2.createElement('input', { placeholder: 'You name', onChange: function (e) {
                          actions.onChangeName(e.target.value);
                      }, value: user.name }),
                  Virtual$2.createElement(
                      'button',
                      { onClick: this.register },
                      'Register'
                  )
              );
          } else {

              var messageArea = Virtual$2.createElement(
                  'div',
                  null,
                  Virtual$2.createElement(LogList, { logs: logs, connId: user.connName }),
                  Virtual$2.createElement('textarea', { placeholder: 'Message', onChange: function (e) {
                          actions.onChangeMessage(e.target.value);
                      }, value: user.connMessage }),
                  Virtual$2.createElement(
                      'button',
                      { onClick: this.send },
                      'Send'
                  )
              );

              var connectTo = Virtual$2.createElement(
                  'div',
                  null,
                  Virtual$2.createElement('input', { placeholder: 'Peer name', onChange: function (e) {
                          actions.onChangeConnName(e.target.value);
                      }, value: user.connName }),
                  Virtual$2.createElement(
                      'button',
                      { onClick: this.connect },
                      'Connect'
                  )
              );

              page = Virtual$2.createElement(
                  'div',
                  null,
                  Virtual$2.createElement(
                      'label',
                      null,
                      'Welcome ',
                      user.name
                  ),
                  connectTo,
                  messageArea
              );
          }

          return page;
      };

      return Peer;
  }(Virtual$2.Component);

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

          return Virtual$1.createElement(
              "div",
              null,
              Virtual$1.createElement(Peer, { route: this.state.route, logs: this.state.logs, user: this.state.peer, actions: this.peerActions })
          );
      };

      createClass(Root, [{
          key: "initialState",
          get: function () {

              /* let state = {
                   "entities": {
                       "account": {
                           "1": {
                               "id": 1,
                               "detail": "8527619715",
                               "contacts": [
                                   "9911344354",
                                   "9810959233"
                               ],
                               "connectId" : null,
                               "connected" : false
                           }
                       },
                       "user": {
                           "8527619715": {
                               "id": "8527619715",
                               "name": "Ankit Anand"
                           },
                           "9911344354": {
                               "id": "9911344354",
                               "name": "Papa"
                           },
                           "9810959233": {
                               "id": "9810959233",
                               "name": "Mumi"
                           }
                       },
                       "contact": {
                           "9911344354": {
                               "sendMessage": "",
                               "detail": "9911344354",
                               "pendingLogs": [
                                 ],
                               "logs": [
                                   "hi",
                                   "hello"
                               ]
                           },
                           "9810959233": {
                               "sendMessage": "",
                               "detail": "9810959233",
                               "pendingLogs": [
                                 ],
                               "logs": [
                                   "hi",
                                   "hello"
                               ]
                           }
                       },
                       "log": {
                           "hi": {
                               "message": "hi",
                               "type": "recieve"
                           },
                           "hello": {
                               "message": "hello",
                               "type": "send"
                           }
                       }
                   },
                   "result": 1
               };
              */

              var state = {
                  route: "/",
                  peer: {
                      name: "",
                      registered: false,
                      connName: "",
                      connMessage: ""
                  },
                  logs: []
              };

              if (this.props.lastState) {
                  this.props.lastState.peer.registered = false;
                  this.props.lastState.peer.connected = false;
              }
              return this.props.lastState || state;
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
      var newElement = document.createElement("div");
      document.body.appendChild(newElement);
      VirtualDom.render(Virtual.createElement(Root, { lastState: lastState }), newElement);
  });

}());