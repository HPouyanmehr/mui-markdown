import { storiesOf } from '@storybook/react';
import MuiMarkdown from '..';

const stories = storiesOf('MuiMarkdown', module);

const shit = `
[![Some Random Image](https://picsum.photos/100/100)](https://picsum.photos)
`;

stories.add('Images', () => {
  return (
    <>
      <MuiMarkdown>{shit}</MuiMarkdown>
    </>
  );
});
