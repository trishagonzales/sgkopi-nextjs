import * as React from 'react';
import * as Hooks from '@mantine/hooks';
import * as Fa6 from 'react-icons/fa6';
import * as Fc from 'react-icons/fc';

import {
  Checkbox,
  Divider,
  Modal,
  PasswordInput,
  Tabs,
  TextInput,
} from '@mantine/core';
import Button from '@/primitives/button';

export default function AccountMenu() {
  const [isOpen, modal] = Hooks.useDisclosure(false);

  return (
    <>
      <Button.Icon onClick={modal.open} variant='text'>
        <Fa6.FaUser />
      </Button.Icon>

      <Modal opened={isOpen} onClose={modal.close}>
        <Tabs defaultValue='signup' variant='pills'>
          <Tabs.List className='flex'>
            <Tabs.Tab className='flex-1' value='signup'>
              Signup
            </Tabs.Tab>
            <Tabs.Tab className='flex-1' value='login'>
              Login
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value='signup'>
            <div className='grid'>
              <Button
                variant='solid'
                className='bg-white'
                leftSection={<Fc.FcGoogle />}
              >
                Signup using Google
              </Button>
              <Button
                variant='solid'
                className='bg-info-500'
                leftSection={<Fa6.FaFacebook />}
              >
                Signup using Facebook
              </Button>
              <Button variant='solid' className='bg-gray-100'>
                Continue as Guest
              </Button>
            </div>

            <Divider label='OR' labelPosition='center' my='lg' />

            <TextInput
              label='Email address'
              placeholder='hello@gmail.com'
              size='md'
            />
            <PasswordInput
              label='Password'
              placeholder='Your password'
              mt='md'
              size='md'
            />
            <Checkbox label='Keep me logged in' mt='xl' size='md' />
            <Button variant='solid' fullWidth mt='xl' size='md'>
              Signup
            </Button>
          </Tabs.Panel>

          <Tabs.Panel value='login'>Messages tab content</Tabs.Panel>
        </Tabs>
      </Modal>
    </>
  );
}
