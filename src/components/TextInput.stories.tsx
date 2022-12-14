import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputRootProps } from './textinput' //Apresenta erro ao informar nome correto "TextInput porqueeee ?"
import { Envelope } from 'phosphor-react'

export default {
  title:'Components/TextInput',
  component: TextInput.Root,
  args: {
    children:  (
      <>
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>
      <TextInput.Input placeholder="Type your e-mail address" />
      </>
    ),
  },
  argTypes:{}
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}


export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args:{
    children: <TextInput.Input placeholder="Type Your e-mail address" />
  }
}


