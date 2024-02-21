import { classed } from '@tw-classed/react';

export default function AboutPage() {
  return (
    <main>
      <PageHeader>
        <PageTitle>About Us</PageTitle>
      </PageHeader>
    </main>
  );
}

const PageHeader = classed.header('');
const PageTitle = classed.h1('');
