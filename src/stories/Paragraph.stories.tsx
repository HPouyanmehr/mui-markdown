import { storiesOf } from '@storybook/react';
import MuiMarkdown from '..';

const stories = storiesOf('MuiMarkdown', module);

const paragraph = `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quibusdam nobis ex recusandae incidunt, inventore neque optio, quis officiis reprehenderit, quisquam assumenda! Fugit doloribus, illum adipisci pariatur cumque obcaecati at?</p>`;

stories.add('Paragraph', () => {
  return <MuiMarkdown>{paragraph}</MuiMarkdown>;
});
