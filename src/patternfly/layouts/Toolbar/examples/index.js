import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import ToolbarBasicExampleRaw from '!raw!./toolbar-basic-example.hbs';
import ToolbarSectionExampleRaw from '!raw!./toolbar-section-example.hbs';
import docs from '../docs/code.md';
import ToolbarBasicExample from './toolbar-basic-example.hbs';
import ToolbarSectionExample from './toolbar-section-example.hbs';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const toolbarBasicExample = ToolbarBasicExample();
  const toolbarSectionExample = ToolbarSectionExample();

  return (
    <Documentation docs={Docs} className="is-layout-page">
      <Example
        heading="Toolbar Basic Example - layout will respond naturally, no additional fitting is applied"
        handlebars={ToolbarBasicExampleRaw}
      >
        {toolbarBasicExample}
      </Example>
      <Example heading="Toolbar Section Example" handlebars={ToolbarSectionExampleRaw}>
        {toolbarSectionExample}
      </Example>
    </Documentation>
  );
};
