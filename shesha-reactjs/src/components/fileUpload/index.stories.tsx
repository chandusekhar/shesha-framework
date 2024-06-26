import React from 'react';
import { Story } from '@storybook/react';
import { StoredFileProvider } from '@/providers';
import { ICustomFileProps } from '@/components/customFile';
import { FileUpload } from './';
import StoryApp from '@/components/storyBookApp';

export default {
  title: 'Components/Temp/StoredFileUpload',
  component: FileUpload
};

const customFileProps: ICustomFileProps = {};

const backendUrl = process.env.STORYBOOK_BASE_URL; // TODO: Make this configurable

// Create a master template for mapping args to render the Button component
const Template: Story<ICustomFileProps> = args => (
  <StoryApp>
    <StoredFileProvider
      ownerId="32e2b3dd-4d99-4542-af71-134ec7c0e2ce"
      ownerType="Shesha.Core.Person"
      propertyName="Photo"
      baseUrl={backendUrl}
      {...args}
    >
      <FileUpload />
    </StoredFileProvider>
  </StoryApp>
);

export const Basic = Template.bind({});
Basic.args = { ...customFileProps };
