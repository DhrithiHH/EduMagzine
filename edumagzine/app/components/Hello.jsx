'use client';

import { FlipLink } from './FlipLink';

export default function Hello() {
  return (
    <div className="h-screen flex items-center justify-center">
      <section className="flex flex-col items-end space-y-3 cursor-pointer justify-center mb-6">
        <FlipLink href="#" >Twitter</FlipLink>
        <FlipLink href="#" >Linkedin</FlipLink>
        <FlipLink href="#" >Facebook</FlipLink>
        <FlipLink href="#" >Instagram</FlipLink>
      </section>
    </div>
  );
}
