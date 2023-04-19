import React from 'react';

import LoadingRows from './LoadingRows';

export default {
    component: LoadingRows,
    title: 'LoadingRows',
};

const Template = args => <LoadingRows {...args} />;

export const Default = Template.bind({});
Default.args = {
    rowsToDisplay: 6,
};
