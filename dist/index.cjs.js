'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var vue = require('vue');

var serverRenderer = require('@vue/server-renderer'); //


var script = vue.defineComponent({
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
    sum(a, b) {
      return a + b;
    }

  }
});

function ssrRender(_ctx, _push, _parent) {
  _push(`<div class="${serverRenderer.ssrRenderClass(_ctx.$style.sum)}">${serverRenderer.ssrInterpolate(_ctx.sum(_ctx.numberA, _ctx.numberB))}</div>`);
}

var style0 = {
  "sum": "_sum_140ae_1"
};
const cssModules = script.__cssModules = {};
cssModules["$style"] = style0;
script.ssrRender = ssrRender; //

var script$1 = vue.defineComponent({
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
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }

  }
});

function ssrRender$1(_ctx, _push, _parent) {
  const _component_Add = vue.resolveComponent("Add");

  _push(`<div class="header" data-v-2937e9fe>${serverRenderer.ssrInterpolate(_ctx.fullName)} <div data-v-2937e9fe> Sum of 1 and 2: `);

  _push(serverRenderer.ssrRenderComponent(_component_Add, {
    "number-a": 1,
    "number-b": 2
  }, null, _parent));

  _push(`</div></div>`);
}

script$1.ssrRender = ssrRender$1;
script$1.__scopeId = "data-v-2937e9fe"; //

var script$2 = vue.defineComponent({
  name: "ExportedComponent2",

  data() {
    return {
      greetings: "Hello world"
    };
  },

  mounted() {}

});

function ssrRender$2(_ctx, _push, _parent) {
  _push(`<div class="greetings-header" data-v-50851f0f>${serverRenderer.ssrInterpolate(_ctx.greetings)}</div>`);
}

script$2.ssrRender = ssrRender$2;
script$2.__scopeId = "data-v-50851f0f";

const multiply = (a, b) => {
  return a * b;
};

exports.ExportedComponent1 = script$1;
exports.ExportedComponent2 = script$2;
exports.multiply = multiply;
