import React from 'react';
import { Story, Meta } from '@storybook/react';
import FormDesigner from './formDesigner';
import { MetadataDispatcherProvider } from '../../providers';
import { addStory } from '../../stories/utils';
import { FormIdentifier, FormMode } from '../../providers/form/models';
import StoryApp from '../storyBookApp';

export default {
  title: 'Components/Temp/FormDesigner',
  component: FormDesigner
} as Meta;

export interface IFormDesignerStoryProps {
  formId: FormIdentifier;
  mode?: FormMode;
}

// Create a master template for mapping args to render the Button component
const DesignerTemplate: Story<IFormDesignerStoryProps> = ({ formId }) => (
  <StoryApp>
    <MetadataDispatcherProvider>
      <FormDesigner formId={formId} />
    </MetadataDispatcherProvider>
  </StoryApp>
);

export const Bugfix = addStory(DesignerTemplate, {
  //formId: '4686a0f4-c187-46c7-9ff6-cb5ddaeca712',
  //formId: '7c4a88d0-2b13-44a7-9f85-41b8b58fe489'
  //formId: '9e7d2dc5-cda8-4fc0-8dbc-ccba8c3e654e'
  formId: '94662a92-5d7e-4e07-9aa5-a14bac64685e'
});

export const UserManagement = addStory(DesignerTemplate, {
  formId: {
    name: 'user-management-new',
  },
});

export const FormsIndex = addStory(DesignerTemplate, {
  formId: {
    name: 'forms',
    module: 'shesha',
  }
});

export const OrganisationEdit = addStory(DesignerTemplate, {
  formId: {
    name: 'organisation-edit',
    module: 'Test Module',
    version: 1
  }
});

export const PersonEdit = addStory(DesignerTemplate, {
  formId: {
    name: 'person-edit',
    module: 'Test Module',
    version: 7
  }
});