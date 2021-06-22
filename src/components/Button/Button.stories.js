import ButtonComponent from "./Button";

const Template = (args) => {
  return <ButtonComponent {...args}/>
}

export default {
  title: "components/Button",
  component: ButtonComponent,
}

export const Button = Template.bind({})
Button.args = {
  className: '',
  children: 'Click me'
}

export const Primary = Template.bind({});
Primary.args = {...Button.args, primary: true}
