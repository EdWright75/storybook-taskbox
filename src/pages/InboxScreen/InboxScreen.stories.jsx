import React from 'react';
import { Provider } from 'react-redux';
import { rest } from 'msw';

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