import { storiesOf } from '@storybook/react';
import MuiMarkdown from '..';

const stories = storiesOf('MuiMarkdown', module);

const paragraph = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quibusdam nobis ex recusandae incidunt, inventore neque optio, quis officiis reprehenderit, quisquam assumenda! Fugit doloribus, illum adipisci pariatur cumque obcaecati at?`;

stories.add('Paragraph', () => {
  return <MuiMarkdown>{paragraph}</MuiMarkdown>;
});
