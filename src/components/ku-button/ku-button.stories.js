// import { withKnobs } from "@storybook/addon-knobs";

import { html } from "lit-html";

export default {
  title: "Atom/Button",
  argTypes: {
    color: {
      description: "Button color",
      defaultValue: "primary",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" }
      },
      control: { type: "select", options: ["primary", "secondary", "accent"] }
    },
    variant: {
      description: "Button variant",
      defaultValue: "ghost",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "ghost" }
      },
      control: {
        type: "select",
        options: ["ghost", "raised", "outline", "flat"]
      }
    }
  }
};


const Template = ({ color, variant, disabled, label, rounded, fluid }) => {
  return html`<ku-button .color="${color}" .variant="${variant}" .disabled="${disabled}" .rounded="${rounded}" .fluid="${fluid}">${label}</ku-button>`;
};


export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  variant: "flat",
  disabled: false,
  label: "Primary",
  rounded: false,
  fluid: false
};
