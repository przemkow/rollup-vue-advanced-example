import MyComponent from "../MyComponent.vue";
import { mount } from "@vue/test-utils";

describe("MyComponent", () => {
  describe("render", () => {
    it("should render", () => {
      const wrapper = mount(MyComponent);
      expect(wrapper.exists()).toBe(true);
    });
  });
});
