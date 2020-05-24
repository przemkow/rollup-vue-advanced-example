import { defineComponent, openBlock, createBlock, toDisplayString, pushScopeId, popScopeId, resolveComponent, createTextVNode, createVNode, withScopeId } from 'vue'; //

var script = defineComponent({
  name: "Add",
  props: {
    numberA: {
      type: Number,
      required: true
    },
    numberB: {
      type: Number,
      required: true
    }
  },
  methods: {
    sum: function sum(a, b) {
      return a + b;
    }
  }
});

function render(_ctx, _cache) {
  return openBlock(), createBlock("div", {
    "class": _ctx.$style.sum
  }, toDisplayString(_ctx.sum(_ctx.numberA, _ctx.numberB)), 3);
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "._sum_140ae_1 {\n  color: red;\n}";
styleInject(css_248z);
var style0 = {
  "sum": "_sum_140ae_1"
};
var cssModules = script.__cssModules = {};
cssModules["$style"] = style0;
script.render = render; //

var script$1 = defineComponent({
  name: "ExportedComponent1",
  components: {
    Add: script
  },
  props: {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    }
  },
  computed: {
    fullName: function fullName() {
      return "".concat(this.firstName, " ").concat(this.lastName);
    }
  }
});

var _withId = /*#__PURE__*/withScopeId("data-v-2937e9fe");

pushScopeId("data-v-2937e9fe");
var _hoisted_1 = {
  "class": "header"
};

var _hoisted_2 = /*#__PURE__*/createTextVNode(" Sum of 1 and 2: ");

popScopeId();

var render$1 = /*#__PURE__*/_withId(function render(_ctx, _cache) {
  var _component_Add = resolveComponent("Add");

  return openBlock(), createBlock("div", _hoisted_1, [createTextVNode(toDisplayString(_ctx.fullName) + " ", 1
  /* TEXT */
  ), createVNode("div", null, [_hoisted_2, createVNode(_component_Add, {
    "number-a": 1,
    "number-b": 2
  })])]);
});

var css_248z$1 = ".header[data-v-2937e9fe] {\n  color: #FF0000;\n}";
styleInject(css_248z$1);
script$1.render = render$1;
script$1.__scopeId = "data-v-2937e9fe"; //

var script$2 = defineComponent({
  name: "ExportedComponent2",
  data: function data() {
    return {
      greetings: "Hello world"
    };
  },
  mounted: function mounted() {}
});

var _withId$1 = /*#__PURE__*/withScopeId("data-v-50851f0f");

pushScopeId("data-v-50851f0f");
var _hoisted_1$1 = {
  "class": "greetings-header"
};
popScopeId();

var render$2 = /*#__PURE__*/_withId$1(function render(_ctx, _cache) {
  return openBlock(), createBlock("div", _hoisted_1$1, toDisplayString(_ctx.greetings), 1);
});

var css_248z$2 = ".greetings-header[data-v-50851f0f] {\n  color: #0000FF;\n}";
styleInject(css_248z$2);
script$2.render = render$2;
script$2.__scopeId = "data-v-50851f0f";

var multiply = function multiply(a, b) {
  return a * b;
};

export { script$1 as ExportedComponent1, script$2 as ExportedComponent2, multiply };
