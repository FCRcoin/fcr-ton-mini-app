'use client';

import { openLink } from '@telegram-apps/sdk-react';
import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react';
import {
  Avatar,
  Cell,
  List,
  Navigation,
  Placeholder,
  Section,
  Text,
  Title,
} from '@telegram-apps/telegram-ui';
import { DisplayData } from '@/components/custom/display-data';
import { Page } from '@/components/custom/page-view';

export default function TONConnectPage() {
  const wallet = useTonWallet();

  if (!wallet) {
    return (
      <Page>
        <Placeholder
          className="fixed inset-0 flex flex-col items-center justify-center text-center text-supernova-400 font-medium text-4xl p-4"
          header="Connect TON Wallet"
          description={
            <div className="flex flex-col items-center gap-4 text-white">
              <Text className="text-center text-base leading-relaxed max-w-[280px] text-white">
                Connect your wallet to view your TON account details and manage transactions
              </Text>
              <TonConnectButton 
                className="mt-2 transform transition-transform active:scale-95"
              />
            </div>
          }
        />
      </Page>
    );
  }

  const {
    account: { chain, publicKey, address },
    device: { appName, appVersion, maxProtocolVersion, platform, features },
  } = wallet;

  return (
    <Page>
      <List className="pb-safe">
        {'imageUrl' in wallet && (
          <>
            <Section className="mb-4">
              <Cell
                className="p-4 hover:bg-opacity-5 active:bg-opacity-10 transition-colors"
                before={
                  <Avatar
                    src={wallet.imageUrl}
                    alt={`${wallet.name} logo`}
                    width={48}
                    height={48}
                    className="rounded-full shadow-sm"
                  />
                }
                after={
                  <Navigation className="text-sm font-medium text-primary">
                    About wallet
                  </Navigation>
                }
                subtitle={
                  <Text className="text-secondary text-sm">{wallet.appName}</Text>
                }
                onClick={(e) => {
                  e.preventDefault();
                  openLink(wallet.aboutUrl);
                }}
              >
                <Title level="3" className="font-semibold">
                  {wallet.name}
                </Title>
              </Cell>
            </Section>
            <div className="flex justify-end px-4 mb-6">
              <TonConnectButton className="transform transition-transform active:scale-95" />
            </div>
          </>
        )}
      </List>
    </Page>
  );
};
