import React from 'react';
import { Provider } from 'react-redux';
import { rest } from 'msw';

import { fireEvent, within, waitFor, waitForElementToBeRemoved } from '@storybook/testing-library';

import { MockedState } from '../../../.storybook/decorators';

import InboxScreen from './InboxScreen';
import store from '../../lib/store';

export default {
    component: InboxScreen,
    title: 'InboxScreen',
    decorators: [story => <Provider store={store}>{story()}</Provider>],
};

const Template = () => <InboxScreen />;

export const Default = Template.bind({});
Default.parameters = {
  msw: {
    handlers: [
      rest.get(
        "https://jsonplaceholder.typicode.com/todos",
          (req, res, ctx) => {
            return res(ctx.json(MockedState.tasks));
        }
      ),
    ],
  },
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // Waits for the component to transition from the loading state
  await waitForElementToBeRemoved(await canvas.findByTestId(`loading`));
  // Waits for the component to be updated based on the store
  await waitFor(async () => {
    // Simulates pinning the first task
    await fireEvent.click(canvas.getByLabelText(/pintask-1/i));
    // Simulates pining the third task
    await fireEvent.click(canvas.getByLabelText(/pintask-3/i));
  });
};

export const Error = Template.bind({});
Error.parameters = {
  msw: {
    handlers: [
      rest.get(
        "https://jsonplaceholder.typicode.com/todos",
        (req, res, ctx) => {
          return res(ctx.status(403));
        }
      ),
    ],
  },
};